/*                TODO
----------------------------------------------------
----------------------------------------------------
*/
function loadTrenActions() {
  let effectsArr = ['error', 'right', 'tren_click', 'tren_error', 'ui_click'];
  effectsArr.forEach(audioName => {
    if (!devHelper.audio.find(element => element.name === audioName))
      devHelper.audio.push({ name: audioName, element: new Audio(`/media/audio/effects/${audioName}.mp3`) });
  })
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
        if (action.multi) {
          action.multi.forEach(multiAction => {
            if (multiAction.audio)
              if (!devHelper.audio.find(element => element.name === multiAction.audio))
                devHelper.audio.push({ name: multiAction.audio, element: new Audio(`/media/audio/${multiAction.audio}.mp3`) });
          })
        }
      })
      devHelper.model3DVals.activeMeshsToArr.forEach(state => {
        if (state.audio)
          if (devHelper.audio.find(element => element.name === state.audio) === undefined)
            devHelper.audio.push({ name: state.audio, element: new Audio(`/media/audio/${state.audio}.mp3`) });
      })
    }
  })
  devHelper.trenVals.scenarioArr.forEach(scenarioObj => {
    if (scenarioObj.actions && scenarioObj.actions) {
      scenarioObj.actions = scenarioObj.actions.sort((a, b) => a.startTime - b.startTime);
    }
  })

  devHelper.audio.forEach(element => {
    element.element.addEventListener('ended', function () {
      const activeAudio = devHelper.audio.some(audioFile => !audioFile.element.paused);
      if (!activeAudio)
        Array.from(document.querySelectorAll('.block-interaction')).forEach(element => element.remove());
    });
  });
}

function startTren(Restart = false) {
  clearChat();
  if (devHelper.trenVals.type === 'learn') {
    document.querySelector('#b_reference').removeAttribute('disabled');
    document.querySelector('#b_reference').style.opacity = 1;
    document.querySelector('#b_help').removeAttribute('disabled');
  } else {
    document.querySelector('#b_reference').style.opacity = 0;
    let btnDisabledArr = ['b_reference', 'b_help'];
    btnDisabledArr.forEach(id => {
      let hasBorder = window.getComputedStyle(document.querySelector('#' + id)).getPropertyValue('border') !== 'none';
      document.querySelector('#' + id).setAttribute('disabled', '');
      if (!hasBorder) {
        document.querySelector('#' + id).style.border = 'none';
      }
    })
  }
  setTextScenario(devHelper.trenVals.scenario);
  takeStartingState(Restart);
  changeTimerText(true);
  if (devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].human && devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].human &&
    devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions[0].startTime === 0) {
    devHelper.trenVals.waitingInput = true;
  } else devHelper.trenVals.waitingInput = false;
  document.querySelector('.end-cointainer').style.opacity = '';
  document.querySelector('.end-cointainer').style.display = '';
  if (Restart) {
    devHelper.endVals.previousEndVals = { ...devHelper.endVals };
    delete devHelper.endVals.previousEndVals.previousEndVals;
  }
  let maxChapterActions = Math.ceil(devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.length / 6);
  devHelper.endVals.actionChapter = [maxChapterActions, maxChapterActions, maxChapterActions, maxChapterActions, maxChapterActions, devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.length - maxChapterActions * 5];
  devHelper.endVals.currentChapter = 0;
  devHelper.endVals.currentActionCount = 0;
  devHelper.endVals.errors = [0];
  devHelper.endVals.humanTime = [];
  devHelper.endVals.maxTimeArr = [];
  let tempArr = Array.from(devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions);
  tempArr.sort((a, b) => a.startTime - b.startTime);
  let tempArrDur = [];
  let tempAudio = [];
  tempArr.forEach((element, index) => {
    if (index === tempArr.length - 1 || index % maxChapterActions === 0) {
      tempArrDur.push(Math.floor(element.startTime));
      devHelper.endVals.currentChapter++;
    }
    if (tempAudio.length !== devHelper.endVals.currentChapter) {
      tempAudio.push([]);
    }
    if (element.audio) {
      tempAudio[tempAudio.length - 1].push(element.audio);
    }
  })
  const differenceArray = tempArrDur.map((currentValue, index, array) => {
    if (index === 0) return 0;
    else return Math.ceil((currentValue - array[index - 1]) * 2.6);
  });
  differenceArray.shift();
  devHelper.endVals.averageTime = differenceArray;
  tempAudio.pop();
  let tempAudioDuration = [];
  tempAudio.forEach((arr, index) => {
    if (tempAudioDuration.length - 1 !== index) tempAudioDuration.push([]);
    arr.forEach(audioName => {
      let audioDuration = devHelper.audio.find(element => element.name === audioName).element.duration;
      if (audioDuration) tempAudioDuration[tempAudioDuration.length - 1].push(Math.ceil(audioDuration));
    })
  })
  let newTempAtt2 = [];
  tempAudioDuration.forEach((arr, index) => {
    newTempAtt2.push(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
  })
  devHelper.endVals.averageTime.forEach((element, index) => {
    if (element < newTempAtt2[index]) {
      element = newTempAtt2[index];
    }
  })
  devHelper.endVals.currentChapter = 0;
  if (Restart === false)
    requestAnimationFrame(trenTimeTick);
}

function convertMilliseconds(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const remainingSeconds = seconds % 60;
  const remainingMinutes = minutes % 60;

  return {
    hours: hours.toString().padStart(2, "0"),
    minutes: remainingMinutes.toString().padStart(2, "0"),
    seconds: remainingSeconds.toString().padStart(2, "0")
  };
}

function changeTimerText(Start = false) {
  if (Start === true) {
    document.querySelector('.box-time').startRealTime = new Date();
    document.querySelector('.box-time').textTime = '00:00:00';
    document.querySelector('.box-time').milisecs = 0;
  } else {
    const currentTime = new Date();
    const lastTime = document.querySelector('.box-time').startRealTime;
    if (currentTime.getTime() - lastTime.getTime() >= 1000) {
      document.querySelector('.box-time').milisecs += currentTime.getTime() - lastTime.getTime();
      document.querySelector('.box-time').textTime = String(getMyTime(document.querySelector('.box-time').milisecs))
      document.querySelector('.box-time').startRealTime = currentTime;
    }
  }
  let tempTextTime = convertMilliseconds(document.querySelector('.box-time').milisecs);
  document.querySelector(".time-hour").textContent = tempTextTime.hours;
  document.querySelector(".time-minute").textContent = tempTextTime.minutes;
  document.querySelector(".time-second").textContent = tempTextTime.seconds;
}

let lastTimestamp = 0;
function trenTimeTick(timeStamp) {
  console.log('deadTimerHelper', devHelper.trenVals.timers.deadTimerHelper);
  console.log('deadTimer', devHelper.trenVals.timers.deadTimer);
  let deltaTime = timeStamp - lastTimestamp;
  if (deltaTime > 16) {
    if (devHelper.trenVals.scenario !== undefined) {
      devHelper.model3DVals.scene.render();
      if (devHelper.trenVals.ended === false) {
        if (devHelper.trenVals.timers.allTimeHelper === 0) devHelper.trenVals.timers.allTimeHelper = timeStamp;
        devHelper.trenVals.timers.allTime = Number(timeStamp - devHelper.trenVals.timers.allTimeHelper).toFixed(2);
        changeTimerText();
        if (devHelper.trenVals.waitingInput === false) {
          if (devHelper.trenVals.timers.actionTimeHelper === 0) {
            devHelper.trenVals.timers.scenarioTimeHelper = devHelper.trenVals.timers.scenarioTime;
            devHelper.trenVals.timers.actionTimeHelper = timeStamp;
          }
          devHelper.trenVals.timers.actionTime = Number((timeStamp - devHelper.trenVals.timers.actionTimeHelper).toFixed(2));
          devHelper.trenVals.timers.scenarioTime = Number((devHelper.trenVals.timers.scenarioTimeHelper + devHelper.trenVals.timers.actionTime).toFixed(2));
        } else {
          if (devHelper.trenVals.timers.deadTimerHelper === 0) {
            devHelper.trenVals.timers.deadTimerHelper = timeStamp;
            devHelper.trenVals.timers.deadTimer = 120000;
          }
          devHelper.trenVals.timers.deadTimer -= Number((timeStamp - devHelper.trenVals.timers.deadTimerHelper).toFixed(2));
        }
        if (devHelper.dev.enable && document.querySelector('.info-tren')) {
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
              if (nextAction.multi) devHelper.trenVals.multiAction = [...nextAction.multi];
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
              if (nextAction.action.window2D.elements) {
                for (let key in nextAction.action.window2D.elements) {
                  if (nextAction.action.window2D.elements.hasOwnProperty(key))
                    changeSvgElem(nextAction.action.window2D.elements[key]);
                }
              }
              if (nextAction.action.window2D.newWindow) {
                nextAction.action.window2D.newWindow.forEach(element => {
                  if (element.elements) {
                    element.elements.forEach(svgElem => changeSvgElem(svgElem))
                  }
                  addSvgToTextrue(findMesh(element.display), { window: element.svg, x: element.x, y: element.y });
                  // TODO Не знаю нужен ли этот код или нет стрчока
                  // Это доп код для появления схемы на мониторе, когда ты кликнул на 3Д
                  // createSvghelper(devHelper.model3DVals.currentPosition, Vals.value.window);
                })
              }
              if (nextAction.action.window2D.removeWindow) {
                nextAction.action.window2D.removeWindow.forEach(element => {
                  RemoveSvgFromTextrue(findMesh(element.display), element.svg);
                })
              }
              updateSvgTextures();
            }
            if (nextAction.action && nextAction.action.target3D) {
              let mesh = findMesh(nextAction.action.target3D);
              if (mesh) {
                handleRotation(nextAction, mesh);
                handlePosition(nextAction, mesh);
                if (nextAction.action.material) {
                  const tempMaterial = findMaterial(nextAction.action.material);
                  mesh.material = tempMaterial || mesh.material;
                }
                if (nextAction.action.imgTexture) {
                  setImageOnMonitor(nextAction.action.imgTexture, devHelper.model3DVals.scene, mesh);
                }
              } else {
                if (nextAction.action.number)
                  changeScreenVals(nextAction.action.target3D, nextAction.action.number, nextAction.action.color ? nextAction.action.color : 'green');
              }
            }
            if (nextAction.action && nextAction.action.helper2D) {
              createSvghelper(devHelper.model3DVals.currentPosition)
            }
            newActionStartHelper(nextAction);
            if (nextAction.text) sendMessage(nextAction.sender, nextAction.text);
            if (nextAction.scenarioText) sendMessage(nextAction.sender, nextAction.scenarioText);
            if (nextAction.audio) playAudio(nextAction.audio);
          }
        }
        let lastAction = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false));
        if (lastAction === undefined) trenFinish();
        requestAnimationFrame(trenTimeTick);
      }
    }
    lastTimestamp = timeStamp;
  }
}

