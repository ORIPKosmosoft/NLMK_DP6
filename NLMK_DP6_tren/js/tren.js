/*                TODO
----------------------------------------------------
Возможно делать замену не материалов, а их текстур
----------------------------------------------------
*/
function loadTrenActions() {
  devHelper.trenVals.actionArr = [];
  Array.from(document.querySelectorAll('.drop-item')).forEach((Element, Index) => {
    let tempObjTren = {
      name: Element.querySelector('span').innerText,
    }
    devHelper.trenVals.actionArr.push(tempObjTren);
    if (tempActions[Index]) tempObjTren.actions = tempActions[Index];
  })
  devHelper.model3DVals.active3dObjects = [...tempActions.flatMap(actionArr => actionArr.map(action => action.target))];
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.model-window')) {
    document.querySelector('.model-window').addEventListener('mousedown', (e) => {
      if (devHelper.model3DVals.mouseoverMesh !== undefined && devHelper.trenVals.waitingInput === true) {
        if (devHelper.model3DVals.mouseoverMesh.name === devHelper.trenVals.actionArr[devHelper.trenVals.scenario].actions[devHelper.trenVals.currentAction].target) {
          if (devHelper.dev.enable === true) console.warn(`Вы успешно совершили нажатие на ${devHelper.model3DVals.mouseoverMesh.name} действия ${devHelper.trenVals.currentAction}.`);
          document.querySelector('.message').style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
          document.querySelector('.message').innerHTML = `Вы успешно совершили нажатие на ${devHelper.model3DVals.mouseoverMesh.name} действия ${devHelper.trenVals.currentAction}.`;
          let currectAction = devHelper.trenVals.actionArr[devHelper.trenVals.scenario].actions[devHelper.trenVals.currentAction].action;
          devHelper.trenVals.waitingInput = false;
          devHelper.model3DVals.mouseoverMesh = undefined;
          if (currectAction === 'открыть') {
            // console.log('currectAction', currectAction);
          } else if (currectAction === 'закрыть') {
            // console.log('currectAction', currectAction);
          } else if (currectAction === 'контролировать') {
            // console.log('currectAction', currectAction);
          }
        } else {
          if (devHelper.dev.enable === true) console.warn(`Вы неверно совершили нажатие на ${devHelper.model3DVals.mouseoverMesh.name} действия ${devHelper.trenVals.currentAction}.`);
          document.querySelector('.message').innerHTML = `Вы неверно совершили нажатие на ${devHelper.model3DVals.mouseoverMesh.name} действия ${devHelper.trenVals.currentAction}.`;
          document.querySelector('.message').style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
        }
      }
    })
  }
})

// setInterval(() => {
//   if (devHelper.trenVals.scenario !== undefined) {
//     devHelper.trenVals.realTimer += 50;
//     if (devHelper.trenVals.ended === false) {
//       if (devHelper.trenVals.waitingInput === false) {
//         devHelper.trenTimer += 50;
//         devHelper.trenVals.currentActionTime += 50;
//       }
//       if (devHelper.trenVals.currentActionTime >= devHelper.trenVals.actionArr[devHelper.trenVals.scenario].actions[devHelper.trenVals.currentAction].duration * 1000) {
//         devHelper.trenVals.waitingInput = true;
//         devHelper.trenVals.currentAction++;
//         devHelper.trenVals.currentActionTime = 0;
//         if (devHelper.dev.enable === true) console.warn(`Действие ${devHelper.trenVals.currentAction - 1} успешно завершено.`);
//         document.querySelector('.message').innerHTML = `Действие ${devHelper.trenVals.currentAction - 1} успешно завершено.`;
//         if (devHelper.trenVals.currentAction > devHelper.trenVals.actionArr[devHelper.trenVals.scenario].actions.length - 1) trenFinish();
//       }
//     }
//     if (devHelper.trenVals.realTimer % 1000 === 0) {

//       // Отработка замены материала
//       if (devHelper.trenVals.realTimer / 1000 - 1 < 10) {
//         // if (devHelper.mainModel && devHelper.model3DVals.unicMeshArr.length > 0) {
//         //   devHelper.mainModel.children.forEach((Element) => {
//         //     if (Element.children[0].name && Element.children[0].name === 'Obj_progress_bar') {
//         //       Element.children[0].material = devHelper.model3DVals.unicMeshArr[devHelper.trenVals.realTimer / 1000 - 1].material;
//         //     }
//         //   });
//         // }
//         refreshSvg(0, '6VI_2_1', '25');
//       }
//     }
//   }
// }, 50);

function trenFinish() {
  devHelper.trenVals.ended = true;

  if (devHelper.dev.enable === true) console.warn(`Вы успешно завершили сценарий ${devHelper.trenVals.scenario}. Ваше время затраченное на прохождение тренажёра = ${devHelper.trenVals.realTimer / 1000} сек.`);
}

// function refreshSvg(SvgNum, NameElement, ValueElement) {
//   const resultObject = findObjectByName(NameElement, devHelper.svgVals[SvgNum].activeElements);
//   // resultObject.element.innerHTML = ValueElement;
//   resultObject.element.innerHTML = 0.16 + devHelper.trenVals.realTimer / 1000;
//   refreshTextureSchemes(SvgNum);
// }

// function refreshTextureSchemes(SvgNum) {

//   const img = new Image();
//   img.src = 'data:image/svg+xml,' + encodeURIComponent(new XMLSerializer().serializeToString(devHelper.svgVals[SvgNum].svg));
//   devHelper.tempMonitor.material.map.source.data = img;
//   img.onload = function () {
//     //   const tempTexture = new THREE.Texture(img);
//     //   tempTexture.needsUpdate = true;
//     // texture.flipY = false;
//     //   devHelper.tempMonitor.material.map = tempTexture;
//     //   // devHelper.tempCtx.clearRect(-10000, -10000, 20000, 20000);
//     //   // devHelper.tempCtx.drawImage(img, 0, 0);
//     //   // devHelper.tempMonitor.material.map.offset.x = -Int/100;
//     //   // devHelper.tempMonitor.material.map.offset.y = Int/100;
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
