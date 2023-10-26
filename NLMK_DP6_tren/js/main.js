/*                 TODO
----------------------------------------------------
Сделать ресайзер для 2Д
----------------------------------------------------
*/
document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
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

  function removeStartScreen() {
    document.querySelector('.header').style.top = -document.querySelector('.header').getBoundingClientRect().bottom - 10 + 'px';
    document.querySelector('.section').style.left = -document.querySelector('.section').getBoundingClientRect().width * 1.1 + 'px';
  }

  function revialTrenScreen() {
    document.querySelector('.tren-container').style.visibility = 'visible';
    document.querySelector('.tren-container').style.transition = 'opacity 0.5s ease 0.5s';
    document.querySelector('.tren-container').style.opacity = 1;
  }

  function prepareTren(TrenType, Scenario, Index) {
    if (devHelper.trenVals.scenarioArr[Index].actions) {
      removeStartScreen();
      revialTrenScreen();
      devHelper.trenVals.type = TrenType;
      devHelper.trenVals.scenario = Index;
      startRender();
      startTren();
    } else {
      let popupDiv = document.createElement('div');
      popupDiv.classList.add('popup-alert');
      popupDiv.innerHTML = `Вы не можете воспроизвести этот сценарий сейчас.`;
      document.body.append(popupDiv);
      document.body.addEventListener('mousedown', () => {
        if (document.querySelector('.popup-alert')) document.querySelector('.popup-alert').remove()
      });
    }
  }

  document.querySelectorAll('.dropdown-content .drop-item').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('drop-item-active')) {
        document.querySelectorAll('.dropdown-content .drop-item').forEach((Element2) => {
          if (Element2 !== e.currentTarget) {
            Element2.querySelector('span').classList.toggle('drop-span-active', false);
            Element2.classList.toggle('drop-item-active', false);
          }
        });
        e.currentTarget.querySelector('span').classList.toggle('drop-span-active', true);
        e.currentTarget.classList.toggle('drop-item-active', true);
        let btnCon = document.querySelector('.scenarion-buttons-container');
        btnCon.querySelectorAll('.scenarion-button').forEach((Element3) => {
          Element3.classList.toggle('scenarion-button-active', false);
          Array.from(Element3.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
            if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#7c7c7c');
          })
        })
        e.currentTarget.parentElement.prepend(btnCon);
        btnCon.style.visibility = 'visible';
        btnCon.style.position = 'relative';
        btnCon.style.marginTop = -btnCon.getBoundingClientRect().height + 'px';
        btnCon.style.transform = `translateY(${(e.currentTarget.getBoundingClientRect().height + window.innerHeight * 0.02) * Array.from(e.currentTarget.parentElement.children).indexOf(e.currentTarget) - window.innerHeight * 0.02}px`;
      } else {
        e.currentTarget.classList.toggle('drop-item-active', false);
        e.currentTarget.querySelector('span').classList.toggle('drop-span-active', false);
        document.querySelector('.scenarion-buttons-container').style.visibility = 'hidden';
      }
    });
  });

  document.querySelectorAll('.scenarion-button').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('scenarion-button-active')) {
        document.querySelectorAll('.scenarion-button').forEach((Element2) => {
          if (Element2 !== e.currentTarget) {
            Element2.classList.toggle('scenarion-button-active', false);
            Array.from(Element2.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
              if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#7c7c7c');
            })
          }
        })
        e.currentTarget.classList.toggle('scenarion-button-active', true);
        Array.from(e.currentTarget.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
          if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#f4f4f4');
        })
        prepareTren(e.currentTarget.querySelector('span').innerText === 'Обучение' ? 'learn' : 'test', document.querySelector('.drop-item-active').querySelector('span').innerText, Array.from(document.querySelectorAll('.drop-item')).indexOf(document.querySelector('.drop-item-active')));
      }
    });
  })

  document.querySelectorAll('.drop-title').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      e.currentTarget.querySelector('img').classList.toggle('arrow-text-active');
      e.currentTarget.nextElementSibling.children[0].style.marginTop = e.currentTarget.querySelector('img').classList.contains('arrow-text-active') ? '1vh' :
        `-${e.currentTarget.nextElementSibling.children[0].getBoundingClientRect().height}px`;
      if (e.currentTarget.nextElementSibling.querySelector('.drop-item-active')) {
        e.currentTarget.nextElementSibling.querySelector('.drop-item-active').classList.toggle('drop-item-active', false);
        document.querySelector('.scenarion-buttons-container').style.visibility = 'hidden';
      }
    })
  })

  // Правильные ответы для самопроверки
  devHelper.testVals.answersArray = [
    'Оборудование пылеуловителя',
    'Оборудование пылеуловителя',
    'Оборудование пылеуловителя',
    'Оборудование пылеуловителя',
    'Оборудование пылеуловителя',
  ]

  // Вешаю обработчик нажатия на все <div class="selfcheck-radio">
  document.querySelectorAll('.selfcheck-radio').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      radioButtonChange(e.currentTarget);
    })
  })

  // Вешаю обработчик на кнопку 'Подтвердить'
  document.querySelectorAll('.selfcheck-confirm-button').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      confirmSelfcheckButtonClick(e.currentTarget, devHelper.testVals.answersArray);
    })
  })

  // Рандомлю ответы в каждом <div class="selfcheck-radio-container">
  document.querySelectorAll('.selfcheck-radio-container').forEach((Element) => {
    randomAnswer(Element.querySelectorAll('.radio-elem'), Element);
  })

  // Заполняю массив контейнерами вопросов
  document.querySelectorAll('.selfcheck-container').forEach((Element) => {
    devHelper.testVals.containerArray.push(Element);
  });
  //glavTestFun();

  // При переходе на вкладку тесты, появляется случайный вопрос
  document.querySelectorAll('.nav-icon')[document.querySelectorAll('.nav-icon').length - 1].addEventListener('mouseup', (e) => {
    if (!e.currentTarget.classList.contains('test-opened')) {
      glavTestFun(e.currentTarget.classList[0]);
      e.currentTarget.classList.toggle('test-opened', true);
    }
  })

  document.querySelector('.random-answer-button').addEventListener('mouseout', (e) => {
    e.currentTarget.classList.toggle('answer-button-pressed', false);
    Array.from(e.currentTarget.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
      if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#939393');
    })
  })

  document.querySelector('.random-answer-button').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('answer-button-pressed', true);
    Array.from(e.currentTarget.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
      if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#f4f4f4');
    })
    glavTestFun(e.currentTarget.classList[0]);
  })

  document.querySelector('.section').addEventListener('transitionend', (e) => {
    if (e.propertyName === 'width')
      document.querySelector('.text-container').style.transition = document.querySelector('.section').style.width === '68vw' ? 'margin-top 0.3s ease' : 'none';
  });


  loadTrenActions();
}