function actionAfterClickOnMesh(Action, Mesh, Text) {
  playAudio('tren_click');
  let standartActionMesh = devHelper.model3DVals.activeMeshsToArr.find(elem => Mesh.id === elem.id || Mesh.name.includes(elem.name || elem));
  if (standartActionMesh) {
    if (standartActionMesh.endY || standartActionMesh.endX || standartActionMesh.endZ) {
      if (!Action.action.position) {
        let tempAction = {
          action: {
            position: {
              duration: standartActionMesh.duration,
              ...(standartActionMesh.endY !== undefined && { y: standartActionMesh.endY }),
              ...(standartActionMesh.endX !== undefined && { x: standartActionMesh.endX }),
              ...(standartActionMesh.endZ !== undefined && { z: standartActionMesh.endZ }),
            },
          },
        };
        handlePosition(tempAction, Mesh);
        setTimeout(() => {
          let tempAction = {
            action: {
              position: {
                duration: standartActionMesh.duration,
                ...(standartActionMesh.startY !== undefined && { y: standartActionMesh.startY }),
                ...(standartActionMesh.startX !== undefined && { x: standartActionMesh.startX }),
                ...(standartActionMesh.startZ !== undefined && { z: standartActionMesh.startZ }),
              },
            },
          };
          handlePosition(tempAction, Mesh);
        }, standartActionMesh.duration * 1000 + 100)
      }
    }
    if (standartActionMesh.audio) playAudio(standartActionMesh.audio);
    handleRotation(Action, Mesh);
    handlePosition(Action, Mesh);
    if (Action.audio) playAudio(Action.audio);
    if (Text) sendMessage(Action.sender, Action.text);
    if (Action.material) {
      const tempMaterial = findMaterial(Action.material);
      Mesh.material = tempMaterial || Mesh.material;
    }
    if (standartActionMesh.changeMeshmaterial) {
      // Если нет условия
      if (!standartActionMesh.changeMeshmaterial.times) {
        // findMesh(standartActionMesh.changeMeshmaterial.meshName).material = findMaterial(standartActionMesh.changeMeshmaterial.material) || findMesh(standartActionMesh.changeMeshmaterial.meshName).material;
        findMesh(standartActionMesh.changeMeshmaterial.meshName).material = findMaterial(standartActionMesh.changeMeshmaterial.material);
      } else {
        let mainMesh = findMesh(standartActionMesh.changeMeshmaterial.meshName);
        let activatorMesh = findMesh(standartActionMesh.name);
        let tempBool = false;
        if (standartActionMesh.changeMeshmaterial.condition) {
          const currentActionObject = findCurrentAction();
          let currentActions = currentActionObject.multi ? currentActionObject.multi : [currentActionObject.action];
          for (let i = 0; i < currentActions.length; i++) {
            const currentAction = currentActions[i].action;
            if (currentAction.target3D && (currentAction.target3D === activatorMesh.name || currentAction.target3D === activatorMesh.id)) {
              tempBool = true;
              if (standartActionMesh.changeMeshmaterial.condition.rotation && !areObjectsEqual(standartActionMesh.changeMeshmaterial.condition.rotation, currentAction.rotation)) {
                tempBool = false;
              }
              break;
            }
          }
        } else tempBool = true;
        if (tempBool) {
          let mat1 = findMaterial(standartActionMesh.changeMeshmaterial.material);
          let mat2 = findMaterial(standartActionMesh.changeMeshmaterial.material2);
          let count = standartActionMesh.changeMeshmaterial.times;
          const tempInterval = setInterval(() => {
            mainMesh.material = mainMesh.material === mat1 ? mat2 : mat1;
            if (--count === 0) clearInterval(tempInterval);
          }, standartActionMesh.changeMeshmaterial.delay * 1000 || 500);
        }
      }
    }
  }

}

function findPrevAction() {
  return devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.reverse().find(action => action.passed === true);
}
function findCurrentAction() {
  return devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => action.passed === false);
}

