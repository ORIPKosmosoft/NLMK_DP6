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
  devHelper.trenVals.activeMeshs = [...tempActions.flatMap(scenarioArr => scenarioArr.map(action => action.action.target3D))];
}

function startTren() {
  // расписать поведение интерфейса при начале тренажёра в зависимости от обучения/контроля
  if (devHelper.trenVals.type === 'learn') {

  } else {

  }
  devHelper.trenVals.timers.allTime = devHelper.trenVals.timers.allTimeHelper = devHelper.trenVals.timers.scenarioTimeHelper =
    devHelper.trenVals.timers.scenarioTime = devHelper.trenVals.timers.actionTime = devHelper.trenVals.timers.actionTimeHelper = 0;
  devHelper.trenVals.currentAction = 0;
  devHelper.trenVals.ended = false;
  devHelper.trenVals.waitingInput = true;
  window.requestAnimationFrame(trenTimeTick);
}
function trenTimeTick(timeStamp) {
  if (devHelper.trenVals.scenario !== undefined) {
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
          if (devHelper.trenVals.waitingInput === false) devHelper.trenVals.waitingInput = true;
        } else {
          if (nextAction.action && nextAction.action.window2D) {
            // for (let key in nextAction.action.window2D.elements) {
            //   console.log(nextAction.action.window2D.elements[key]);
            //   if (nextAction.action.window2D.elements.hasOwnProperty(key))
            //     changeSvgElem(nextAction.action.window2D.elements[key]);
            // }
            devHelper.trenVals.timers.actionTimeHelper = 0;
            nextAction.passed = true;
            devHelper.trenVals.waitingInput = false;
          }
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

function trenClickOnSvgElem(SvgElemHelper) {
  if (devHelper.trenVals.waitingInput === true) {
    let currentActonObject = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
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












const Roles = {
  "Система": "messageSystem",
  "Газовщик": "messageMy",
  "Работник": "message",
  "Ошибка": "messageError"
}
function addTrenValsMessages(elem) {
  devHelper.trenVals.messages.push(elem);
}
function sendMessage(Sender, TextMessage) {
  let message = createCustomElement("div", "", { "class": Roles[Sender] })
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
    document.querySelector('.box-chat-window').classList.add('transition-0');
    document.querySelector('.block-button').classList.remove("z-index-1");
    document.querySelector('.box-time').classList.remove("box-time-padTop32");
    document.querySelector('.time-header').classList.remove("time-header-opacity");
    document.querySelector('.box-time .backArea').classList.remove('backArea-white-100')
    setStartPosition(e.currentTarget);
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
    setTimeout(() => {
      document.querySelector('.box-chat-window').classList.remove('transition-0');
    }, 500);
  }
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

// TIMER
{
  // BIND mouseDown
  document.querySelector('.dialogHeader .time-header-title').onmousedown = (e) => {
    raiseUpBox(e);
    dragAndDrop(e, e.currentTarget.parentElement.parentElement);
  };
  function setLifeTime(time) {
    devHelper.trenVals.timers.lifeTime = time;
    document.querySelector(".time-hour").textContent = time.split(":")[0];
    document.querySelector(".time-minute").textContent = time.split(":")[1];
    document.querySelector(".time-second").textContent = time.split(":")[2];
  }
  function setCounterTime(time) {
    document.querySelector(".dialogMessageWatch .time-hour").textContent = time.split(":")[0];
    document.querySelector(".dialogMessageWatch .time-minute").textContent = time.split(":")[1];
  }
  function newStateTimer() {
    document.querySelector(".dialogMessageWatch .time-hour").classList.toggle("textColorGreen");
    document.querySelector(".dialogMessageWatch .time-colon").classList.toggle("textColorGreen");
    document.querySelector(".dialogMessageWatch .time-minute").classList.toggle("textColorGreen");
    document.querySelector(".dialogMessageWatch .dialogTimers-line").classList.toggle("disabled-line");
    document.querySelector(".dialogTimers-play").classList.toggle("disabled-play");
  }

  setLifeTime(devHelper.trenVals.timers.lifeTime);

  // Открыть таймер // FIX
  document.querySelector(".time-oclock").addEventListener('click', (e) => {
    document.querySelector(".dialogMessageWatch").classList.add('opacity-1-Always');
    document.querySelector('.dialogMessageWatch').classList.remove('opacity-0');

    let myBlock = document.querySelector('.box-time');
    let magicW = 1;
    let magicH = 1;
    if (String(document.querySelector('.box-time').style.left).match('vw')) {
      magicW = (window.innerWidth / 100);
    }
    document.querySelector('.dialogMessageWatch').style.left = parseInt(document.querySelector('.box-time').style.left) * magicW + 330 + 'px';
    if (parseInt(myBlock.style.left) * magicW + 330 + 300 >= window.innerWidth) {
      document.querySelector('.dialogMessageWatch').style.left = parseInt(document.querySelector('.box-time').style.left) * magicW - 330 + 'px';
    }


    if (String(document.querySelector('.box-time').style.top).match('vh')) {
      magicH = (window.innerHeight / 100);
    }
    console.log(document.querySelector('.box-time').style.top);
    console.log(magicH);
    document.querySelector('.dialogMessageWatch').style.top = parseInt(document.querySelector('.box-time').style.top) * magicH + 'px';
    if (parseInt(myBlock.style.top) * magicH + 275 >= window.innerHeight) {
      document.querySelector('.dialogMessageWatch').style.top = parseInt(window.innerHeight) * magicH - 275 + 'px';
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
      // console.log(document.querySelector(`.dialogTimers-hours[dropDown="${parrent.getAttribute("dropDown")}"]`).children[0]);
      document.querySelector(`.dialogTimers-hours[dropDown="${parrent.getAttribute("dropDown")}"]`).children[0].textContent = e.currentTarget.textContent; // P - text
      document.querySelector(`.section-dropDown[dropDown="${parrent.getAttribute("dropDown")}"]`).classList.remove("visibleDrooDown");
      document.querySelector(".dialogMessageWatch .time")
        .querySelector(`[dropDown="${parrent.getAttribute("dropDown")}"]`).textContent = e.currentTarget.textContent;

    })
  })
  // Клик Плей таймер
  document.querySelector(".dialogTimers-play").addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains("disabled-play")) {
      return;
    }
    document.querySelector(".dialogMessageWatch .time-hour").textContent = document.querySelector('.dialogMessageWatch .dialogTimers-hours[dropDown="1"] p').textContent;
    document.querySelector(".dialogMessageWatch .time-minute").textContent = document.querySelector('.dialogMessageWatch .dialogTimers-hours[dropDown="2"] p').textContent;
    newStateTimer();
    startTimer();
  })

  function getLifeTime_Date() {
    let currentDateTime = new Date();
    currentDateTime.setSeconds(Number(devHelper.trenVals.timers.lifeTime.split(":")[2]));
    currentDateTime.setMinutes(Number(devHelper.trenVals.timers.lifeTime.split(":")[1]));
    currentDateTime.setHours(Number(devHelper.trenVals.timers.lifeTime.split(":")[0]));
    return currentDateTime;
  }
  function getCounterTime_Date() {
    let currentDateTime = new Date();
    currentDateTime.setSeconds(Number(0));
    currentDateTime.setMinutes(Number(document.querySelector(".dialogMessageWatch .time-minute").textContent));
    currentDateTime.setHours(Number(document.querySelector(".dialogMessageWatch .time-hour").textContent));
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
  function startTimer() {
    timePassed = 0;
    timerInterval = null;

    let currentDateTime = getLifeTime_Date().getTime();
    let counterDateTime = getCounterTime_Date().getTime();
    let finishDateTime = getFinishTime_Date(currentDateTime, counterDateTime).getTime();
    let counterStep = (finishDateTime - currentDateTime) / _step;

    // console.log(currentDateTime);
    // console.log(counterDateTime);
    // console.log(finishDateTime);
    // console.log(counterStep);

    timerInterval = setInterval(() => {
      if (_timeInteval === timePassed) {
        //setLifeTime(getMyTime(finishDateTime));   // FINAL TIME VIEW
        onTimesUp();
        return;
      }

      currentDateTime += counterStep;
      counterDateTime -= counterStep;

      setLifeTime(String(getMyTime(new Date(msToTime(currentDateTime)))));    // время системы
      setCounterTime(String(getMyTime(new Date(msToTime(counterDateTime))))); // время таймера
      function setLifeTimeOn3D() { }  // время 3D системы

      timePassed += _stepInteval;
    }, _stepInteval);
  }

}

// CHAT
{
  setMiniChat();

  function setMiniChat() {
    let miniChat = document.querySelector('.box-chat-window-mini');
    if (!miniChat) {
      return;
    }
    let mes = document.querySelector('.box-chat-window .chat-mini').children;
    for (let i = 0; i < mes.length; i++) {
      mes[i].classList.add('display-none');
    }
    mes[0].classList.remove('display-none');
    miniChat.style.width = miniChat.querySelector('.chat').children[0].getBoundingClientRect().width + 15 + 26 + 'px';
    miniChat.style.height = miniChat.querySelector('.chat').children[0].getBoundingClientRect().height + 35 + 18 + 'px';
  }
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

const COLOR_STATE_BUTTON = {
  Active: "#ffffff",
  Normal: "#939393"
}
// Смена СВГ в кнопке
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

// БОЛЬШОЙ БИНД НА СМЕНУ ЦВЕТА КНОПОК // НОВОЕ СВП В 1Ю КНОПКУ
Array.from(document.querySelectorAll('.box-tren-ui .line-tren')).forEach((item) => {
  item = item.querySelector('button');
  item.addEventListener('click', (e) => {
    if (e.currentTarget.id == "b_collapseMenu") { // ОСОБОЕ УСЛОВИЕ ДЛЯ "РАЗВЕРНУТЬ"
      if (e.currentTarget.classList.contains('button-tren-active')) {
        e.currentTarget.classList.remove('button-tren-active');
      }
      else {
        e.currentTarget.classList.add('button-tren-active');
      }
      newImageCollapseMenu(e);
      return;
    }
    else if (e.currentTarget.classList.contains('button-tren-active')) {


      if (e.currentTarget.hasAttribute('close-func')) {
        e.currentTarget.getAttribute('close-func').split(' ').forEach((item) => {
          window[item](e);
        })
      }

      e.currentTarget.classList.remove('button-tren-active');
      setNewFillButtonSVG(item.querySelector('object'), COLOR_STATE_BUTTON.Normal);
      return;
    }

    e.currentTarget.classList.add('button-tren-active');
    setNewFillButtonSVG(item.querySelector('object'), COLOR_STATE_BUTTON.Active);
  })
});
//  // БОЛЬШОЙ БИНД НА СМЕНУ ЦВЕТА КНОПОК
Array.from(document.querySelectorAll('[window-interface]')).forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    document.querySelector(`.${e.currentTarget.getAttribute('window-interface')}`).classList.add('opacity-1-Temp');
    document.querySelector(`.${e.currentTarget.getAttribute('window-interface')}`).classList.remove('transition-0');
  });
  item.addEventListener('mouseout', (e) => {
    document.querySelector(`.${e.currentTarget.getAttribute('window-interface')}`).classList.remove('opacity-1-Temp');
  });
})


