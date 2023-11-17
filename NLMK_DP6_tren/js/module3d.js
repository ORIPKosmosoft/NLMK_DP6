// Остановка вращения камерой camera.inputs.attached.mouse._allowCameraRotation = false;
/* Убрать движение камерой
    camera.inputs.attached.keyboard.keysDown = [];
    camera.inputs.attached.keyboard.keysDownward = [];
    camera.inputs.attached.keyboard.keysLeft = [];
    camera.inputs.attached.keyboard.keysRight = [];
    camera.inputs.attached.keyboard.keysUp = [];
    camera.inputs.attached.keyboard.keysUpward = [];
*/

/*----------TODO----------------------------------------------------
Починить уход курсора с подсветки элемента хотспота с рендера
--------------------------------------------------------------------
*/
window.addEventListener('load', function () {
  document.querySelector('#renderCanvas').addEventListener('mouseout', e => {
    devHelper.model3DVals.highlightMesh && changeColorTexture(devHelper.model3DVals.highlightMesh, false);
  })
  const createScene = function () {
    let scene = new BABYLON.Scene(devHelper.model3DVals.engine);
    devHelper.model3DVals.scene = scene;
    let camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0.35, 2.15, -3.4), scene);
    devHelper.model3DVals.camera = camera;
    camera.rotation = new BABYLON.Vector3(0.1913, -0.0046, 0);
    camera.attachControl(devHelper.model3DVals.canvas, true);
    camera.minZ = 0.1;
    let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, -1, 0), scene);
    light.intensity = 1;
    var light2 = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -2, 0), scene);
    light2.position = new BABYLON.Vector3(0, 15, 0);
    light2.intensity = 1;
    light2.shadowMinZ = 10;
    light2.shadowMaxZ = 40;
    let light3 = new BABYLON.HemisphericLight("light3", new BABYLON.Vector3(0, 1, 0), scene);
    light3.intensity = 1;
    var shadowGenerator = new BABYLON.ShadowGenerator(1024, light2);
    shadowGenerator.useContactHardeningShadow = true;
    shadowGenerator.usePercentageCloserFiltering = true;
    // shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
    // shadowGenerator.usePoissonSampling = true;
    // shadowGenerator.useBlurExponentialShadowMap = true;
    // shadowGenerator.useBlurCloseExponentialShadowMap = true;

    loadModel(devHelper.model3DVals.loadModels[0], scene, shadowGenerator);
    scene.actionManager = new BABYLON.ActionManager(scene);
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnEveryFrameTrigger,
        function () {
          if (devHelper.model3DVals.currentPosition === undefined) {
            if (camera.rotation.y >= 1.01) camera.rotation.y = 1.01;
            if (camera.rotation.y <= -0.93) camera.rotation.y = -0.93;
            if (camera.rotation.x >= 0.608) camera.rotation.x = 0.608;
            if (camera.rotation.x <= -0.12) camera.rotation.x = -0.12;
          } else if (devHelper.model3DVals.currentPosition === 1) {
            if (camera.rotation.y >= 0.55) camera.rotation.y = 0.55;
            if (camera.rotation.y <= -1.3) camera.rotation.y = -1.3;
            if (camera.rotation.x >= 0.18) camera.rotation.x = 0.18;
            if (camera.rotation.x <= -0.23) camera.rotation.x = -0.23;
          }
        }
      )
    );
    scene.onPointerUp = function (evt, pickResult) {
      if (devHelper.model3DVals.currentPosition !== undefined) {
        animMoveCamera(devHelper.model3DVals.cameraPositions[devHelper.model3DVals.currentPosition], 0.5);
      }
    };
    /* Блок кнопопк для камеры
    ----------------------------------------------------------------------------------------------------------
     */
    if (devHelper.dev.enable === true) {
      document.getElementById('movePositionX1').addEventListener('click', () => {
      })
      document.getElementById('movePositionX2').addEventListener('click', () => {
      })
      document.getElementById('movePositionY1').addEventListener('click', () => {
      })
      document.getElementById('movePositionY2').addEventListener('click', () => {
      })
      document.getElementById('movePositionZ1').addEventListener('click', () => {
      })
      document.getElementById('movePositionZ2').addEventListener('click', () => {
      })
      document.querySelector('#takePosition').addEventListener('click', () => {
        document.querySelector('.value-input').children[0].value = camera.position.x;
        document.querySelector('.value-input').children[1].value = camera.position.y;
        document.querySelector('.value-input').children[2].value = camera.position.z;
        document.querySelectorAll('.value-input')[1].children[0].value = camera.rotation.x;
        document.querySelectorAll('.value-input')[1].children[1].value = camera.rotation.y;
        document.querySelectorAll('.value-input')[1].children[2].value = camera.rotation.z;
      })
      document.querySelector('#back-btn').addEventListener('click', () => {
        animMoveCamera(devHelper.model3DVals.cameraPositions[0]);
      })
      const keys = {
        W: 87,
        A: 65,
        S: 83,
        D: 68,
        X: 88,
        Z: 90,
      };
      const moveSpeed = 0.01;
      const handleKeyDown = (event) => {
        const keyCode = event.keyCode;
        switch (keyCode) {
          case keys.W:
            camera.position.z = parseFloat(camera.position.z) + moveSpeed;
            break;
          case keys.A:
            camera.position.x = parseFloat(camera.position.x) - moveSpeed;
            break;
          case keys.S:
            camera.position.z = parseFloat(camera.position.z) - moveSpeed;
            break;
          case keys.D:
            camera.position.x = parseFloat(camera.position.x) + moveSpeed;
            break;
          case keys.Z:
            camera.position.y = parseFloat(camera.position.y) + moveSpeed;
            break;
          case keys.X:
            camera.position.y = parseFloat(camera.position.y) - moveSpeed;
            break;
        }
      };
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.querySelector('.help-btn-block').remove();
    }
    //----------------------------------------------------------------------------------------------------------

    let options = new BABYLON.SceneOptimizerOptions(60, 250);
    let optimizer = new BABYLON.SceneOptimizer(scene, options);
    BABYLON.SceneOptimizer.OptimizeAsync(scene, BABYLON.SceneOptimizerOptions.HighDegradationAllowed(),
      function () {
        // On success
      }, function () {
        // FPS target not reached
      });

    return scene;
  };
  const scene = createScene();
  if (devHelper.dev.enable === true) scene.debugLayer.show();  // INSPECTOR
  window.addEventListener("resize", function () {
    devHelper.model3DVals.engine.resize();
  });
  function loadModel(Name, Scene, ShadowGenerator) {
    BABYLON.SceneLoader.ImportMesh('', '../media/models/Babylon/', `${Name}.babylon`, Scene, function (meshes) {
      allMeshOptimization();
      findPointerMeshs();
      findSvgDisplays();
      findActiveMeshs();
      generateShadows();
      generateReceiveShadows();
      if (Name === 'All') {
        let meshArr = [];
        meshes.forEach(element => {
          meshArr.push(element);
          if (element.instances && element.instances.length > 0) {
            element.instances.forEach(instance => {
              meshArr.push(instance);
            })
          }
        })
        meshArr.forEach(Mesh => {
          if (Mesh.name && Mesh.name === 'Room') {
          } else if (Mesh.name && Mesh.name === 'Telephone') {
            if (!Mesh.subMeshes) {
              var box = BABYLON.MeshBuilder.CreateBox("Telephone_highlight", { size: 1 }, Scene);
              box.position = new BABYLON.Vector3(0.021, 0.951, 0.11);
              box.scaling = new BABYLON.Vector3(0.300, 0.07, 0.25);
              box.rotation.y = BABYLON.Tools.ToRadians(339.7);
              const lightMat = new BABYLON.StandardMaterial("lightMat");
              lightMat.diffuseColor = new BABYLON.Color3(2, 1, 0);
              lightMat.alpha = 0;
              box.material = lightMat;
              meshOptimization(box);
              makeActiveMesh(box, 6);
            }
          }
          else if (Mesh.name && Mesh.name === 'Display_flat004') {  // 3
            setImageOnMonitor("media/images/monitors/Raschet_profilya_temperatury.jpg", Scene, Mesh);
          }
          else if (Mesh.name && Mesh.name === 'Display_flat009') {  // 4
            setImageOnMonitor("media/images/monitors/windows.jpg", Scene, Mesh);
          }
          else if (Mesh.name && Mesh.name === 'Display_flat017') {  // 5
            setImageOnMonitor("media/images/monitors/Obzor_sred_akusticheskoy.jpg", Scene, Mesh);
          }
          else if (Mesh.name && Mesh.name === 'Display_flat011') {  // 7
            setImageOnMonitor("media/images/monitors/Sloi_shihty.jpg", Scene, Mesh);
          }
          else if (Mesh.name && Mesh.name === 'Display_flat013') {  // 9
            setImageOnMonitor("media/images/monitors/Diagnozy_A_PUT.jpg", Scene, Mesh);
          }
          else if (Mesh.name && Mesh.name === 'Display_flat016') {  // 10
            setImageOnMonitor("media/images/monitors/Registratsiya_vypuska_chuguna.jpg", Scene, Mesh);
          }
          else if (Mesh.name && Mesh.name === 'Display_flat007') {  // 13
            setImageOnMonitor("media/images/monitors/Podacha_shikhty.jpg", Scene, Mesh);
          }
          else if (Mesh.name && Mesh.name === 'Display_flat008') {  // 14
            setImageOnMonitor("media/images/monitors/windows.jpg", Scene, Mesh);
          }
          else if (Mesh.name && Mesh.name === 'Display_flat005') {  // 15
            setImageOnMonitor("media/images/monitors/Skhema_PUT.jpg", Scene, Mesh);
          }
          else if (Mesh.name && Mesh.name === 'Display_flat006') {  // 16
            setImageOnMonitor("media/images/monitors/Kamera-nablyudeniya_3.jpg", Scene, Mesh);
          }
          else if (Mesh.name && Mesh.name === 'Display_TV002') {  // TV 1
            setImageOnMonitor("media/images/monitors/Kamera-nablyudeniya_3.jpg", Scene, Mesh);
          }
        })
        change3DTime();
      } else if (Name === 'Highlight') {
        meshes.forEach(element => {
          const lightMat = new BABYLON.StandardMaterial("lightMat");
          lightMat.diffuseColor = new BABYLON.Color3(2, 1, 0);
          lightMat.alpha = 0;
          element.material = lightMat;
          element.isPickable = true;
          // meshOptimization(element);
          if (element.name) {
            if (element.name === 'Console_BVNK_highlight') {
            } else if (element.name === 'Console_BZU_highlight') {
            } else if (element.name === 'Console_DP6_highlight') {
            } else if (element.name === 'Console_UGKS_highlight' || element.name === 'Console_PSODP6_highlight') {
              element.dispose();
            }
          }
        })
      }
      try {
        setLifeTime(devHelper.trenVals.timers.lifeTime);  // 2d 
        change3DTime(devHelper.trenVals.timers.lifeTime); // 3d
      }
      catch { }
    });
    function allMeshOptimization() {
      devHelper.model3DVals.scene.meshes.forEach(mesh => {
        if (!mesh.isPickable) {
          meshOptimization(mesh);
        }
      })
    }
    function findActiveMeshs() {
      const { activeMeshsToArr, scene, activeMeshs } = devHelper.model3DVals;
      activeMeshsToArr.forEach(elem => {
        const meshNamesToSearch = scene.meshes.filter(mesh => mesh.id === elem.id || mesh.name.includes(elem.name || elem));
        meshNamesToSearch.forEach(mesh => {
          if (!activeMeshs.includes(mesh)) {
            makeActiveMesh(mesh, { name: elem.name || mesh.name });
          }
        });
      });
    }
    function findSvgDisplays() {
      devHelper.model3DVals.svgDisplaysArr.forEach(elem => {
        let displayMesh = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === elem.name);
        if (displayMesh !== undefined && devHelper.model3DVals.svgDisplays.meshs.indexOf(displayMesh) === -1) {
          makeSvgDisplay(displayMesh, devHelper.model3DVals.scene, elem.svgName);
        }
      });
    }
    function findPointerMeshs() {
      devHelper.model3DVals.movePointMeshToArr.forEach(elem => {
        const meshNamesToSearch = devHelper.model3DVals.scene.meshes.filter(mesh => mesh.name.includes(elem.name));
        if (meshNamesToSearch.length > 0) {
          meshNamesToSearch.forEach(mesh => {
            if (devHelper.model3DVals.movePointMesh.indexOf(mesh) === -1) {
              makeActiveMesh(mesh, elem.point);
            }
          });
        }
      });
    }

    function generateShadows() {
      devHelper.model3DVals.shadowGenMeshes.forEach(meshNameId => {
        const meshNamesToSearch = devHelper.model3DVals.scene.meshes.filter(mesh => mesh.name.includes(meshNameId) || mesh.id === meshNameId);
        const isGenerated = ShadowGenerator.getShadowMap().renderList.find(mesh => mesh === meshNamesToSearch[0]);
        if (!isGenerated) {
          meshNamesToSearch.forEach(mesh => {
            ShadowGenerator.getShadowMap().renderList.push(mesh);
          });
        }
      });
    }
    function generateReceiveShadows() {
      devHelper.model3DVals.scene.meshes.forEach(mesh => {
        if (!mesh.receiveShadows || mesh.receiveShadows === true) {
          mesh.receiveShadows = false;
        }
      })
      devHelper.model3DVals.receiveShadowMeshes.forEach(meshNameId => {
        const meshNamesToSearch = devHelper.model3DVals.scene.meshes.filter(mesh => mesh.name.includes(meshNameId) || mesh.id === meshNameId);
        meshNamesToSearch.forEach(mesh => {
          if (!mesh.receiveShadows || mesh.receiveShadows === false) {
            mesh.receiveShadows = true;
          }
        });
      });
    }


    function meshOptimization(mesh, name = undefined) {
      if (mesh._children && mesh._children.length > 0)
        mesh._children.forEach(child => meshOptimization(child));
      if (devHelper.model3DVals.octree.dynamicContent.indexOf(mesh) === -1)
        devHelper.model3DVals.octree.dynamicContent.push(mesh);
      if (mesh.material) mesh.material.freeze();
      mesh.freezeWorldMatrix();
      mesh.doNotSyncBoundingInfo = mesh instanceof BABYLON.InstancedMesh ? false : true;
      mesh.actionManager = new BABYLON.ActionManager(devHelper.model3DVals.scene);
      mesh.isPickable = true;
    }

    function setImageOnMonitor(url, scene, mesh) {
      if (mesh._sourceMesh !== undefined) mesh = createCloneInstancedMesh(mesh, url, scene);
      else {
        if (!mesh.material || mesh.material.name !== 'material_' + mesh.name) {
          mesh.material = new BABYLON.StandardMaterial('material_' + mesh.name, scene);
          mesh.material.diffuseTexture = new BABYLON.Texture(url, scene);
        } else {
          mesh.material.diffuseTexture.updateURL(url);
        }
      }
      if (devHelper.model3DVals.octree.dynamicContent.indexOf(mesh) === -1)
        devHelper.model3DVals.octree.dynamicContent.push(mesh);
    }

    if (devHelper.model3DVals.loadModels.length > 1) {
      devHelper.model3DVals.loadModels.shift();
      loadModel(devHelper.model3DVals.loadModels[0], Scene, ShadowGenerator);
    }
    else {
      devHelper.model3DVals.octree = Scene.createOrUpdateSelectionOctree();
    }
  }
})

