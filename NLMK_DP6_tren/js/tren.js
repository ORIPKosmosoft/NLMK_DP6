/*                TODO
----------------------------------------------------
Создать стили для текста концетрации
----------------------------------------------------
Создание эффекта концетрации
 текст центровать по центру дыры

----------------------------------------------------
*/
function loadTrenActions() {
  devHelper.trenVals.scenarioArr = [];
  Array.from(document.querySelectorAll('.drop-item')).forEach((Element, Index) => {
    let tempObjTren = {
      name: Element.querySelector('span').innerText,
    }
    devHelper.trenVals.scenarioArr.push(tempObjTren);
    if (tempActions[Index]) {
      tempActions[Index].forEach(action => action.passed = false);
      tempObjTren.actions = tempActions[Index];
      tempObjTren.actions.forEach(action => {
        if (action.audio) {
          if (devHelper.audio.find(element => element.name === action.audio) === undefined)
            devHelper.audio.push({ name: action.audio, element: new Audio(`/media/audio/${action.audio}.mp3`) });
        }
      })
    }
  })
}

function startTren(Restart = false) {
  clearChat();
  if (devHelper.trenVals.type === 'learn') {
  } else {

  }
  setTextScenario(devHelper.trenVals.scenario);
  takeStartingState(Restart);
  if (devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].human && devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].human &&
    devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].startTime === 0) {
    devHelper.trenVals.waitingInput = true;
  } else devHelper.trenVals.waitingInput = false;
  if (Restart === false)
    window.requestAnimationFrame(trenTimeTick);
}
function trenTimeTick(timeStamp) {
  if (devHelper.trenVals.scenario !== undefined) {
    devHelper.model3DVals.scene.render();
    if (devHelper.trenVals.ended === false) {
      if (devHelper.trenVals.timers.allTimeHelper === 0) devHelper.trenVals.timers.allTimeHelper = timeStamp;
      devHelper.trenVals.timers.allTime = Number(timeStamp - devHelper.trenVals.timers.allTimeHelper).toFixed(2);
      if (devHelper.trenVals.waitingInput === false) {
        if (devHelper.trenVals.timers.actionTimeHelper === 0) {
          devHelper.trenVals.timers.scenarioTimeHelper = devHelper.trenVals.timers.scenarioTime;
          devHelper.trenVals.timers.actionTimeHelper = timeStamp;
        }
        devHelper.trenVals.timers.actionTime = Number((timeStamp - devHelper.trenVals.timers.actionTimeHelper).toFixed(2));
        devHelper.trenVals.timers.scenarioTime = Number((devHelper.trenVals.timers.scenarioTimeHelper + devHelper.trenVals.timers.actionTime).toFixed(2));
      }
      if (devHelper.dev.enable === true && document.querySelector('.info-tren')) {
        document.querySelector('.info-tren').innerHTML = `<p>Время действия ${devHelper.trenVals.currentAction} = ${devHelper.trenVals.timers.actionTime / 1000};</p>`
        document.querySelector('.info-tren').innerHTML += `<p>Время сценария = ${devHelper.trenVals.timers.scenarioTime / 1000};</p>`
        document.querySelector('.info-tren').innerHTML += `<p>Общее время в сценарии = ${devHelper.trenVals.timers.allTime / 1000};</p>`
        let currentActonObject = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
        if (currentActonObject && currentActonObject.action && currentActonObject.action.target2D) document.querySelector('.info-tren').innerHTML += `<p>нужно кликнуть на ${currentActonObject.action.target2D};</p>`;
      }
      let nextAction = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
      if (nextAction) {
        if (nextAction.human && nextAction.human === true) {
          if (devHelper.trenVals.waitingInput === false) {
            if (nextAction.text) sendMessage(nextAction.sender, nextAction.text);
            if (nextAction.scenarioText) sendMessage(nextAction.sender, nextAction.scenarioText);
            devHelper.trenVals.waitingInput = true;
          }
        } else {
          if (nextAction.lifeTime) {
            if (nextAction.startTime === 0) {
              setLifeTime(nextAction.lifeTime);
              change3DTime(devHelper.trenVals.timers.lifeTime);
              changeSvgElem({ name: 'lifetime', text: devHelper.trenVals.timers.lifeTime, });
              updateSvgTextures();
            } else startTimerToStep(nextAction.lifeTime, false);
          }
          if (nextAction.action && nextAction.action.window2D) {
            for (let key in nextAction.action.window2D.elements) {
              if (nextAction.action.window2D.elements.hasOwnProperty(key))
                changeSvgElem(nextAction.action.window2D.elements[key]);
            }
            updateSvgTextures();
          }
          if (nextAction.action && nextAction.action.target3D) {
            let mesh = devHelper.model3DVals.activeMeshs.flat(Infinity).find(mesh => (mesh.name === nextAction.action.target3D));
            handleRotation(nextAction, mesh);
            handlePosition(nextAction, mesh);
            if (nextAction.action.material) {
              let tempMat = devHelper.model3DVals.scene.meshes.find(mesh => (mesh.name === nextAction.action.material)).material;
              mesh.material = tempMat || (devHelper.dev.enable && console.warn(`material ${nextAction.action.material} not found`));
            }
          }
          if (nextAction.text) sendMessage(nextAction.sender, nextAction.text);
          if (nextAction.scenarioText) sendMessage(nextAction.sender, nextAction.scenarioText);
          if (nextAction.audio) playAudio(nextAction.audio);
          newActionStartHelper(nextAction);
        }
      }
      let lastAction = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false));
      if (lastAction === undefined) trenFinish();
    }
    // TODO Тут остановить при выходе из сценария
    window.requestAnimationFrame(trenTimeTick);
  }
}

