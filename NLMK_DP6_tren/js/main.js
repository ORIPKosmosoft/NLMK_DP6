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

  if (document.querySelector('.exit')) {
    document.querySelector('.exit').addEventListener('click', (e) => {
      document.querySelector('.tren-container').style.opacity = 0;
    })
  }

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
    if (devHelper.trenVals.actionArr[Index].actions) {
      removeStartScreen();
      revialTrenScreen();
      devHelper.trenVals.type = TrenType;
      devHelper.trenVals.scenario = Index;
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

  function guideBtnsClick(e) {
    if (!e.currentTarget.classList.contains('nav-icon-active')) {
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
      let newTextIndex = Array.from(e.currentTarget.parentElement.children).indexOf(e.currentTarget);
      let textConNew = document.querySelector('.info-container').children[newTextIndex];
      textConNew.classList.toggle('text-container-active', true);
      document.querySelector('.info-container').children[0].style.marginTop = `-${newTextIndex * textConNew.getBoundingClientRect().height}px`;

      if (document.querySelector('.arrow-text-active')) {
        document.querySelectorAll('.arrow-text-active').forEach((Element) => {
          Element.parentElement.dispatchEvent(new Event('click'));
        })
      }

      if (document.querySelector('.info-container').querySelector('.drop-item-active')) {
        document.querySelector('.info-container').querySelector('.drop-item-active').classList.toggle('drop-item-active', false);
        document.querySelector('.scenarion-buttons-container').style.visibility = 'hidden';
      }
    }
  }

  document.querySelectorAll('.section .nav-icon').forEach((Element, index) => {
    Element.addEventListener('click', guideBtnsClick);
    if (index === 0) Element.dispatchEvent(new Event('click'));
  });

  document.querySelectorAll('.dropdown-container .dropdown-content').forEach((Element) => {
    Element.style.marginTop = `-${Element.getBoundingClientRect().height}px`;
    Element.classList.remove('first-drop');
  })

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
      e.currentTarget.nextElementSibling.children[0].style.marginTop = e.currentTarget.querySelector('img').classList.contains('arrow-text-active') ? '' :
        `-${e.currentTarget.nextElementSibling.children[0].getBoundingClientRect().height}px`;
      if (e.currentTarget.nextElementSibling.querySelector('.drop-item-active')) {
        e.currentTarget.nextElementSibling.querySelector('.drop-item-active').classList.toggle('drop-item-active', false);
        document.querySelector('.scenarion-buttons-container').style.visibility = 'hidden';
      }
    })
  })

  // Сергей
  // Переход к нужному тесту
  document.querySelector('.tests-container').querySelectorAll('.tests-button').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      let buttonTestsindex = Array.from(e.currentTarget.closest('.tests-selected-buttons').children).indexOf(e.currentTarget.parentElement);
      console.log(buttonTestsindex);
      if (buttonTestsindex === 0) {
        console.log('Самопроверка');
      } else if (buttonTestsindex === 1) {
        console.log('Интерактивный тест');
      }
    })
  })

  // Сергей
  // Правильные ответы для самопроверки
  const testsAnswerResults = {
    selfcheck: {
      0: 0, // 1
      1: 2, // 2
      2: 1, // 3
    },
    interactive: {
      0: 1, // 1
      1: 0, // 2
      2: 2, // 3
    },
  }
  // let selfcheckContainer = document.querySelectorAll('.selfcheck-container').length;

  // Сергей
  // Вешаю обработчик нажатия на все <div class="selfcheck-radio">
  document.querySelectorAll('.selfcheck-radio').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      radioButtonChange(e.currentTarget);
    })
  })

  // Сергей
  // Вешаю обработчик на кнопку 'Подтвердить'
  document.querySelectorAll('.selfcheck-confirm-button').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      confirmSelfcheckButtonClick(e.currentTarget, testsAnswerResults);
    })
  })

  loadTrenActions();
}

// Сергей
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

// Сергей
// Подтверждение ответа в тестах
function confirmSelfcheckButtonClick(elem, selfcheckTrueResults) {
  let selfcheckContainer = elem.closest('.selfcheck-container');
  let selfcheckcontainerIndex = Array.from(selfcheckContainer.closest('.selfcheck-container-main').querySelectorAll('.selfcheck-container')).indexOf(selfcheckContainer);
  let radioContainer = selfcheckContainer.querySelector('.selfcheck-radio-container');
  let radioButtSelectIndex = Array.from(radioContainer.querySelectorAll('.radio-elem')).indexOf(radioContainer.querySelector('.active-radio'));
  // console.log(selfcheckcontainerIndex);
  if (radioButtSelectIndex == selfcheckTrueResults.selfcheck[selfcheckcontainerIndex]) {
    radioContainer.querySelector('.active-radio').classList.toggle('correct-answer', true);
    selfcheckContainer.classList.toggle('block-selfcheck-container', true);
  } else {
    radioContainer.querySelector('.active-radio').classList.toggle('wrong-answer', true);
    selfcheckContainer.classList.toggle('block-selfcheck-container', true);
  }
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