function createCloneInstancedMesh(mesh, url = undefined, scene = undefined) {
  let newMesh = mesh.sourceMesh.clone();
  newMesh.name = mesh.name;
  newMesh.setParent(mesh.parent);
  newMesh.rotation = new BABYLON.Vector3(0, 0, 0);
  if (url !== undefined) {
    if (!newMesh.material || newMesh.material.name !== 'material_' + newMesh.name) {
      newMesh.material = new BABYLON.StandardMaterial('material_' + newMesh.name, scene);
      newMesh.material.diffuseTexture = new BABYLON.Texture(url, scene);
    } else
      newMesh.material.diffuseTexture.updateURL(url);
  } else
    newMesh.material = mesh.material.clone(`material_${mesh.name}`);

  newMesh.setAbsolutePosition(
    new BABYLON.Vector3(
      mesh.absolutePosition._x,
      mesh.absolutePosition._y,
      mesh.absolutePosition._z
    )
  );
  if (devHelper.model3DVals.octree.dynamicContent.indexOf(mesh) !== -1) {
    const index = devHelper.model3DVals.octree.dynamicContent.indexOf(mesh);
    devHelper.model3DVals.octree.dynamicContent.splice(index, 1);
  }
  mesh.dispose();
  mesh = newMesh;
  mesh.doNotSyncBoundingInfo = false;
  if (devHelper.model3DVals.octree.dynamicContent.indexOf(mesh) === -1)
    devHelper.model3DVals.octree.dynamicContent.push(mesh);
  return mesh;
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("renderCanvas");
  devHelper.model3DVals.engine = new BABYLON.Engine(canvas, true, { stencil: true });
  canvas.addEventListener("pointermove", function () {
    var pickResult = devHelper.model3DVals.scene.pick(devHelper.model3DVals.scene.pointerX, devHelper.model3DVals.scene.pointerY);
    if (pickResult.hit)
      devHelper.model3DVals.meshUnderPointer = pickResult.pickedMesh.name;
    else devHelper.model3DVals.meshUnderPointer = undefined;
  });

});