function trenClickOnMesh(Mesh) {
  if (!devHelper.trenVals.waitingInput) return;
  const currentAction = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario]
    .actions.find(action => (action.passed === false && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
  if (currentAction.action && currentAction.action.target3D === Mesh.name) {
    handleRotation(currentAction, Mesh);
    handlePosition(currentAction, Mesh);
    if (currentAction.audio) playAudio(currentAction.audio);
    newActionStartHelper(currentAction);
  } else handleError(Mesh);
}

function playAudio(AudioName) {
  devHelper.audio.forEach(audio => {
    if (audio.name === AudioName) audio.element.play();
  });
}

function handleRotation(currentAction, Mesh) {
  const rotation = currentAction.action.rotation || {};
  if (rotation.y !== undefined) moveRotationMesh(Mesh, 'r', rotation.y, 'y', currentAction.duration !== undefined ? currentAction.duration : 1);
  if (rotation.z !== undefined) moveRotationMesh(Mesh, 'r', rotation.z, 'z', currentAction.duration !== undefined ? currentAction.duration : 1);
  if (rotation.x !== undefined) moveRotationMesh(Mesh, 'r', rotation.x, 'x', currentAction.duration !== undefined ? currentAction.duration : 1);
}

function handlePosition(currentAction, Mesh) {
  const position = currentAction.action.position || {};
  if (position.x !== undefined) moveRotationMesh(Mesh, 'p', position.x, 'x', currentAction.duration !== undefined ? currentAction.duration : 1);
  if (position.y !== undefined) moveRotationMesh(Mesh, 'p', position.y, 'y', currentAction.duration !== undefined ? currentAction.duration : 1);
  if (position.z !== undefined) moveRotationMesh(Mesh, 'p', position.z, 'z', currentAction.duration !== undefined ? currentAction.duration : 1);
}

function handleError(Mesh) {
  devHelper.dev.enable && console.warn(`Клик на ${Mesh.name} в действии ${devHelper.trenVals.currentAction} неверный.`);
  sendMessage("Ошибка", "Вы совершили неверное действие.");
}

function trenClickOnSvgElem(SvgElemHelper = undefined) {
  if (devHelper.trenVals.waitingInput === true) {
    let currentActonObject = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
    if (currentActonObject.lifeTime) startTimerToStep(currentActonObject.lifeTime);
    if (currentActonObject.action && currentActonObject.action.target2D && currentActonObject.action.target2D === SvgElemHelper.id) {
      if (currentActonObject.action.window2D && currentActonObject.action.window2D.elements) {
        for (let key in currentActonObject.action.window2D.elements) {
          if (currentActonObject.action.window2D.elements.hasOwnProperty(key))
            changeSvgElem(currentActonObject.action.window2D.elements[key]);
        }
      }
      if (currentActonObject.audio) playAudio(currentActonObject.audio);
      newActionStartHelper(currentActonObject);
    }
  }
}

function trenFinish() {
  devHelper.trenVals.ended = true;
  if (devHelper.dev.enable === true && document.querySelector('.info-tren'))
    document.querySelector('.info-tren').innerHTML = `Вы успешно завершили сценарий ${devHelper.trenVals.scenario}. Ваше время затраченное на прохождение тренажёра = ${devHelper.trenVals.timers.allTime / 1000} сек.`;
  devHelper.dev.enable && console.warn(`Вы успешно завершили сценарий ${devHelper.trenVals.scenario}. Ваше время затраченное на прохождение тренажёра = ${devHelper.trenVals.timers.allTime / 1000} сек.`);
}

function takeStartingState(Restart = false) {
  devHelper.trenVals.timers.allTime = devHelper.trenVals.timers.allTimeHelper = devHelper.trenVals.timers.scenarioTimeHelper =
    devHelper.trenVals.timers.scenarioTime = devHelper.trenVals.timers.actionTime = devHelper.trenVals.timers.actionTimeHelper = 0;
  Array.from(document.querySelectorAll('.box-scenario-text')).forEach(element => {
    element.classList.toggle('current', false);
    element.classList.toggle('passed', false);
  })
  if (document.querySelector('.box-scenario-text'))
    document.querySelector('.box-scenario-text').classList.toggle('current', true);
  devHelper.trenVals.currentAction = 0;
  devHelper.trenVals.ended = false;
  devHelper.trenVals.waitingInput = true;
  setLifeTime(devHelper.trenVals.timers.startLifeTime);
  tempActions.forEach(scenarioActions => {
    scenarioActions.forEach(action => {
      action.passed = false;
    })
  })
  if (devHelper.startPos.IF2D.length === 0) {
    saveStart2DIF();
    makeStart2DVisual(true);
  }
  else makeStart2DVisual();
  if (devHelper.startPos.IF3D.length === 0) {
    makeStart3DVisual();
  } else makeStart3DVisual();

  animMoveCamera(devHelper.model3DVals.cameraPositions[0], 1);

  function makeStart2DVisual(firstTime = false) {
    let reloadImg = [];
    if (firstTime === false) {
      devHelper.model3DVals.svgDisplays.meshs.forEach((mesh) => {
        mesh.svgArr.length = 0;
        mesh.svgArr.push(mesh.startSvg);
        if (!reloadImg.includes(mesh.startSvg.name))
          reloadImg.push(mesh.startSvg.name);
      })
      devHelper.startPos.IF2D.forEach(activeElement => {
        devHelper.svgVals.forEach((element, index) => {
          element.activeElements.forEach((oldActiveElement) => {
            if (oldActiveElement.element.id === activeElement.id) {
              let cloneNode = activeElement.cloneNode(true);
              oldActiveElement.element = cloneNode;
              element.svg.querySelector(`#${activeElement.id}`).replaceWith(cloneNode);
            }
          })
        })
      })
    }
    if (startState2D[devHelper.trenVals.scenario] && startState2D[devHelper.trenVals.scenario].length > 0) {
      startState2D[devHelper.trenVals.scenario].forEach(element => {
        if (element.name) {
          changeSvgElem(element);
        }
      });
    }
    if (firstTime === false) {
      reloadImg.forEach(name => {
        devHelper.svgVals.forEach((element, index) => {
          if (element.name === name) {
            element.object.nextElementSibling.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(element.svg))));
          }
        })
      })
    }
  }
  function makeStart3DVisual() {
    devHelper.model3DVals.activeMeshs.flat().forEach(mesh => {
      if (mesh.startState.enable === true) {
        if (mesh.startState.position !== undefined) {
          let tempOnject = { action: { position: mesh.startState.position }, duration: 0.1 };
          handlePosition(tempOnject, mesh);
        }
        if (mesh.startState.rotation !== undefined) {
          let tempOnject = { action: { rotation: mesh.startState.rotation }, duration: 0.1 };
          handleRotation(tempOnject, mesh);
        }
        if (mesh.startState.scale !== undefined) // не встречал такого
          mesh.scaling = mesh.startState.scale;
        if (mesh.startState.material !== undefined) // не встречал такого
          mesh.material = mesh.startState.material;
        if (mesh.startState.diffuseTexture !== undefined) // не встречал такого
          mesh.material.diffuseTexture = mesh.startState.texture;
        if (mesh.startState.emissiveTexture !== undefined) // не встречал такого
          mesh.material.emissiveTexture = mesh.startState.texture;
      }
    })
    if (startState3D[devHelper.trenVals.scenario] && startState3D[devHelper.trenVals.scenario].length > 0) {
      startState3D[devHelper.trenVals.scenario].forEach(element => {
        const mesh = devHelper.model3DVals.activeMeshs.flat().find(mesh => mesh.name === element.name);
        let tempobj = { action: element };
        tempobj.duration = 0.1;
        if (mesh !== undefined) {
          handleRotation(tempobj, mesh);
          handlePosition(tempobj, mesh);
        } else {
          devHelper.dev.enable && console.warn(`Не найден объект ${element.name} в тренажёре.`);
        }
      });
    }
  }
}

function saveStart2DIF() {
  if (devHelper.startPos.IF2D.length === 0) {
    devHelper.svgVals.forEach((element, index) => {
      const duplicates = element.activeElements.map(originalElementObj => {
        const originalElement = originalElementObj.element;
        return originalElement.cloneNode(true);
      });
      devHelper.startPos.IF2D.push(...duplicates);
    })
  }
}

