/*                 TODO
----------------------------------------------------
----------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", domLoaded);
function domLoaded() {
  /* Изменение времени таймера в файле txt
  fetch('ss.txt')
    .then(response => response.text())
    .then(data => {
      const modifiedData = data.replace(/startTime: timeDiff \+ (\d+)/g, (match, startTime) => {
        const modifiedStartTime = parseInt(startTime) + 2;
        return `startTime: timeDiff + ${modifiedStartTime}`;
      });
      console.log(modifiedData);
    })
    .catch(error => {
      console.error(error);
    });
  */
  let sectionCopy = document.querySelector('.section').cloneNode(true);
  sectionCopy.classList.toggle('section-copy', true);
  sectionCopy.querySelector('.nav-bar').style.width = '6vw';
  sectionCopy.querySelector('.nav-bar').children[1].remove();
  sectionCopy.querySelector('.nav-bar').children[sectionCopy.querySelector('.nav-bar').children.length - 1].remove();
  sectionCopy.querySelectorAll('.text-container')[0].remove();
  sectionCopy.querySelectorAll('.text-container')[sectionCopy.querySelectorAll('.text-container').length - 1].remove();
  sectionCopy.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'opacity')
      e.currentTarget.style.pointerEvents = e.currentTarget.style.opacity === '1' ? 'all' : '';
  })
  document.querySelector('.box-tren-ui').after(sectionCopy);
  document.querySelector('.tren-container').addEventListener('transitionend', (e) => {
    if (e.propertyName === 'opacity') {
      const isHidden = e.currentTarget.style.opacity === '0';
      e.currentTarget.style.visibility = isHidden ? 'hidden' : 'visible';
      e.currentTarget.style.pointerEvents = isHidden ? '' : 'all';
      if (isHidden) {
        document.querySelector('.header').style.top = '0';
        document.querySelectorAll('.section')[0].style.left = '0';
        document.querySelector('.start-container').style.visibility = 'visible';
        animMoveCamera(devHelper.model3DVals.cameraPositions[0], 0.1);
      }
    }
  })

  function removeStartScreen() {
    document.querySelector('.header').style.top = ConvertPxToVh(-document.querySelector('.header').getBoundingClientRect().bottom - 10) + 'vh';
    document.querySelector('.section').style.left = ConvertPxToVw(-document.querySelector('.section').getBoundingClientRect().width * 1.1) + 'vw';
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
      stopChangeFon();
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

  // Создание тестов
  devHelper.testVals.arrayForCreateTests.forEach((Element, Index) => {
    createTests(Element, Index);
  });

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
  document.querySelector('.section').querySelectorAll('.nav-icon')[document.querySelector('.section').querySelectorAll('.nav-icon').length - 1].addEventListener('mouseup', (e) => {
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

  Array.from(document.querySelectorAll('.section')).forEach((Element) => {
    Element.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'width')
        Element.querySelector('.text-container').style.transition = Element.style.width === '68vw' ? 'margin-top 0.3s ease' : 'none';
    });
  })
  // Вешаю евенты на контейнеры перетаскивания текста
  document.querySelectorAll('.drag-drop-elem').forEach((Element) => {
    setDragEvents(Element);
  });
  // Вешаю евенты на контейнеры где нужно выставить ответы последовательно
  document.querySelectorAll('.consecutive-elem').forEach((Element) => {
    setDragEvents(Element);
  });
  // рандомлю ответы контейнерах где нужно выставить ответы последовательно
  document.querySelectorAll('.container-consecutive').forEach((Element) => {
    randomAnswer(Element);
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
  } else if (document.querySelector('.selfcheck-visible').classList.contains('container-dropDownMenu')) {
    helperTooltip.querySelector('span').textContent = devHelper.testVals.dropDownHelperText;
  } else if (document.querySelector('.selfcheck-visible').classList.contains('container-consecutive')) {
    helperTooltip.querySelector('span').textContent = devHelper.testVals.consecutiveHelperText;
  } else {
    const selfcheckContainers = Array.from(document.querySelectorAll('.selfcheck-container'));
    const selfcheckcontainerIndex = selfcheckContainers.findIndex(container => container.classList.contains('selfcheck-visible'));
    const answerArray = devHelper.testVals.answersArray[selfcheckcontainerIndex];
    const helperText = (answerArray.length > 1) ? devHelper.testVals.radioSelfcheckHelperTextMany : devHelper.testVals.radioSelfcheckHelperText;
    helperTooltip.querySelector('span').textContent = helperText;
  }
  helperTooltip.classList.toggle('visible-tiiltip', true);
  helperTooltip.style.left = elem.offsetLeft + elem.getBoundingClientRect().width - helperTooltip.getBoundingClientRect().width + 'px';
  helperTooltip.style.top = elem.offsetTop - helperTooltip.getBoundingClientRect().height - 10 + 'px';
}
// Работа с ивентами перетаскивания
function setDragEvents(elem) {
  const elemParent = elem.closest('.selfcheck-radio-dragDrop') || elem.closest('.selfcheck-consecutive');
  // dragstart
  elem.addEventListener('dragstart', (event) => {
    devHelper.testVals.dragElement = event.currentTarget;
    devHelper.testVals.dragElementText = event.currentTarget.querySelector('span').textContent;
    devHelper.testVals.dragElement.classList.toggle('current-dragStart-elem', true);
    event.dataTransfer.setData('text/plain', devHelper.testVals.dragElementText);
  });

  // dragover
  elem.closest(`.${elemParent.classList[0]}`).addEventListener('dragover', (event) => {
    if (devHelper.testVals.dragoverElement !== event.currentTarget.querySelector(`.${elem.classList[0]}`)) {
      devHelper.testVals.dragoverElement = event.currentTarget.querySelector(`.${elem.classList[0]}`);
      devHelper.testVals.dragoverElementText = event.currentTarget.querySelector(`.${elem.classList[0]}`).querySelector('span').textContent;
    }
    if (!event.currentTarget.classList.contains('current-drag-elem')) {
      event.currentTarget.querySelector(`.${elem.classList[0]}`).classList.toggle('current-drag-elem', true);
    }
    event.preventDefault();
  });

  // dragleave
  elem.closest(`.${elemParent.classList[0]}`).addEventListener('dragleave', (event) => {
    if (event.currentTarget.querySelector(`.${elem.classList[0]}`).classList.contains('current-drag-elem')) {
      devHelper.testVals.dragElement.querySelector('span').textContent = devHelper.testVals.dragElementText;
      event.currentTarget.querySelector(`.${elem.classList[0]}`).classList.toggle('current-drag-elem', false);
      devHelper.testVals.dragElement.classList.toggle('current-drag-elem', true);
    }
  });

  // dragend
  elem.addEventListener('dragend', (event) => {
    event.currentTarget.classList.toggle('current-dragStart-elem', false);
    devHelper.testVals.dragoverElement.classList.toggle('current-drag-elem', false);
  })

  // drop
  elem.closest(`.${elemParent.classList[0]}`).addEventListener('drop', (event) => {
    event.preventDefault();
    if (devHelper.testVals.dragoverElementText != devHelper.testVals.dragElement.querySelector('span').textContent) {
      devHelper.testVals.dragElement.querySelector('span').textContent = devHelper.testVals.dragoverElementText;
    }
    devHelper.testVals.dragElement.classList.toggle('current-drag-elem', false);
    const data = event.dataTransfer.getData('text/plain');
    event.currentTarget.querySelectorAll('span')[event.currentTarget.querySelectorAll('span').length - 1].textContent = data;
  });

}