function makeSvgDisplay(Mesh, Scene, SvgName) {
  let planeTexture = new BABYLON.DynamicTexture(`texture_${Mesh.name}`, { width: 2000, height: 993 }, Scene, true);
  planeTexture.update();
  Mesh.material.diffuseTexture = Mesh.material.emissiveTexture = planeTexture;
  Mesh.material.unfreeze();
  devHelper.model3DVals.svgDisplays.meshs.push(Mesh);
  let tempInterval = setInterval(() => {
    if (devHelper.model3DVals.svgDisplays.tagImgs.length === document.querySelector('.svg-scheme-container').querySelectorAll('object').length) {
      changeSvgtexture(Mesh, SvgName, true);
      clearInterval(tempInterval);
    }
  }, 500);
}

function makeActiveMesh(Mesh = undefined, Vals = undefined) {
  if (Mesh === undefined || Vals === undefined) {
    if (devHelper.dev.enable === true) console.warn('Не переданы значения для создания активного меша в функции makeActivemesh.');
    return;
  } else {
    const mesh = Mesh._sourceMesh !== undefined ? createCloneInstancedMesh(Mesh) : Mesh;
    if (Vals.name) {
      mesh.name = Vals.name;
      mesh.currentPosition = Vals.posIndex;
      devHelper.model3DVals.activeMeshs.push(mesh);
    } else if (typeof Vals === 'number') {
      mesh.isPickable = true;
      devHelper.model3DVals.movePointMesh.push(mesh);
      mesh.positionIndex = Vals;
    }
    mesh.material.unfreeze();
    mesh.unfreezeWorldMatrix();
    mesh.actionManager = new BABYLON.ActionManager(devHelper.model3DVals.scene);
    if (devHelper.model3DVals.octree.dynamicContent.indexOf(mesh) === -1)
      devHelper.model3DVals.octree.dynamicContent.push(mesh);
    mesh.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        function () {
          if (Vals.name) {
            clickOnMesh(mesh);
          } else if (typeof Vals === 'number') {
            clickOnPointMesh(mesh, devHelper.model3DVals.cameraPositions[Vals]);
          }
        }
      )
    );
    mesh.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPointerOverTrigger,
        function () { changeColorTexture(mesh, true); }
      )
    );
    mesh.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPointerOutTrigger,
        function () { changeColorTexture(mesh, false); }
      )
    );
    makeUnicMat(mesh);
    mesh.startState = {
      enable: false,
      position: undefined,
      rotation: undefined,
      scale: undefined,
      material: undefined,
      diffuseTexture: undefined,
      emissiveTexture: undefined,
    }
  }
}