function newActionStartHelper(Action) {
  devHelper.trenVals.timers.actionTimeHelper = 0;
  Action.passed = true;
  devHelper.trenVals.waitingInput = false;
  const currentElement = document.querySelector('.box-scenario-text.current');
  if (currentElement) {
    if (Action.scenarioText && Action.scenarioText !== currentElement.innerHTML) {
      currentElement.classList.replace('current', 'passed');
      const nextElement = currentElement.nextElementSibling;
      if (nextElement && nextElement.classList.contains('box-scenario-text')) {
        nextElement.classList.toggle('current', true);
      }
    }
  } else {
    //   if (document.querySelector('.box-scenario-text'))
    //     document.querySelector('.box-scenario-text').classList.toggle('current', true);
  }
}

function createConcentrationEffectCondition(Arr) {
  if (Arr[0].position.indexOf(devHelper.model3DVals.currentPosition) === -1) {
    console.log('Перейти на позицию' + Arr[0].position);
  } else {
    if (Arr[0].scheme) {
      let activeMonitor = devHelper.model3DVals.svgDisplays.meshs.find(m => m.positionIndex === devHelper.model3DVals.currentPosition);
      const isScheme = activeMonitor.svgArr.some(obj => obj.name === Arr[0].scheme[0]);
      if (isScheme) {
        createConcentrationEffect(Arr);
      } else {
        console.log('Включить нужную схему', Arr[0].scheme[0]);
      }
    }
  }
}

function createConcentrationEffect(Arr) {
  let concentrationDiv = document.querySelector('.concentration');
  const holeContainer = concentrationDiv?.querySelector('.hole-container');
  const lineContainer = concentrationDiv?.querySelector('.line-container');
  if (!concentrationDiv) {
    concentrationDiv = createCustomElement('div', '', { 'class': 'concentration' });
    document.querySelector('.tren-container').append(concentrationDiv);
    concentrationDiv.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'opacity' && e.currentTarget.style.opacity === '1') {
        Array.from(concentrationDiv.querySelector('.hole-container').children).forEach(element => element.style.opacity = '1')
        Array.from(concentrationDiv.querySelector('.line-container').children).forEach(element => element.style.opacity = '1')
      }
    })
    concentrationDiv.addEventListener('transitionstart', (e) => {
      if (e.propertyName === 'opacity' && e.currentTarget.style.opacity === '0') {
        Array.from(concentrationDiv.querySelector('.hole-container').children).forEach(element => {element.style.trsansition = 'none'; element.style.opacity = '0'; })
        Array.from(concentrationDiv.querySelector('.line-container').children).forEach(element => {element.style.trsansition = 'none'; element.style.opacity = '0'; })
      }
      if (e.propertyName === 'opacity' && e.currentTarget.style.opacity === '1') {
        Array.from(concentrationDiv.querySelector('.hole-container').children).forEach(element => {element.style.trsansition = '';})
        Array.from(concentrationDiv.querySelector('.line-container').children).forEach(element => {element.style.trsansition = '';})
      }
    })
    concentrationDiv.append(createCustomElement('div', '', { 'class': 'hole-container' }));
    concentrationDiv.append(createCustomElement('div', '', { 'class': 'line-container' }));
    concentrationDiv.currentLight = Arr;
  } else {
    if (concentrationDiv.currentLight !== Arr) {
      while (holeContainer?.children.length > 0) {
        holeContainer.children[0].remove();
      }
      while (lineContainer?.children.length > 0) {
        lineContainer.children[0].remove();
      }
    }
  }
  if (concentrationDiv.currentLight !== Arr || concentrationDiv?.querySelector('.hole-container').children.length === 0) {
    Arr.forEach(Element => {
      createConcentrationElement(Element);
    })
    concentrationDiv.currentLight = Arr;
  }
  concentrationDiv.style.opacity = 1;
  function createConcentrationElement(Variables) {
    let concentrationDiv = document.querySelector('.tren-container').querySelector('.concentration');
    concentrationDiv.children[0].append(createConcentrationHoleLine(Variables.x, Variables.y, Variables.w, Variables.h, 'h'));
    concentrationDiv.children[1].append(createConcentrationHoleLine(Variables.x, Variables.y, Variables.w, Variables.h));
    let newText = createConcentrationText(Variables.text, Variables.x, Variables.y, Variables.w, Variables.h);
    concentrationDiv.children[1].append(newText);
    newText.style.left = (Variables.x - Variables.w / 2) + 'vw';
    newText.style.top = (Variables.y - ConvertPxToVh(newText.getBoundingClientRect().height)) + 'vh';
    function createConcentrationHoleLine(x, y, w, h, type = 'l') {
      let elem = createCustomElement('div', '', { 'class': type === 'h' ? 'concentration-hole' : 'concentration-line' });
      elem.style.left = x + 'vw';
      elem.style.top = y + 'vh';
      elem.style.width = w + 'vw';
      elem.style.height = h + 'vh';
      return elem;
    }
    function createConcentrationText(text, x, y, w, h) {
      let elem = createCustomElement('span', '', { 'class': 'concentration-text' });
      elem.innerHTML = text;
      return elem;
    }
  }
}
















const Roles = {
  "Система": "messageSystem",
  "Газовщик": "messageMy",
  "Работник": "message",
  "Ошибка": "messageError"
}
function addTrenValsMessages(elem) {
  devHelper.trenVals.messages.push(elem);
}
//sendMessage("Система","TESTYRWE")
function sendMessage(Sender, TextMessage) {
  let message = createCustomElement("div", "", { "class": Roles[Sender] })
  message.setAttribute('mes', '');
  let top = createCustomElement("div", "", { "class": "topMessage" }, message)
  switch (Roles[Sender]) {
    case "messageError":
      createCustomElement("div", Sender, { "class": "authorMessage" }, top)
      break;
    case "messageMy":
      createCustomElement("div", (String(devHelper.trenVals.timers.lifeTime).substring(0, 5)), { "class": "timeMessage" }, top)
      createCustomElement("div", Sender, { "class": "authorMessage" }, top)
      break;
    default:
      createCustomElement("div", Sender, { "class": "authorMessage" }, top)
      createCustomElement("div", (String(devHelper.trenVals.timers.lifeTime).substring(0, 5)), { "class": "timeMessage" }, top)
      break;
  }
  createCustomElement("div", TextMessage, { "class": "textMessage" }, message)
  document.querySelector(".chat").insertBefore(message, document.querySelector(".chat").children[0]);
  if (!document.querySelector('.box-chat-window').classList.contains('opacity-1-Temp') && !document.querySelector('.box-chat-window').classList.contains('opacity-1-Always')) {
    let notIcon = document.querySelector('.notification-icon');
    notIcon.style.visibility = "visible";
    notIcon.style.left = (document.getElementById('b_chat').getBoundingClientRect().right - notIcon.getBoundingClientRect().width / 1.5) + 'px';
    notIcon.style.top = (document.getElementById('b_chat').getBoundingClientRect().top - notIcon.getBoundingClientRect().height / 3) + 'px';
  }
}

function clearChat() {
  while (document.querySelector('.chat').children.length > 1) {
    document.querySelector('.chat').removeChild(document.querySelector('.chat').children[0]);
  }
}

function createCustomElement(tag, content, attributes, parrent = null) {
  const element = document.createElement(tag)
  element.innerHTML = content
  for (const name in attributes) {
    element.setAttribute(name, attributes[name])
  }
  if (parrent) parrent.append(element);
  return element
}

