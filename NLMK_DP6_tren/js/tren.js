/*                TODO
----------------------------------------------------
Сделать првоерку на все действия на старттайм
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
    }
  })
  devHelper.trenVals.activeMeshs = tempActions.flatMap(scenarioArr =>
    scenarioArr.map(action => action.action?.target3D)
  ).filter(item => item !== null);
}

function startTren() {
  if (devHelper.trenVals.type === 'learn') {
    if (devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].text)
      sendMessage(devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].sender, devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].text);
    if (devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].scenarioText)
      sendMessage(devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].sender, devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].scenarioText);
  } else {

  }
  devHelper.trenVals.timers.allTime = devHelper.trenVals.timers.allTimeHelper = devHelper.trenVals.timers.scenarioTimeHelper =
    devHelper.trenVals.timers.scenarioTime = devHelper.trenVals.timers.actionTime = devHelper.trenVals.timers.actionTimeHelper = 0;
  devHelper.trenVals.currentAction = 0;
  devHelper.trenVals.ended = false;
  devHelper.trenVals.waitingInput = true;
  takeStartingState();
  if (devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].human && devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].human &&
    devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].startTime === 0) {
    devHelper.trenVals.waitingInput = true;
  } else devHelper.trenVals.waitingInput = false;

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
        if (currentActonObject) document.querySelector('.info-tren').innerHTML += `<p>нужно кликнуть на ${currentActonObject.action.target2D};</p>`;
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
          if (nextAction.lifeTime) startTimerToStep(nextAction.lifeTime, false);
          if (nextAction.action && nextAction.action.window2D) {
            for (let key in nextAction.action.window2D.elements) {
              if (nextAction.action.window2D.elements.hasOwnProperty(key))
                changeSvgElem(nextAction.action.window2D.elements[key]);
            }
            updateSvgTextures();
          }
          if (nextAction.text) sendMessage(nextAction.sender, nextAction.text);
          if (nextAction.scenarioText) sendMessage(nextAction.sender, nextAction.scenarioText);
          devHelper.trenVals.timers.actionTimeHelper = 0;
          nextAction.passed = true;
          devHelper.trenVals.waitingInput = false;
        }
      }
      let lastAction = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false));
      if (lastAction === undefined) trenFinish();
    }
    window.requestAnimationFrame(trenTimeTick);
  }
}

function trenClickOnMesh(Mesh) {
  if (devHelper.trenVals.waitingInput === true) {
    let currentActonObject = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[devHelper.trenVals.currentAction];// старый код
    if (currentActonObject.action && currentActonObject.action.target3D && currentActonObject.action.target3D === Mesh.name) {
      if (currentActonObject.action.rotation && Object.keys(currentActonObject.action.rotation).length > 0) {
        if (currentActonObject.action.rotation.y && currentActonObject.action.rotation.y !== '')
          moveRotationMesh(Mesh, 'r', currentActonObject.action.rotation.y, 'y');
        if (currentActonObject.action.rotation.z && currentActonObject.action.rotation.z !== '')
          moveRotationMesh(Mesh, 'r', currentActonObject.action.rotation.z, 'z');
        if (currentActonObject.action.rotation.x && currentActonObject.action.rotation.x !== '')
          moveRotationMesh(Mesh, 'r', currentActonObject.action.rotation.x, 'x');
      }
      if (currentActonObject.action.position && Object.keys(currentActonObject.action.position).length > 0) {
        if (currentActonObject.action.position.x && currentActonObject.action.position.x !== '')
          moveRotationMesh(Mesh, 'p', currentActonObject.action.position.x, 'x');
        if (currentActonObject.action.position.y && currentActonObject.action.position.y !== '')
          moveRotationMesh(Mesh, 'p', currentActonObject.action.position.y, 'y');
        if (currentActonObject.action.position.z && currentActonObject.action.position.z !== '')
          moveRotationMesh(Mesh, 'p', currentActonObject.action.position.z, 'z');
      }
      devHelper.trenVals.waitingInput = false;
    } else {
      if (devHelper.dev.enable === true) console.warn(`Клик на ${Mesh.name} в действии ${devHelper.trenVals.currentAction} неверный.`);
    }
  }
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
      devHelper.trenVals.timers.actionTimeHelper = 0;
      currentActonObject.passed = true;
      devHelper.trenVals.waitingInput = false;
    }
  }
}

function trenFinish() {
  devHelper.trenVals.ended = true;
  if (devHelper.dev.enable === true && document.querySelector('.info-tren'))
    document.querySelector('.info-tren').innerHTML = `Вы успешно завершили сценарий ${devHelper.trenVals.scenario}. Ваше время затраченное на прохождение тренажёра = ${devHelper.trenVals.timers.allTime / 1000} сек.`;
  if (devHelper.dev.enable === true) console.warn(`Вы успешно завершили сценарий ${devHelper.trenVals.scenario}. Ваше время затраченное на прохождение тренажёра = ${devHelper.trenVals.timers.allTime / 1000} сек.`);
}

function takeStartingState() {
  if (startState2D[devHelper.trenVals.scenario] && startState2D[devHelper.trenVals.scenario].length > 0) {
    startState2D[devHelper.trenVals.scenario].forEach(element => {
      if (element.name) changeSvgElem(element);
    });
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
  // if (document.querySelector('.box-spring-button.display-none')) {
  //   document.querySelector('.box-spring-button.display-none').classList.remove('display-none');
  // }


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

  // 3d?
  // schemes?

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
        //setLifeTime(getMyTime(finishDateTime));   // FINAL TIME VIEW
        onTimesUp();
        // changeSvgElem({ name: 'lifetime', text: devHelper.trenVals.timers.lifeTime });
        // updateSvgTextures();
        return;
      }
      currentDateTime += counterStep;
      counterDateTime -= counterStep;
      setLifeTime(String(getMyTime(new Date(msToTime(currentDateTime)))));    // время системы
      setCounterTime(String(getMyTime(new Date(msToTime(counterDateTime))))); // время таймера
      change3DTime(String(getMyTime(new Date(msToTime(currentDateTime)))));   // время 3D системы
      // setTimeSvgScheme();                                                      // время на схемах
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
        //setLifeTime(getMyTime(finishDateTime));   // FINAL TIME VIEW
        onTimesUp();
        // changeSvgElem({ name: 'lifetime', text: devHelper.trenVals.timers.lifeTime });
        // updateSvgTextures();
        return;
      }
      currentDateTime += counterStep;
      // counterDateTime -= counterStep;
      setLifeTime(String(getMyTime(new Date(msToTime(currentDateTime)))));    // время системы
      // setCounterTime(String(getMyTime(new Date(msToTime(counterDateTime))))); // время таймера
      change3DTime(String(getMyTime(new Date(msToTime(currentDateTime)))));   // время 3D системы
      // setTimeSvgScheme();                                                      // время на схемах
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
  let window = document.querySelector(`.${item.getAttribute('window-interface')}`)
  window.classList.add('transition-0');
  let b_center = item.getBoundingClientRect().height / 2;
  let w_center = window.getBoundingClientRect().height / 2;
  window.style.top = ConvertPxToVh(item.getBoundingClientRect().y + (b_center - w_center)) + 'vh';
  setTimeout(() => { window.classList.remove('transition-0'); }, 50);
}

// БОЛЬШОЙ БИНД НА СМЕНУ ЦВЕТА КНОПОК // НОВОЕ СВП В 1Ю КНОПКУ  // КЛИК
Array.from(document.querySelectorAll('.box-tren-ui .line-tren')).forEach((item) => {
  let b_action = item.querySelector('.click-button-tren');
  item = item.querySelector('button');
  b_action.addEventListener('click', (e) => {
    if (item.hasAttribute('disabled')) {  // отключен
      return;
    }

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

    item.classList.add('button-tren-active');
    setNewFillButtonSVG(item.querySelector('object'), COLOR_STATE_BUTTON.Active);
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
    document.querySelector(`.${item.getAttribute('window-interface')}`).classList.add('opacity-1-Temp');
    document.querySelector(`.${item.getAttribute('window-interface')}`).classList.remove('transition-0');
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
    document.querySelector('.tren-ui').classList.add('tren-ui-long');
    document.querySelector('.box-collapse').classList.remove('opacity-1-Temp');
    Array.from(document.querySelectorAll('[window-interface]')).forEach((item) => {
      item = document.querySelector(`.${item.getAttribute('window-interface')}`);
      setNewPositionWindow(item, true);
    });
    setNewPositionWindow(document.querySelector('.dialogMessageWatch'), true);
  }
  else {
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
  animMoveCamera(devHelper.model3DVals.cameraPositions[0]);
  setNewFillButtonSVG(e.currentTarget.querySelector('object'), COLOR_STATE_BUTTON.Normal);
  document.getElementById('b_GeneralView').setAttribute('disabled', "");
})
// mouseOver chat
document.getElementById('b_chat').addEventListener("mouseover", (e) => { setMiniChat(); })

// ПОМОЩЬ
document.getElementById('b_help').addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains('button-tren-active')) {
    document.querySelector('.box-help').classList.add("opacity-1-Always");
    document.querySelector('.box-help').classList.add("box-time-padTop32");
    document.querySelector('.box-help .block-button').classList.add("z-index-1");
    document.querySelector('.box-help .backArea').classList.add('backArea-white-100')
    document.querySelector('.box-help .time-header').classList.add("time-header-opacity");
  }
})
// КЛИК ЗАКРЫТЬ ПОМОЩЬ
document.querySelector('.box-help .time-header-button').addEventListener("click", clickCloseHelp)
document.querySelector('.help-buttons-no').addEventListener("click", clickCloseHelp)
// BIND mouseDown
document.querySelector('.box-help .time-header-title').onmousedown = (e) => {
  raiseUpBox(e);
  dragAndDrop(e, e.currentTarget.parentElement.parentElement /*box-time*/);
};

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