// Отображение РАЗВЕРНУТЬ
document.getElementById('b_collapseMenu').addEventListener("mouseover", (e) => {
  if (document.querySelector('.tren-ui-long')) {
    document.querySelector('.box-collapse').classList.remove('opacity-1-Temp');
    document.querySelector('.box-collapse').classList.remove('opacity-1-Always');
  }
  else {

  }
});
function setNewPositionWindow(elem, state) {
  if (state) {
    elem.style.left = elem.getAttribute('sx2');
    elem.style.top = elem.getAttribute('sy');
  }
  else {
    elem.style.left = elem.getAttribute('sx');
    elem.style.top = elem.getAttribute('sy');
  }
}
// ОТКРЫТЬ/ЗАКРЫТЬ МЕНЮ
document.getElementById('b_collapseMenu').addEventListener("click", (e) => {
  if (!document.querySelector('.tren-ui').classList.contains('tren-ui-long')) {
    document.querySelector('.tren-ui').classList.add('tren-ui-long');
    document.querySelector('.box-collapse').classList.remove('opacity-1-Temp');
    Array.from(document.querySelectorAll('[window-interface]')).forEach((item) => {
      item = document.querySelector(`.${item.getAttribute('window-interface')}`);
      setNewPositionWindow(item, true);
    });
  }
  else {
    document.querySelector('.tren-ui').classList.remove('tren-ui-long');
    Array.from(document.querySelectorAll('[window-interface]')).forEach((item) => {
      item = document.querySelector(`.${item.getAttribute('window-interface')}`);
      setNewPositionWindow(item, false);
    });
  }
});

// КЛИК ЧАСЫ
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