function setNewFillButtonSVG(objectSVG, color) {
  Array.from(objectSVG.contentDocument.querySelectorAll('[fill]')).forEach(element => {
    element.setAttribute('fill', color)
  });
}



function dragAndDrop(e, moveWindow) {
  // let vW = window.screen.width / 100;
  // let vH = window.screen.height / 100;

  moveWindow.classList.add('transition-0');
  let coords = getCoords(moveWindow);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;
  moveAt(e);
  function moveAt(e) {
    moveWindow.style.left = (e.pageX - shiftX) /*/ vW*/ + 'px';
    moveWindow.style.top = (e.pageY - shiftY) /*/ vH*/ + 'px';
    fixEdge(e);
  }
  function fixEdge(e) {
    if (parseInt(moveWindow.style.left) <= document.querySelector('.tren-ui').offsetWidth) {
      moveWindow.style.left = document.querySelector('.tren-ui').offsetWidth + 'px';
    }
    if (parseInt(moveWindow.style.top) <= 0) {
      moveWindow.style.top = "0px";
    }
    if (parseInt(moveWindow.style.left) + moveWindow.offsetWidth >= window.innerWidth) {
      moveWindow.style.left = window.innerWidth - moveWindow.offsetWidth + "px";
    }
    if (parseInt(moveWindow.style.top) + moveWindow.offsetHeight >= window.innerHeight) {
      moveWindow.style.top = window.innerHeight - moveWindow.offsetHeight + "px";
    }
  }
  document.onmousemove = function (e) {
    moveAt(e);
  };

  moveWindow.onmouseup = function () {
    document.onmousemove = null;
    moveWindow.onmouseup = null;
    moveWindow.classList.remove('transition-0');
    moveWindow.style.left = ConvertPxToVw(parseFloat(moveWindow.style.left)) + 'vw';
    moveWindow.style.top = ConvertPxToVh(parseFloat(moveWindow.style.top)) + 'vh';
  };
  moveWindow.ondragstart = function () {
    return false;
  };
  function getCoords(elem) {   // кроме IE8-
    let box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
}
function setStartPosition(element) {
  element.style.left = element.getAttribute('sx');
  element.style.top = element.getAttribute('sy');

  if (document.querySelector('.tren-ui-long')) {
    element.style.left = element.getAttribute('sx2');
  }
}
function raiseUpBox(e) {
  if (document.querySelector('.z-index9')) {
    document.querySelector('.z-index9').classList.remove('z-index9');
  }
  e.currentTarget.parentElement.parentElement.classList.add('z-index9')
}


function clickCloseTime(e) {
  if (document.getElementById('b_oclock').classList.contains('button-tren-active')) {
    document.getElementById('b_oclock').classList.remove('button-tren-active')
    setNewFillButtonSVG(document.getElementById('b_oclock').querySelector('object'), COLOR_STATE_BUTTON.Normal);
  }
  document.querySelector('.box-time').classList.remove('z-index9');
  document.querySelector('.box-time').classList.remove("opacity-1-Always");
  document.querySelector('.box-time').classList.remove("opacity-1-Temp");
  document.querySelector('.box-time').ontransitionend = (e) => {
    document.querySelector('.box-time').classList.add('transition-0');
    document.querySelector('.block-button').classList.remove("z-index-1");
    document.querySelector('.box-time').classList.remove("box-time-padTop32");
    document.querySelector('.time-header').classList.remove("time-header-opacity");
    document.querySelector('.box-time .backArea').classList.remove('backArea-white-100')
    setStartPosition(document.querySelector('.box-time'));
    document.querySelector('.box-time').ontransitionend = null;
  }
  clickCloseTimer(e);
}
function clickCloseTimer(e) {
  document.querySelector('.dialogMessageWatch').classList.remove('opacity-1-Always');
  document.querySelector('.dialogMessageWatch').classList.remove('z-index9');
  document.querySelector('.dialogMessageWatch').classList.add('opacity-0');
  document.querySelector(".dialogMessageWatch .time-hour").textContent = "00";
  document.querySelector(".dialogMessageWatch .time-minute").textContent = "00";
  document.querySelectorAll('.visibleDrooDown').forEach(element => { element.classList.remove("visibleDrooDown"); });
  document.querySelector(".dialogTimers-hours[dropDown='1'] p").textContent = "00"
  document.querySelector(".dialogTimers-hours[dropDown='2'] p").textContent = "00";
}
function clickCloseChat(e) {
  if (document.getElementById('b_chat').classList.contains('button-tren-active')) {
    document.getElementById('b_chat').classList.remove('button-tren-active')
    setNewFillButtonSVG(document.getElementById('b_chat').querySelector('object'), COLOR_STATE_BUTTON.Normal);
  }
  document.querySelector('.box-chat-window').classList.remove('z-index9');
  document.querySelector('.box-chat-window').classList.remove("opacity-1-Temp"); // БОЛЬШОЕ ОКНО
  document.querySelector('.box-chat-window').classList.remove("opacity-1-Always"); // БОЛЬШОЕ ОКНО
  document.querySelector('.box-chat-window .block-button').classList.remove("z-index-1"); // БЛОКИРОВКА КНОПОК
  document.querySelector('.box-chat-window .box-chat-header').classList.remove("opacity-1-Always"); // ЛИНИЯ С НАЗВАНИЕ И Х

  document.querySelector('.box-chat-window').ontransitionend = (e) => {
    document.querySelector('.box-chat-window').classList.add('transition-0');
    document.querySelector('.box-chat-window').classList.remove("visibility-visible");
    document.querySelector('.chat').scrollTop = 0;
    setStartPosition(e.currentTarget);
    document.querySelector('.box-chat-window .chat').classList.add("chat-mini");
    document.querySelector('.box-chat-window').classList.add("box-chat-window-mini");
    document.querySelector('.box-chat-window .backArea').classList.remove('backArea-white-100')
    e.currentTarget.ontransitionend = null;
    setMiniChat();
  }
}

// Рамки вокруг окон
{
  Array.from(document.querySelectorAll('.time-header-title')).forEach(element => {
    element.onmouseover = (e) => {
      element.parentElement.parentElement.classList.add('border-window')
    }
    element.onmouseout = (e) => {
      element.parentElement.parentElement.classList.remove('border-window')
    }
  });
  Array.from(document.querySelectorAll('.chat-header-title')).forEach(element => {
    element.onmouseover = (e) => {
      element.parentElement.parentElement.classList.add('border-window')
    }
    element.onmouseout = (e) => {
      element.parentElement.parentElement.classList.remove('border-window')
    }
  });
}
// TIME
{
  // КЛИК ЗАКРЫТЬ TIME
  document.querySelector('.time-header-button').addEventListener("click", clickCloseTime)
  // BIND mouseDown
  document.querySelector('.time-header-title').onmousedown = (e) => {
    raiseUpBox(e);
    dragAndDrop(e, e.currentTarget.parentElement.parentElement /*box-time*/);
  };
}


function setLifeTime(time) {
  devHelper.trenVals.timers.lifeTime = time;
  document.querySelector(".time-hour").textContent = time.split(":")[0];
  document.querySelector(".time-minute").textContent = time.split(":")[1];
  document.querySelector(".time-second").textContent = time.split(":")[2];
}
// TIMER
{
  setLifeTime(devHelper.trenVals.timers.lifeTime);  // 2d 
  // BIND mouseDown
  document.querySelector('.dialogHeader .time-header-title').onmousedown = (e) => {
    raiseUpBox(e);
    dragAndDrop(e, e.currentTarget.parentElement.parentElement);
  };

  function setCounterTime(time) {
    document.querySelector(".dialogMessageWatch .time-hour").textContent = time.split(":")[0];
    document.querySelector(".dialogMessageWatch .time-minute").textContent = time.split(":")[1];
  }
  function ConvertPxToVw(px) {
    return px / (window.innerWidth / 100);
  }
  function ConvertPxToVh(px) {
    return px / (window.innerHeight / 100);
  }
  function newStateTimer() {
    document.querySelector(".dialogMessageWatch .time-hour").classList.toggle("textColorGreen");
    document.querySelector(".dialogMessageWatch .time-colon").classList.toggle("textColorGreen");
    document.querySelector(".dialogMessageWatch .time-minute").classList.toggle("textColorGreen");
    document.querySelector(".dialogMessageWatch .dialogTimers-line").classList.toggle("disabled-line");
    document.querySelector(".dialogTimers-play").classList.toggle("disabled-play");
  }



  // Открыть таймер
  document.querySelector(".time-oclock").addEventListener('click', (e) => {
    document.querySelector(".dialogMessageWatch").classList.add('opacity-1-Always');
    document.querySelector('.dialogMessageWatch').classList.remove('opacity-0');

    // let myBlock = document.querySelector('.box-time');

    document.querySelector('.dialogMessageWatch').style.left = ConvertPxToVw(parseInt(document.querySelector('.box-time').getBoundingClientRect().right)) + 1 + 'vw';
    document.querySelector('.dialogMessageWatch').style.top = document.querySelector('.box-time').style.top;

    if (ConvertPxToVw(parseInt(document.querySelector('.box-time').getBoundingClientRect().right)) + 1 +
      ConvertPxToVw(parseInt(document.querySelector('.dialogMessageWatch').getBoundingClientRect().width))
      >= 100) {
      document.querySelector('.dialogMessageWatch').style.left = ConvertPxToVw(parseInt(document.querySelector('.box-time').getBoundingClientRect().left)) - 1 - ConvertPxToVw(parseInt(document.querySelector('.dialogMessageWatch').getBoundingClientRect().width)) + 'vw';
    }
    // FIX GO
    if (ConvertPxToVh(parseInt(document.querySelector('.box-time').getBoundingClientRect().top)) +
      ConvertPxToVh(parseInt(document.querySelector('.dialogMessageWatch').getBoundingClientRect().height))
      >= ConvertPxToVh(window.innerHeight)) {
      document.querySelector('.dialogMessageWatch').style.top = ConvertPxToVh(window.innerHeight) - ConvertPxToVh(parseInt(document.querySelector('.dialogMessageWatch').getBoundingClientRect().height)) + 'vh';
    }
  })
  // Закрыть таймер. Обнулить таймер
  document.getElementById("timer-close").addEventListener("click", clickCloseTimer);

  // Открыть выпадающий список
  Array.from(document.getElementsByClassName("dialogTimers-hours")).forEach((item) => {
    item.addEventListener('click', (e) => {
      if (!document.querySelector(".dialogTimers-line.disabled-line")) {
        document.querySelector(`.section-dropDown[dropDown="${e.currentTarget.getAttribute("dropDown")}"]`).classList.toggle("visibleDrooDown")
      }
    })
  })
  // клики по строке времени
  Array.from(document.getElementsByClassName("option")).forEach((item) => {
    item.addEventListener('click', (e) => {
      let parrent = e.currentTarget.parentElement.parentElement.parentElement;
      document.querySelector(`.dialogTimers-hours[dropDown="${parrent.getAttribute("dropDown")}"]`).children[0].textContent = e.currentTarget.textContent; // P - text
      document.querySelector(`.section-dropDown[dropDown="${parrent.getAttribute("dropDown")}"]`).classList.remove("visibleDrooDown");
      document.querySelector(".dialogMessageWatch .time")
        .querySelector(`[dropDown="${parrent.getAttribute("dropDown")}"]`).textContent = e.currentTarget.textContent;

    })
  })
  // Клик Плей таймер
  document.querySelector(".dialogMessageWatch .dialogTimers-play").addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains("disabled-play")) {
      return;
    }
    Array.from(document.querySelectorAll('.visibleDrooDown')).forEach(element => {
      element.classList.remove('visibleDrooDown')
    });
    document.querySelector(".dialogMessageWatch .time-hour").textContent = document.querySelector('.dialogMessageWatch .dialogTimers-hours[dropDown="1"] p').textContent;
    document.querySelector(".dialogMessageWatch .time-minute").textContent = document.querySelector('.dialogMessageWatch .dialogTimers-hours[dropDown="2"] p').textContent;
    newStateTimer();
    startTimerToFinish();

  })
  function setNormalTime(Time) {
    // закладка для оптимизации
    let currentDateTime = new Date();
    currentDateTime.setSeconds(Number(Time.split(":")[2]));
    currentDateTime.setMinutes(Number(Time.split(":")[1]));
    currentDateTime.setHours(Number(Time.split(":")[0]));
    return currentDateTime;
  }
  function getLifeTime_Date() {
    let currentDateTime = new Date();
    currentDateTime.setSeconds(Number(devHelper.trenVals.timers.lifeTime.split(":")[2]));
    currentDateTime.setMinutes(Number(devHelper.trenVals.timers.lifeTime.split(":")[1]));
    currentDateTime.setHours(Number(devHelper.trenVals.timers.lifeTime.split(":")[0]));
    return currentDateTime;
  }
  function getCounterTime_Date(specTime = "") {
    // state = podsos param
    let currentDateTime = new Date();
    currentDateTime.setSeconds(Number(0));
    if (specTime == "") {
      currentDateTime.setMinutes(Number(document.querySelector(".dialogMessageWatch .time-minute").textContent));
      currentDateTime.setHours(Number(document.querySelector(".dialogMessageWatch .time-hour").textContent));
    }
    else {
      currentDateTime.setMinutes(Number(specTime.split(":")[1]));
      currentDateTime.setHours(Number(specTime.split(":")[0]));
    }
    return currentDateTime;
  }
  function getFinishTime_Date(currentDateTime, counterDateTime) {
    currentDateTime = new Date(currentDateTime);
    counterDateTime = new Date(counterDateTime);

    currentDateTime.setSeconds(Number(currentDateTime.getSeconds()) + Number(counterDateTime.getSeconds()));
    currentDateTime.setMinutes(Number(currentDateTime.getMinutes()) + Number(counterDateTime.getMinutes()));
    currentDateTime.setHours(Number(currentDateTime.getHours()) + Number(counterDateTime.getHours()));
    return currentDateTime;
  }


  function msToTime(s) {
    return new Date(s).toString();
  }
  function getMyTime(currentDate) {
    currentDate = new Date(currentDate);
    return `${String(currentDate.getHours()).length < 2 ? "0" + String(currentDate.getHours()) : currentDate.getHours()}:${String(currentDate.getMinutes()).length < 2 ? "0" + String(currentDate.getMinutes()) : currentDate.getMinutes()}:${String(currentDate.getSeconds()).length < 2 ? "0" + String(currentDate.getSeconds()) : currentDate.getSeconds()}`;
  }

  const _timeInteval = 3000; // 3s
  const _stepInteval = 1000; // 1s
  const _step = 3;


  let timePassed = 0;
  let timerInterval = null;
  function onTimesUp() {
    clearInterval(timerInterval);
    newStateTimer();
  }
  function startTimerToFinish() {
    timePassed = 0;
    timerInterval = null;

    let currentDateTime = getLifeTime_Date().getTime();
    let counterDateTime = getCounterTime_Date().getTime();
    let finishDateTime = getFinishTime_Date(currentDateTime, counterDateTime).getTime();
    let counterStep = (finishDateTime - currentDateTime) / _step;
    timerInterval = setInterval(() => {
      if (_timeInteval === timePassed) {
        onTimesUp();
        return;
      }
      currentDateTime += counterStep;
      counterDateTime -= counterStep;
      setLifeTime(String(getMyTime(new Date(msToTime(currentDateTime)))));    // время системы
      setCounterTime(String(getMyTime(new Date(msToTime(counterDateTime))))); // время таймера
      change3DTime(String(getMyTime(new Date(msToTime(currentDateTime)))));   // время 3D системы
      timePassed += _stepInteval;
    }, _stepInteval);
  }
  function startTimerToStep(finishTime, UpdateSvg = true) {
    timePassed = 0;
    timerInterval = null;
    changeSvgElem({ name: 'lifetime', text: finishTime, });
    if (UpdateSvg === true) updateSvgTextures();
    let currentDateTime = getLifeTime_Date().getTime();
    let finishDateTime = getCounterTime_Date(finishTime).getTime();
    let counterStep = (finishDateTime - currentDateTime) / _step;
    timerInterval = setInterval(() => {
      if (_timeInteval === timePassed) {
        onTimesUp();
        return;
      }
      currentDateTime += counterStep;
      setLifeTime(String(getMyTime(new Date(msToTime(currentDateTime)))));    // время системы
      change3DTime(String(getMyTime(new Date(msToTime(currentDateTime)))));   // время 3D системы
      timePassed += _stepInteval;
    }, _stepInteval);
  }


}


