/*                TODO
----------------------------------------------------

----------------------------------------------------
*/
let startFrameStamp = undefined, actionFrameStamp = undefined;
function loadTrenActions() {
  devHelper.trenVals.scenarioArr = [];
  Array.from(document.querySelectorAll('.drop-item')).forEach((Element, Index) => {
    let tempObjTren = {
      name: Element.querySelector('span').innerText,
    }
    devHelper.trenVals.scenarioArr.push(tempObjTren);
    if (tempActions[Index]) tempObjTren.actions = tempActions[Index];
  })
  devHelper.trenVals.activeMeshs = [...tempActions.flatMap(scenarioArr => scenarioArr.map(action => action.action.target3D))];
}

function startTren() {
  // расписать поведение интерфейса при начале тренажёра в зависимости от обучения/контроля
  if (devHelper.trenVals.type === 'learn') {

  } else {

  }
  startFrameStamp = actionFrameStamp = undefined;
  devHelper.trenVals.realTimer = 0;
  devHelper.trenVals.currentAction = 0;
  devHelper.trenVals.currentActionTime = 0;
  devHelper.trenVals.scenarioTimer = 0;
  devHelper.trenVals.ended = false;
  devHelper.trenVals.waitingInput = true;
  window.requestAnimationFrame(trenTimeTick);
}

function trenTimeTick(timeStamp) {
  if (devHelper.trenVals.scenario !== undefined) {
    if (startFrameStamp === undefined) startFrameStamp = timeStamp;
    devHelper.trenVals.realTimer += Math.round(timeStamp - startFrameStamp);
    if (devHelper.trenVals.ended === false) {
      if (devHelper.trenVals.waitingInput === false) {
        if (actionFrameStamp === undefined) actionFrameStamp = timeStamp;
        devHelper.trenVals.currentActionTime = Math.round(timeStamp - actionFrameStamp);;
        devHelper.trenVals.scenarioTimer = Math.round(timeStamp - actionFrameStamp);;
      } else {

      }

      if (devHelper.trenVals.currentActionTime >= devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[devHelper.trenVals.currentAction].duration * 1000) {
        devHelper.trenVals.waitingInput = true;
        actionFrameStamp = undefined;
        devHelper.trenVals.currentAction++;
        devHelper.trenVals.currentActionTime = 0;
        if (devHelper.dev.enable === true) console.warn(`Действие ${devHelper.trenVals.currentAction - 1} успешно завершено.`);
        if (devHelper.trenVals.currentAction > devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.length - 1) trenFinish();
      }
      //   if (devHelper.trenVals.realTimer % 1000 === 0) {
      //     const currentTime = new Date();
      //     const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
      //     console.log(`Текущее время: ${formattedTime}. Время сценария ${devHelper.trenVals.realTimer / 1000}.`);
      //     console.log(currentTime.getMilliseconds());
      //   }
    }
    window.requestAnimationFrame(trenTimeTick);
  }
}

function trenClickOnMesh(Mesh) {
  if (devHelper.trenVals.waitingInput === true) {
    let currentActonObject = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[devHelper.trenVals.currentAction];
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
      if (devHelper.dev.enable === true) console.warn(`Клик на ${Mesh.name} в действии ${devHelper.trenVals.currentAction + 1} неверный.`);
    }
  }
}

function trenClickOnSvgElem(SvgElemHelper) {
  if (devHelper.trenVals.waitingInput === true) {
    let currentActonObject = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[devHelper.trenVals.currentAction];
    if (currentActonObject.action && currentActonObject.action.target2D && currentActonObject.action.target2D === SvgElemHelper.id) {
      if (currentActonObject.action.window2D && currentActonObject.action.window2D !== '') {
        let posCoors = currentActonObject.action.window2D.position;
        let displayMesh = devHelper.model3DVals.svgDisplays.meshs.find(mesh => mesh.positionIndex === devHelper.model3DVals.currentPosition);
        changeSvgtexture(displayMesh, displayMesh.material.diffuseTexture.name.substring(displayMesh.material.diffuseTexture.name.indexOf('_') + 1), false, currentActonObject.action.window2D.name, posCoors);
        revialSvgObject(devHelper.model3DVals.currentPosition, currentActonObject.action.window2D.name, currentActonObject.action.window2D.helperVals);
        // console.log(devHelper.model3DVals.currentPosition, currentActonObject.action.window2D.name, posCoors);
      }
    }
  }
}

