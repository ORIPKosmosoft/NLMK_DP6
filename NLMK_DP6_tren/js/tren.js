/*                TODO
----------------------------------------------------
начать делайть действия
Внести имена мешей из массива действий
проверят на соответсвие
дальше делать уже клик
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
  devHelper.trenVals.activeMeshs = [...tempActions.flatMap(scenarioArr => scenarioArr.map(action => action.action.target))];
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
    if (currentActonObject.action && currentActonObject.action.target && currentActonObject.action.target === Mesh.name) {
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

function trenFinish() {
  devHelper.trenVals.ended = true;
  if (devHelper.dev.enable === true) console.warn(`Вы успешно завершили сценарий ${devHelper.trenVals.scenario}. Ваше время затраченное на прохождение тренажёра = ${devHelper.trenVals.realTimer / 1000} сек.`);
}

const Roles = {
  "Я": "messageMy",
  "Система": "messageSystem",
  "Ученик": "message",
  "Сотрудники НЛМК": "message"
}
function sendMessage(Sender, TextMessage) {
  let message = createCustomElement("div", "", { "class": Roles[Sender] })
  let top = createCustomElement("div", "", { "class": "topMessage" }, message)
  createCustomElement("div", Sender, { "class": "authorMessage" }, top)
  createCustomElement("div", (new Date().toTimeString().split(" ")[0] /*МЕНЯТЬ*/), { "class": "timeMessage" }, top)
  createCustomElement("div", "", { "class": "lineMessage" }, message);
  createCustomElement("div", TextMessage, { "class": "textMessage" }, message)
  document.querySelector(".chat").insertBefore(message, document.querySelector(".chat").children[0]);
}

function createCustomElement(Tag = 'div', Content = '', Attributes = undefined, Parent = undefined) {
  const element = document.createElement(Tag);
  element.innerHTML = Content;
  if (Attributes !== undefined)
    for (const name in Attributes) {
      element.setAttribute(name, Attributes[name])
    }
  if (Parent) Parent.append(element);
  return element
}