// CHAT
function setMiniChat() {
  let miniChat = document.querySelector('.box-chat-window-mini');
  if (!miniChat) {
    return;
  }
  let mes = document.querySelector('.box-chat-window .chat-mini').children;
  if (mes.length == 0) {
    miniChat.style.width = ConvertPxToVw(385) + "vw";
    miniChat.style.height = ConvertPxToVw(100) + "vh"
    return;
  }
  for (let i = 0; i < mes.length; i++) {
    mes[i].classList.add('display-none');
  }
  mes[0].classList.remove('display-none');
  miniChat.style.width = miniChat.querySelector('.chat').children[0].getBoundingClientRect().width + 15 + 26 + 'px';
  miniChat.style.height = miniChat.querySelector('.chat').children[0].getBoundingClientRect().height + 35 + 18 + 'px';
}
// CHAT
{
  setMiniChat();
  function setNormalChat() {
    let miniChat = document.querySelector('.box-chat-window');
    let mes = document.querySelector('.box-chat-window .chat').children;
    for (let i = 0; i < mes.length; i++) {
      mes[i].classList.remove('display-none');
    }
    miniChat.style.width = miniChat.getAttribute('maxWidth');
    miniChat.style.height = miniChat.getAttribute('maxHeight');
  }

  // клик закрыть CHAT
  document.querySelector('.box-chat-window .chat-header-button').addEventListener("click", clickCloseChat);

  // Bind mouseDown
  document.querySelector('.box-chat-window .chat-header-title').onmousedown = (e) => {
    raiseUpBox(e);
    dragAndDrop(e, e.currentTarget.parentElement.parentElement);
  };

}

