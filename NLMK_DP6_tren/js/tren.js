/*                 TODO
----------------------------------------------------
----------------------------------------------------
*/
const trenWorkObj = { dev: true, activeAction: 0, trenTimer: 0, currentActionTime: 0, waitingInput: true, trenType: undefined, trenEnded: false, realTimer: 0, activeControlCamera: true,};

function loadTrenActions() {
  trenWorkObj.trenActionArr = [];
  Array.from(document.querySelectorAll('.scenario-box')).forEach((Element, Index) => {
    let tempObjTren = {
      name: Element.innerText,
    }
    trenWorkObj.trenActionArr.push(tempObjTren);
    if (tempActions[Index]) tempObjTren.actions = tempActions[Index];
  })
  trenWorkObj.active3dObjects = [...tempActions.flatMap(actionArr => actionArr.map(action => action.target))];
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.model-window').addEventListener('mousedown', (e) => {
    if (trenWorkObj.mouseover3dObjectTren !== undefined && trenWorkObj.waitingInput === true) {
      if (trenWorkObj.mouseover3dObjectTren.name === trenWorkObj.trenActionArr[trenWorkObj.scenarioSelected].actions[trenWorkObj.activeAction].target) {
        if (trenWorkObj.dev === true) console.warn(`Вы успешно совершили нажатие на ${trenWorkObj.mouseover3dObjectTren.name} действия ${trenWorkObj.activeAction}.`);
        document.querySelector('.message').style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        document.querySelector('.message').innerHTML = `Вы успешно совершили нажатие на ${trenWorkObj.mouseover3dObjectTren.name} действия ${trenWorkObj.activeAction}.`;
        let currectAction = trenWorkObj.trenActionArr[trenWorkObj.scenarioSelected].actions[trenWorkObj.activeAction].action;
        trenWorkObj.waitingInput = false;
        trenWorkObj.mouseover3dObjectTren = undefined;
        if (currectAction === 'открыть') {
          // console.log('currectAction', currectAction);
        } else if (currectAction === 'закрыть') {
          // console.log('currectAction', currectAction);
        } else if (currectAction === 'контролировать') {
          // console.log('currectAction', currectAction);
        }
      } else {
        if (trenWorkObj.dev === true) console.warn(`Вы неверно совершили нажатие на ${trenWorkObj.mouseover3dObjectTren.name} действия ${trenWorkObj.activeAction}.`);
        document.querySelector('.message').innerHTML = `Вы неверно совершили нажатие на ${trenWorkObj.mouseover3dObjectTren.name} действия ${trenWorkObj.activeAction}.`;
        document.querySelector('.message').style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
      }
    }
  })
})

setInterval(() => {
  if (trenWorkObj.scenarioSelected !== undefined) {
    trenWorkObj.realTimer += 50;
    if (trenWorkObj.trenEnded === false) {
      if (trenWorkObj.waitingInput === false) {
        trenWorkObj.trenTimer += 50;
        trenWorkObj.currentActionTime += 50;
      }
      if (trenWorkObj.currentActionTime >= trenWorkObj.trenActionArr[trenWorkObj.scenarioSelected].actions[trenWorkObj.activeAction].duration * 1000) {
        trenWorkObj.waitingInput = true;
        trenWorkObj.activeAction++;
        trenWorkObj.currentActionTime = 0;
        if (trenWorkObj.dev === true) console.warn(`Действие ${trenWorkObj.activeAction - 1} успешно завершено.`);
        document.querySelector('.message').innerHTML = `Действие ${trenWorkObj.activeAction - 1} успешно завершено.`;
        if (trenWorkObj.activeAction > trenWorkObj.trenActionArr[trenWorkObj.scenarioSelected].actions.length - 1) trenFinish();
      }
    }
  }
}, 50);

function trenFinish(params) {
  trenWorkObj.trenEnded = true;

  if (trenWorkObj.dev === true) console.warn(`Вы успешно завершили сценарий ${trenWorkObj.scenarioSelected}. Ваше время затраченное на прохождение тренажёра = ${trenWorkObj.realTimer / 1000} сек.`);
}