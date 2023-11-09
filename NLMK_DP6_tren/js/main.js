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
        document.querySelector('.start-container').style.visibility = 'visible';
        animMoveCamera(devHelper.model3DVals.cameraPositions[0], 0.1);
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
        prepareTren(e.currentTarget.querySelector('span').innerText === 'Обучение' ? 'learn' : 'test', document.querySelector('.drop-item-active').querySelector('span').innerText, Array.from(document.querySelectorAll('.drop-item')).indexOf(document.querySelector('.drop-item-active')));
        document.querySelector('.drop-item-active').dispatchEvent(new Event('click'));
      }
    });
  })

  document.querySelectorAll('.drop-title').forEach((Element) => {
    Element.querySelector('img').classList.toggle('arrow-text-active', true);
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
    // 'Оборудование пылеуловителя',
    // 'Ответ 2',
    ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 5'],
    {
      0: ['1. ФААФАФАФАФ', 'ответ 1'],
      1: ['2. ФААФАФАФАФ', 'Длинный ответ номер 2'],
      2: ['3. ФААФАФАФАФ', 'ответ 3'],
    },
    {
      0: ['1 ФААФАФАФАФ', 'ответ 1'],
      1: ['2 ФААФАФАФАФ', 'Длинный ответ номер 2'],
      2: ['3 ФААФАФАФАФ', 'ответ 3'],
    },
    {
      0: ['1 ФААФАФАФАФ', 'Длинный ответ номер 1'],
      1: ['2 ФААФАФАФАФ', 'Длинный ответ номер 2'],
      2: ['3 ФААФАФАФАФ', 'ответ 3'],
    },
  ];


  // Вешаю обработчик нажатия на все <div class="selfcheck-radio">
  document.querySelectorAll('.radio-elem').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      radioButtonChange(e.currentTarget.querySelector('.selfcheck-radio'));
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
    randomAnswer(Element);
  })

  // Заполняю массив контейнерами вопросов
  document.querySelectorAll('.selfcheck-container').forEach((Element) => {
    devHelper.testVals.containerArray.push(Element);
  });

  // При переходе на вкладку тесты, появляется случайный вопрос
  document.querySelectorAll('.nav-icon')[document.querySelectorAll('.nav-icon').length - 1].addEventListener('mouseup', (e) => {
    if (!e.currentTarget.classList.contains('test-opened')) {
      glavTestFun(e.currentTarget.classList[0], e.currentTarget);
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
    glavTestFun(e.currentTarget.classList[0], e.currentTarget);
  })

  document.querySelector('.section').addEventListener('transitionend', (e) => {
    if (e.propertyName === 'width')
      document.querySelector('.text-container').style.transition = document.querySelector('.section').style.width === '68vw' ? 'margin-top 0.3s ease' : 'none';
  });


  // Вешаю евенты на контейнеры перетаскивания текста
  document.querySelectorAll('.drag-drop-elem').forEach((Element) => {
    setDragEvents(Element);
  });

  // Наведение на кнопку 'Помощь'
  document.querySelector('.helper-answer').addEventListener('mouseover', (e) => {
    showhelperTooltip(e.currentTarget, e.currentTarget.getBoundingClientRect());
  });
  document.querySelector('.helper-answer').addEventListener('mouseout', (e) => {
    document.querySelector('.helper-tooltip').classList.toggle('visible-tiiltip', false);
  });


  loadTrenActions();
}

// Показать текст при наведении на 'Помощь'
function showhelperTooltip(elem, elemRect) {
  const helperTooltip = document.querySelector('.helper-tooltip');
  if (document.querySelector('.selfcheck-visible').classList.contains('container-dragDrop')) {
    helperTooltip.querySelector('span').textContent = devHelper.testVals.dragDropHelperText;
  } else {
    helperTooltip.querySelector('span').textContent = devHelper.testVals.radioSelfcheckHelperText;
  }
  helperTooltip.classList.toggle('visible-tiiltip', true);
  helperTooltip.style.left = elem.offsetLeft + elem.getBoundingClientRect().width - helperTooltip.getBoundingClientRect().width + 'px';
  helperTooltip.style.top = elem.offsetTop - helperTooltip.getBoundingClientRect().height - 10 + 'px';
}

