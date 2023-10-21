/*                TODO
----------------------------------------------------
начать делайть действия
Внести имена мешей из массива действий
проверят на соответсвие
дальше делать уже клик
----------------------------------------------------
*/
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
  // console.log(Object.keys(tempActions[0][0].action.position).length > 0);
}

setInterval(() => {
  if (devHelper.trenVals.scenario !== undefined) {
    devHelper.trenVals.realTimer += 50;
    if (devHelper.trenVals.ended === false) {
      if (devHelper.trenVals.waitingInput === false) {
        devHelper.trenVals.currentActionTime += 50;
        devHelper.trenVals.scenarioTimer += 50;
      } else {
        // Тут сделать нажатие на 3Д элементы
        /*
        devHelper.trenVals.activeMeshs1
        devhelper.model3DVals.activeMeshs
        devhelper.model3DVals.movePointMesh
        */

      }
      if (devHelper.trenVals.currentActionTime >= devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[devHelper.trenVals.currentAction].duration * 1000) {
        devHelper.trenVals.waitingInput = true;
        devHelper.trenVals.currentAction++;
        devHelper.trenVals.currentActionTime = 0;
        if (devHelper.dev.enable === true) console.warn(`Действие ${devHelper.trenVals.currentAction - 1} успешно завершено.`);
        //         document.querySelector('.message').innerHTML = `Действие ${devHelper.trenVals.currentAction - 1} успешно завершено.`;
        if (devHelper.trenVals.currentAction > devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.length - 1) trenFinish();
      }
    }
  }
}, 50);

function trenClickOnMesh(Mesh) {
  let currentActonObject = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[devHelper.trenVals.currentAction];
  if (currentActonObject.action && currentActonObject.action.target && currentActonObject.action.target === Mesh.name) {
    if (currentActonObject.action.rotation && Object.keys(currentActonObject.action.rotation).length > 0) {
      if (currentActonObject.action.rotation.y && currentActonObject.action.rotation.y !== '')
        rotateMesh(Mesh, currentActonObject.action.rotation.y, 'y');
      if (currentActonObject.action.rotation.z && currentActonObject.action.rotation.z !== '')
        rotateMesh(Mesh, currentActonObject.action.rotation.z, 'z');
      if (currentActonObject.action.rotation.x && currentActonObject.action.rotation.x !== '')
        rotateMesh(Mesh, currentActonObject.action.rotation.x, 'x');
    }
    if (currentActonObject.action.position && Object.keys(currentActonObject.action.position).length > 0) {
      if (currentActonObject.action.position.x && currentActonObject.action.position.x !== '')
        moveMesh(Mesh, currentActonObject.action.position.x, 'x');
      if (currentActonObject.action.position.y && currentActonObject.action.position.y !== '')
        moveMesh(Mesh, currentActonObject.action.position.y, 'y');
      if (currentActonObject.action.position.z && currentActonObject.action.position.z !== '')
        moveMesh(Mesh, currentActonObject.action.position.z, 'z');
    }
  } else {
    if (devHelper.dev.enable === true) console.warn(`Клик на ${Mesh.name} неверный.`);
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

