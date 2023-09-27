/*                 TODO
----------------------------------------------------
Добавить время работы тренажёра
запускается трекнажёр - таймер не идёт.
после правильного нажатия на объект - запускается таймер. Выполняются действия
прописанные где-то
когда таймер протикает время действия, таймер останавливается 
и будет ожидать правильного нажатия на следующий активатор
----------------------------------------------------
*/
const trenWorkObj = {activeAction: 0, trenTimer: 0,};

function loadTrenActions() {
  trenWorkObj.trenActionArr = [];
  Array.from(document.querySelectorAll('.scenario-box')).forEach((Element, Index) => {
    let tempObjTren = {
      name: Element.innerText,
    }
    trenWorkObj.trenActionArr.push(tempObjTren);
    if (tempActions[Index]) tempObjTren.actions = tempActions[Index];
    
  })
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.model-window').addEventListener('mousedown', (e) => {
    if (trenWorkObj.mouseover3dObjectTren !== undefined) {
      let currectAction = trenWorkObj.trenActionArr[trenWorkObj.scenarioSelected].actions[trenWorkObj.activeAction].action
      if (currectAction === 'открыть') {
        console.log('currectAction', currectAction);
      } else if (currectAction === 'закрыть') {
        console.log('currectAction', currectAction);
      } else if (currectAction === 'контролировать') {
        console.log('currectAction', currectAction);
      }
    }
  })
})




setInterval(() => {
  trenWorkObj.trenTimer += 50;

  // if (trenWorkObj.trenTimer % 1000 === 0) {
  //   console.log(trenWorkObj.trenTimer);
  // }
}, 50);