// Работа с ивентами перетаскивания
function setDragEvents(elem) {
  // dragstart
  elem.addEventListener('dragstart', (event) => {
    devHelper.testVals.dragElement = event.currentTarget;
    devHelper.testVals.dragElementText = event.currentTarget.querySelector('span').textContent;
    devHelper.testVals.dragElement.classList.toggle('current-dragStart-elem', true);
    event.dataTransfer.setData('text/plain', devHelper.testVals.dragElementText);
  });

  // dragover
  elem.closest('.selfcheck-radio-dragDrop').addEventListener('dragover', (event) => {
    if (devHelper.testVals.dragoverElement !== event.currentTarget.querySelector('.drag-drop-elem')) {
      devHelper.testVals.dragoverElement = event.currentTarget.querySelector('.drag-drop-elem');
      devHelper.testVals.dragoverElementText = event.currentTarget.querySelector('.drag-drop-elem').querySelector('span').textContent;
    }
    if (!event.currentTarget.classList.contains('current-drag-elem')) {
      event.currentTarget.querySelector('.drag-drop-elem').classList.toggle('current-drag-elem', true);
    }
    event.preventDefault();
  });

  // dragleave
  elem.closest('.selfcheck-radio-dragDrop').addEventListener('dragleave', (event) => {
    if (event.currentTarget.querySelector('.drag-drop-elem').classList.contains('current-drag-elem')) {
      devHelper.testVals.dragElement.querySelector('span').textContent = devHelper.testVals.dragElementText;
      event.currentTarget.querySelector('.drag-drop-elem').classList.toggle('current-drag-elem', false);
      devHelper.testVals.dragElement.classList.toggle('current-drag-elem', true);
    }
  });

  // dragend
  elem.addEventListener('dragend', (event) => {
    event.currentTarget.classList.toggle('current-dragStart-elem', false);
    devHelper.testVals.dragoverElement.classList.toggle('current-drag-elem', false);
  })

  // drop
  elem.closest('.selfcheck-radio-dragDrop').addEventListener('drop', (event) => {
    event.preventDefault();
    if (devHelper.testVals.dragoverElementText != devHelper.testVals.dragElement.querySelector('span').textContent) {
      devHelper.testVals.dragElement.querySelector('span').textContent = devHelper.testVals.dragoverElementText;
    }
    devHelper.testVals.dragElement.classList.toggle('current-drag-elem', false);
    const data = event.dataTransfer.getData('text/plain');
    event.currentTarget.querySelectorAll('span')[1].textContent = data;
  });

}