function trenClickOnMesh(Mesh) {
  if (!devHelper.trenVals.waitingInput) return;
  const currentAction = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario]
    .actions.find(action => (action.passed === false && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
  if (currentAction.action && (currentAction.action.target3D === Mesh.name || currentAction.action.target3D === Mesh.id)) {
    actionAfterClickOnMesh(currentAction, Mesh);
    newActionStartHelper(currentAction);
  } else if (currentAction.multi && currentAction.multi.length > 0) {
    const multiAction = devHelper.trenVals.multiAction.find(multiAction2 => (multiAction2.action.target3D === Mesh.name || multiAction2.action.target3D === Mesh.id));
    if (multiAction) {
      actionAfterClickOnMesh(multiAction, Mesh, multiAction.text);
      devHelper.trenVals.multiAction = devHelper.trenVals.multiAction.filter(function (item) {
        return item !== multiAction;
      });
      if (devHelper.trenVals.multiAction.length === 0)
        newActionStartHelper(currentAction);
    } else handleError(Mesh);
  } else handleError(Mesh);
}

function playAudio(AudioName) {
  let audioTag = devHelper.audio.find(element => element.name === AudioName)?.element;
  if (!audioTag) return;
  else {
    audioTag.play();
    if (!document.querySelector('.block-interaction'))
      document.body.append(createCustomElement('div', '', { 'class': 'block-interaction' }));
  }
}
function handleRotation(currentAction, Mesh) {
  const rotation = currentAction.action.rotation || {};
  if (rotation.y !== undefined || rotation.x !== undefined || rotation.z !== undefined) {
    moveRotationMesh(Mesh, 'r', rotation, 'all', currentAction.duration !== undefined ? currentAction.duration : 1);
  }
}
function handlePosition(currentAction, Mesh) {
  const position = currentAction.action.position || {};
  if (position.y !== undefined || position.x !== undefined || position.z !== undefined) {
    moveRotationMesh(Mesh, 'p', position, 'all', currentAction.duration !== undefined ? currentAction.duration : 1);
  }
}

function handleError(Mesh) {
  if (Mesh.name && Mesh.uniqueId) {
    if (Mesh.overlayColor !== BABYLON.Color3.Red()) Mesh.overlayColor = BABYLON.Color3.Red();
    Mesh.renderOverlay = true;
    setTimeout(() => {
      Mesh.renderOverlay = false;
    }, 300)
  } else {
    Mesh.classList.toggle('error-helper', true);
    setTimeout(() => {
      Mesh.classList.toggle('error-helper', false);
    }, 300);
  }
  let currentName = findRealName(Mesh.id || Mesh.name).name;
  let curAction = findCurrentAction();
  let rightAnswerName = '', rightAnswerLocation;
  if (curAction.action && (curAction.action.target2D || curAction.action.target3D)) {
    rightAnswerName = findRealName(curAction.action.target2D || curAction.action.target3D).name;
    rightAnswerLocation = curAction.action.target2D ? 'схеме "' : 'позиции "';
    rightAnswerLocation += findRealName(curAction.action.target2D || curAction.action.target3D).location + '"';
  } else if (curAction.multi && devHelper.trenVals.multiAction.length > 0) {
    devHelper.trenVals.multiAction.forEach((element, index) => {
      if (index === 0) {
        rightAnswerLocation = element.action.target2D ? 'схеме "' : 'позиции "';
        rightAnswerLocation += findRealName(element.action.target2D || element.action.target3D).location + '"';
      }
      rightAnswerName += (index === 0 ? '' : ', ') + findRealName(element.action.target2D || element.action.target3D).name
    })
  }
  playAudio('tren_error');
  if (!document.querySelector('.error-block-view')) {
    let errorLight = createCustomElement('div', '', { 'class': 'error-block-view' });
    document.body.querySelector('.game-view').append(errorLight);
    errorLight.style.opacity = 1;
    setTimeout(() => {
      errorLight.style.opacity = 0;
      setTimeout(() => {
        errorLight.remove();
      }, 300)
    }, 300);
  }
  if (devHelper.trenVals.type === 'learn')
    sendMessage("Ошибка", `Вы совершили неверное действие, выбрав ${currentName ? `"${currentName}"` : 'неверный элемент'}. Нужно кликнуть по ${rightAnswerName ? `"${rightAnswerName}"` : 'элементу'} на ${rightAnswerLocation}.`);
  else
    sendMessage("Ошибка", `Вы совершили неверное действие.`);
  devHelper.endVals.errors[devHelper.endVals.currentChapter]++;
  devHelper.dev.enable && console.warn(`Клик на ${Mesh.name || Mesh.id} в действии ${devHelper.trenVals.currentAction} неверный.`);
  if (devHelper.trenVals.type !== 'learn') {
    if (devHelper.endVals.errors.reduce((acc, num) => acc + num, 0) > devHelper.trenVals.maximumErrors) {
      trenFinish();
    }
  }
}

function afterClickOn2DHelper(SvgElemHelper, CurrentAction) {
  if (CurrentAction.action.window2D && CurrentAction.action.window2D.elements) {
    for (let key in CurrentAction.action.window2D.elements) {
      if (CurrentAction.action.window2D.elements.hasOwnProperty(key))
        changeSvgElem(CurrentAction.action.window2D.elements[key]);
    }
    updateSvgTextures();
  }
  if (CurrentAction.audio)
    playAudio(CurrentAction.audio);
  if (CurrentAction.action && CurrentAction.action.helper2D)
    createSvghelper(devHelper.model3DVals.currentPosition)
  playAudio('tren_click');
}

function trenClickOnSvgElem(SvgElemHelper = undefined) {
  if (devHelper.trenVals.waitingInput === true) {
    let currentActonObject = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
    if (currentActonObject.lifeTime) startTimerToStep(currentActonObject.lifeTime);
    if (currentActonObject.multi && currentActonObject.multi.length > 0) {
      const multiAction = devHelper.trenVals.multiAction.find(multiAction2 => multiAction2.action.target2D === SvgElemHelper.id);
      if (multiAction) {
        afterClickOn2DHelper(SvgElemHelper, multiAction);
        devHelper.trenVals.multiAction = devHelper.trenVals.multiAction.filter(function (item) {
          return item !== multiAction;
        });
        if (devHelper.trenVals.multiAction.length === 0)
          newActionStartHelper(currentActonObject);
      }
    } else if (currentActonObject.action && currentActonObject.action.target2D && currentActonObject.action.target2D === SvgElemHelper.id) {
      afterClickOn2DHelper(SvgElemHelper, currentActonObject);
      newActionStartHelper(currentActonObject);
    }
  }
}

function trenFinish() {
  devHelper.trenVals.ended = true;
  playAudio('right');
  //------------------------------------------------------------------------------------------------------------------------------------------
  devHelper.endVals.restarts++;
  if (devHelper.endVals.humanTime.length > 0 && devHelper.endVals.averageTime.length > 0) {
    const comparedArray = devHelper.endVals.humanTime.map((value, index) => Math.round(Math.max(value, devHelper.endVals.averageTime[index]) * 1.1));
    const maxElement = Math.max(...comparedArray);
    devHelper.endVals.maxTimeArr = comparedArray.map(value => value === maxElement ? value + value * 0.1 : value);
    devHelper.endVals.maxTimeArr.fill(maxElement);
    if (devHelper.endVals.previousEndVals) {
      const comparedArray2 = devHelper.endVals.previousEndVals.humanTime.map((value, index) => Math.round(Math.max(value, devHelper.endVals.previousEndVals.averageTime[index]) * 1.1));
      const comparedArray3 = comparedArray2.map((value, index) => Math.round(Math.max(value, devHelper.endVals.maxTimeArr[index])));
      const maxElement2 = Math.max(...comparedArray3);
      devHelper.endVals.maxTimeArr = comparedArray.map(value => value === maxElement2 ? value + value * 0.1 : value);
      devHelper.endVals.maxTimeArr.fill(maxElement2);
    }
  } else {
    if (devHelper.dev.enable) console.error('Один или оба массива пусты');
  }
  const endContainer = document.querySelector('.end-cointainer');
  endContainer.style.opacity = 1;
  endContainer.style.display = 'unset';
  const circleGraph = endContainer.querySelector('.circle-graph');
  circleGraph.querySelector('span').innerHTML = `${devHelper.endVals.passPerc}%`;
  Array.from(endContainer.querySelectorAll('.left-text')).forEach((element) => {
    const text = element.innerHTML;
    const nextElement = element.nextElementSibling;
    if (text === 'Норма прохождения:') {
      nextElement.innerHTML = formatTime(devHelper.endVals.averageTime.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    } else if (text === 'Ваше время:') {
      nextElement.innerHTML = formatTime(devHelper.endVals.humanTime.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    } else if (text === 'Допущено ошибок:') {
      nextElement.innerHTML = devHelper.endVals.errors.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
  });
  const chartConfigs = [
    {
      name: 'endCircleGraph',
      type: 'doughnut',
      options: {
        responsive: true,
        cutout: '60%',
        plugins: {
          legend: {
            display: false
          }
        }
      },
      data: {
        labels: ['Верно', 'Ошибки'],
        datasets: [{
          data: [parseInt(circleGraph.querySelector('span').innerHTML), 100 - parseInt(circleGraph.querySelector('span').innerHTML)],
          backgroundColor: ['#2c5289', '#EAEAEA'],
          borderWidth: 4,
          borderColor: 'rgba(0, 0, 0, 0.05)',
          borderRadius: 5,
        }]
      }
    },
    {
      name: 'endLineGraph',
      type: 'line',
      options: {
        onHover: function (event, elements) {
          if (devHelper.endVals.previousEndVals) {
            devHelper.endVals.charts[1].config.options.plugins.tooltip.enabled = elements[0] ? (elements[0].datasetIndex !== 1 ? true : false) : true;
          }
          devHelper.endVals.charts[1].update();
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: context => {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                label += context.parsed.y;
                return label;
              },
              title: () => null
            }
          }
        }
      },
      data: {
        labels: Array.from({ length: devHelper.endVals.errors.length }, (_, index) => index),
        datasets: [{
          label: 'Количество ошибок',
          data: devHelper.endVals.errors,
          fill: false,
          borderWidth: Math.round(window.innerWidth / 100 * 0.11),
          borderColor: 'rgb(29, 86, 155)',
          pointRadius: 4,
          pointHoverRadius: 7,
          offset: 0.2,
          tension: 0.3,
        }, {
          label: 'Прошлые ошибки',
          data: devHelper.endVals.previousEndVals ? devHelper.endVals.previousEndVals.errors : [0],
          fill: false,
          borderWidth: Math.round(window.innerWidth / 100 * 0.11),
          borderColor: 'rgb(155, 155, 155)',
          pointRadius: devHelper.endVals.previousEndVals ? 4 : 0,
          pointHoverRadius: devHelper.endVals.previousEndVals ? 7 : 0,
          offset: 0.2,
          tension: 0.3,
          borderDash: [10, 10],
          showLine: devHelper.endVals.previousEndVals ? true : false,
        }]
      }
    },
    {
      name: 'endBarGraph',
      options: {
        onHover: function (event, elements) {
          if (devHelper.endVals.previousEndVals) {
            devHelper.endVals.charts[2].config.options.plugins.tooltip.enabled = elements[0] ? (elements[0].datasetIndex !== 2 ? true : false) : true;
          } else {
            devHelper.endVals.charts[2].config.options.plugins.tooltip.enabled = elements[0] ? ((elements[0].datasetIndex !== 2 && elements[0].datasetIndex !== 1) ? true : false) : true;
          }
          devHelper.endVals.charts[2].update();
        },
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category',
            stacked: true
          },
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true,
            animation: {
              duration: 0,
              animateScale: false,
              animateRotate: false,
            },
            position: 'nearest',
            callbacks: {
              label: context => {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                label += `${context.parsed.y} минут.`;
                return label;
              },
              title: () => null
            }
          },
        }
      },
      data: {
        labels: Array.from({ length: devHelper.endVals.averageTime.length }, (_, index) => index + 1),
        datasets: [{
          type: 'line',
          label: 'Ваше время',
          data: devHelper.endVals.humanTime.map(number => Math.round(number / 60)),
          borderColor: 'rgb(29, 86, 155)',
          pointRadius: 4,
          pointHoverRadius: 7,
          offset: 0.2,
          tension: 0.3,
          fill: false,
        }, {
          type: 'line',
          label: 'Прошлое время',
          data: devHelper.endVals.previousEndVals ? devHelper.endVals.previousEndVals.humanTime.map(number => Math.round(number / 60)) : [0, 0, 0, 0, 0, 0],
          fill: false,
          borderColor: 'rgb(155, 155, 155)',
          pointRadius: devHelper.endVals.previousEndVals ? 4 : 0,
          pointHoverRadius: devHelper.endVals.previousEndVals ? 7 : 0,
          offset: 0.2,
          tension: 0.3,
          borderDash: [10, 10],
          showLine: devHelper.endVals.previousEndVals ? true : false,
        }, {
          type: 'bar',
          label: 'Максимальное время',
          data: devHelper.endVals.maxTimeArr.map(number => Math.round(number / 60)),
          borderColor: 'rgb(238, 238, 238)',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          barPercentage: 0.4,
        }, {
          type: 'bar',
          label: 'Среднее время',
          data: devHelper.endVals.averageTime.map(number => Math.round(number / 60)),
          borderColor: 'rgb(238, 238, 238)',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          barPercentage: 0.4,
          borderRadius: Math.round(window.innerWidth / 100 * 0.3),
        },]
      }
    }
  ];
  devHelper.endVals.charts.forEach(chart => {
    chart.destroy();
  })
  if (devHelper.endVals.charts.length > 0)
    devHelper.endVals.charts.length = [];
  chartConfigs.forEach(config => {
    const { name, type, options, data } = config;
    const ctx = document.getElementById(name).getContext('2d');
    let tempChart = new Chart(ctx, {
      type,
      data,
      options
    });
    devHelper.endVals.charts.push(tempChart);
  });
  function formatTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    var formattedTime = hours + " ч " + minutes + " м " + remainingSeconds + " с";
    return formattedTime;
  }
  //------------------------------------------------------------------------------------------------------------------------------------------


  if (devHelper.dev.enable && document.querySelector('.info-tren'))
    document.querySelector('.info-tren').innerHTML = `Вы успешно завершили сценарий ${devHelper.trenVals.scenario}. Ваше время затраченное на прохождение тренажёра = ${devHelper.trenVals.timers.allTime / 1000} сек.`;
  devHelper.dev.enable && console.warn(`Вы успешно завершили сценарий ${devHelper.trenVals.scenario}. Ваше время затраченное на прохождение тренажёра = ${devHelper.trenVals.timers.allTime / 1000} сек.`);
}