function clickOnPointMesh(Mesh = undefined, Vals = undefined) {
  if (Mesh === undefined || Vals === undefined) {
    if (devHelper.dev.enable === true) console.warn('Не переданы значения для создания активного меша в функции clickOnPointMesh.');
    return;
  } else {
    devHelper.model3DVals.movePointMesh.forEach(mesh => {
      mesh.isPickable = false;
      if (mesh.name.indexOf('highlight') !== -1) mesh.setEnabled(false);
    })
    devHelper.model3DVals.movePointMesh.forEach(mesh => {
      changeColorTexture(mesh, false);
    })
    animMoveCamera(Vals);
  }
}

function makeUnicMat(mesh) {
  if (mesh.material) {
    let tempMaterial = mesh.material.clone(`material_${mesh.name}`);
    mesh.material = tempMaterial;
  }
}

function changeSvgtexture(Mesh = undefined, SvgName = undefined, ChangeTexture = false, Window = undefined, Pos = undefined) {
  if (Mesh && SvgName) {
    if (!Mesh.svgArr) Mesh.startSvg = { name: SvgName, x: 0, y: 0 };
    if (ChangeTexture === true) Mesh.svgArr = [{ name: SvgName, x: 0, y: 0 }];
    let svgIndex = devHelper.model3DVals.svgDisplays.svgNames.findIndex(function (obj) { return obj === SvgName; })
    let outputImage = devHelper.model3DVals.svgDisplays.tagImgs[svgIndex];
    outputImage.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(devHelper.model3DVals.svgDisplays.svgs[svgIndex]))));
    outputImage.onload = function tempF() {
      updateMeshTextureSvg(SvgName);
      outputImage.svgReload = true;
    }
  } else {
    if (devHelper.dev.enable === true) console.warn(`В функцию changeSvgtexture передали не все переменные.`);
    return
  }
}