// ЦВЕТА КНОПОК
const COLOR_STATE_BUTTON = {
  Active: "#ffffff",
  Normal: "#939393"
}
// Смена СВГ в кнопке МЕНЮ
function newImageCollapseMenu(e) {
  let object = e.currentTarget.querySelector('object');
  if (object.getAttribute('icon') == "svg_menu_2") {
    object.setAttribute('icon', "svg_menu_1")
    object.contentDocument.querySelector('svg').innerHTML = document.getElementById('svg_menu_1').contentDocument.querySelector('svg').innerHTML;
  }
  else {
    object.setAttribute('icon', "svg_menu_2")
    object.contentDocument.querySelector('svg').innerHTML = document.getElementById('svg_menu_2').contentDocument.querySelector('svg').innerHTML;
  }
}


// ЦЕНТРОВАТЬ ОКНА от КНОПКИ
function setCenterWindow(item) {
  let helperWindow = document.querySelector(`.${item.getAttribute('window-interface')}`)
  helperWindow.classList.add('transition-0');
  let b_center = item.getBoundingClientRect().height / 2;
  let w_center = helperWindow.getBoundingClientRect().height / 2;
  helperWindow.style.top = ConvertPxToVh(item.getBoundingClientRect().y + (b_center - w_center)) + 'vh';
  if (helperWindow.getBoundingClientRect().bottom >= window.innerHeight * 0.99) {
    helperWindow.style.top = (99 - ConvertPxToVh(helperWindow.getBoundingClientRect().height)) + 'vh';
    helperWindow.setAttribute('sy', helperWindow.style.top);
  }
  setTimeout(() => { helperWindow.classList.remove('transition-0'); }, 50);
}

// БОЛЬШОЙ БИНД НА СМЕНУ ЦВЕТА КНОПОК // НОВОЕ СВП В 1Ю КНОПКУ  // КЛИК
Array.from(document.querySelectorAll('.box-tren-ui .line-tren')).forEach((item) => {
  let b_action = item.querySelector('.click-button-tren');
  item = item.querySelector('button');
  b_action.addEventListener('click', (e) => {
    if (item.hasAttribute('disabled')) return; // отключен
    if (document.querySelector(`.${item.getAttribute('window-interface')}`)) {  // включить анимацию
      document.querySelector(`.${item.getAttribute('window-interface')}`).classList.remove('transition-0'); // включить анимацию
    }
    if (item.classList.contains('button-tren-active')) {
      if (item.getAttribute('window-interface')) {
        document.querySelector(`.${item.getAttribute('window-interface')}`).classList.remove('box-time-padTop32');
      }
      if (item.hasAttribute('close-func')) {
        item.getAttribute('close-func').split(' ').forEach((item) => {
          window[item](e);
        })
      }
      item.classList.remove('button-tren-active');
      setNewFillButtonSVG(item.querySelector('object'), COLOR_STATE_BUTTON.Normal);
      return;
    }
    // if (item.id !== 'b_restart' && item.id !== 'b_exit') {
    item.classList.add('button-tren-active');
    setNewFillButtonSVG(item.querySelector('object'), COLOR_STATE_BUTTON.Active);
    // }
  })
});
//  // БОЛЬШОЙ БИНД НА СМЕНУ ОТОБРАЖЕНИЕ ОКОШЕК // НАВЕДЕНИЕ
Array.from(document.querySelectorAll('[window-interface]')).forEach((item) => {
  // СХ СУ - БАЗА
  setCenterWindow(item);
  let _item = document.querySelector(`.${item.getAttribute('window-interface')}`)
  _item.setAttribute('sx', _item.style.left);
  _item.setAttribute('sy', _item.style.top);
  // СХ СУ - БАЗА
  let b_action = item.querySelector('.click-button-tren');
  b_action.addEventListener('mouseover', (e) => {
    if (b_action.closest('.button-tren-active') === null) {
      document.querySelector(`.${item.getAttribute('window-interface')}`).classList.add('opacity-1-Temp');
      document.querySelector(`.${item.getAttribute('window-interface')}`).classList.remove('transition-0');
    }
    if (!document.querySelector(`.${item.getAttribute('window-interface')}`).classList.contains('opacity-1-Always')) {
      setCenterWindow(item);
    }
  });
  b_action.addEventListener('mouseout', (e) => {
    document.querySelector(`.${item.getAttribute('window-interface')}`).classList.remove('opacity-1-Temp');
  });
})