window.addEventListener('load', function () {
  document.querySelectorAll('.dropdown-container .dropdown-content').forEach((Element) => {
    Element.style.marginTop = `-${Element.getBoundingClientRect().height + 50}px`;
    Element.classList.remove('first-drop');
  })
  document.querySelectorAll('.section .nav-icon').forEach((Element, index) => {
    Element.addEventListener('click', guideBtnsClick);
    // if (index === 0) {
    //   Element.classList.toggle('nav-icon-active', true);
    //   Array.from(Element.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
    //     if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#f4f4f4');
    //   })
    // }
  });
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
  }, 8000)

  if (devHelper.dev.enable === true) console.log(devHelper);
});


function guideBtnsClick(e) {
  if (!e.currentTarget.classList.contains('nav-icon-active')) {
    document.querySelector('.info-container').style.left = '';
    document.querySelector('.section').style.width = '68vw';
    document.querySelectorAll('.section .nav-icon').forEach((Element2) => {
      Element2.classList.toggle('nav-icon-active', false);
      Array.from(Element2.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
        if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#7c7c7c');
      })
    })
    e.currentTarget.classList.toggle('nav-icon-active', true);
    Array.from(e.currentTarget.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
      if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#f4f4f4');
    })

    if (document.querySelector('.text-container-active')) {
      document.querySelector('.text-container-active').classList.toggle('text-container-active', false);
    }
    let newTextIndex = Array.from(e.currentTarget.parentElement.children).indexOf(e.currentTarget) - 1;
    let textConNew = document.querySelector('.info-container').children[newTextIndex];
    textConNew.classList.toggle('text-container-active', true);
    document.querySelector('.info-container').children[0].style.marginTop = `-${(newTextIndex - 0) * textConNew.getBoundingClientRect().height}px`;

    if (document.querySelector('.arrow-text-active')) {
      document.querySelectorAll('.arrow-text-active').forEach((Element) => {
        Element.parentElement.dispatchEvent(new Event('click'));
      })
    }

    if (document.querySelector('.info-container').querySelector('.drop-item-active')) {
      document.querySelector('.info-container').querySelector('.drop-item-active').classList.toggle('drop-item-active', false);
      document.querySelector('.scenarion-buttons-container').style.visibility = 'hidden';
    }
  } else {
    document.querySelector('.section').style.width = '';
    // document.querySelector('.info-container').style.left = '20vw';
    document.querySelector('.info-container').style.left = '-52vw';
    e.currentTarget.classList.toggle('nav-icon-active', false);
    Array.from(e.currentTarget.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
      if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#7c7c7c');
    })
  }
}

// Функция работы с radioButton
function radioButtonChange(elem) {
  if (elem.parentElement.classList.contains('active-radio')) return;
  let confirmButton = elem.closest('.selfcheck-container').querySelector('.selfcheck-confirm-button');
  let radioContainer = elem.closest('.selfcheck-radio-container');
  if (!elem.parentElement.classList.contains('active-radio')) {
    if (radioContainer.contains(radioContainer.querySelector('.active-radio'))) {
      radioContainer.querySelector('.active-radio').classList.toggle('active-radio', false);
    }
    elem.parentElement.classList.toggle('active-radio', true);
    confirmButton.classList.toggle('disabled-button', false)
    confirmButton.classList.toggle('active-button', true)
  } else {
    elem.parentElement.classList.toggle('active-radio', false);
    confirmButton.classList.toggle('disabled-button', true)
    confirmButton.classList.toggle('active-button', false)
  }
}