function updateSvgTextures() {
  let tempArr = devHelper.model3DVals.svgDisplays.tagImgs.filter(function (element) {
    return element.svgReload === false;
  });
  tempArr.forEach((element) => {
    if (!element.svgReload || element.svgReload === false) {
      element.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(element.previousElementSibling.contentDocument.querySelector('svg')))));
      element.svgReload = true;
    }
  });
}

function updateMeshTextureSvg(SvgName) {
  devHelper.model3DVals.svgDisplays.meshs.forEach(DisplayMesh => {
    if (DisplayMesh.svgArr) {
      if (DisplayMesh.svgArr.find(element => element.name === SvgName)) {
        let textureContext = DisplayMesh.material.diffuseTexture.getContext();
        textureContext.clearRect(0, 0, textureContext.width, textureContext.height);
        DisplayMesh.svgArr.forEach(element => {
          let svgIndex = devHelper.model3DVals.svgDisplays.svgNames.findIndex(function (obj) { return obj === element.name; });
          let outputImage = devHelper.model3DVals.svgDisplays.tagImgs[svgIndex];
          textureContext.drawImage(outputImage, element.x, element.y);
        })
        DisplayMesh.material.diffuseTexture.update();
      }
    }
  })
}

function addSvgToTextrue(Mesh = undefined, NewSvgVals = undefined, ClearCanvas = false, addNewSvg = true) {
  if (Mesh && NewSvgVals) {
    if (addNewSvg === true) Mesh.svgArr.push({ name: NewSvgVals.window, x: NewSvgVals.x, y: NewSvgVals.y });
    let windowIndex = devHelper.svgVals.findIndex(function (obj) { return obj.name === NewSvgVals.window; })
    let outputImage = devHelper.model3DVals.svgDisplays.tagImgs[windowIndex];
    outputImage.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(devHelper.model3DVals.svgDisplays.svgs[windowIndex]))));
    outputImage.onload = function tempF() {
      updateMeshTextureSvg(NewSvgVals.window);
      outputImage.svgReload = true;
    }
  }
}
function RemoveSvgFromTextrue(Mesh = undefined, RemoveWindowName = undefined) {
  if (Mesh && RemoveWindowName) {
    let indexWindow = Mesh.svgArr.findIndex(function (obj) { return obj.name === RemoveWindowName; })
    if (indexWindow !== -1) Mesh.svgArr.splice(indexWindow, 1);
    Mesh.svgArr.forEach((element, index) => {
      addSvgToTextrue(Mesh, { window: element.name, x: element.x, y: element.y }, index === 0 ? true : false, false);
      if (index === Mesh.svgArr.length - 1) createSvghelper(devHelper.model3DVals.currentPosition, element.name);
    })
  }
}