// Отображение "РАЗВЕРНУТЬ" /// ЕСЛИ УДАЛИТЬ, БУДЕТ ЛАГАТЬ НАДПИСЬ  // FIX NOW
document.getElementById('b_collapseMenu').addEventListener("mouseover", (e) => {
  if (document.querySelector('.tren-ui-long')) {
    document.querySelector('.box-collapse').classList.remove('opacity-1-Temp');
    document.querySelector('.box-collapse').classList.remove('opacity-1-Always');
  }
  else {

  }
});
// НОВЫЕ ПОЗИЦИИ ОКНО ПРИ ОТКРЫТИИ МЕНЮ
function setNewPositionWindow(elem, state = false) {
  if (state) {
    if (elem.classList.contains('opacity-1-Always') && 8 > ConvertPxToVw(parseFloat(elem.getBoundingClientRect().left))) {
      if (elem.classList.contains('dialogMessageWatch')) {  // частный случай
        elem.style.left = document.querySelector('.box-time').style.left;
        return;
      }
      elem.style.left = elem.getAttribute('sx2');
    }
    else if (elem.classList.contains('opacity-1-Always')) { return; }
    else {
      elem.style.left = elem.getAttribute('sx2');
      elem.style.top = elem.getAttribute('sy');
    }
  }
  else {
    if (elem.classList.contains('box-scenario')) {
      elem.style.left = elem.getAttribute('sx');
      elem.style.top = elem.getAttribute('sy');
      return;
    }
    if (elem.classList.contains('opacity-1-Always')) { return; }
    elem.style.left = elem.getAttribute('sx');
    elem.style.top = elem.getAttribute('sy');
  }
}
// ОТКРЫТЬ/ЗАКРЫТЬ МЕНЮ
document.getElementById('b_collapseMenu').addEventListener("click", (e) => {
  newImageCollapseMenu(e);
  if (!document.querySelector('.tren-ui').classList.contains('tren-ui-long')) {
    document.querySelector('.section-copy').style.left = '9vw';
    document.querySelector('.tren-ui').classList.add('tren-ui-long');
    document.querySelector('.box-collapse').classList.remove('opacity-1-Temp');
    Array.from(document.querySelectorAll('[window-interface]')).forEach((item) => {
      item = document.querySelector(`.${item.getAttribute('window-interface')}`);
      setNewPositionWindow(item, true);
    });
    setNewPositionWindow(document.querySelector('.dialogMessageWatch'), true);
  } else {
    document.querySelector('.section-copy').style.left = '';
    document.querySelector('.tren-ui').classList.remove('tren-ui-long');
    Array.from(document.querySelectorAll('[window-interface]')).forEach((item) => {
      item = document.querySelector(`.${item.getAttribute('window-interface')}`);
      setNewPositionWindow(item, false);
    });
  }
});

// КЛИК ЧАСЫ  //  
document.getElementById('b_oclock').addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains('button-tren-active')) {
    document.querySelector('.box-time').classList.add("opacity-1-Always");
    document.querySelector('.box-time').classList.add("box-time-padTop32");
    document.querySelector('.box-time .block-button').classList.add("z-index-1");
    document.querySelector('.box-time .backArea').classList.add('backArea-white-100')
    document.querySelector('.time-header').classList.add("time-header-opacity");
  }
});
// КЛИК ЧАТ
document.getElementById('b_chat').addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains('button-tren-active')) {
    document.querySelector('.box-chat-window').classList.remove("box-chat-window-mini");
    document.querySelector('.box-chat-window .chat').classList.remove("chat-mini");
    document.querySelector('.box-chat-window').classList.add("visibility-visible");
    document.querySelector('.box-chat-window').classList.add("opacity-1-Always");
    document.querySelector('.box-chat-window .block-button').classList.add("z-index-1");
    document.querySelector('.box-chat-window .box-chat-header').classList.add("opacity-1-Always");
    document.querySelector('.box-chat-window .backArea').classList.add('backArea-white-100')
    setNormalChat();
  }
});

document.getElementById('b_chat').addEventListener("mouseover", (e) => {
  if (document.querySelector('.notification-icon').style.visibility && document.querySelector('.notification-icon').style.visibility === 'visible') {
    document.querySelector('.notification-icon').style.visibility = 'hidden';
  }
});

// КЛИК рестарт  //  
document.getElementById('b_restart').addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains('button-tren-active')) {
    document.querySelector('.box-restart').classList.add("opacity-1-Always");
    document.querySelector('.box-restart').classList.add('backArea-white-100')
  }
  else {
    document.querySelector('.box-restart').classList.remove("opacity-1-Always");
    document.querySelector('.box-restart').classList.remove("opacity-1-Temp");
    document.querySelector('.box-restart').classList.remove('backArea-white-100')
  }
});

function disableGeneralView(state = true) {
  if (state) {
    if (document.getElementById('b_GeneralView').hasAttribute('disabled')) {
      document.getElementById('b_GeneralView').removeAttribute('disabled')
    }
  }
  else {
    document.getElementById('b_GeneralView').setAttribute('disabled', "");
  }
}
// КЛИК ОБРАТНО
document.getElementById('b_GeneralView').addEventListener("click", (e) => {
  e.currentTarget.classList.remove('button-tren-active');
  devHelper.model3DVals.movePointMesh.forEach(mesh => {
    mesh.isPickable = false;
    if (mesh.name.indexOf('highlight') !== -1) mesh.setEnabled(false);
  })
  animMoveCamera(devHelper.model3DVals.cameraPositions[0]);
  setNewFillButtonSVG(e.currentTarget.querySelector('object'), COLOR_STATE_BUTTON.Normal);
  document.getElementById('b_GeneralView').setAttribute('disabled', "");
})
// mouseOver chat
document.getElementById('b_chat').addEventListener("mouseover", (e) => { setMiniChat(); })