function startChangeFon() {
  if (devHelper.trenVals.scenario !== undefined) devHelper.trenVals.scenario = undefined;
  devHelper.dev.intervalFon = setInterval(() => {
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
}

function stopChangeFon() {
  clearInterval(devHelper.dev.intervalFon);
}

window.addEventListener('load', function () {
  document.querySelectorAll('.dropdown-container .dropdown-content').forEach((Element) => {
    Element.style.marginTop = `1vh`;
    Element.classList.remove('first-drop');
  })

  document.querySelectorAll('.nav-icon').forEach((Element) => {
    Element.addEventListener('click', guideBtnsClick);
  });
  startChangeFon();
  if (devHelper.dev.enable === true) console.log(devHelper);
});


function guideBtnsClick(e) {
  const section = e.currentTarget.closest('.section');
  if (!e.currentTarget.classList.contains('nav-icon-active')) {
    section.querySelector('.info-container').style.left = '';
    section.style.width = '68vw';
    section.querySelectorAll('.nav-icon').forEach((Element2) => {
      Element2.classList.toggle('nav-icon-active', false);
      Array.from(Element2.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
        if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#7c7c7c');
      })
    })
    e.currentTarget.classList.toggle('nav-icon-active', true);
    Array.from(e.currentTarget.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
      if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#f4f4f4');
    })

    if (section.querySelector('.text-container-active')) {
      section.querySelector('.text-container-active').classList.toggle('text-container-active', false);
    }
    let newTextIndex = Array.from(e.currentTarget.parentElement.children).indexOf(e.currentTarget) - 1;
    let textConNew = section.querySelector('.info-container').children[newTextIndex];
    textConNew.classList.toggle('text-container-active', true);
    section.querySelector('.info-container').children[0].style.marginTop = `-${(newTextIndex - 0) * textConNew.getBoundingClientRect().height}px`;
    if (section.querySelector('.info-container').querySelector('.drop-item-active')) {
      section.querySelector('.info-container').querySelector('.drop-item-active').classList.toggle('drop-item-active', false);
      section.querySelector('.scenarion-buttons-container').style.visibility = 'hidden';
    }
  } else {
    section.style.width = section.closest('.tren-container') ? '6vw' : '';
    section.querySelector('.info-container').style.left = '-52vw';
    e.currentTarget.classList.toggle('nav-icon-active', false);
    Array.from(e.currentTarget.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
      if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#7c7c7c');
    })
  }
}