// Подтверждение ответа в тестах
function confirmSelfcheckButtonClick(elem, selfcheckTrueResults) {
  let selfcheckContainer = elem.closest('.selfcheck-container');
  let selfcheckcontainerIndex = Array.from(selfcheckContainer.closest('.selfcheck-container-main').querySelectorAll('.selfcheck-container')).indexOf(selfcheckContainer);
  let radioContainer = selfcheckContainer.querySelector('.selfcheck-radio-container');
  let radioButtSelectIndex = Array.from(radioContainer.querySelectorAll('.radio-elem')).indexOf(radioContainer.querySelector('.active-radio'));
  let textSelectRadioButt = selfcheckContainer.querySelector('.active-radio').querySelector('span').textContent;
  if (textSelectRadioButt == selfcheckTrueResults[selfcheckcontainerIndex]) {
    radioContainer.querySelector('.active-radio').classList.toggle('correct-answer', true);
    radioContainer.querySelector('.active-radio').classList.toggle('active-radio', false);
    selfcheckContainer.classList.toggle('block-selfcheck-container', true);
  } else {
    radioContainer.querySelector('.active-radio').classList.toggle('wrong-answer', true);
    radioContainer.querySelector('.active-radio').classList.toggle('active-radio', false);
    selfcheckContainer.classList.toggle('block-selfcheck-container', true);
  }
}

// Функция рандома ответов в вопросе
function randomAnswer(radioElements, parent) {
  let max = radioElements.length;
  let min = 0;
  radioElements.forEach(() => {
    parent.insertBefore(radioElements[Math.floor(Math.random() * (max - min) + min)], radioElements[Math.floor(Math.random() * (max - min) + min)]);
  })
}

// Перезаполнение массива контейнерами вопросов
function reviveArray(min) {
  document.querySelectorAll('.selfcheck-container').forEach((Element) => {
    devHelper.testVals.containerArray.push(Element);
    Element.classList.toggle('block-selfcheck-container', false);
    Element.querySelector('.correct-answer').classList.toggle('correct-answer', false);
    Element.querySelector('.active-button').classList.toggle('disabled-button', true);
    Element.querySelector('.active-button').classList.toggle('active-button', false);
  });
  randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
  randomContainer.classList.toggle('selfcheck-invisible', false);
  devHelper.testVals.previousContainer = randomContainer;
}

function glavTestFun(pressedButton) {
  if (devHelper.testVals.previousContainer != undefined) {
    devHelper.testVals.previousContainer.classList.toggle('selfcheck-invisible', true);
  }
  let min = 0;
  let randomContainer;
  let previousContainerIndex;

  if (pressedButton === 'nav-icon') {
    randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];

    randomContainer.classList.toggle('selfcheck-invisible', false);
    devHelper.testVals.previousContainer = randomContainer;
  }

  if (pressedButton === 'random-answer-button') {
    if (devHelper.testVals.previousContainer != undefined) {
      devHelper.testVals.previousContainer.classList.toggle('selfcheck-invisible', true);
    }
    if (devHelper.testVals.previousContainer.querySelector('.selfcheck-radio-container').querySelector('.correct-answer') != null) {
      devHelper.testVals.previousContainer.classList.toggle('selfcheck-invisible', true);
      previousContainerIndex = devHelper.testVals.containerArray.indexOf(devHelper.testVals.previousContainer);
      devHelper.testVals.containerArray.splice(previousContainerIndex, 1);
      if (devHelper.testVals.containerArray.length === 0) {
        reviveArray(min);
        return;
      }
      randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
      randomContainer.classList.toggle('selfcheck-invisible', false);
      devHelper.testVals.previousContainer = randomContainer;
      if (devHelper.testVals.containerArray.length === 0) {
        devHelper.testVals.previousContainer = undefined;
      }
      return;
    } else if (devHelper.testVals.previousContainer.querySelector('.selfcheck-radio-container').querySelector('.wrong-answer') != null) {
      randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
      randomContainer.classList.toggle('selfcheck-invisible', false);
      devHelper.testVals.previousContainer.querySelector('.selfcheck-radio-container').querySelector('.wrong-answer').classList.toggle('wrong-answer', false);
      devHelper.testVals.previousContainer.classList.toggle('block-selfcheck-container', false);
      devHelper.testVals.previousContainer.querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', true);
      devHelper.testVals.previousContainer = randomContainer;
      return;
    }
    randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
    randomContainer.classList.toggle('selfcheck-invisible', false);
    devHelper.testVals.previousContainer = randomContainer;
    return;
  }
}
