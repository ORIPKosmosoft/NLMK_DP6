/*                 TODO
----------------------------------------------------
Сделать ресайзер для 2Д и 3Д
----------------------------------------------------
переработать систему сообщений
----------------------------------------------------
*/
document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  trenWorkObj.activeScheme = 0;
  trenWorkObj.scenarioSelected = undefined;
  trenWorkObj.messages = {
    normal: [],
    error: []
  }
  let scenarioBoxes = document.querySelectorAll('.scenario-box');

  scenarioBoxes.forEach((box, Index) => {
    box.classList.toggle('scenario-box-clicked', false);
    box.classList.toggle('scenario-box', true);
    box.addEventListener('click', function (e) {
      e.currentTarget.classList.toggle('scenario-box-clicked', true);
      e.currentTarget.classList.toggle('scenario-box', false);
      Array.from(document.querySelector('.scenarion-buttons').children).forEach((Element) => {
        Element.classList.toggle('scenarion-button-active', true);
        Element.onclick = (e) => prepareTren(e.currentTarget.innerText, box.innerText, Index);
      })

      scenarioBoxes.forEach(function (elem) {
        if (elem !== e.currentTarget) {
          elem.classList.toggle('scenario-box-clicked', false);
          elem.classList.toggle('scenario-box', true);
        }
      });
    });
  });


  document.querySelector('.tren-container').addEventListener('transitionend', (e) => {
    if (e.propertyName === 'opacity') {
      e.currentTarget.style.visibility = e.currentTarget.style.opacity === '0' ? 'hidden' : 'visible';
      if (e.currentTarget.style.opacity === '0') {
        e.currentTarget.style.visibility = 'hidden';
        document.querySelector('.header').style.top = '0px';
        document.querySelectorAll('.section')[0].style.left = '0px';
        document.querySelectorAll('.section')[1].style.left = '0px';
        document.querySelector('.start-container').style.visibility = 'visible';
      } else e.currentTarget.style.visibility = 'visible';
    }
  })

  document.querySelector('.exit').addEventListener('click', (e) => {
    document.querySelector('.tren-container').style.opacity = 0;
  })



  function removeStartScreen(argument) {
    document.querySelector('.header').style.top = -document.querySelector('.header').getBoundingClientRect().bottom - 10 + 'px';
    document.querySelector('.section').style.left = -window.innerWidth / 2 + 'px';
    document.querySelectorAll('.section')[1].style.left = '101%';
    Array.from(document.querySelectorAll('.section')).forEach((Element) => {
      Element.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'left' && (Element.style.left === -window.innerWidth / 2 + 'px' || Element.style.left === '101%')) {
          document.querySelector('.start-container').style.visibility = 'hidden';
          document.querySelector('.tren-container').style.visibility = 'visible';
        }
      });
    })
  }

  function prepareTren(TrenType, Scenario, Index) {
    if (trenWorkObj.trenActionArr[Index].actions) {
      removeStartScreen();
      document.querySelector('.tren-container').style.transition = 'opacity 0.5s ease 0.5s';
      document.querySelector('.tren-container').style.opacity = 1;
      trenWorkObj.trenType = TrenType;
      trenWorkObj.scenarioSelected = Index;
    } else {
      let popupDiv = document.createElement('div');
      popupDiv.classList.add('popup-alert');
      popupDiv.innerHTML = `Вы не можете воспроизвести этот сценарий сейчас.`;
      document.body.append(popupDiv);
      document.body.addEventListener('mousedown', () => { if (document.querySelector('.popup-alert')) document.querySelector('.popup-alert').remove() });
    }
  }
  //---------------
  // Правая часть заглавной страницы
  //---------------
  document.querySelector('.info-page').classList.add("info-page-active");
  Array.from(document.querySelector('.info-buttons').querySelectorAll('button')).forEach((Element, Index) => {
    Element.addEventListener('click', (e) => {
      if (document.querySelector('.info-page-active') !== Element.closest('.section').querySelector('.content').children[Index]) {
        document.querySelector('.info-page-active').classList.toggle('info-page-active', false);
        Element.closest('.section').querySelector('.content').children[Index].classList.toggle('info-page-active', true);
      }
    })
  })

  // Зазгрузка СВГ схем. Отработка текста в СВГ
  /*
    СВГ элементы добавить в массив объектов, где иметь быстрый доступ к этим элементам.
      // document.querySelectorAll('.scheme-img').forEach(img => {
  //   if (img.tagName === 'OBJECT' && img.contentDocument.querySelector('svg')) {
  //     placeScheme(img);
  //   } else if (img.complete) {
  //     placeScheme(img);
  //   }
  // });
  // function placeScheme(Scheme) {
  //   let sizes = {
  //     w: Scheme.tagName === 'IMG' ? Scheme.naturalWidth : parseInt(Scheme.contentDocument.querySelector('svg').getAttribute('width')),
  //     h: Scheme.tagName === 'IMG' ? Scheme.naturalHeight : parseInt(Scheme.contentDocument.querySelector('svg').getAttribute('height'))
  //   }
  //   Scheme.style.width = sizes.w / Scheme.parentElement.clientWidth < sizes.h / Scheme.parentElement.clientHeight ? 'auto' : '100%';
  //   Scheme.style.height = sizes.w / Scheme.parentElement.clientWidth < sizes.h / Scheme.parentElement.clientHeight ? '100%' : 'auto';
  // }

  // changeSchemes(Index);

  // Array.from(document.querySelectorAll('.scheme-container')).forEach((Element) => {
  //   Element.style.transform = 'scale(1) translate(0px, 0px)';
  //   Element.startDementions = {
  //     w: Element.querySelector('.scheme-img').getBoundingClientRect().width,
  //     h: Element.querySelector('.scheme-img').getBoundingClientRect().height
  //   }
  // })

  // function changeSchemes(Num) {
  //   Array.from(document.querySelectorAll('.scheme-container')).forEach((Element, Index) => {
  //     Element.style.transform = 'scale(1) translate(0px, 0px)';
  //     Element.scale = 1;
  //     Element.style.visibility = Num === Index ? 'visible' : 'hidden';
  //     if (Num > document.querySelectorAll('.scheme-container').length - 1) {
  //       trenWorkObj.activeScheme = 0;
  //       document.querySelectorAll('.scheme-container')[0].style.visibility = 'visible';
  //       console.warn('У вас нет рисунка номер', Num);
  //     }
  //   })
  //   trenWorkObj.activeScheme = Num;
  // }

  // document.querySelector('.schema-window').addEventListener('mouseout', (e) => {
  //   e.currentTarget.activeMove = false
  //   e.currentTarget.style.cursor = 'grab';
  // });

  // document.querySelector('.schema-window').addEventListener('mousedown', function (e) {
  //   e.preventDefault();
  //   e.currentTarget.style.cursor = 'grabbing';
  //   e.currentTarget.activeMove = true;
  //   // TODO: тут будет клик по схеме. Добавить обработчик событий по элементам на схеме
  // });
  // document.querySelector('.schema-window').addEventListener('mouseup', function (e) {
  //   e.preventDefault();
  //   e.currentTarget.style.cursor = 'grab';
  //   e.currentTarget.activeMove = false;
  //   // TODO: тут будет клик по схеме. Добавить обработчик событий по элементам на схеме
  // });
  // document.querySelector('.schema-window').addEventListener('mousemove', function (e) {
  //   e.preventDefault();
  // });

    
    if (document.querySelector('object')) {
      trenWorkObj.svgSchemes = [];
      document.querySelectorAll('object').forEach((ElementObj) => {
        let tempSvg;
        if (ElementObj.contentDocument.querySelector('svg')) {
          tempSvg = ElementObj.contentDocument.querySelector('svg');
          trenWorkObj.svgSchemes.push({
            name: tempSvg.baseURI.substring(tempSvg.baseURI.lastIndexOf('/') + 1, tempSvg.baseURI.indexOf('.svg')),
            svg: tempSvg,
            activeElements: [],
          })
        }
        else {
          ElementObj.addEventListener('load', function (e) {
            tempSvg = e.currentTarget.contentDocument.querySelector('svg');
            trenWorkObj.svgSchemes.push({
              name: tempSvg.baseURI.substring(tempSvg.baseURI.lastIndexOf('/') + 1, tempSvg.baseURI.indexOf('.svg')),
              svg: tempSvg,
              activeElements: [],
            })
          });
        }
      })
      trenWorkObj.svgSchemes.forEach((Element, IndexSvg) => {
        Element.svg.querySelectorAll('text').forEach(TextElement => {
          // На сколько умножить ширину тексте для сдвига
          (parseInt(Element.svg.getAttribute('width')) * 100 / Element.svg.getBoundingClientRect().width)
          TextElement.setAttribute('text-anchor', 'end'); // задать точку начала с конца
          TextElement.setAttribute('x', `${parseFloat(TextElement.getAttribute('x')) + (TextElement.getBoundingClientRect().width * (parseInt(Element.svg.getAttribute('width')) * 100 / Element.svg.getBoundingClientRect().width))}`);
          if (TextElement.innerHTML === '0,16') {
            trenWorkObj.svgSchemes[IndexSvg].activeElements.push({
              element: TextElement,
              name: '6VI_2_1'
            })
          }
        });
      })
    }
  */
  loadTrenActions();
}

function changeMessageWindow(Num) {
  document.querySelector('.message').innerHTML = Num === 0 ? trenWorkObj.messages.normal : trenWorkObj.messages.error;
  document.querySelector('.message').style.backgroundColor = Num === 0 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 0, 0, 0.4)';
}
