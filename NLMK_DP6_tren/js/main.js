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
    normal: ['Тестовое сообщение'],
    error: ['Тестовая ошибка']
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



  Array.from(document.querySelectorAll('.tab-scheme')).forEach((Element, Index) => {
    Element.addEventListener('click', () => changeSchemes(Index));
    if (Index > document.querySelector('.schema-window').children.length - 1) {
      Element.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
    }
  })

  Array.from(document.querySelector('.message-buttons-window').children).forEach((Element, Index) => {
    Element.addEventListener('click', () => changeMessageWindow(Index));
  })

  Array.from(document.querySelector('.message-buttons-window').children).forEach((Element, Index) => {
    Element.addEventListener('click', () => changeMessageWindow(Index));
  })

  document.querySelector('.schema-window').addEventListener('mouseout', (e) => {
    e.currentTarget.activeMove = false
    e.currentTarget.style.cursor = 'grab';
  }
  )

  document.querySelector('.schema-window').addEventListener('wheel', function (e) {
    e.preventDefault();
    let activeSchemeContainer = document.querySelector('.schema-window').children[trenWorkObj.activeScheme];
    let maxScale = activeSchemeContainer.hasAttribute('maximum-scale') ? activeSchemeContainer.getAttribute('maximum-scale').length > 0 ? activeSchemeContainer.getAttribute('maximum-scale') : 3 : 3;
    let newScaleDiff = e.deltaY > 1 ? (activeSchemeContainer.scale === 1 ? 0 : -0.1) : (activeSchemeContainer.scale > maxScale ? 0 : 0.1);
    activeSchemeContainer.scale += newScaleDiff;
    if (activeSchemeContainer.scale === 1) {
      activeSchemeContainer.startCoors = { x: 0, y: 0 };
      activeSchemeContainer.transformXY = { x: 0, y: 0 };
    }
    activeSchemeContainer.style.transform = `scale(${activeSchemeContainer.scale}) translate(${activeSchemeContainer.transformXY.x}px, ${activeSchemeContainer.transformXY.y}px)`;
    movePicOnProperPlace(e);
  });

  document.querySelector('.schema-window').addEventListener('mousedown', function (e) {
    e.preventDefault();
    e.currentTarget.style.cursor = 'grabbing';
    e.currentTarget.activeMove = true;
    e.currentTarget.children[trenWorkObj.activeScheme].startClick = {
      x: e.clientX,
      y: e.clientY
    };
    let startTransformIndexX = e.currentTarget.children[trenWorkObj.activeScheme].style.transform.indexOf('translate(') + 10;
    let finishTransformIndexX = e.currentTarget.children[trenWorkObj.activeScheme].style.transform.indexOf('px', startTransformIndexX);
    let tempX = parseInt(e.currentTarget.children[trenWorkObj.activeScheme].style.transform.substring(startTransformIndexX, finishTransformIndexX));
    let startTransformIndexY = e.currentTarget.children[trenWorkObj.activeScheme].style.transform.indexOf('px') + 3;
    let finishTransformIndexY = e.currentTarget.children[trenWorkObj.activeScheme].style.transform.indexOf('px', startTransformIndexY);
    let tempY = parseInt(e.currentTarget.children[trenWorkObj.activeScheme].style.transform.substring(startTransformIndexY, finishTransformIndexY));
    e.currentTarget.children[trenWorkObj.activeScheme].startCoors = {
      x: tempX,
      y: tempY
    };
  });
  document.querySelector('.schema-window').addEventListener('mouseup', function (e) {
    e.preventDefault();
    e.currentTarget.style.cursor = 'grab';
    e.currentTarget.activeMove = false;
    e.currentTarget.children[trenWorkObj.activeScheme].startClick = undefined;
    e.currentTarget.children[trenWorkObj.activeScheme].startCoors = undefined;
  });
  document.querySelector('.schema-window').addEventListener('mousemove', function (e) {
    e.preventDefault();
    movePicOnProperPlace(e)
  });

  function movePicOnProperPlace(e) {
    let tempSchemeContainer = document.querySelector('.schema-window').children[trenWorkObj.activeScheme];
    let tempScheme = tempSchemeContainer.querySelector('.scheme-img');
    if (tempSchemeContainer.scale === 1) {
      tempSchemeContainer.style.transform = `scale(1) translate(0px, 0px)`;
    } else {
      if (e.currentTarget.activeMove === true) {
        tempSchemeContainer.transformXY.x = (e.clientX - tempSchemeContainer.startClick.x) + tempSchemeContainer.startCoors.x;
        tempSchemeContainer.transformXY.y = (e.clientY - tempSchemeContainer.startClick.y) + tempSchemeContainer.startCoors.y;
        if (tempScheme.getBoundingClientRect().width > tempSchemeContainer.parentElement.getBoundingClientRect().width) {
          if (Math.abs(tempSchemeContainer.transformXY.x) > (tempScheme.getBoundingClientRect().width - tempSchemeContainer.parentElement.getBoundingClientRect().width) / (2 * tempSchemeContainer.scale)) {
            tempSchemeContainer.transformXY.x = ((tempScheme.getBoundingClientRect().width - tempSchemeContainer.parentElement.getBoundingClientRect().width) / (2 * tempSchemeContainer.scale)) *
              (tempSchemeContainer.transformXY.x > 0 ? 1 : -1);
          }
        } else tempSchemeContainer.transformXY.x = 0;
        if (tempScheme.getBoundingClientRect().height > tempSchemeContainer.parentElement.getBoundingClientRect().height) {
          if (Math.abs(tempSchemeContainer.transformXY.y) > (tempScheme.getBoundingClientRect().height - tempSchemeContainer.parentElement.getBoundingClientRect().height) / (2 * tempSchemeContainer.scale)) {
            tempSchemeContainer.transformXY.y = ((tempScheme.getBoundingClientRect().height - tempSchemeContainer.parentElement.getBoundingClientRect().height) / (2 * tempSchemeContainer.scale)) *
              (tempSchemeContainer.transformXY.y > 0 ? 1 : -1);
          }
        } else tempSchemeContainer.transformXY.y = 0;
        tempSchemeContainer.style.transform = `scale(${tempSchemeContainer.scale}) translate(${tempSchemeContainer.transformXY.x}px, ${tempSchemeContainer.transformXY.y}px)`;
      }
      if (e.type === 'wheel') {
        if (tempScheme.getBoundingClientRect().left > tempSchemeContainer.parentElement.getBoundingClientRect().left)
          tempSchemeContainer.transformXY.x = ((tempScheme.getBoundingClientRect().width - tempSchemeContainer.parentElement.getBoundingClientRect().width) / (2 * tempSchemeContainer.scale));
        if (tempScheme.getBoundingClientRect().right < tempSchemeContainer.parentElement.getBoundingClientRect().right)
          tempSchemeContainer.transformXY.x = -((tempScheme.getBoundingClientRect().width - tempSchemeContainer.parentElement.getBoundingClientRect().width) / (2 * tempSchemeContainer.scale));
        if (tempScheme.getBoundingClientRect().top > tempSchemeContainer.parentElement.getBoundingClientRect().top)
          tempSchemeContainer.transformXY.y = ((tempScheme.getBoundingClientRect().height - tempSchemeContainer.parentElement.getBoundingClientRect().height) / (2 * tempSchemeContainer.scale));
        if (tempScheme.getBoundingClientRect().bottom < tempSchemeContainer.parentElement.getBoundingClientRect().bottom)
          tempSchemeContainer.transformXY.y = -((tempScheme.getBoundingClientRect().height - tempSchemeContainer.parentElement.getBoundingClientRect().height) / (2 * tempSchemeContainer.scale));
        if (tempScheme.getBoundingClientRect().height < tempSchemeContainer.parentElement.getBoundingClientRect().height)
          tempSchemeContainer.transformXY.y = 0;
        if (tempScheme.getBoundingClientRect().width < tempSchemeContainer.parentElement.getBoundingClientRect().width)
          tempSchemeContainer.transformXY.x = 0;
        tempSchemeContainer.style.transform = `scale(${tempSchemeContainer.scale}) translate(${tempSchemeContainer.transformXY.x}px, ${tempSchemeContainer.transformXY.y}px)`;
      }
    }
  }

  document.querySelector('.tren-container').addEventListener('transitionend', (e) => {
    if (e.propertyName === 'opacity') {
      e.currentTarget.style.visibility = e.currentTarget.style.opacity === '0' ? 'hidden' : 'visible';
      if (e.currentTarget.style.opacity === '0') {
        e.currentTarget.style.visibility = 'hidden';
        document.querySelector('.header').style.top = '0px';
        document.querySelectorAll('.section')[0].style.left = '0px';
        document.querySelectorAll('.section')[1].style.left = '0px';
        // document.querySelectorAll('.section')[1].style.left = '52%';
        document.querySelector('.start-container').style.visibility = 'visible';
      } else e.currentTarget.style.visibility = 'visible';
    }
  })

  document.querySelector('.exit').addEventListener('click', (e) => {
    document.querySelector('.tren-container').style.opacity = 0;
  })

  document.querySelectorAll('.scheme-img').forEach(img => {
    let tempBool = false;
    if (img.naturalWidth) tempBool = true;
    else img.addEventListener('load', () => tempBool = true)
    if (tempBool === true) {
      img.style.width = img.naturalWidth / img.parentElement.clientWidth < img.naturalHeight / img.parentElement.clientHeight ? 'auto' : '100%';
      img.style.height = img.naturalWidth / img.parentElement.clientWidth < img.naturalHeight / img.parentElement.clientHeight ? '100%' : 'auto';
    }
  });

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
      changeSchemes(0);
      document.querySelector('.tren-container').style.transition = 'opacity 0.5s ease 0.5s';
      document.querySelector('.tren-container').style.opacity = 1;
      trenWorkObj.trenType = TrenType;
      trenWorkObj.scenarioSelected = Index;
    } else {
      let popupDiv = document.createElement('div');
      popupDiv.classList.add('popup-alert');
      popupDiv.innerHTML = `Вы не можете воспроизвести этот сценарий сейчас.`;
      document.body.append(popupDiv);
      document.body.addEventListener('mousedown', () => {if (document.querySelector('.popup-alert')) document.querySelector('.popup-alert').remove()});
    }
  }

  Array.from(document.querySelectorAll('.scheme-container')).forEach((Element, Index) => {
    Element.style.transform = 'scale(1) translate(0px, 0px)';
    Element.startClick = undefined;
    Element.startCoors = { x: 0, y: 0 };
    Element.transformXY = { x: 0, y: 0 };
    Element.scale = 1;
    Element.startDementions = {
      w: Element.querySelector('.scheme-img').getBoundingClientRect().width,
      h: Element.querySelector('.scheme-img').getBoundingClientRect().height
    }
  })

  function changeSchemes(Num) {
    Array.from(document.querySelectorAll('.scheme-container')).forEach((Element, Index) => {
      Element.style.transform = 'scale(1) translate(0px, 0px)';
      Element.startClick = undefined;
      Element.startCoors = { x: 0, y: 0 };
      Element.transformXY = { x: 0, y: 0 };
      Element.scale = 1;
      Element.style.visibility = Num === Index ? 'visible' : 'hidden';
      if (Num > document.querySelectorAll('.scheme-container').length - 1) {
        trenWorkObj.activeScheme = 0;
        document.querySelectorAll('.scheme-container')[0].style.visibility = 'visible';
        console.warn('У вас нет рисунка номер', Num);
      }
    })
    trenWorkObj.activeScheme = Num;
  }


  document.body.addEventListener('mouseup', function (e) {
    Array.from(document.querySelectorAll('.scroll-rect')).forEach((Element, Index) => {
      Element.clickedCoors = { x: '', y: '', }
      Element.clicked = false;
    })
  })

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
  */
  if (document.querySelector('object')) {
    document.querySelectorAll('object').forEach((ElementObj) => {
      ElementObj.addEventListener('load', function (e) {
        let tempSvg = e.currentTarget.contentDocument.querySelector('svg');
        // На сколько умножить ширину тексте для сдвига
        // (parseInt(tempSvg.getAttribute('width')) * 100 / tempSvg.getBoundingClientRect().width)
        tempSvg.querySelectorAll('text').forEach(ElementText => {
          // element.setAttribute('text-anchor', 'end'); // задать точку начала с конца
          // element.setAttribute('x', `${parseFloat(element.getAttribute('x')) + (element.getBoundingClientRect().width * (parseInt(tempSvg.getAttribute('width')) * 100 / tempSvg.getBoundingClientRect().width))}`);
          // element.innerHTML = 9999; // Заменить текст внутри, если нужно добавить правила
        });
      });
    })
  }

  loadTrenActions();
}

function changeMessageWindow(Num) {
  document.querySelector('.message').innerHTML = Num === 0 ? trenWorkObj.messages.normal : trenWorkObj.messages.error;
  document.querySelector('.message').style.backgroundColor = Num === 0 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 0, 0, 0.4)';
}