document.getElementById('b_exit').addEventListener("click", (e) => {
  document.querySelector('.section').style.left = 0;
  document.querySelector('.header').style.top = 0;
  document.querySelector('.section').style.width = "8vw";
  document.querySelector('.tren-container').style.visibility = "hidden";
  document.querySelector('.tren-container').style.transition = "none";
  document.querySelector('.tren-container').style.opacity = 1;

  setNewFillButtonSVG(document.querySelector('.nav-icon.nav-icon-active').querySelector('object'), COLOR_STATE_BUTTON.Normal);
  document.querySelector('.nav-icon.nav-icon-active').classList.remove('nav-icon-active');

  Array.from(document.querySelectorAll('.opacity-1-Always')).forEach(element => {
    element.classList.remove('box-time-padTop32');
    element.classList.remove('opacity-1-Always');
    element.classList.remove('visibility-visible');
    element.classList.remove('z-index9');
    element.classList.remove('backArea-white-100');
  });
  Array.from(document.querySelectorAll('.backArea-white-100')).forEach(element => {
    element.classList.remove('backArea-white-100');
  });
  Array.from(document.querySelectorAll('.time-header-opacity')).forEach(element => {
    element.classList.remove('backArea-white-100');
  });
  Array.from(document.querySelectorAll('.button-tren-active')).forEach(element => {
    element.classList.remove('button-tren-active');
    setNewFillButtonSVG(element.querySelector('object'), COLOR_STATE_BUTTON.Normal);
  });

})
document.getElementById('b_scenario').addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains('button-tren-active')) {
    document.querySelector('.box-scenario').classList.add("opacity-1-Always");
    // document.querySelector('.box-scenario').classList.add("visibility-visible");
    document.querySelector('.box-scenario').classList.add('backArea-white-100')
  }
  else {
    document.querySelector('.box-scenario').classList.remove("opacity-1-Always");
    document.querySelector('.box-scenario').classList.remove("opacity-1-Temp");
    document.querySelector('.box-scenario').classList.remove('backArea-white-100')
  }
})

setTextScenario(0);
function setTextScenario(numberScenario) {
  let listItem = document.querySelector('.box-scenario-list')
  while (listItem.lastElementChild) {
    listItem.removeChild(listItem.lastElementChild);
  }
  tempActions[numberScenario].forEach(element => {
    if (element.text !== undefined) {
      createCustomElement("div", element.text, { "class": "box-scenario-text" }, listItem);
    }
  });



}