/*                TODO
----------------------------------------------------
Возможно делать замену не материалов, а их текстур
----------------------------------------------------
*/
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
  if (document.querySelector('.model-window')) {
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
  }
})

// setInterval(() => {
//   if (trenWorkObj.scenarioSelected !== undefined) {
//     trenWorkObj.realTimer += 50;
//     if (trenWorkObj.trenEnded === false) {
//       if (trenWorkObj.waitingInput === false) {
//         trenWorkObj.trenTimer += 50;
//         trenWorkObj.currentActionTime += 50;
//       }
//       if (trenWorkObj.currentActionTime >= trenWorkObj.trenActionArr[trenWorkObj.scenarioSelected].actions[trenWorkObj.activeAction].duration * 1000) {
//         trenWorkObj.waitingInput = true;
//         trenWorkObj.activeAction++;
//         trenWorkObj.currentActionTime = 0;
//         if (trenWorkObj.dev === true) console.warn(`Действие ${trenWorkObj.activeAction - 1} успешно завершено.`);
//         document.querySelector('.message').innerHTML = `Действие ${trenWorkObj.activeAction - 1} успешно завершено.`;
//         if (trenWorkObj.activeAction > trenWorkObj.trenActionArr[trenWorkObj.scenarioSelected].actions.length - 1) trenFinish();
//       }
//     }
//     if (trenWorkObj.realTimer % 1000 === 0) {

//       // Отработка замены материала
//       if (trenWorkObj.realTimer / 1000 - 1 < 10) {
//         // if (trenWorkObj.mainModel && trenWorkObj.unicMeshArr.length > 0) {
//         //   trenWorkObj.mainModel.children.forEach((Element) => {
//         //     if (Element.children[0].name && Element.children[0].name === 'Obj_progress_bar') {
//         //       Element.children[0].material = trenWorkObj.unicMeshArr[trenWorkObj.realTimer / 1000 - 1].material;
//         //     }
//         //   });
//         // }
//         refreshSvg(0, '6VI_2_1', '25');
//       }
//     }
//   }
// }, 50);

function trenFinish() {
  trenWorkObj.trenEnded = true;

  if (trenWorkObj.dev === true) console.warn(`Вы успешно завершили сценарий ${trenWorkObj.scenarioSelected}. Ваше время затраченное на прохождение тренажёра = ${trenWorkObj.realTimer / 1000} сек.`);
}

// function refreshSvg(SvgNum, NameElement, ValueElement) {
//   const resultObject = findObjectByName(NameElement, trenWorkObj.svgSchemes[SvgNum].activeElements);
//   // resultObject.element.innerHTML = ValueElement;
//   resultObject.element.innerHTML = 0.16 + trenWorkObj.realTimer / 1000;
//   refreshTextureSchemes(SvgNum);
// }

// function refreshTextureSchemes(SvgNum) {

//   const img = new Image();
//   img.src = 'data:image/svg+xml,' + encodeURIComponent(new XMLSerializer().serializeToString(trenWorkObj.svgSchemes[SvgNum].svg));
//   trenWorkObj.tempMonitor.material.map.source.data = img;
//   img.onload = function () {
//     //   const tempTexture = new THREE.Texture(img);
//     //   tempTexture.needsUpdate = true;
//     // texture.flipY = false;
//     //   trenWorkObj.tempMonitor.material.map = tempTexture;
//     //   // trenWorkObj.tempCtx.clearRect(-10000, -10000, 20000, 20000);
//     //   // trenWorkObj.tempCtx.drawImage(img, 0, 0);
//     //   // trenWorkObj.tempMonitor.material.map.offset.x = -Int/100;
//     //   // trenWorkObj.tempMonitor.material.map.offset.y = Int/100;
//   };
// }

// function findObjectByName(name, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].name === name) {
//       return array[i]; // Возвращаем объект, если найден
//     }
//   }
//   return null; // Возвращаем null, если объект не найден
// }

{
  const Roles = {
    "Я": "messageMy",
    "Система": "messageSystem",
    "Ученик": "message",
    "Сотрудники НЛМК": "message"
  }
  function sendMessage(Sender, TextMessage){
    let message = createCustomElement("div", "", {"class": Roles[Sender]})
    let top = createCustomElement("div", "", {"class": "topMessage"}, message)
    createCustomElement("div", Sender, {"class": "authorMessage"}, top)
    createCustomElement("div", (new Date().toTimeString().split(" ")[0] /*МЕНЯТЬ*/), {"class": "timeMessage"}, top)
    createCustomElement("div", "", {"class": "lineMessage"}, message);
    createCustomElement("div", TextMessage, {"class": "textMessage"}, message)
    document.querySelector(".chat").insertBefore(message, document.querySelector(".chat").children[0]);
  }

  function createCustomElement (tag, content, attributes, parrent = null) {
    const element = document.createElement(tag)
    element.innerHTML = content
    for (const name in attributes) {
      element.setAttribute(name, attributes[name])
    }
    if (parrent) parrent.append(element);
    return element
  }
}