// Функция работы с radioButton
function radioButtonChange(elem) {
  let confirmButton = elem.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button');
  let selfcheckContainer = elem.closest('.tests-container-elem').querySelector('.selfcheck-visible');
  let selfcheckcontainerIndex = Array.from(selfcheckContainer.closest('.selfcheck-container-main').querySelectorAll('.selfcheck-container')).indexOf(selfcheckContainer);
  const answerArray = devHelper.testVals.answersArray[selfcheckcontainerIndex];
  const activeRadio = selfcheckContainer.querySelector('.active-radio');
  const isChecked = elem.parentElement.classList.contains('active-radio');
  const hasSingleAnswer = answerArray.length === 1;

  // elem.parentElement.classList.toggle('active-radio', hasSingleAnswer || !isChecked);
  elem.parentElement.classList.toggle('active-radio', !isChecked);
  const containerHasActiveRadio = selfcheckContainer.querySelector('.active-radio') !== null ? true : false;
  confirmButton.classList.toggle('disabled-button', !containerHasActiveRadio);
  confirmButton.classList.toggle('active-button', containerHasActiveRadio);

  if (hasSingleAnswer && activeRadio) {
    activeRadio.classList.remove('active-radio');
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
          if (elementAnswers[0] === elementDrag[0].textContent) {
            for (let a = 1; a < elementAnswers.length; a++) {
              if (elementAnswers[a] === elementDrag[1].textContent) {
                elementDrag[0].parentElement.classList.toggle('correct-dragDrop', true);
              }
              if (a === elementAnswers.length - 1 && !elementDrag[0].parentElement.classList.contains('correct-dragDrop')) {
                elementDrag[0].parentElement.classList.toggle('wrong-dragDrop', true);
              }
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


    // Если DropDownMenu элемент
  } else if (selfcheckContainer.classList.contains('container-dropDownMenu')) {
    selfcheckcontainerIndex = Array.from(selfcheckContainer.closest('.selfcheck-container-main').querySelectorAll('.selfcheck-container')).indexOf(selfcheckContainer);
    const answers = selfcheckTrueResults[selfcheckcontainerIndex];
    const containerSelect = selfcheckContainer.querySelectorAll('.dropDown-select');

    if (elem.querySelector('span').textContent === 'Подтвердить') {
      containerSelect.forEach((Element, Index) => {
        if (Element.value === answers[Index]) {
          Element.classList.toggle('dropDown-currect', true);
        } else {
          Element.classList.toggle('dropDown-wrong', true);
        }
      });
      if (selfcheckContainer.querySelector('.dropDown-wrong') != null) {
        elem.querySelector('span').textContent = 'Повторить';
        selfcheckContainer.classList.toggle('block-selfcheck-container', true);
      } else {
        elem.classList.toggle('disabled-button', true);
        selfcheckContainer.classList.toggle('correct-dropDownMenu-container', true);
        selfcheckContainer.classList.toggle('block-selfcheck-container', true);
      }
    } else if (elem.querySelector('span').textContent === 'Повторить') {
      selfcheckContainer.querySelectorAll('.dropDown-currect').forEach((Element) => {
        Element.classList.toggle('dropDown-currect', false);
      });
      selfcheckContainer.querySelectorAll('.dropDown-wrong').forEach((Element) => {
        Element.classList.toggle('dropDown-wrong', false);
      })
      selfcheckContainer.classList.toggle('block-selfcheck-container', false);
      elem.querySelector('span').textContent = 'Подтвердить';
    }

    // Если consecutive элемент
  } else if (selfcheckContainer.classList.contains('container-consecutive')) {
    selfcheckcontainerIndex = Array.from(selfcheckContainer.closest('.selfcheck-container-main').querySelectorAll('.selfcheck-container')).indexOf(selfcheckContainer);
    const answers = selfcheckTrueResults[selfcheckcontainerIndex];
    const containerConsecutiveElem = selfcheckContainer.querySelectorAll('.consecutive-elem');

    if (elem.querySelector('span').textContent === 'Подтвердить') {
      containerConsecutiveElem.forEach((Element, Index) => {
        if (Element.querySelector('span').textContent === answers[Index]) {
          Element.classList.toggle('consecutive-currect', true);
        } else {
          Element.classList.toggle('consecutive-wrong', true);
        }
      });
      if (selfcheckContainer.querySelector('.consecutive-wrong') != null) {
        elem.querySelector('span').textContent = 'Повторить';
        selfcheckContainer.classList.toggle('block-selfcheck-container', true);
      } else {
        elem.classList.toggle('disabled-button', true);
        selfcheckContainer.classList.toggle('correct-consecutive-container', true);
        selfcheckContainer.classList.toggle('block-selfcheck-container', true);
      }
    } else if (elem.querySelector('span').textContent === 'Повторить') {
      selfcheckContainer.querySelectorAll('.consecutive-currect').forEach((Element) => {
        Element.classList.toggle('consecutive-currect', false);
      });
      selfcheckContainer.querySelectorAll('.consecutive-wrong').forEach((Element) => {
        Element.classList.toggle('consecutive-wrong', false);
      })
      selfcheckContainer.classList.toggle('block-selfcheck-container', false);
      elem.querySelector('span').textContent = 'Подтвердить';
    }


    // Если radioButton элемент
  } else if (selfcheckContainer.classList.contains('container-radioButton')) {
    selfcheckcontainerIndex = Array.from(selfcheckContainer.closest('.selfcheck-container-main').querySelectorAll('.selfcheck-container')).indexOf(selfcheckContainer);
    radioContainer = selfcheckContainer.querySelector('.selfcheck-radio-container');
    radioButtSelectIndex = Array.from(radioContainer.querySelectorAll('.radio-elem')).indexOf(radioContainer.querySelector('.active-radio'));
    if (elem.querySelector('span').textContent === 'Подтвердить') {
      let counts = {
        error: 0,
        correct: 0,
      };
      // ЗАКРАСИТЬ ВЫБРАНЫЕ ОТВЕТЫ
      radioContainer.querySelectorAll('.active-radio').forEach((Element) => {
        let result = selfcheckTrueResults[selfcheckcontainerIndex].find((element) => element == Element.querySelector('span').textContent);
        if (result == undefined) {
          Element.classList.add('wrong-answer');
          counts.error++;
        } else {
          Element.classList.add('correct-answer');
          counts.correct++;
        }
      });
      if (radioContainer.querySelector('.wrong-answer'))
        radioContainer.querySelectorAll('.correct-answer').forEach(element => element.classList.replace('correct-answer', 'wrong-answer'));
      if (selfcheckTrueResults[selfcheckcontainerIndex].length != radioContainer.querySelectorAll('.correct-answer').length || radioContainer.querySelector('.wrong-answer') != null) {
        selfcheckContainer.classList.toggle('block-selfcheck-container', true);
        // elem.classList.toggle('active-button', true);
        elem.querySelector('span').textContent = 'Повторить';
      } else {
        selfcheckContainer.classList.toggle('correct-radioButton-container', true);
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
      radioContainer.querySelectorAll('.active-radio').forEach((Element) => {
        Element.classList.toggle('active-radio', false);
      });

      selfcheckContainer.classList.toggle('block-selfcheck-container', false);
      elem.querySelector('span').textContent = 'Подтвердить';
      elem.classList.toggle('disabled-button', true);
    }
  }

}

// Функция рандома ответов в вопросе
function randomAnswer(parent) {
  const radioElements = parent.querySelectorAll('.radio-elem');
  const dragDropElements = parent.querySelectorAll('.selfcheck-radio-dragDrop');
  const dropDownElements = parent.querySelectorAll('.dropDown-select');
  const consecutiveElements = parent.querySelectorAll('.consecutive-elem');
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
  if (dropDownElements.length > 0) {
    dropDownElements.forEach((Element) => {
      Element.value = Element.options[Math.floor(Math.random() * (Element.options.length - 0) + 0)].value;
    })
  }
  if (consecutiveElements.length > 0) {
    consecutiveElements.forEach((Element) => {
      const firstElem = consecutiveElements[Math.floor(Math.random() * (consecutiveElements.length - 0) + 0)].querySelector('span');
      const secondElem = consecutiveElements[Math.floor(Math.random() * (consecutiveElements.length - 0) + 0)].querySelector('span');
      const tempText = firstElem.textContent;
      firstElem.textContent = secondElem.textContent;
      secondElem.textContent = tempText;
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
    } else if (Element.classList.contains('container-dropDownMenu')) {
      Element.classList.toggle('correct-dropDownMenu-container', false);
      Element.querySelectorAll('.dropDown-currect').forEach((elem) => {
        elem.classList.toggle('dropDown-currect', false);
      });
    } else if (Element.classList.contains('container-consecutive')) {
      Element.classList.toggle('correct-consecutive-container', false);
      Element.querySelectorAll('.consecutive-currect').forEach((elem) => {
        elem.classList.toggle('consecutive-currect', false);
      });

    } else if (Element.classList.contains('container-radioButton')) {
      Element.classList.toggle('correct-radioButton-container', false);
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

// Изменение текста плана действий в title
function titleInfo() {
  if (devHelper.testVals.previousContainer.querySelector('.radio-title-info').textContent !== '') return;
  const container = devHelper.testVals.previousContainer;
  const containerIndex = devHelper.testVals.containerArray.indexOf(container);
  const answerLength = devHelper.testVals.answersArray[containerIndex].length;

  if (container.classList.contains('container-dragDrop')) {
    container.querySelector('.radio-title-info').textContent = devHelper.testVals.dragDropHelperText;
  }
  if (container.classList.contains('container-dropDownMenu')) {
    container.querySelector('.radio-title-info').textContent = devHelper.testVals.dropDownHelperText;
  }
  if (container.classList.contains('container-consecutive')) {
    container.querySelector('.radio-title-info').textContent = devHelper.testVals.consecutiveHelperText;
  }
  if (container.classList.contains('container-radioButton')) {
    if (answerLength > 4) {
      container.querySelector('.radio-title-info').textContent = `Выберите ${answerLength} верных ответов и нажмите подтвердить.`;
      return;
    }
    if (answerLength > 1) {
      container.querySelector('.radio-title-info').textContent = `Выберите ${answerLength} верных ответа и нажмите подтвердить.`;
      return;
    } else {
      container.querySelector('.radio-title-info').textContent = devHelper.testVals.radioSelfcheckHelperText;
      return;
    }
  }
}

function navIconClick(randomContainer, min) {
  randomContainer = devHelper.testVals.containerArray[Math.floor(Math.random() * (devHelper.testVals.containerArray.length - min) + min)];

  randomContainer.classList.toggle('selfcheck-invisible', false);
  randomContainer.classList.toggle('selfcheck-visible', true);
  if (randomContainer.classList.contains('container-dragDrop') || randomContainer.classList.contains('container-dropDownMenu') || randomContainer.classList.contains('container-consecutive')) {
    document.querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', false);
    document.querySelector('.selfcheck-confirm-button').classList.toggle('active-button', true);
  }
  devHelper.testVals.previousContainer = randomContainer;
  titleInfo();
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
    titleInfo();
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

  // Если dropDown ответы правильные
  if (devHelper.testVals.previousContainer.classList.contains('container-dropDownMenu') && devHelper.testVals.previousContainer.querySelector('.dropDown-wrong') === null && devHelper.testVals.previousContainer.querySelector('.dropDown-currect') !== null) {
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
    titleInfo();
    if (devHelper.testVals.containerArray.length === 0) {
      devHelper.testVals.previousContainer = undefined;
    }
    return;

    // Если в dropDown элементе ответы не верны
  } else if (devHelper.testVals.previousContainer.classList.contains('container-dropDownMenu') && devHelper.testVals.previousContainer.querySelector('.dropDown-wrong') !== null) {
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

    devHelper.testVals.previousContainer.querySelectorAll('.dropDown-wrong').forEach((Element) => {
      Element.classList.toggle('dropDown-wrong', false);
    });
    devHelper.testVals.previousContainer.querySelectorAll('.dropDown-currect').forEach((Element) => {
      Element.classList.toggle('dropDown-currect', false);
    });

    devHelper.testVals.previousContainer.classList.toggle('block-selfcheck-container', false);
    devHelper.testVals.previousContainer.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', true);
    devHelper.testVals.previousContainer.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button').querySelector('span').textContent = 'Подтвердить';

    devHelper.testVals.previousContainer = randomContainer;
    titleInfo();
    return;
  }

  // Если consecutive ответы правильные
  if (devHelper.testVals.previousContainer.classList.contains('container-consecutive') && devHelper.testVals.previousContainer.classList.contains('correct-consecutive-container')) {
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
    titleInfo();
    if (devHelper.testVals.containerArray.length === 0) {
      devHelper.testVals.previousContainer = undefined;
    }
    return;

    // Если consecutive ответы неправильные
  } else if (devHelper.testVals.previousContainer.classList.contains('container-consecutive') && devHelper.testVals.previousContainer.querySelector('.consecutive-wrong') !== null) {
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

    devHelper.testVals.previousContainer.querySelectorAll('.consecutive-wrong').forEach((Element) => {
      Element.classList.toggle('consecutive-wrong', false);
    });
    devHelper.testVals.previousContainer.querySelectorAll('.consecutive-currect').forEach((Element) => {
      Element.classList.toggle('consecutive-currect', false);
    });

    devHelper.testVals.previousContainer.classList.toggle('block-selfcheck-container', false);
    devHelper.testVals.previousContainer.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', true);
    devHelper.testVals.previousContainer.closest('.tests-container-elem').querySelector('.selfcheck-confirm-button').querySelector('span').textContent = 'Подтвердить';

    devHelper.testVals.previousContainer = randomContainer;
    titleInfo();
    return;
  }


  // Если radio ответы правильные
  if (devHelper.testVals.previousContainer.classList.contains('container-radioButton') && devHelper.testVals.previousContainer.classList.contains('correct-radioButton-container')) {
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
    titleInfo();
    if (devHelper.testVals.containerArray.length === 0) {
      devHelper.testVals.previousContainer = undefined;
    }
    return;


    // Если в radio ответы неправильные
  } else if (devHelper.testVals.previousContainer.classList.contains('container-radioButton') && devHelper.testVals.previousContainer.querySelectorAll('.correct-answer').length !== devHelper.testVals.answersArray[devHelper.testVals.containerArray.indexOf(devHelper.testVals.previousContainer)].length) {
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
    titleInfo();
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
  titleInfo();
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
    if (document.querySelector('.selfcheck-visible').classList.contains('container-dragDrop') || document.querySelector('.selfcheck-visible').classList.contains('container-dropDownMenu') || document.querySelector('.selfcheck-visible').classList.contains('container-consecutive')) {
      document.querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', false);
      document.querySelector('.selfcheck-confirm-button').classList.toggle('active-button', true);
    } else {
      document.querySelector('.selfcheck-confirm-button').classList.toggle('disabled-button', true);
      document.querySelector('.selfcheck-confirm-button').classList.toggle('active-button', false);
    }
  }
}

// Фукция создания тестов
function createTests(elem, index) {
  if (elem.questionType === 'radio') {
    const div = document.createElement('div');
    div.classList.add('selfcheck-container', 'selfcheck-invisible', 'container-radioButton');
    let answerElem = ``;
    elem.answers.forEach((Element) => {
      answerElem += `
        <div class="radio-elem">
          <div class="selfcheck-radio">
            <div></div>
          </div><span>${Element}</span>
        </div>
      `;
    });
    devHelper.testVals.answersArray.push(elem.rightAnswers);
    document.querySelector('.selfcheck-container-main').appendChild(createSelfcheckForTests(elem, answerElem, div));
  }
  if (elem.questionType === 'dragDrop') {
    const div = document.createElement('div');
    div.classList.add('selfcheck-container', 'selfcheck-invisible', 'container-dragDrop');
    let answerElem = ``;
    Object.keys(elem.answers).forEach((Element) => {
      answerElem += `
        <div class="selfcheck-radio-dragDrop">
          <span>${elem.answers[Element][0]}</span>
          <div class="drag-drop-elem" draggable="true"><span>${elem.answers[Element][1]}</span></div>
        </div>
      `;
    });
    devHelper.testVals.answersArray.push(elem.rightAnswers);
    document.querySelector('.selfcheck-container-main').appendChild(createSelfcheckForTests(elem, answerElem, div));
  }
  if (elem.questionType === 'dropDownMenu') {
    const div = document.createElement('div');
    div.classList.add('selfcheck-container', 'selfcheck-invisible', 'container-dropDownMenu');
    let answerElem = ``;
    let optionsArray = [];
    elem.optionContent.forEach((Element) => {
      let temp = ``;
      let optionElem;
      Element.forEach((Element2) => {
        temp += `
          <option>${Element2}</option>
        `;
      });
      optionElem = `
          <select class="dropDown-select">
            ${temp}
          </select>
        `;
      optionsArray.push(optionElem);
    });
    elem.answers.forEach((Element, Index) => {
      const textWithOption = `${Element.replace('insertOptionElem', optionsArray[Index])}`;
      answerElem += `
        <div class="selfcheck-dropDown_menu">
          <span>${textWithOption}</span>
        </div>
      `;
    });
    devHelper.testVals.answersArray.push(elem.rightAnswers);
    document.querySelector('.selfcheck-container-main').appendChild(createSelfcheckForTests(elem, answerElem, div));
  }
  if (elem.questionType === 'consecutive') {
    const div = document.createElement('div');
    div.classList.add('selfcheck-container', 'selfcheck-invisible', 'container-consecutive');
    let answerElem = ``;
    elem.answers.forEach((Element) => {
      answerElem += `
        <div class="selfcheck-consecutive">
          <div class="consecutive-elem" draggable="true"><span>${Element}</span></div>
        </div>
      `;
    });
    devHelper.testVals.answersArray.push(elem.rightAnswers);
    // document.querySelector('.selfcheck-container-main').appendChild(div);
    document.querySelector('.selfcheck-container-main').appendChild(createSelfcheckForTests(elem, answerElem, div));
  }
}

// создает selfcheck контейнеры для функции createTests
function createSelfcheckForTests(elem, answerElem, div) {
  const selfcheckContainer = `
      <span class="selfcheck-title">${elem.questionTopic}</span>
      <div class="selfcheck-radio-container">
        <span class="radio-title">${elem.questionText}</span>
        <span class="radio-title-info"></span>
        ${answerElem}
      </div>
    `;
  div.innerHTML = selfcheckContainer;

  return div;
}

function findLast(array, predicate) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i])) {
      return array[i];
    }
  }
  return undefined;
}

function openPopupPdf(url) {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const width = Math.round(screenWidth * 0.4);
  const height = Math.round(screenHeight * 0.9);
  const left = Math.round((screenWidth - width) / 2);
  const top = Math.round((screenHeight - height) / 2);
  window.open(url, 'popup', `width=${width}, height=${height}, left=${left}, top=${top}`);
}