window.addEventListener('load', function () {
  document.querySelectorAll('.dropdown-container .dropdown-content').forEach((Element) => {
    // Element.style.marginTop = `-${Element.getBoundingClientRect().height + 50}px`;
    Element.style.marginTop = `1vh`;
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
    console.log(textConNew.parentElement.getBoundingClientRect().height);
    document.querySelector('.info-container').children[0].style.marginTop = `-${(newTextIndex - 0) * textConNew.getBoundingClientRect().height}px`;
    if (document.querySelector('.info-container').querySelector('.drop-item-active')) {
      document.querySelector('.info-container').querySelector('.drop-item-active').classList.toggle('drop-item-active', false);
      document.querySelector('.scenarion-buttons-container').style.visibility = 'hidden';
    }
  } else {
    document.querySelector('.section').style.width = '';
    document.querySelector('.info-container').style.left = '-52vw';
    e.currentTarget.classList.toggle('nav-icon-active', false);
    Array.from(e.currentTarget.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
      if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#7c7c7c');
    })
  }
}

// Функция работы с radioButton
function radioButtonChange(elem) {
  let confirmButton = elem.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button');
  let radioContainer = elem.closest('.selfcheck-radio-container');
  if (!elem.parentElement.classList.contains('active-radio')) {
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
  let selfcheckContainer = elem.closest('.tests-container-elem').querySelector('.selfcheck-visible');

  let selfcheckcontainerIndex;
  let radioContainer;
  let radioButtSelectIndex;
  let textSelectRadioButt;

  // Если DragDrop элемент
  if (selfcheckContainer.classList.contains('container-dragDrop') === true) {
    selfcheckcontainerIndex = Array.from(selfcheckContainer.closest('.selfcheck-container-main').querySelectorAll('.selfcheck-container')).indexOf(selfcheckContainer);
    let dragDropElem = [];
    selfcheckContainer.querySelectorAll('.selfcheck-radio-dragDrop').forEach((Element) => {
      dragDropElem.push(Element.querySelectorAll('span'));
    })
    const answers = selfcheckTrueResults[selfcheckcontainerIndex];

    if (elem.querySelector('span').textContent === 'Подтвердить') {
      for (let i = 0; i < dragDropElem.length; i++) {
        const elementDrag = dragDropElem[i];
        for (let ii = 0; ii < Object.keys(answers).length; ii++) {
          const elementAnswers = answers[ii];
          if (elementDrag[0].textContent === elementAnswers[0]) {
            if (elementDrag[1].textContent === elementAnswers[1]) {
              elementDrag[0].parentElement.classList.toggle('correct-dragDrop', true);
            } else {
              elementDrag[0].parentElement.classList.toggle('wrong-dragDrop', true);
            }
          }
        }
      }
      selfcheckContainer.classList.toggle('block-selfcheck-container', true);
      if (selfcheckContainer.querySelector('.wrong-dragDrop') != null) {
        elem.querySelector('span').textContent = 'Повторить';
      } else {
        elem.classList.toggle('disabled-button', true);
        selfcheckContainer.classList.toggle('correct-dragDrop-container', true);
      }

    } else if (elem.querySelector('span').textContent === 'Повторить') {
      selfcheckContainer.querySelectorAll('.correct-dragDrop').forEach((Element) => {
        Element.classList.toggle('correct-dragDrop', false);
      });
      selfcheckContainer.querySelectorAll('.wrong-dragDrop').forEach((Element) => {
        Element.classList.toggle('wrong-dragDrop', false);
      })
      selfcheckContainer.classList.toggle('block-selfcheck-container', false);
      elem.querySelector('span').textContent = 'Подтвердить';
    }


    // Если не DragDrop элемент
  } else if (selfcheckContainer.classList.contains('container-dragDrop') === false) {
    selfcheckcontainerIndex = Array.from(selfcheckContainer.closest('.selfcheck-container-main').querySelectorAll('.selfcheck-container')).indexOf(selfcheckContainer);
    radioContainer = selfcheckContainer.querySelector('.selfcheck-radio-container');
    radioButtSelectIndex = Array.from(radioContainer.querySelectorAll('.radio-elem')).indexOf(radioContainer.querySelector('.active-radio'));
    if (elem.querySelector('span').textContent === 'Подтвердить') {
      radioContainer.querySelectorAll('.active-radio').forEach((Element) => {
        for (let i = 0; i < selfcheckTrueResults[selfcheckcontainerIndex].length; i++) {
          const element = selfcheckTrueResults[selfcheckcontainerIndex][i];
          if (Element.querySelector('span').textContent === element) {
            Element.classList.toggle('correct-answer', true);
            Element.classList.toggle('active-radio', false);
          }
        }
      });
      radioContainer.querySelectorAll('.active-radio').forEach((Element) => {
        Element.classList.toggle('wrong-answer', true);
        Element.classList.toggle('active-radio', false);
      });

      if (selfcheckTrueResults[selfcheckcontainerIndex].length != radioContainer.querySelectorAll('.correct-answer').length || radioContainer.querySelector('.wrong-answer') != null) {
        selfcheckTrueResults[selfcheckcontainerIndex].forEach((Element) => {
          selfcheckContainer.querySelectorAll('.radio-elem').forEach((elem) => {
            if (elem.querySelector('span').textContent === Element) {
              if (!elem.classList.contains('correct-answer') && !elem.classList.contains('wrong-answer')) {
                elem.classList.toggle('wrong-answer', true);
              }
            }
          });
        });
        selfcheckContainer.classList.toggle('block-selfcheck-container', true);
        elem.querySelector('span').textContent = 'Повторить';
      } else {
        selfcheckContainer.classList.toggle('block-selfcheck-container', true);
        elem.classList.toggle('disabled-button', true);
      }
    } else if (elem.querySelector('span').textContent === 'Повторить') {
      radioContainer.querySelectorAll('.correct-answer').forEach((Element) => {
        Element.classList.toggle('correct-answer', false);
      });
      radioContainer.querySelectorAll('.wrong-answer').forEach((Element) => {
        Element.classList.toggle('wrong-answer', false);
      });
      selfcheckContainer.classList.toggle('block-selfcheck-container', false);
      elem.querySelector('span').textContent = 'Подтвердить';
      elem.classList.toggle('disabled-button', true);
    }
  }

}

// Функция рандома ответов в вопросе
function randomAnswer(parent) {
  let radioElements = parent.querySelectorAll('.radio-elem');
  let dragDropElements = parent.querySelectorAll('.selfcheck-radio-dragDrop');
  let max = radioElements.length;
  let min = 0;

  if (radioElements.length > 0) {
    radioElements.forEach(() => {
      parent.insertBefore(radioElements[Math.floor(Math.random() * (max - min) + min)], radioElements[Math.floor(Math.random() * (max - min) + min)]);
    })
  }

  if (dragDropElements.length > 0) {
    let leftTexts = [];
    let rightTexts = [];
    dragDropElements.forEach((Element) => {
      let elemSpan = Element.querySelectorAll('span');
      leftTexts.push(elemSpan[0].textContent);
      rightTexts.push(elemSpan[1].textContent);
    });
    dragDropElements.forEach((Element) => {
      let elemSpan = Element.querySelectorAll('span');
      let leftTextRandom = leftTexts[Math.floor(Math.random() * (leftTexts.length - 0) + 0)];
      let leftTextRandomIndex = leftTexts.indexOf(leftTextRandom);
      let rightTextRandom = rightTexts[Math.floor(Math.random() * (rightTexts.length - 0) + 0)];
      let rightTextRandomIndex = rightTexts.indexOf(rightTextRandom);
      leftTexts.splice(leftTextRandomIndex, 1);
      rightTexts.splice(rightTextRandomIndex, 1);
      elemSpan[0].textContent = leftTextRandom;
      elemSpan[1].textContent = rightTextRandom;
    });
  }

}

// Перезаполнение массива контейнерами вопросов
function reviveArray(min) {
  document.querySelectorAll('.selfcheck-container').forEach((Element) => {
    devHelper.testVals.containerArray.push(Element);
    Element.classList.toggle('block-selfcheck-container', false);
    if (Element.classList.contains('container-dragDrop')) {
      Element.classList.toggle('correct-dragDrop-container', false);
      Element.querySelectorAll('.correct-dragDrop').forEach((elem) => {
        elem.classList.toggle('correct-dragDrop', false);
      });
    } else {
      Element.querySelectorAll('.correct-answer').forEach((elem) => {
        elem.classList.toggle('correct-answer', false);
      });
    }

    Element.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', true);
    Element.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button').classList.toggle('active-button', false);
  });
  randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
  randomContainer.classList.toggle('selfcheck-invisible', false);
  randomContainer.classList.toggle('selfcheck-visible', true);
  devHelper.testVals.previousContainer = randomContainer;
}

function navIconClick(randomContainer, min) {
  randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];

  randomContainer.classList.toggle('selfcheck-invisible', false);
  randomContainer.classList.toggle('selfcheck-visible', true);
  if (randomContainer.classList.contains('container-dragDrop') == true) {
    document.querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', false);
    document.querySelector('.selfcheck-confirm-button').classList.toggle('active-button', true);
  }
  devHelper.testVals.previousContainer = randomContainer;
}

function randomAnswerButtonClick(randomContainer, min, previousContainerIndex) {
  const prevContClasslist = devHelper.testVals.previousContainer;
  devHelper.testVals.previousContainer.querySelectorAll('.radio-elem').forEach((Element) => {
    if (!Element.classList.contains('active-radio')) {
      Element.classList.toggle('radio-elem-disabled', false);
    }
  });
  if (document.querySelectorAll('.active-radio').length != 0) {
    document.querySelectorAll('.active-radio').forEach((Element) => {
      Element.classList.toggle('active-radio', false);
    });
  }
  if (devHelper.testVals.previousContainer != undefined) {
    devHelper.testVals.previousContainer.classList.toggle('selfcheck-invisible', true);
    devHelper.testVals.previousContainer.classList.toggle('selfcheck-visible', false);
  }

  // Если в dragDrop элементе ответы верны
  if (prevContClasslist.classList.contains('container-dragDrop') && prevContClasslist.classList.contains('correct-dragDrop-container')) {
    devHelper.testVals.previousContainer.classList.toggle('selfcheck-invisible', true);
    devHelper.testVals.previousContainer.classList.toggle('selfcheck-visible', false);
    previousContainerIndex = devHelper.testVals.containerArray.indexOf(devHelper.testVals.previousContainer);
    devHelper.testVals.containerArray.splice(previousContainerIndex, 1);
    if (devHelper.testVals.containerArray.length === 0) {
      reviveArray(min);
      return;
    }
    randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
    // если следующий контейнер равен предыдущему, то заменить
    if (devHelper.testVals.previousContainer == randomContainer) {
      if (devHelper.testVals.containerArray.length > 1) {
        while (devHelper.testVals.previousContainer == randomContainer) {
          randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
        }
      }
    }
    randomContainer.classList.toggle('selfcheck-invisible', false);
    randomContainer.classList.toggle('selfcheck-visible', true);
    devHelper.testVals.previousContainer = randomContainer;
    if (devHelper.testVals.containerArray.length === 0) {
      devHelper.testVals.previousContainer = undefined;
    }
    return;


    // Если в dragDrop элементе ответы неверны
  } else if (prevContClasslist.classList.contains('container-dragDrop') && !prevContClasslist.classList.contains('correct-dragDrop-container')) {
    randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
    // если следующий контейнер равен предыдущему, то заменить
    if (devHelper.testVals.previousContainer == randomContainer) {
      if (devHelper.testVals.containerArray.length > 1) {
        while (devHelper.testVals.previousContainer == randomContainer) {
          randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
        }
      }
    }
    randomContainer.classList.toggle('selfcheck-invisible', false);
    randomContainer.classList.toggle('selfcheck-invisible', true);
    devHelper.testVals.previousContainer.querySelectorAll('.selfcheck-radio-dragDrop').forEach((Element) => {
      Element.classList.toggle('correct-dragDrop', false);
      Element.classList.toggle('wrong-dragDrop', false);
    });
    devHelper.testVals.previousContainer.classList.toggle('block-selfcheck-container', false);
    devHelper.testVals.previousContainer.classList.toggle('selfcheck-invisible', true);
    devHelper.testVals.previousContainer.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', true);
    devHelper.testVals.previousContainer.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button').querySelector('span').textContent = 'Подтвердить';
  }

  // Если radio ответы правильные
  if (devHelper.testVals.previousContainer.querySelector('.selfcheck-radio-container').querySelector('.wrong-answer') === null && devHelper.testVals.previousContainer.querySelector('.selfcheck-radio-container').querySelectorAll('.correct-answer').length === devHelper.testVals.answersArray[devHelper.testVals.containerArray.indexOf(devHelper.testVals.previousContainer)].length) {
    devHelper.testVals.previousContainer.classList.toggle('selfcheck-invisible', true);
    devHelper.testVals.previousContainer.classList.toggle('selfcheck-visible', false);
    previousContainerIndex = devHelper.testVals.containerArray.indexOf(devHelper.testVals.previousContainer);
    devHelper.testVals.containerArray.splice(previousContainerIndex, 1);
    if (devHelper.testVals.containerArray.length === 0) {
      reviveArray(min);
      return;
    }
    randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
    // если следующий контейнер равен предыдущему, то заменить
    if (devHelper.testVals.previousContainer == randomContainer) {
      if (devHelper.testVals.containerArray.length > 1) {
        while (devHelper.testVals.previousContainer == randomContainer) {
          randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
        }
      }
    }
    randomContainer.classList.toggle('selfcheck-invisible', false);
    randomContainer.classList.toggle('selfcheck-visible', true);
    devHelper.testVals.previousContainer = randomContainer;
    if (devHelper.testVals.containerArray.length === 0) {
      devHelper.testVals.previousContainer = undefined;
    }
    return;


    // Если в radio ответы неправильные
  } else if (devHelper.testVals.previousContainer.querySelector('.selfcheck-radio-container').querySelector('.wrong-answer') != null) {
    randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
    // если следующий контейнер равен предыдущему, то заменить
    if (devHelper.testVals.previousContainer == randomContainer) {
      if (devHelper.testVals.containerArray.length > 1) {
        while (devHelper.testVals.previousContainer == randomContainer) {
          randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
        }
      }
    }
    randomContainer.classList.toggle('selfcheck-invisible', false);
    randomContainer.classList.toggle('selfcheck-visible', true);

    devHelper.testVals.previousContainer.querySelector('.selfcheck-radio-container').querySelectorAll('.wrong-answer').forEach((Element) => {
      Element.classList.toggle('wrong-answer', false);
    });
    devHelper.testVals.previousContainer.querySelector('.selfcheck-radio-container').querySelectorAll('.correct-answer').forEach((Element) => {
      Element.classList.toggle('correct-answer', false);
    });

    // devHelper.testVals.previousContainer.querySelector('.selfcheck-radio-container').querySelector('.wrong-answer').classList.toggle('wrong-answer', false);
    devHelper.testVals.previousContainer.classList.toggle('block-selfcheck-container', false);
    devHelper.testVals.previousContainer.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', true);
    devHelper.testVals.previousContainer.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button').querySelector('span').textContent = 'Подтвердить';

    devHelper.testVals.previousContainer = randomContainer;
    return;
  }

  randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
  // если следующий контейнер равен предыдущему, то заменить
  if (devHelper.testVals.previousContainer == randomContainer) {
    if (devHelper.testVals.containerArray.length > 1) {
      while (devHelper.testVals.previousContainer == randomContainer) {
        randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];
      }
    }
  }

  randomContainer.classList.toggle('selfcheck-invisible', false);
  randomContainer.classList.toggle('selfcheck-visible', true);
  devHelper.testVals.previousContainer = randomContainer;
  return;
}

function glavTestFun(pressedButtonName, pressedButton) {
  if (devHelper.testVals.previousContainer != undefined) {
    devHelper.testVals.previousContainer.classList.toggle('selfcheck-invisible', true);
    devHelper.testVals.previousContainer.classList.toggle('selfcheck-visible', false);
  }
  let min = 0;
  let randomContainer;
  let previousContainerIndex;

  if (pressedButtonName === 'nav-icon') {
    navIconClick(randomContainer, min);
  }
  if (pressedButtonName === 'random-answer-button') {
    randomAnswerButtonClick(randomContainer, min, previousContainerIndex);
    if (pressedButton.closest('.tests-container-elem').querySelector('.selfcheck-visible').classList.contains('container-dragDrop') == true) {
      document.querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', false);
      document.querySelector('.selfcheck-confirm-button').classList.toggle('active-button', true);
    } else {
      document.querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', true);
      document.querySelector('.selfcheck-confirm-button').classList.toggle('active-button', false);
    }
  }
}

function findLast(array, predicate) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i])) {
      return array[i];
    }
  }
  return undefined;
}