function changeColorTexture(Mesh = undefined, State = undefined) {
  let tempBool = false;
  if (devHelper.model3DVals.movePointMesh.indexOf(Mesh) !== -1) {
    if (devHelper.model3DVals.currentPosition === undefined)
      tempBool = true;
  } else if (devHelper.model3DVals.activeMeshs.indexOf(Mesh) !== -1) {
    if (devHelper.model3DVals.currentPosition === Mesh.currentPosition)
      tempBool = true;
  }

  if (tempBool === true) {
    // if (State === true) {
    // //   Mesh.enableEdgesRendering();
    // //   Mesh.edgesColor = new BABYLON.Color4(1, 1, 0, 0.5);
    // //   Mesh.edgesWidth = 2;
    // //   devHelper.model3DVals.glowLayer = new BABYLON.GlowLayer("glow", devHelper.model3DVals.scene);
    // //   devHelper.model3DVals.glowLayer.addIncludedOnlyMesh(Mesh);
    // //   devHelper.model3DVals.glowLayer.intensity = 0.3;
    // //   Mesh.material.oldEmissiveColor = Mesh.material.emissiveColor;
    // //   Mesh.material.emissiveColor = BABYLON.Color3.Yellow();
    // } else {
    // //   Mesh.edgesWidth = 0;
    // //   if (devHelper.model3DVals.glowLayer) {
    // //     devHelper.model3DVals.glowLayer.dispose();
    // //     Mesh.material.emissiveColor = Mesh.material.oldEmissiveColor;
    // //   }
    // }
    // if (State === false && Mesh.highlightLayer) {
    //   Mesh.highlightLayer.removeMesh(Mesh);
    //   Mesh.highlightLayer.dispose();
    //   Mesh.highlightLayer = undefined;
    // } else {
    //   const hl = new BABYLON.HighlightLayer("hl1", devHelper.model3DVals.scene);
    //   hl.addMesh(Mesh, BABYLON.Color3.Yellow());
    //   Mesh.highlightLayer = hl;
    // }
    // devHelper.model3DVals.highlightMesh = State === true ? Mesh : undefined;
    let newAlpha = State === true ? 0.5 : 0;
    let newColor = State === true ? true : false;
    if (Mesh.overlayColor !== BABYLON.Color3.Yellow()) Mesh.overlayColor = BABYLON.Color3.Yellow();
    devHelper.model3DVals.highlightMesh = State === true ? Mesh : undefined;
    if (Mesh.material.alpha !== 1) Mesh.material.alpha = newAlpha;
    else Mesh.renderOverlay = newColor;
  }
}
//TODO тут сделать часы 3Д
function change3DTime(Time = '00:00:00') {
  let digit1 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits000');
  let digit2 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits001');
  let digit3 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits002');
  let digit4 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits003');
  let digit5 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits004');
  let digit6 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits005');
  let arrayDigit = [digit1, digit2, digit3, digit4, digit5, digit6];

  for (let i = 0, j = 0; i < Time.length; i++) {
    if (Time[i] == ":") {
      continue;
    }
    switc3DTime(Time[i], arrayDigit[j])
    j++;
  }
}