function trenFinish() {
  devHelper.trenVals.ended = true;
  if (devHelper.dev.enable === true) console.warn(`Вы успешно завершили сценарий ${devHelper.trenVals.scenario}. Ваше время затраченное на прохождение тренажёра = ${devHelper.trenVals.realTimer / 1000} сек.`);
}












const Roles = {
  "Система": "messageSystem",
  "Газовщик": "messageMy",
  "Работник": "message",
  "Ошибка": "messageError"
}
function addTrenValsMessages(elem){
  devHelper.trenVals.messages.push(elem);
}
function sendMessage(Sender, TextMessage){
  let message = createCustomElement("div", "", {"class": Roles[Sender]})
  let top = createCustomElement("div", "", {"class": "topMessage"}, message)
  switch (Roles[Sender]) {
    case "messageError":
      createCustomElement("div", Sender, { "class": "authorMessage" }, top)
      break;
    case "messageMy":
      createCustomElement("div", (String(devHelper.trenVals.lifeTime).substring(0, 5)), { "class": "timeMessage" }, top)
      createCustomElement("div", Sender, { "class": "authorMessage" }, top)
      break;
    default:
      createCustomElement("div", Sender, { "class": "authorMessage" }, top)
      createCustomElement("div", (String(devHelper.trenVals.lifeTime).substring(0, 5)), { "class": "timeMessage" }, top)
      break;
  }
  createCustomElement("div", TextMessage, {"class": "textMessage"}, message)
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
function setNewStateButtonSVG(objectSVG, color) {
  Array.from(objectSVG.contentDocument.querySelectorAll('[fill]')).forEach(element => {
    element.setAttribute('fill', color)
  });
}


function dragAndDrop(e, moveWindow) {
  moveWindow.classList.add('transition-0');
  let coords = getCoords(moveWindow);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;
  moveAt(e);
  function moveAt(e) {
    moveWindow.style.left = e.pageX - shiftX + 'px';
    moveWindow.style.top = e.pageY - shiftY + 'px';
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





// TIME
{
  // КЛИК ЗАКРЫТЬ
  document.querySelector('.time-header-button').addEventListener("click", (e)=>{
    document.getElementById('b_oclock').classList.remove('button-tren-active');
    setNewStateButtonSVG(document.getElementById('b_oclock').querySelector('object'), COLOR_STATE_BUTTON.Normal);

    document.querySelector('.block-button').classList.remove("z-index-1");
    document.querySelector('.box-time').classList.remove("opacity-1");
    document.querySelector('.box-time').ontransitionend = (e)=>{
      document.querySelector('.box-time').classList.remove("box-time-padTop32");
      document.querySelector('.time-header').classList.remove("time-header-opacity");
      document.querySelector('.box-time .backArea').classList.remove('backArea-white-100')
      document.querySelector('.box-time').ontransitionend = (e)=>{}
      setStartPosition(e.currentTarget);
    }
    // document.querySelector('.box-time').addEventListener("transitionend", removeCSSTime);
  })
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
    devHelper.trenVals.lifeTime = time;
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

  setLifeTime(devHelper.trenVals.lifeTime);
  // Открыть таймер
  document.querySelector(".time-oclock").addEventListener('click', (e) => {
    document.getElementsByClassName("dialogMessageWatch")[0].style.display = "flex";
    let myBlock = document.querySelector('.box-time');

    console.log(myBlock.style.left);
    console.log(window.innerWidth);
    if (parseInt(myBlock.style.left) + 330 + 300 >= window.innerWidth) {
      document.querySelector('.dialogMessageWatch').style.left = parseInt(document.querySelector('.box-time').style.left) - 330 + 'px';
    }
    else {
      document.querySelector('.dialogMessageWatch').style.left = parseInt(document.querySelector('.box-time').style.left) + 330 + 'px';
    }
    document.querySelector('.dialogMessageWatch').style.top = document.querySelector('.box-time').style.top;

    //document.getElementsByClassName("dialogMessageWatch")[0].style.left = "";
  })
  // Закрыть таймер. Обнулить таймер
  document.querySelector(".dialogHeader p").addEventListener("click", (e) => {
   
    document.getElementsByClassName("dialogMessageWatch")[0].style.display = "none";
    
    document.querySelector(".dialogMessageWatch .time-hour").textContent = "00";
    document.querySelector(".dialogMessageWatch .time-minute").textContent = "00";
    document.querySelectorAll('.visibleDrooDown').forEach(element => {element.classList.remove("visibleDrooDown");});
    document.querySelector(".dialogTimers-hours[dropDown='1'] p").textContent = "00"
    document.querySelector(".dialogTimers-hours[dropDown='2'] p").textContent = "00";
          
  })

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
    currentDateTime.setSeconds(Number(devHelper.trenVals.lifeTime.split(":")[2]));
    currentDateTime.setMinutes(Number(devHelper.trenVals.lifeTime.split(":")[1]));
    currentDateTime.setHours(Number(devHelper.trenVals.lifeTime.split(":")[0]));
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

  // клик закрыть
  document.querySelector('.box-chat-window .chat-header-button').addEventListener("click", (e)=>{
    setNewStateButtonSVG(document.getElementById('b_chat').querySelector('object'), COLOR_STATE_BUTTON.Normal);
    document.getElementById('b_chat').classList.remove('button-tren-active');

    document.querySelector('.box-chat-window').classList.remove("opacity-1"); // БОЛЬШОЕ ОКНО
    document.querySelector('.box-chat-window .block-button').classList.remove("z-index-1"); // БЛОКИРОВКА КНОПОК
    document.querySelector('.box-chat-window .box-chat-header').classList.remove("opacity-1"); // ЛИНИЯ С НАЗВАНИЕ И Х
    
    document.querySelector('.box-chat-window').ontransitionend = (e)=>{
      document.querySelector('.box-chat-window').classList.remove("visibility-visible");
      e.currentTarget.ontransitionend = (e)=>{};
      document.querySelector('.chat').scrollTop = 0;
      setStartPosition(e.currentTarget);
      document.querySelector('.box-chat-window .chat').classList.add("chat-mini");
      document.querySelector('.box-chat-window').classList.add("box-chat-window-mini");
      document.querySelector('.box-chat-window .backArea').classList.remove('backArea-white-100')
      setMiniChat();
    }
 
   
  });

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

// Main INTEFACE  
{
  //  setNewStateButtonSVG(e.currentTarget.querySelector('object'), COLOR_STATE_BUTTON.Active);
  //  setNewStateButtonSVG(e.currentTarget.querySelector('object'), COLOR_STATE_BUTTON.Normal);
  function setNewStateButtonSVG(objectSVG, color) {
    Array.from(objectSVG.contentDocument.querySelectorAll('[fill]')).forEach(element => {
      element.setAttribute('fill', color)
    });
  }
  

  function newImageCollapseMenu(e) {
    let object = e.currentTarget.querySelector('object');
    if (object.getAttribute('icon') == "svg_menu_2") {
      object.setAttribute('icon', "svg_menu_1")
      object.contentDocument.querySelector('svg').innerHTML = document.getElementById('svg_menu_1').contentDocument.querySelector('svg').innerHTML;     
    }
    else{
      object.setAttribute('icon', "svg_menu_2")
      object.contentDocument.querySelector('svg').innerHTML = document.getElementById('svg_menu_2').contentDocument.querySelector('svg').innerHTML;
    }
  }

  // ОТКРЫТЬ/ЗАКРЫТЬ МЕНЮ
  document.getElementById('b_collapseMenu').addEventListener("click", (e) => {
    document.querySelector('.tren-ui').classList.toggle('tren-ui-long');
    newImageCollapseMenu(e)
    // ОТКРЫТ
    if (document.querySelector('.tren-ui-long')) {
      document.querySelector('.box-collapse').classList.remove("opacity-11");

      if (!document.querySelector('.box-time.opacity-1')) {
        document.querySelector('.box-time').style.left = document.querySelector('.box-time').getAttribute('sx2');
      }
      if (!document.querySelector('.box-chat-window.opacity-1')) {
        document.querySelector('.box-chat-window').style.left = document.querySelector('.box-chat-window').getAttribute('sx2');
      }

    }
    // ЗАКРЫТ
    else {
      // document.querySelector('.box-collapse').classList.add("opacity-11");

      if (!document.querySelector('.box-time.opacity-1')) {
        document.querySelector('.box-time').style.left = document.querySelector('.box-time').getAttribute('sx');
      }
      if (!document.querySelector('.box-chat-window.opacity-1')) {
        document.querySelector('.box-chat-window').style.left = document.querySelector('.box-chat-window').getAttribute('sx');
      }
    }

  });
  // МЕНЮ НАВЕДЕНИЕ
  document.getElementById('b_collapseMenu').addEventListener("mouseover", (e) => {
    if (!document.querySelector('.tren-ui-long')) {
      document.querySelector('.box-collapse').classList.add("opacity-11");
    }
  });
  // МЕНЮ ОТВЕДЕНИЕ
  document.getElementById('b_collapseMenu').addEventListener("mouseout", (e) => {
    document.querySelector('.box-collapse').classList.remove("opacity-11");
  });


  // ЧАСЫ НАВЕДЕНИЕ
  document.getElementById('b_oclock').addEventListener("mouseover", (e) => {
    setStartPosition(document.querySelector('.box-time'));
    document.querySelector('.box-time').classList.add("opacity-11");
  });
  // ЧАСЫ ОТВЕДЕНИЕ
  document.getElementById('b_oclock').addEventListener("mouseout", (e) => {
    document.querySelector('.box-time').classList.remove("opacity-11");
  }); 
  // КЛИК ЧАСЫ
  document.getElementById('b_oclock').addEventListener("click", (e)=>{
    e.currentTarget.classList.add('button-tren-active');
    setNewStateButtonSVG(e.currentTarget.querySelector('object'), COLOR_STATE_BUTTON.Active);
    document.querySelector('.box-time').style.display = 'flex';
    document.querySelector('.box-time').classList.add("opacity-1");
    document.querySelector('.box-time').classList.add("box-time-padTop32");
    document.querySelector('.box-time .block-button').classList.add("z-index-1");
    document.querySelector('.box-time .backArea').classList.add('backArea-white-100')

    document.querySelector('.time-header').classList.add("time-header-opacity");
  })


  // ЧАТ НАВЕДЕНИЕ
  document.getElementById('b_chat').addEventListener("mouseover", (e) => {
    setStartPosition(document.querySelector('.box-chat-window'));
    document.querySelector('.box-chat-window').classList.add("opacity-11");

  });
  // ЧАТ ОТВЕДЕНИЕ
  document.getElementById('b_chat').addEventListener("mouseout", (e)=>{
 
    document.querySelector('.box-chat-window').classList.remove("opacity-11");
  });
  // КЛИК ЧАТ
  document.getElementById('b_chat').addEventListener("click", (e)=>{
    e.currentTarget.classList.add('button-tren-active');
    setNewStateButtonSVG(e.currentTarget.querySelector('object'), COLOR_STATE_BUTTON.Active);

    document.querySelector('.box-chat-window').classList.remove("box-chat-window-mini");

    document.querySelector('.box-chat-window .chat').classList.remove("chat-mini");

    document.querySelector('.box-chat-window').classList.add("visibility-visible");
    document.querySelector('.box-chat-window').classList.add("opacity-1");
    document.querySelector('.box-chat-window .block-button').classList.add("z-index-1");
    document.querySelector('.box-chat-window .box-chat-header').classList.add("opacity-1");
    document.querySelector('.box-chat-window .backArea').classList.add('backArea-white-100')
    setNormalChat();
  });


  document.getElementById('b_scenario').addEventListener("click", (e) => { }); // СЦЕНАРИЙ
  document.getElementById('b_help').addEventListener("click", (e) => { }); // ПОМОЩЬ
  document.getElementById('b_reference').addEventListener("click", (e) => { }); // СПРАВКА
  document.getElementById('b_restart').addEventListener("click", (e) => { }); // РЕСТАРТ
  document.getElementById('b_exit').addEventListener("click", (e) => { }); // ВЫХОД
}