function takeStartingState(Restart = false) {
  devHelper.trenVals.timers.allTime = devHelper.trenVals.timers.allTimeHelper = devHelper.trenVals.timers.scenarioTimeHelper =
    devHelper.trenVals.timers.scenarioTime = devHelper.trenVals.timers.actionTime = devHelper.trenVals.timers.actionTimeHelper =
    devHelper.trenVals.timers.deadTimerHelper = devHelper.trenVals.timers.deadTimer = 0;
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
        devHelper.svgVals.forEach((element) => {
          element.activeElements.forEach((oldActiveElement) => {
            if (oldActiveElement.element.id === activeElement.id) {
              let cloneNode = activeElement.cloneNode(true);
              oldActiveElement.element = cloneNode;
              element.svg.getElementById(activeElement.id).replaceWith(cloneNode);
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
      updateSvgTextures();
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
    devHelper.model3DVals.scene.meshes.forEach(mesh => {
      if (mesh.startState && mesh.startState.enable === true) {
        if (mesh.startState.position !== undefined) {
          let tempOnject = { action: { position: { x: mesh.startState.position.x, y: mesh.startState.position.y, z: mesh.startState.position.z } }, duration: 0 };
          handlePosition(tempOnject, mesh);
        }
        if (mesh.startState.rotation !== undefined) {
          let tempOnject = { action: { rotation: { x: mesh.startState.rotation.x, y: mesh.startState.rotation.y, z: mesh.startState.rotation.z } }, duration: 0 };
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
        if (element.number)
          changeScreenVals(element.name, element.number, element.color ? element.color : 'green');
        else {
          let mesh = findMesh(element.id || element.name);
          if (!mesh) {
            let tempInterval = setInterval(() => {
              const mesh = findMesh(element.id || element.name);
              if (mesh) {
                if (!devHelper.model3DVals.activeMeshs.includes(mesh))
                  mesh = makeActiveMesh(mesh, { name: element.id ? element.name : mesh.name });
                let tempobj = { action: element };
                tempobj.duration = 0;
                if (mesh !== undefined) {
                  handleRotation(tempobj, mesh);
                  handlePosition(tempobj, mesh);
                  if (element.material) {
                    mesh.material = findMaterial(element.material);
                  }
                } else {
                  devHelper.dev.enable && console.warn(`Не найден объект ${element.name || element.id} в тренажёре.`);
                }
                clearInterval(tempInterval);
              }
            }, 1500)
          } else {
            if (!devHelper.model3DVals.activeMeshs.includes(mesh))
              mesh = makeActiveMesh(mesh, { name: element.id ? element.name : mesh.name });
            let tempobj = { action: element };
            tempobj.duration = 0;
            if (mesh !== undefined) {
              handleRotation(tempobj, mesh);
              handlePosition(tempobj, mesh);
              if (element.material) mesh.material = findMaterial(element.material);
            } else {
              devHelper.dev.enable && console.warn(`Не найден объект ${element.name || element.id} в тренажёре.`);
            }
          }
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
  devHelper.trenVals.timers.actionTimeHelper = devHelper.trenVals.timers.deadTimerHelper = 0;
  devHelper.trenVals.timers.deadTimer = 120000;
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
  }

  if (devHelper.endVals.currentActionCount >= devHelper.endVals.actionChapter[devHelper.endVals.currentChapter]) {
    devHelper.endVals.currentActionCount = 1;
    devHelper.endVals.currentChapter++;
    devHelper.endVals.errors.push(0);
    if (devHelper.endVals.currentChapter !== 1) {
      let newVal = document.querySelector('.box-time').milisecs / 1000 - devHelper.endVals.humanTime.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      devHelper.endVals.humanTime.push(Math.ceil(newVal))
    } else devHelper.endVals.humanTime.push(Math.ceil(document.querySelector('.box-time').milisecs / 1000));
  } else {
    devHelper.endVals.currentActionCount++;
  }
}

function findSideMeshFromCamera(mesh) {
  const { camera, camera: { position } } = devHelper.model3DVals;
  const { Forward, Up, Cross } = BABYLON.Vector3;
  const [cameraForward, cameraUp, cameraRight] = [Forward(), Up(), Cross(Up(), Forward())].map(dir => camera.getDirection(dir));
  const meshPosition = mesh.getAbsolutePosition();
  const [dotRight, dotUp] = [cameraRight, cameraUp].map(dir => BABYLON.Vector3.Dot(dir, meshPosition.subtract(position)));
  let pointer = document.querySelector('.pointer-helper-container');
  let arrowPointer = pointer.querySelector('.arrow');
  pointer.style.display = 'unset';
  pointer.style.left = dotRight > 0 ? '96.3vw' : '';
  arrowPointer.classList.toggle('arrow-left', dotRight > 0);
  arrowPointer.classList.toggle('arrow-right', dotRight <= 0);
  let pointerTop = 50 - ConvertPxToVh(pointer.getBoundingClientRect().height / 2) - dotUp * ConvertPxToVh(window.innerHeight / 4);
  pointer.style.top = `${Math.max(3, Math.min(95, pointerTop))}vh`;
}

function createConcentrationEffectCondition(Arr) {
  if (Arr[0].position.indexOf(devHelper.model3DVals.currentPosition) === -1) {
    if (devHelper.model3DVals.currentPosition === undefined) {
      let activePointMesh = devHelper.model3DVals.movePointMesh.find(m => m.positionIndex === Arr[0].position[0]);
      const isVisible = isMeshVisible(activePointMesh);
      if (!isVisible) {
        // если нет то создать выделение
        document.querySelector('.box-help').innerHTML = `Найти рабочее место ${devHelper.model3DVals.cameraPositions[Arr[0].position[0]].name}.`;
        findSideMeshFromCamera(activePointMesh);
      } else {
        // если да, то подсветить меш
        document.getElementById('b_help').active3DTexture = activePointMesh;
        changeColorTexture(activePointMesh, true);
        document.querySelector('.box-help').innerHTML = `Подойти к рабочему месту ${devHelper.model3DVals.cameraPositions[Arr[0].position[0]].name}.`;
      }
    } else {
      let activePointMesh = devHelper.model3DVals.movePointMesh.find(m => m.positionIndex === devHelper.model3DVals.currentPosition);
      if (activePointMesh.svgArr && activePointMesh.svgArr.some(obj => obj.name === Arr[0].scheme)) {
        createConcentrationEffect(Arr);
        document.querySelector('.box-help').classList.remove('opacity-1-Temp');
      } else {
        helpBackToMain();
      }
    }
  } else {
    if (Arr[0].scheme) {
      let activeMonitor = devHelper.model3DVals.svgDisplays.meshs.find(m => m.positionIndex === devHelper.model3DVals.currentPosition);
      const isScheme = activeMonitor.svgArr.some(obj => obj.name === Arr[0].scheme);
      if (isScheme) {
        createConcentrationEffect(Arr);
        document.querySelector('.box-help').classList.remove('opacity-1-Temp');
      } else {
        document.querySelector('.box-help').innerHTML = 'Включить схему ' + devHelper.svgVals.find(element => element.name === Arr[0].scheme).realName;
      }
    } else {
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
        Array.from(concentrationDiv.querySelector('.hole-container').children).forEach(element => {
          element.style.width = element.endWidth;
          element.style.height = element.endHeight;
          element.style.left = element.endLeft;
          element.style.top = element.endTop;
          element.style.opacity = '1';
        })
        Array.from(concentrationDiv.querySelector('.line-container').children).forEach((element, index) => {
          element.style.opacity = '1';
          if (element.classList.contains('concentration-line')) {
            element.style.width = element.endWidth;
            element.style.height = element.endHeight;
            element.style.left = element.endLeft;
            element.style.top = element.endTop;
          }

        })
      }
    })
    concentrationDiv.addEventListener('transitionstart', (e) => {
      if (e.propertyName === 'opacity' && e.currentTarget.style.opacity === '0') {
        Array.from(concentrationDiv.querySelector('.hole-container').children).forEach(element => {
          element.style.trsansition = 'none';
          element.style.width = '0vw';
          element.style.height = '0vh';
          element.style.left = element.startLeft;
          element.style.top = element.startTop;
          element.style.opacity = '0'
        })
        Array.from(concentrationDiv.querySelector('.line-container').children).forEach((element, index) => {
          element.style.trsansition = 'none';
          element.style.opacity = '0'
          if (element.classList.contains('concentration-line')) {
            element.style.width = '0vw';
            element.style.height = '0vh';
            element.style.left = element.startLeft;
            element.style.top = element.startTop;
          }
        })
      }
      if (e.propertyName === 'opacity' && e.currentTarget.style.opacity === '1') {
        Array.from(concentrationDiv.querySelector('.hole-container').children).forEach(element => { element.style.trsansition = ''; })
        Array.from(concentrationDiv.querySelector('.line-container').children).forEach(element => { element.style.trsansition = ''; })
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
    let newText = createCustomElement('span', '', { 'class': 'concentration-text' });
    newText.innerHTML = Variables.text;
    concentrationDiv.children[1].append(newText);
    newText.style.left = ((Variables.x + Variables.w / 2) - ConvertPxToVw(newText.getBoundingClientRect().width / 2)) + 'vw';
    newText.style.top = (Variables.y - ConvertPxToVh(newText.getBoundingClientRect().height)) + 'vh';
    function createConcentrationHoleLine(x, y, w, h, type = 'l') {
      let elem = createCustomElement('div', '', { 'class': type === 'h' ? 'concentration-hole' : 'concentration-line' });
      elem.endLeft = x + 'vw';
      elem.endTop = y + 'vh';
      elem.style.left = (x + w / 2) + 'vw';
      elem.style.top = (y + h / 2) + 'vh';
      elem.startLeft = elem.style.left;
      elem.startTop = elem.style.top;
      elem.endWidth = w + 'vw';
      elem.endHeight = h + 'vh';
      elem.style.width = 0 + 'vw';
      elem.style.height = 0 + 'vh';
      return elem;
    }
  }
}
















const Roles = {
  "Система": "messageSystem",
  "Газовщик": "messageMy",
  "Мастер печи": "message",
  "Дежурный водопроводчик": "message",
  "Работник": "message",
  "Ошибка": "messageError"
}
function addTrenValsMessages(elem) {
  devHelper.trenVals.messages.push(elem);
}
function sendMessage(Sender = 'Система', TextMessage) {
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
    document.querySelector('.box-chat-window-mini').style.height = document.querySelector('.box-chat-window-mini').querySelector('.chat').children[0].getBoundingClientRect().height + 35 + 18 + 'px';
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

document.body.addEventListener('mouseleave', () => {
  if (document.querySelector('.transition-0'))
    stopMoveContainer(document, document.querySelector('.transition-0'));
});
function stopMoveContainer(Document, MoveWindow) {
  Document.onmousemove = null;
  MoveWindow.onmouseup = null;
  MoveWindow.classList.remove('transition-0');
  MoveWindow.style.left = ConvertPxToVw(parseFloat(MoveWindow.style.left)) + 'vw';
  MoveWindow.style.top = ConvertPxToVh(parseFloat(MoveWindow.style.top)) + 'vh';
  MoveWindow.classList.toggle('raise-up', false);
}
function dragAndDrop(e, moveWindow) {
  moveWindow.classList.add('transition-0');
  let coords = getCoords(moveWindow);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;
  moveAt(e);
  function moveAt(e) {
    moveWindow.style.left = (e.pageX - shiftX) /*/ vW*/ + 'px';
    moveWindow.style.top = (e.pageY - shiftY) /*/ vH*/ + 'px';
    fixEdge(e);

    if (moveWindow.style.opacity !== '1') {
      moveWindow.style.opacity = '1';
      // moveWindow.old
    }
    if (document.querySelectorAll('.opacity-1-Always').length > 1) {
      Array.from(document.querySelectorAll('.opacity-1-Always')).forEach((item) => {
        if (item !== moveWindow && item.style.opacity !== '' && !areElementsIntersecting(item, moveWindow)) {
          let intersecObj = devHelper.trenVals.windowIntersec.find(el => el.main === moveWindow);
          if (intersecObj) {
            let intersecWindow = intersecObj.below.find(el => el === item);
            let intersecWindowIndex = intersecObj.below.findIndex(el => el === item);
            if (intersecWindow) {
              intersecWindow.style.opacity = '';
              intersecObj.below.splice(intersecWindowIndex, 1);
              if (intersecObj.below.length === 0) {
                devHelper.trenVals.windowIntersec.splice(devHelper.trenVals.windowIntersec.findIndex(el => el.main === moveWindow), 1)
              }
            }
          }
        }
      })
    }
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

  // 
  moveWindow.onmouseup = function () {
    stopMoveContainer(document, moveWindow);
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
  e.classList.toggle('raise-up', true);
  e.classList.add('z-index9')
}
function raiseDownBox(e) {
  e.classList.toggle('raise-up', false);
  e.classList.toggle('z-index9', false);
}


function clickCloseTime(e) {
  if (document.getElementById('b_oclock').classList.contains('button-tren-active')) {
    document.getElementById('b_oclock').classList.remove('button-tren-active')
    setNewFillButtonSVG(document.getElementById('b_oclock').querySelector('object'), COLOR_STATE_BUTTON.Normal);
  }
  document.getElementById('b_oclock').style.border = '';
  if (document.querySelectorAll('.opacity-1-Always').length > 0) {
    let tempItem = document.querySelector(`.${document.getElementById('b_oclock').getAttribute('window-interface')}`);
    Array.from(document.querySelectorAll('.opacity-1-Always')).forEach((domEle) => {
      if (tempItem !== domEle && areElementsIntersecting(tempItem, domEle)) {
        let intersecObj = devHelper.trenVals.windowIntersec.find(el => el.main === tempItem);
        if (intersecObj) {
          let intersecWindow = intersecObj.below.find(el => el === domEle);
          let intersecWindowIndex = intersecObj.below.findIndex(el => el === domEle);
          if (intersecWindow) {
            intersecWindow.style.opacity = '';
            intersecObj.below.splice(intersecWindowIndex, 1);
            if (intersecObj.below.length === 0) {
              devHelper.trenVals.windowIntersec.splice(devHelper.trenVals.windowIntersec.findIndex(el => el.main === tempItem), 1)
            }
          }
        }
      }
    })
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
  document.getElementById('b_chat').style.border = '';
  if (document.querySelectorAll('.opacity-1-Always').length > 0) {
    let tempItem = document.querySelector(`.${document.getElementById('b_chat').getAttribute('window-interface')}`);
    Array.from(document.querySelectorAll('.opacity-1-Always')).forEach((domEle) => {
      if (tempItem !== domEle && areElementsIntersecting(tempItem, domEle)) {
        let intersecObj = devHelper.trenVals.windowIntersec.find(el => el.main === tempItem);
        if (intersecObj) {
          let intersecWindow = intersecObj.below.find(el => el === domEle);
          let intersecWindowIndex = intersecObj.below.findIndex(el => el === domEle);
          if (intersecWindow) {
            intersecWindow.style.opacity = '';
            intersecObj.below.splice(intersecWindowIndex, 1);
            if (intersecObj.below.length === 0) {
              devHelper.trenVals.windowIntersec.splice(devHelper.trenVals.windowIntersec.findIndex(el => el.main === tempItem), 1)
            }
          }
        }
      }
    })
  }
  document.querySelector('.box-chat-window').classList.remove('z-index9');
  document.querySelector('.box-chat-window').classList.remove("opacity-1-Temp"); // БОЛЬШОЕ ОКНО
  document.querySelector('.box-chat-window').classList.remove("opacity-1-Always"); // БОЛЬШОЕ ОКНО
  document.querySelector('.box-chat-window .block-button').classList.remove("z-index-1"); // БЛОКИРОВКА КНОПОК
  // document.querySelector('.box-chat-window .box-chat-header').classList.remove("opacity-1-Always"); // ЛИНИЯ С НАЗВАНИЕ И Х
  document.querySelector('.box-chat-window .box-chat-header').style.opacity = '';

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
  Array.from(document.querySelectorAll('.time-header')).forEach(element => {
    element.onmouseover = (e) => {
      // element.parentElement.classList.add('border-window')
      if (element.querySelector('.horizontal-line-box')) {
        element.querySelector('.horizontal-line-box').style.borderColor = '#2c5289';
        element.querySelector('.horizontal-line-box').style.backgroundColor = '#2c5289';
      }
    }
    element.onmouseout = (e) => {
      // element.parentElement.classList.remove('border-window')
      if (element.querySelector('.horizontal-line-box')) {
        element.querySelector('.horizontal-line-box').style.borderColor = '';
        element.querySelector('.horizontal-line-box').style.backgroundColor = '';
      }
    }
  });
  Array.from(document.querySelectorAll('.box-chat-header')).forEach(element => {
    element.onmouseover = (e) => {
      // element.parentElement.classList.add('border-window')
      if (element.querySelector('.horizontal-line-box')) {
        element.querySelector('.horizontal-line-box').style.borderColor = '#2c5289';
        element.querySelector('.horizontal-line-box').style.backgroundColor = '#2c5289';
      }
    }
    element.onmouseout = (e) => {
      // element.parentElement.classList.remove('border-window')
      if (element.querySelector('.horizontal-line-box')) {
        element.querySelector('.horizontal-line-box').style.borderColor = '';
        element.querySelector('.horizontal-line-box').style.backgroundColor = '';
      }
    }
  });
}
// TIME
{
  // КЛИК ЗАКРЫТЬ TIME
  document.querySelector('.time-header-button').addEventListener("click", clickCloseTime)
  // BIND mouseDown
  document.querySelector('.time-header').onmousedown = (e) => {
    raiseUpBox(e.currentTarget.parentElement);
    dragAndDrop(e, e.currentTarget.parentElement);
  };
}


function setLifeTime(time) {
  devHelper.trenVals.timers.lifeTime = time;
  // document.querySelector(".time-hour").textContent = time.split(":")[0];
  // document.querySelector(".time-minute").textContent = time.split(":")[1];
  // document.querySelector(".time-second").textContent = time.split(":")[2];
}
// TIMER
{
  setLifeTime(devHelper.trenVals.timers.lifeTime);  // 2d 
  // BIND mouseDown
  document.querySelector('.dialogHeader .time-header-title').onmousedown = (e) => {
    raiseUpBox(e.currentTarget.parentElement);
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
  document.querySelector('.box-chat-window .chat-header-button').addEventListener("click", clickCloseChat);
  document.querySelector('.box-chat-header').onmousedown = (e) => {
    raiseUpBox(e.currentTarget.parentElement);
    dragAndDrop(e, e.currentTarget.parentElement);
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
  helperWindow.classList.remove('transition-0');
  let b_center = item.getBoundingClientRect().height / 2;
  let w_center = helperWindow.getBoundingClientRect().height / 2;
  if (helperWindow.getBoundingClientRect().bottom >= window.innerHeight * 0.99) {
    helperWindow.style.top = (99.1 - ConvertPxToVh(helperWindow.getBoundingClientRect().height)) + 'vh';
    helperWindow.setAttribute('sy', helperWindow.style.top);
  } else {
    helperWindow.style.top = ConvertPxToVh(item.getBoundingClientRect().y + b_center - w_center) + 'vh';
  }
}

// БОЛЬШОЙ БИНД НА СМЕНУ ЦВЕТА КНОПОК // НОВОЕ СВП В 1Ю КНОПКУ  // КЛИК
Array.from(document.querySelectorAll('.box-tren-ui .line-tren')).forEach((item) => {
  let b_action = item.querySelector('.click-button-tren');
  item = item.querySelector('button');
  b_action.addEventListener('click', (e) => {
    if (item.hasAttribute('disabled')) return; // отключен
    if (item.id === 'b_help') return;
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
      item.style.border = '';

      if (document.querySelectorAll('.opacity-1-Always').length > 0) {
        let tempItem = document.querySelector(`.${item.getAttribute('window-interface')}`);
        raiseDownBox(tempItem);
        Array.from(document.querySelectorAll('.opacity-1-Always')).forEach((domEle) => {
          if (tempItem !== domEle && areElementsIntersecting(tempItem, domEle)) {
            let intersecObj = devHelper.trenVals.windowIntersec.find(el => el.main === tempItem);
            if (intersecObj) {
              let intersecWindow = intersecObj.below.find(el => el === domEle);
              let intersecWindowIndex = intersecObj.below.findIndex(el => el === domEle);
              if (intersecWindow) {
                intersecWindow.style.opacity = '';
                intersecObj.below.splice(intersecWindowIndex, 1);
                if (intersecObj.below.length === 0) {
                  devHelper.trenVals.windowIntersec.splice(devHelper.trenVals.windowIntersec.findIndex(el => el.main === tempItem), 1)
                }
              }
            }
          }
        })
      }
      return;
    } else {
      if (item.id !== 'b_GeneralView') {
        item.style.border = '0.15vw solid #2c5289';
      }
      if (document.querySelectorAll('.opacity-1-Always').length > 0) {
        let tempItem = document.querySelector(`.${item.getAttribute('window-interface')}`);
        raiseUpBox(tempItem);
        Array.from(document.querySelectorAll('.opacity-1-Always')).forEach((item2) => {
          if (item2 !== tempItem && areElementsIntersecting(item2, tempItem) && item2.style.opacity !== '0.2') {
            if (!devHelper.trenVals.windowIntersec.find(el => el.main === tempItem)) {
              devHelper.trenVals.windowIntersec.push({
                main: tempItem,
                below: [item2],
              })
            } else {
              if (devHelper.trenVals.windowIntersec.find(el => el.main === tempItem).below.find(el => el !== item2)) {
                devHelper.trenVals.windowIntersec.find(el => el.main === tempItem).below.push(item2)
              }
            }
          }
        })
        if (devHelper.trenVals.windowIntersec.find(el => el.main === tempItem)) {
          devHelper.trenVals.windowIntersec.find(el => el.main === tempItem).below.forEach((opaDom) => {
            opaDom.style.opacity = '0.2';
          })
        }
      }
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
    if (b_action.closest('button').hasAttribute('disabled')) return;
    else {
      if (b_action.closest('.button-tren-active') === null) {
        if (document.querySelectorAll('.opacity-1-Always').length > 0) {
          Array.from(document.querySelectorAll('.opacity-1-Always')).forEach((item2) => {
            if (item2 !== _item && areElementsIntersecting(item2, _item) && item2.style.opacity !== '0.2') {
              if (!devHelper.trenVals.windowIntersec.find(el => el.main === _item)) {
                devHelper.trenVals.windowIntersec.push({
                  main: _item,
                  below: [item2],
                })
              } else {
                if (devHelper.trenVals.windowIntersec.find(el => el.main === _item).below.find(el => el !== item2)) {
                  devHelper.trenVals.windowIntersec.find(el => el.main === _item).below.push(item2)
                }
              }
            }
          })
          if (devHelper.trenVals.windowIntersec.find(el => el.main === _item)) {
            devHelper.trenVals.windowIntersec.find(el => el.main === _item).below.forEach((opaDom) => {
              opaDom.style.opacity = '0.2';
            })
          }
        }
        _item.classList.add('opacity-1-Temp');
        raiseUpBox(_item);
        _item.classList.remove('transition-0');
        _item.style.left = !document.querySelector('.tren-ui-long') ? _item.getAttribute('sx') : _item.getAttribute('sx2');
      }
      if (b_action.closest('#b_help')) {
        reavialTextHelp();
      }
      if (!_item.classList.contains('opacity-1-Always')) {
        setCenterWindow(item);
      }
    }
  });
  b_action.addEventListener('mouseout', (e) => {
    raiseDownBox(_item);
    _item.classList.remove('opacity-1-Temp');
    _item.style.opacity = '';
    if (!_item.classList.contains('opacity-1-Always')) {
      if (devHelper.trenVals.windowIntersec.find(el => el.main === _item)) {
        devHelper.trenVals.windowIntersec.find(el => el.main === _item).below.forEach((opaDom) => {
          opaDom.style.opacity = '';
        })
        devHelper.trenVals.windowIntersec.splice(devHelper.trenVals.windowIntersec.findIndex(el => el.main === _item), 1);
      }
    }
    if (b_action.closest('#b_help')) {
      hideTextHelp();
    }
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
    document.querySelector('.section-copy').style.left = '9.3vw';
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
    // document.querySelector('.box-chat-window .box-chat-header').classList.add("opacity-1-Always");
    document.querySelector('.box-chat-window .box-chat-header').style.opacity = '1';
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
  const button = document.getElementById('b_GeneralView');
  state ? button.removeAttribute('disabled') : button.setAttribute('disabled', "");
}
// КЛИК ОБРАТНО
document.getElementById('b_GeneralView').addEventListener("click", (e) => {
  document.querySelector('.box-back').classList.toggle('opacity-1-Temp', false);
  e.currentTarget.classList.remove('button-tren-active');
  devHelper.model3DVals.movePointMesh.forEach(mesh => {
    mesh.isPickable = false;
    if (mesh.name.indexOf('highlight') !== -1) mesh.setEnabled(false);
  })
  if (devHelper.model3DVals.currentPosition > 100) {
    if (devHelper.model3DVals.currentPosition === 101 || devHelper.model3DVals.currentPosition === 102) {
      animMoveCamera(devHelper.model3DVals.cameraPositions.find(obj => obj.position === 3), 1);
    } else if (devHelper.model3DVals.currentPosition === 103 || devHelper.model3DVals.currentPosition === 104) {
      animMoveCamera(devHelper.model3DVals.cameraPositions.find(obj => obj.position === 9), 1);
    }
  } else animMoveCamera(devHelper.model3DVals.cameraPositions[0]);
  setNewFillButtonSVG(e.currentTarget.querySelector('object'), COLOR_STATE_BUTTON.Normal);
  document.getElementById('b_GeneralView').setAttribute('disabled', "");
})
document.getElementById('b_chat').addEventListener("mouseover", (e) => { setMiniChat(); })

// ПОМОЩЬ
function reavialTextHelp() {
  let currentAction = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
  if (currentAction && currentAction.concentration) createConcentrationEffectCondition(currentAction.concentration);
  else if (devHelper.trenVals.multiAction && devHelper.trenVals.multiAction.length > 0) {
    if (devHelper.trenVals.multiAction[0].action.target3D) {
      helperHighlightOn(devHelper.trenVals.multiAction)
    } else {
      helperHighlight2DOn(devHelper.trenVals.multiAction)
    }
  } else if (currentAction && currentAction.action && currentAction.action.target3D && currentAction.human) {
    helperHighlightOn(currentAction);
  } else if (currentAction && currentAction.action && currentAction.action.target2D && currentAction.human) {
    helperHighlight2DOn(currentAction)
  } else {
    document.querySelector('.box-help').innerHTML = '';
    document.querySelector('.box-help').classList.toggle('opacity-1-Temp', false);
  }
}

function helperHighlight2DOn(Actions) {
  let tempArr = Array.isArray(Actions) ? Actions : [Actions];
  let teamHelperNames = '';
  tempArr.forEach((actionObject, Index) => {
    if (actionObject.action && actionObject.action.target2D) {
      let tempHelper = findRealName(actionObject.action.target2D);
      if (tempHelper) {
        let tempRealHelperName = tempHelper.name;
        let tempRealShemeName = tempHelper.location;

        let requiredPosition = undefined;
        let svgName;
        let displayNameArr = [];
        let displayMesh;


        devHelper.model3DVals.svgDisplays.meshs.forEach(displayMesh => {
          displayMesh.svgArr.forEach(svg => {
            if (devHelper.svgVals.find(svg2 => svg2.name === svg.name).realName === tempRealShemeName) {
              requiredPosition = displayMesh.positionIndex;
            }
          })
        })
        devHelper.svgHelpers.find(obj => {
          if (obj.helpers.find(objHelper => objHelper.id === actionObject.action.target2D)) {
            svgName = obj.name;
            return obj.name;
          }
        });
        devHelper.model3DVals.svgDisplaysArr.find(obj => {
          if (obj.possibleSchemes && obj.possibleSchemes.includes(svgName)) {
            displayNameArr.push(obj.name);
          }
        })
        if (devHelper.model3DVals.currentPosition === undefined) {
          let tempMesh = devHelper.model3DVals.svgDisplays.meshs.find(displayMesh1 => displayMesh1.name === displayNameArr[0]);
          if (tempMesh && !requiredPosition) {
            requiredPosition = tempMesh.positionIndex;
          }
        } else {
          if (document.querySelector('#svg-helper')) {
            let currentPosMeshName = devHelper.model3DVals.movePointMeshToArr.find(obj => obj.point === devHelper.model3DVals.currentPosition).name;
            if (displayNameArr.find(name => name === currentPosMeshName)) {
              let tempMesh = devHelper.model3DVals.svgDisplays.meshs.find(displayMesh1 => displayMesh1.name === displayNameArr.find(name => name === currentPosMeshName));
              if (tempMesh) {
                requiredPosition = tempMesh.positionIndex;
              }
            } else {
              if (devHelper.dev.enable) console.log('Не найдено 1');
            }
          } else {
            document.querySelector('.box-help').innerHTML = `Вернуться на "Главный вид".`;
            helpBackToMain();
          }
        }

        if (devHelper.model3DVals.currentPosition !== undefined) {
          if (requiredPosition !== devHelper.model3DVals.currentPosition) {
            document.querySelector('.box-help').innerHTML = `Вернуться на "Главный вид".`;
            helpBackToMain();
          } else {
            displayMesh = devHelper.model3DVals.svgDisplays.meshs.find(displayMesh1 => displayMesh1.positionIndex === requiredPosition);
            if (displayMesh) {
              if (displayMesh.svgArr && displayMesh.svgArr.find(obj => obj.name === svgName)) {
                let temp2D = document.querySelector(`#${actionObject.action.target2D}`);
                if (temp2D) temp2D.classList.toggle('hightlight-helper', true);
                teamHelperNames += (tempRealHelperName ? tempRealHelperName : actionObject.action.target2D) + ', ';
                if (Index === tempArr.length - 1) {
                  teamHelperNames = teamHelperNames.slice(0, -2);
                  document.querySelector('.box-help').innerHTML = `Нажать курсором по элемент${tempArr.length > 1 ? 'ам' : 'у'} "${teamHelperNames}".`;
                }
              } else {
                document.querySelector('.box-help').innerHTML = `Включить схему${tempRealShemeName ? ' "' + tempRealShemeName + '"' : ''}.`;
              }
            } else {
              if (devHelper.dev.enable) console.log('Не найдено 2');
            }
          }
        } else {
          changeColorTexture(devHelper.model3DVals.movePointMesh.find(m => m.positionIndex === requiredPosition), true, true);
          document.querySelector('.box-help').innerHTML = `Подойти к рабочему месту "${devHelper.model3DVals.cameraPositions[requiredPosition].name}".`;
        }
      }
    }
  })
}

function hideTextHelp() {
  let currentAction = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
  if (currentAction && currentAction.action && currentAction.action.target3D && currentAction.human) {
    helperHighlightOff(currentAction.action.target3D);
  } else if (devHelper.trenVals.multiAction && devHelper.trenVals.multiAction.length > 0) {
    if (devHelper.trenVals.multiAction[0].action.target3D) {
      devHelper.trenVals.multiAction.forEach(obj => {
        if (obj.action && obj.action.target3D) {
          helperHighlightOff(obj.action.target3D);
        }
      });
    } else {
      helperHighlightOff();
      if (document.querySelector('.hightlight-helper'))
        Array.from(document.querySelectorAll('.hightlight-helper')).forEach(elem => elem.classList.toggle('hightlight-helper', false))
    }
  } else if (currentAction && currentAction.action && currentAction.action.target2D && currentAction.human) {
    helperHighlightOff();
    if (document.querySelector('.hightlight-helper')) document.querySelector('.hightlight-helper').classList.toggle('hightlight-helper', false);
  }
  if (document.querySelector('.concentration')) document.querySelector('.concentration').style.opacity = 0;
  if (document.getElementById('b_help').active3DTexture) {
    changeColorTexture(document.getElementById('b_help').active3DTexture, false);
    document.getElementById('b_help').active3DTexture = undefined;
  }
  if (document.getElementById('b_help').interval)
    clearInterval(document.getElementById('b_help').interval);
  document.getElementById('b_GeneralView').style.border = '';
  document.querySelector('.pointer-helper-container').style.display = 'none';
}

Array.from(document.querySelectorAll('.help-buttons-no')).forEach((item) => {
  item.addEventListener("click", clickCloseHelperWIndow);
});
Array.from(document.querySelectorAll('.help-buttons-yes')).forEach((item) => {
  item.addEventListener("click", clickYesHelperWIndow);
});

function clickCloseHelperWIndow(e) {
  let helperWindow = e.target.closest('.opacity-1-Always');
  helperWindow.classList.remove('z-index9');
  helperWindow.classList.remove("opacity-1-Always");
  helperWindow.classList.remove("opacity-1-Temp");
  if (document.querySelectorAll('.opacity-1-Always').length > 0) {
    Array.from(document.querySelectorAll('.opacity-1-Always')).forEach((item) => {
      if (item !== helperWindow && item.style.opacity !== '' && areElementsIntersecting(item, helperWindow)) {
        let intersecObj = devHelper.trenVals.windowIntersec.find(el => el.main === helperWindow);
        if (intersecObj) {
          let intersecWindow = intersecObj.below.find(el => el === item);
          let intersecWindowIndex = intersecObj.below.findIndex(el => el === item);
          if (intersecWindow) {
            intersecWindow.style.opacity = '';
            intersecObj.below.splice(intersecWindowIndex, 1);
            if (intersecObj.below.length === 0) {
              devHelper.trenVals.windowIntersec.splice(devHelper.trenVals.windowIntersec.findIndex(el => el.main === helperWindow), 1)
            }
          }
        }
      }
    })
  }
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
  document.getElementById('b_' + btnName).style.border = '';
  setNewFillButtonSVG(document.getElementById('b_' + btnName).querySelector('object'), COLOR_STATE_BUTTON.Normal);
}
function clickYesHelperWIndow(e) {
  let helperWindow = e.target.closest('.opacity-1-Always');
  helperWindow.classList.remove('z-index9');
  helperWindow.classList.remove("opacity-1-Always");
  helperWindow.classList.remove("opacity-1-Temp");

  if (document.querySelectorAll('.opacity-1-Always').length > 0) {
    Array.from(document.querySelectorAll('.opacity-1-Always')).forEach((item) => {
      if (item !== helperWindow && item.style.opacity !== '' && areElementsIntersecting(item, helperWindow)) {
        let intersecObj = devHelper.trenVals.windowIntersec.find(el => el.main === helperWindow);
        if (intersecObj) {
          let intersecWindow = intersecObj.below.find(el => el === item);
          let intersecWindowIndex = intersecObj.below.findIndex(el => el === item);
          if (intersecWindow) {
            intersecWindow.style.opacity = '';
            intersecObj.below.splice(intersecWindowIndex, 1);
            if (intersecObj.below.length === 0) {
              devHelper.trenVals.windowIntersec.splice(devHelper.trenVals.windowIntersec.findIndex(el => el.main === helperWindow), 1)
            }
          }
        }
      }
    })
  }

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
  document.getElementById('b_' + btnName).style.border = '';
  setNewFillButtonSVG(document.getElementById('b_' + btnName).querySelector('object'), COLOR_STATE_BUTTON.Normal);

  if (btnName === 'restart') {
    startTren(true);
  } else if (btnName === 'exit') {
    startChangeFon();
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
  document.querySelector('.section-copy').classList.toggle('opacity-1-Always', e.currentTarget.classList.contains('button-tren-active'));

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

function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

function helperHighlightOn(Actions) {
  let tempArr = Array.isArray(Actions) ? Actions : [Actions];
  let teamMeshNames = ' "', placeName = '';
  tempArr.forEach((actionObject, Index) => {
    if (actionObject.action && actionObject.action.target3D) {
      let tempMesh = findMesh(actionObject.action.target3D);
      if (tempMesh) {
        let teamMeshName = findRealName(actionObject.action.target3D).name;
        let tempName = teamMeshName ? teamMeshName : devHelper.dev.enable === true ? actionObject.action.target3D : undefined;
        teamMeshNames += tempName ? (tempName + ', ') : '';
        placeName = findRealName(actionObject.action.target3D).location;
        let tempMeshPosition = tempMesh.currentPosition ? tempMesh.currentPosition : devHelper.model3DVals.cameraPositions.find(obj => obj.name === placeName).position;
        devHelper.model3DVals.cameraPositions.find(obj => obj.name === placeName).position;
        let tempMeshPosition2 = undefined
        if (devHelper.model3DVals.currentPosition > 100) {
          tempMeshPosition2 = devHelper.model3DVals.cameraPositions.find(obj => obj.fromPos && obj.position === devHelper.model3DVals.currentPosition).fromPos;
        }
        if (tempMeshPosition !== devHelper.model3DVals.currentPosition && ((tempMeshPosition2 !== undefined && tempMeshPosition2 !== tempMeshPosition) || tempMeshPosition2 === undefined)) {
          if (devHelper.model3DVals.currentPosition === undefined) {
            document.querySelector('.box-help').innerHTML = `Подойти к рабочему месту "${placeName}".`;
            changeColorTexture(devHelper.model3DVals.movePointMesh.find(m => m.positionIndex === tempMeshPosition), true, true);
            return;
          } else {
            helpBackToMain();
            return;
          }
        } else {
          changeColorTexture(tempMesh, true, true);
        }
      }
      if (Index === tempArr.length - 1) {
        teamMeshNames = teamMeshNames.slice(0, -2);
        if (teamMeshNames.length > 3) teamMeshNames += '"'; else teamMeshNames = '';
        document.querySelector('.box-help').innerHTML = `Нажать курсором на 3Д объект${tempArr.length > 1 ? 'ы' : ''}${teamMeshNames}.`;
      }
    }
  })
}

function helperHighlightOff(Target) {
  let tempMesh = findMesh(Target, false);
  if (tempMesh && tempMesh.renderOverlay !== false) changeColorTexture(tempMesh, false, true);
  devHelper.model3DVals.movePointMesh.forEach(element => {
    if (element.renderOverlay !== false) changeColorTexture(element, false, true);
  })
}

function helpBackToMain() {
  document.querySelector('.box-help').innerHTML = `Вернуться на "Главный вид".`;
  if (document.getElementById('b_help').interval)
    clearInterval(document.getElementById('b_help').interval);
  document.getElementById('b_help').interval = setInterval(changeBorder, 310);
  function changeBorder() {
    document.getElementById('b_GeneralView').style.border =
      document.getElementById('b_GeneralView').style.border === '' ? '2px solid #2c5289' : '';
  }
}

function findRealName(TargetName) {
  let returnObj = {
    name: undefined,
    location: undefined,
  }
  let currentAction = findCurrentAction();
  let real3Dmesh = findMesh(TargetName, false);
  if (real3Dmesh) {
    let temp3D = undefined;
    if (real3Dmesh.realName) {
      temp3D = real3Dmesh;
    } else {
      devHelper.model3DVals.activeMeshsToArr.forEach(obj => {
        if (obj.name === real3Dmesh.name || obj.id === real3Dmesh.id || obj.name === real3Dmesh.id || real3Dmesh.name.indexOf(obj.name) !== -1) {
          if (obj.realName && !temp3D) temp3D = obj;
        }
      })
      if (!temp3D) temp3D = real3Dmesh;
    }
    if (devHelper.dev.enable === false)
      returnObj.name = temp3D ? temp3D.realName ? temp3D.realName : undefined : undefined;
    else
      returnObj.name = temp3D ? temp3D.realName ? temp3D.realName : real3Dmesh.name : real3Dmesh.name;
    let location = devHelper.model3DVals.cameraPositions.find(elem => elem.position === (real3Dmesh.currentPosition ? real3Dmesh.currentPosition : typeof temp3D.position === 'number' ? temp3D.position : undefined));
    returnObj.location = location ? location.name : '';
  } else {
    let tempRealHelper;
    if (document.querySelector('#svg-helper')) {
      let tempNameSvg = document.querySelector('#svg-helper').forScheme;
      let tempRealHelper = devHelper.svgHelpers.find(element => element.name === tempNameSvg).helpers.find(element => element.id === TargetName);
      if (tempRealHelper) {
        returnObj.location = devHelper.svgVals.find(element => element.name === tempNameSvg).realName;
        returnObj.name = tempRealHelper ? tempRealHelper.realName ? tempRealHelper.realName : '' : '';
        if (currentAction.action && currentAction.action.realName) returnObj.name = currentAction.action.realName;
      } else {
        devHelper.svgHelpers.some(element => {
          if (element.helpers && Array.isArray(element.helpers)) {
            tempRealHelper = element.helpers.find(helper => helper.id === TargetName);
            returnObj.location = devHelper.svgVals.find(element2 => element2.name === element.name).realName;
            return tempRealHelper;
          }
          return false;
        });
        returnObj.name = tempRealHelper ? tempRealHelper.realName ? tempRealHelper.realName : '' : '';
      }
    } else {
      devHelper.svgHelpers.some(element => {
        if (element.helpers && Array.isArray(element.helpers)) {
          tempRealHelper = element.helpers.find(helper => helper.id === TargetName);
          returnObj.location = devHelper.svgVals.find(element2 => element2.name === element.name).realName;
          return tempRealHelper;
        }
        return false;
      });
      returnObj.name = tempRealHelper ? tempRealHelper.realName ? tempRealHelper.realName : '' : '';
    }
  }
  if (currentAction.action && currentAction.action.realName) returnObj.name = currentAction.action.realName;
  return returnObj;
}