function moveRotationMesh(Mesh = undefined, Type = 'r', Val = 0, Axis = undefined, Duration = 1, Scene = devHelper.model3DVals.scene,) {
  if (devHelper.dev.enable === true) {
    if (Mesh === undefined) console.warn(`В функцию rotateMesh не передали меш.`);
    if (Axis === undefined) console.warn(`В функцию rotateMesh не передали Angle.`);
  }
  if (Mesh !== undefined || Axis !== undefined) {
    if (!Mesh.rotation._isDirty || Mesh.rotation._isDirty === false)
      Mesh.rotation = new BABYLON.Vector3(0, 0, 0);
    Mesh.startState.enable = true;
    if (Type === 'r') {
      if (Mesh.startState.rotation === undefined)
        Mesh.startState.rotation = Mesh.rotation.clone();
    } else {
      if (Mesh.startState.position === undefined)
        Mesh.startState.position = Mesh.position.clone();
    }
    // if (Type === 'r') Val = Val * (Math.PI / 180);
    let animation = new BABYLON.Animation(
      Type === 'r' ? "rotationAnimation" : "positionAnimation",
      Type === 'r' ? `rotation.${Axis}` : `position.${Axis}`,
      60,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    var keys = [
      {
        frame: 0,
        value: Type === 'r' ? Mesh.rotation[Axis] : Mesh.position[Axis],
      },
      {
        frame: Duration * 60,
        value: Val,
      }
    ];
    animation.setKeys(keys);
    // if (Duration === 0) 
    //   Mesh.position.x = 0.2
    // else
    Scene.beginDirectAnimation(Mesh, [animation], 0, Duration * 60, false);
  } else return
}

function animMoveCamera(Vals, Speed = 2) {
  if (document.querySelector('#b_help'))
    document.querySelector('#b_help').style.pointerEvents = 'none';
  let speed = Speed * 60;
  if (Vals.position === undefined) {
    if (document.getElementById('svg-helper')) document.getElementById('svg-helper').remove();
  }
  else {
    devHelper.model3DVals.movePointMesh.forEach(mesh => mesh.isPickable = false);
    devHelper.model3DVals.activeMeshs.forEach(mesh => mesh.isPickable = true);
  }

  let positionAnimation = new BABYLON.Animation(
    "positionAnimation",
    "position",
    60,
    BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
  );

  var positionKeys = [];
  positionKeys.push({
    frame: 0,
    value: devHelper.model3DVals.camera.position.clone()
  });
  positionKeys.push({
    frame: speed,
    value: new BABYLON.Vector3(Vals.positionCoordinates[0], Vals.positionCoordinates[1], Vals.positionCoordinates[2])
  });
  positionAnimation.setKeys(positionKeys);

  let rotationAnimation = new BABYLON.Animation(
    "rotationAnimation",
    "rotation",
    60,
    BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
    BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
  );

  var rotationKeys = [];
  rotationKeys.push({
    frame: 0,
    value: devHelper.model3DVals.camera.rotation.clone()
  });
  rotationKeys.push({
    frame: speed,
    value: new BABYLON.Vector3(Vals.lookAt[0], Vals.lookAt[1], Vals.lookAt[2])
  });
  rotationAnimation.setKeys(rotationKeys);
  devHelper.model3DVals.camera.animations = [positionAnimation, rotationAnimation];
  devHelper.model3DVals.scene.beginAnimation(devHelper.model3DVals.camera, 0, speed, false, 1, () => {
    devHelper.model3DVals.currentPosition = Vals.position;
    if (document.querySelector('#b_help'))
      document.querySelector('#b_help').style.pointerEvents = 'all';
    if (devHelper.model3DVals.currentPosition !== undefined) {
      createSvghelper(Vals.position);
      disableGeneralView();
    } else {
      devHelper.model3DVals.movePointMesh.forEach(mesh => {
        mesh.isPickable = true;
        if (mesh.name.indexOf('highlight') !== -1) mesh.setEnabled(true);
      })
    }
  });
}

function clickOnMesh(Mesh = undefined) {
  if (Mesh === undefined) {
    if (devHelper.dev.enable === true) console.warn(`В функцию clickOnMesh не передали меш.`);
    return
  } else {
    trenClickOnMesh(Mesh);
  }
}

function switc3DTime(digit, digitTime) {
  let unicOff = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Unic_Digit_donor_0');
  let unic0 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Unic_Digit_donor_001');
  let unic1 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Unic_Digit_donor_002');
  let unic2 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Unic_Digit_donor_003');
  let unic3 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Unic_Digit_donor_004');
  let unic4 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Unic_Digit_donor_005');
  let unic5 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Unic_Digit_donor_006');
  let unic6 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Unic_Digit_donor_007');
  let unic7 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Unic_Digit_donor_008');
  let unic8 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Unic_Digit_donor_009');
  let unic9 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Unic_Digit_donor_off');

  switch (digit) {
    case '0':
      digitTime.material = unic0.material.clone();
      break;
    case '1':
      digitTime.material = unic1.material.clone();
      break;
    case '2':
      digitTime.material = unic2.material.clone();
      break;
    case '3':
      digitTime.material = unic3.material.clone();
      break;
    case '4':
      digitTime.material = unic4.material.clone();
      break;
    case '5':
      digitTime.material = unic5.material.clone();
      break;
    case '6':
      digitTime.material = unic6.material.clone();
      break;
    case '7':
      digitTime.material = unic7.material.clone();
      break;
    case '8':
      digitTime.material = unic8.material.clone();
      break;
    case '9':
      digitTime.material = unic9.material.clone();
      break;
  }
}

function isMeshVisible(mesh) {
  const camera = devHelper.model3DVals.camera;
  return camera.isInFrustum(mesh);
}