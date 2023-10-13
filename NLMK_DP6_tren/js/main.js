/*                 TODO
----------------------------------------------------
Сделать ресайзер для 2Д и 3Д
----------------------------------------------------
переработать систему сообщений
----------------------------------------------------
*/
document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  devHelper.trenVals.scenario = undefined;
  devHelper.trenVals.messages = {
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
    if (devHelper.trenVals.actionArr[Index].actions) {
      removeStartScreen();
      document.querySelector('.tren-container').style.transition = 'opacity 0.5s ease 0.5s';
      document.querySelector('.tren-container').style.opacity = 1;
      devHelper.trenVals.type = TrenType;
      devHelper.trenVals.scenario = Index;
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
  // document.querySelector('.info-page').classList.add("info-page-active");
  // Array.from(document.querySelector('.info-buttons').querySelectorAll('button')).forEach((Element, Index) => {
  //   Element.addEventListener('click', (e) => {
  //     if (document.querySelector('.info-page-active') !== Element.closest('.section').querySelector('.content').children[Index]) {
  //       document.querySelector('.info-page-active').classList.toggle('info-page-active', false);
  //       Element.closest('.section').querySelector('.content').children[Index].classList.toggle('info-page-active', true);
  //     }
  //   })
  // })

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
  //       document.querySelectorAll('.scheme-container')[0].style.visibility = 'visible';
  //       console.warn('У вас нет рисунка номер', Num);
  //     }
  //   })
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
      devHelper.svgVals = [];
      document.querySelectorAll('object').forEach((ElementObj) => {
        let tempSvg;
        if (ElementObj.contentDocument.querySelector('svg')) {
          tempSvg = ElementObj.contentDocument.querySelector('svg');
          devHelper.svgVals.push({
            name: tempSvg.baseURI.substring(tempSvg.baseURI.lastIndexOf('/') + 1, tempSvg.baseURI.indexOf('.svg')),
            svg: tempSvg,
            activeElements: [],
          })
        }
        else {
          ElementObj.addEventListener('load', function (e) {
            tempSvg = e.currentTarget.contentDocument.querySelector('svg');
            devHelper.svgVals.push({
              name: tempSvg.baseURI.substring(tempSvg.baseURI.lastIndexOf('/') + 1, tempSvg.baseURI.indexOf('.svg')),
              svg: tempSvg,
              activeElements: [],
            })
          });
        }
      })
      devHelper.svgVals.forEach((Element, IndexSvg) => {
        Element.svg.querySelectorAll('text').forEach(TextElement => {
          // На сколько умножить ширину тексте для сдвига
          (parseInt(Element.svg.getAttribute('width')) * 100 / Element.svg.getBoundingClientRect().width)
          TextElement.setAttribute('text-anchor', 'end'); // задать точку начала с конца
          TextElement.setAttribute('x', `${parseFloat(TextElement.getAttribute('x')) + (TextElement.getBoundingClientRect().width * (parseInt(Element.svg.getAttribute('width')) * 100 / Element.svg.getBoundingClientRect().width))}`);
          if (TextElement.innerHTML === '0,16') {
            devHelper.svgVals[IndexSvg].activeElements.push({
              element: TextElement,
              name: '6VI_2_1'
            })
          }
        });
      })
    }
  */
  
  function guideBtnsClick(e) {
    document.querySelectorAll('.section .nav-icon').forEach((Element2) => {
      Element2.classList.toggle('nav-icon-active', false);
      let tempSvg = Element2.querySelector('object').contentDocument.querySelector('svg');
      Array.from(tempSvg.children).forEach((SvgElem) => {
        if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#7c7c7c');
      })
    })
    e.currentTarget.classList.toggle('nav-icon-active', true);
    let tempSvg = e.currentTarget.querySelector('object').contentDocument.querySelector('svg');
    Array.from(tempSvg.children).forEach((SvgElem) => {
      if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#f8f8f8');
    })
  }
  document.querySelectorAll('.section .nav-icon').forEach((Element, index) => {
    Element.addEventListener('click', guideBtnsClick);
    if (index === 0) Element.dispatchEvent(new Event('click'));
  });

  document.querySelectorAll('.dropdown-content .drop-item').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      document.querySelectorAll('.dropdown-content .drop-item').forEach((Element2) => {
        if (Element2 !== e.currentTarget) {
          Element2.querySelector('span').style.minWidth = '100%';
          Element2.style.backgroundColor = '';
          Element2.style.border = '';
          Element2.style.color = '';
          Element2.style.width = '';
          Element2.style.left = '';
        }
      });
      e.currentTarget.querySelector('span').style.minWidth = '126%';
      e.currentTarget.style.backgroundColor = '#2c5289';
      e.currentTarget.style.border = '2px solid #2c5289';
      e.currentTarget.style.color = '#f4f4f4';
      e.currentTarget.style.width = '77%';
      e.currentTarget.style.left = '20%';
      let btnScenarioContainer = document.querySelector('.scenarion-buttons-container');
      btnScenarioContainer.style.left = e.currentTarget.getBoundingClientRect().left + 'px';
      btnScenarioContainer.style.top = e.currentTarget.getBoundingClientRect().top + 'px';
     
    });
  });


  loadTrenActions();

}
setInterval(() => {
  for (let i = 0; i < document.querySelectorAll('.photo').length; i++) {
    const Element = document.querySelectorAll('.photo')[i];
    Element.style.transition = 'opacity 1s ease';
    if (Element.style.opacity === '1') {
      Element.style.opacity = 0;
      let nextElem = Element.nextElementSibling.classList.contains('photo') ? Element.nextElementSibling : document.querySelector('.photo');
      nextElem.style.transition = 'opacity 1s ease';
      nextElem.style.opacity = 1;
      break
    }
  }
}, 4000)


function changeMessageWindow(Num) {
  document.querySelector('.message').innerHTML = Num === 0 ? devHelper.trenVals.messages.normal : devHelper.trenVals.messages.error;
  document.querySelector('.message').style.backgroundColor = Num === 0 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 0, 0, 0.4)';
}