// ПОМОЩЬ
document.getElementById('b_help').addEventListener("click", (e) => {
  // if (e.currentTarget.classList.contains('button-tren-active')) {
  //   document.querySelector('.box-help').classList.add("opacity-1-Always");
  //   document.querySelector('.box-help').classList.add("box-time-padTop32");
  //   document.querySelector('.box-help .block-button').classList.add("z-index-1");
  //   document.querySelector('.box-help .backArea').classList.add('backArea-white-100')
  //   document.querySelector('.box-help .time-header').classList.add("time-header-opacity");
  // }
})
document.getElementById('b_help').querySelector('.click-button-tren').addEventListener("mouseover", (e) => {
  let currentAction = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
  if (currentAction.concentration) createConcentrationEffectCondition(currentAction.concentration);
})
document.getElementById('b_help').querySelector('.click-button-tren').addEventListener("mouseout", (e) => {
  if (document.querySelector('.concentration')) document.querySelector('.concentration').style.opacity = 0;
})
// КЛИК ЗАКРЫТЬ ПОМОЩЬ
document.querySelector('.box-help .time-header-button').addEventListener("click", clickCloseHelp)
Array.from(document.querySelectorAll('.help-buttons-no')).forEach((item) => {
  item.addEventListener("click", clickCloseHelperWIndow);
});
Array.from(document.querySelectorAll('.help-buttons-yes')).forEach((item) => {
  item.addEventListener("click", clickYesHelperWIndow);
});
// BIND mouseDown
document.querySelector('.box-help .time-header-title').onmousedown = (e) => {
  raiseUpBox(e);
  dragAndDrop(e, e.currentTarget.parentElement.parentElement /*box-time*/);
};

function clickCloseHelperWIndow(e) {
  let helperWindow = e.target.closest('.opacity-1-Always');
  helperWindow.classList.remove('z-index9');
  helperWindow.classList.remove("opacity-1-Always");
  helperWindow.classList.remove("opacity-1-Temp");

  helperWindow.ontransitionend = (e) => {
    helperWindow.classList.add('transition-0');
    helperWindow.querySelector('.block-button').classList.remove("z-index-1");
    helperWindow.classList.remove("box-time-padTop32");
    helperWindow.querySelector('.time-header').classList.remove("time-header-opacity");
    helperWindow.querySelector('.backArea').classList.remove("backArea-white-100");
    setStartPosition(helperWindow);
    helperWindow.ontransitionend = null;
  }

  let btnName = helperWindow.classList[0].substring(helperWindow.classList[0].indexOf('-') + 1);
  document.getElementById('b_' + btnName).classList.remove('button-tren-active');
  setNewFillButtonSVG(document.getElementById('b_' + btnName).querySelector('object'), COLOR_STATE_BUTTON.Normal);
}
function clickYesHelperWIndow(e) {
  let helperWindow = e.target.closest('.opacity-1-Always');
  helperWindow.classList.remove('z-index9');
  helperWindow.classList.remove("opacity-1-Always");
  helperWindow.classList.remove("opacity-1-Temp");

  helperWindow.ontransitionend = (e) => {
    helperWindow.classList.add('transition-0');
    helperWindow.querySelector('.block-button').classList.remove("z-index-1");
    helperWindow.classList.remove("box-time-padTop32");
    helperWindow.querySelector('.time-header').classList.remove("time-header-opacity");
    helperWindow.querySelector('.backArea').classList.remove("backArea-white-100");
    setStartPosition(helperWindow);
    helperWindow.ontransitionend = null;
  }

  let btnName = helperWindow.classList[0].substring(helperWindow.classList[0].indexOf('-') + 1);
  document.getElementById('b_' + btnName).classList.remove('button-tren-active');
  setNewFillButtonSVG(document.getElementById('b_' + btnName).querySelector('object'), COLOR_STATE_BUTTON.Normal);

  if (btnName === 'restart') {
    startTren(true);
  } else if (btnName === 'exit') {
    document.querySelector('.tren-container').style.opacity = 0;
    Array.from(document.querySelectorAll('.button-tren-active')).forEach(btn => {
      btn.querySelector('.click-button-tren').dispatchEvent(new Event('click'));
      btn.dispatchEvent(new Event('click'));
    })
  }
}

function clickCloseHelp(e) {
  if (document.getElementById('b_help').classList.contains('button-tren-active')) {
    document.getElementById('b_help').classList.remove('button-tren-active')
    setNewFillButtonSVG(document.getElementById('b_help').querySelector('object'), COLOR_STATE_BUTTON.Normal);
  }
  document.querySelector('.box-help').classList.remove('z-index9');
  document.querySelector('.box-help').classList.remove("opacity-1-Always");
  document.querySelector('.box-help').classList.remove("opacity-1-Temp");
  document.querySelector('.box-help').ontransitionend = (e) => {
    document.querySelector('.box-help').classList.add('transition-0');
    document.querySelector('.box-help .block-button').classList.remove("z-index-1");
    document.querySelector('.box-help').classList.remove("box-time-padTop32");
    document.querySelector('.box-help .time-header').classList.remove("time-header-opacity");
    document.querySelector('.box-help .backArea').classList.remove('backArea-white-100')
    setStartPosition(document.querySelector('.box-help'));
    document.querySelector('.box-help').ontransitionend = null;
  }
}
document.getElementById('b_reference').addEventListener("click", (e) => {
  document.querySelector('.section-copy').style.opacity = e.currentTarget.classList.contains('button-tren-active') ? 1 : 0;
  document.querySelector(`.${e.currentTarget.getAttribute('window-interface')}`).classList.toggle('opacity-1-Temp', false);
  document.querySelector(`.${e.currentTarget.getAttribute('window-interface')}`).classList.toggle('transition-0', true);
})
document.getElementById('b_reference').addEventListener("mouseover", (e) => {
  if (document.querySelector('.tren-ui-long')) {
    document.querySelector('.box-info').classList.remove('opacity-1-Temp');
    document.querySelector('.box-info').classList.remove('opacity-1-Always');
  }
});


document.getElementById('b_exit').addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains('button-tren-active')) {
    document.querySelector('.box-exit').classList.add("opacity-1-Always");
    document.querySelector('.box-exit').classList.add('backArea-white-100')
  }
  else {
    document.querySelector('.box-exit').classList.remove("opacity-1-Always");
    document.querySelector('.box-exit').classList.remove("opacity-1-Temp");
    document.querySelector('.box-exit').classList.remove('backArea-white-100')
  }
})

document.getElementById('b_scenario').addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains('button-tren-active')) {
    document.querySelector('.box-scenario').classList.add("opacity-1-Always");
    document.querySelector('.box-scenario').classList.add('backArea-white-100')
  }
  else {
    document.querySelector('.box-scenario').classList.remove("opacity-1-Always");
    document.querySelector('.box-scenario').classList.remove("opacity-1-Temp");
    document.querySelector('.box-scenario').classList.remove('backArea-white-100')
  }
})


function setTextScenario(numberScenario) {
  let listItem = document.querySelector('.box-scenario-list')
  while (listItem.lastElementChild) {
    listItem.removeChild(listItem.lastElementChild);
  }
  tempActions[numberScenario].forEach(element => {
    if (element.scenarioText !== undefined) {
      createCustomElement("div", element.scenarioText, { "class": "box-scenario-text" }, listItem);
    }
  });
}