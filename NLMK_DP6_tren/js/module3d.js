/*----------TODO----------------------------------------------------
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

    // shadowGenerator.useBlurCloseExponentialShadowMap = true;
    // shadowGenerator.forceBackFacesOnly = true;
    // shadowGenerator.blurKernel = 32;
    // shadowGenerator.useKernelBlur = true;
    // shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
    // shadowGenerator.usePoissonSampling = true;
    // shadowGenerator.useBlurExponentialShadowMap = true;

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
    let tempDiffPosPointer = {};
    scene.onPointerDown = function (evt, pickResult) {
      tempDiffPosPointer.x = evt.clientX;
      tempDiffPosPointer.y = evt.clientY;
    };

    scene.onPointerUp = function (evt, pickResult) {
      const currentPosition = devHelper.model3DVals.currentPosition;
      if (currentPosition !== undefined) {
        const { x, y } = tempDiffPosPointer;
        if (x !== evt.clientX || y !== evt.clientY) {
          animMoveCamera(devHelper.model3DVals.cameraPositions.find(elem => elem.position === currentPosition), 0.5);
        } else if (pickResult.pickedMesh.positionIndex && pickResult.pickedMesh.positionIndex !== currentPosition) {
        } else {
          animMoveCamera(devHelper.model3DVals.cameraPositions.find(elem => elem.position === currentPosition), 0.5);
        }
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
              makeActiveMesh(box, 6);
            }
          }
          else if (Mesh.name && Mesh.name === 'Microphone') {
            if (!Mesh.subMeshes) {
              var box = BABYLON.MeshBuilder.CreateBox("Microphone_highlight", { size: 1 }, Scene);
              box.position = new BABYLON.Vector3(1.14, 0.939, 0.012);
              box.scaling = new BABYLON.Vector3(0.27, 0.1, 0.5);
              const lightMat = new BABYLON.StandardMaterial("lightMat");
              lightMat.diffuseColor = new BABYLON.Color3(2, 1, 0);
              lightMat.alpha = 0;
              box.material = lightMat;
              makeActiveMesh(box, 7);
            }
          }
          // else if (Mesh.name && Mesh.name.indexOf('ButtonHightlight_') !== -1 && Mesh.name != 'ButtonHightlight_049') {
          //   meshOptimization(Mesh);
          //   makeActiveMesh(Mesh, { name: Mesh.name });
          //   Mesh.material.alpha = 0;
          //   Mesh.material.transparencyMode = null;
          // }
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
          if (element.name) {
            if (element.name === 'Console_BVNK_highlight') {
            } else if (element.name === 'Console_BZU_highlight') {
            } else if (element.name === 'Console_DP6_highlight') {
            } else if (element.name === 'Console_UGKS_highlight' || element.name === 'Console_PSODP6_highlight') {
              element.dispose();
            }
          }
        })
      } else if (Name === 'Console_DP6') {
        const lightMat = new BABYLON.StandardMaterial("lightMatDP6");
        lightMat.diffuseColor = new BABYLON.Color3(2, 1, 0);
        lightMat.alpha = 0;
        meshes.forEach(mesh => {
          if (mesh.id && mesh.id === 'd77660f1-f36a-489c-b0a4-e0cbb5d74f0a') {
            let box = BABYLON.MeshBuilder.CreateBox("DP6_monitors", { size: 1 }, Scene);
            box.position = new BABYLON.Vector3(2.961, 1.289, 0.363);
            box.scaling = new BABYLON.Vector3(1.35, 0.5, 0.02);
            box.material = lightMat;
          } else if (mesh.id && mesh.id === '0429fd81-7fa5-481b-890c-d87b0f7097fe') {
            let box = BABYLON.MeshBuilder.CreateBox("DP6_tumblers", { size: 1 }, Scene);
            box.position = new BABYLON.Vector3(2.963, 0.9727, -0.152);
            box.scaling = new BABYLON.Vector3(1.35, 0.2, 0.8);
            box.rotation = new BABYLON.Vector3(175 * (Math.PI / 180), 0, 0);
            box.material = lightMat;
          } else if (mesh.id && mesh.id === '0376bd70-dc53-46d7-a9b6-9f2a0fbe9a44') { // Создать точки над красным экраном
            let meshWidth = mesh.getBoundingInfo().boundingBox.extendSize.x * 2.5;
            for (let i = 0; i < 15; i++) {
              const clone = mesh.clone(`Clone_${i}_${mesh.name}`);
              clone.position.x += (i + 1) * meshWidth;
            }
          }
          const dp6MeshesIdDupl = [
            'd35a945e-6098-413c-85fc-ec03675b2b5c', // DP6 Р колошникового газа            
            '54aef8ff-43e1-46a9-811e-d82e2b22471d', // DP6 dp верхний            
            '7561228f-cbe4-4094-b7cf-4dc9c7670544', // DP6 dp общий            
            '8fcdf048-da99-4a7b-b10a-4e1a9f79abab', // DP6 dp нижний            
            '0ade6fb4-862a-48a1-b10d-cfbdd38e773b', // DP6 F холодного дутья            
            'bf4940b2-342f-4124-aa54-c64b51e9eef5', // DP6 F горячего дутья            
            '5a23380c-a320-4d63-8b0d-2da82755a220', // DP6 Уровень засыпи датчик 1            
            'd0acec57-fa5c-4995-b3ab-16ecf8829ee7', // DP6 Уровень засыпи датчик 2            
            '7ccf0961-7311-4c27-bbaa-12b2dec45ec9', // DP6 Уровень засыпи механический            
            '9071a277-fcb6-405b-8af1-f65ccc2bb6e7', // DP6 Т в газоотводе Т.1            
            '2a199899-7a38-4f54-987d-8c88e3aaef67', // DP6 Т в газоотводе Т.2            
            'cf1b0be1-d720-4be2-b1af-d459c16e3a62', // DP6 Т в газоотводе Т.3            
            'd7f093e4-3fad-4764-bcad-cfc4e8848bcc', // DP6 Т в газоотводе Т.4            
            'e5b790a4-1bdf-43c1-9e62-f4fc12304623', // DP6 F азота общего            
            '7944e7da-dce6-4a38-b735-6cedc4e531c1', // DP6 Содержание кислорода в азоте            
            '2a471a82-ab01-42bf-91e5-6ceee0477d76', // DP6 Т горячего дутья            
            '039d8c28-77d1-4fe9-9d3d-e3bb57bad86f', // DP6 P технической воды Т.1            
            'b9339fcf-a848-430c-a6c8-3aa0f115b494', // DP6 P технической воды Т.2            
            '98ce2502-03bb-4d18-b164-75a45ee543da', // DP6 P сжатого воздуха            
            '34c66f86-b540-4f7d-bd78-9c4be2dca03a', // DP6 P осушенного сжатого воздуха            
            'f2cfaacd-ad85-400b-bbe6-12b47f3c56d5', // DP6 P азота к затворам            
            'd0164997-c397-410f-a6c9-7380c9d73944', // DP6 T редуктора            
            '5e0f2c52-4c56-4fb6-b194-e8923c4a9d05', // DP6 F воды на редуктор            
            'de15bb4a-f57f-498b-a392-1052df17fc1d', // DP6 F природного газа            
          ];
          dp6MeshesIdDupl.forEach((Element) => {
            if (mesh.id && mesh.id === Element) {
              const clone = mesh.clone();
              clone.name = 'Clone_' + mesh.name;
            }
          });
        })
        var box = BABYLON.MeshBuilder.CreateBox("downBtnFPrirGaza_highlight", { size: 1 }, Scene);
        box.position = new BABYLON.Vector3(2.993, 1.184, 0.353);
        box.scaling = new BABYLON.Vector3(0.015, 0.015, 0.02);
        box.material = lightMat;
        makeActiveMesh(box, { name: 'downBtnFPrirGaza_highlight', posIndex: 9, realName: 'Регулятор природного газа' });
      } else if (Name === 'Console_BVNK') {
        const lightMat = new BABYLON.StandardMaterial("lightMatBVNK");
        lightMat.diffuseColor = new BABYLON.Color3(2, 1, 0);
        lightMat.alpha = 0;
        meshes.forEach(mesh => {
          if (mesh.id && mesh.id === 'ba053138-9c06-4271-90be-d8be4f72543e') {
            var box = BABYLON.MeshBuilder.CreateBox("BVNK_monitors", { size: 1 }, Scene);
            box.position = new BABYLON.Vector3(-3.536, 1.289, 0.363);
            box.scaling = new BABYLON.Vector3(1.065, 0.5, 0.02);
            box.material = lightMat;
          } else if (mesh.id && mesh.id === 'a496de76-2265-45a0-be51-9d2adc7f7694') {
            var box = BABYLON.MeshBuilder.CreateBox("BVNK_tumblers", { size: 1 }, Scene);
            box.position = new BABYLON.Vector3(-3.536, 0.975, -0.133);
            box.scaling = new BABYLON.Vector3(1.065, 0.2, 0.8);
            box.rotation = new BABYLON.Vector3(175 * (Math.PI / 180), 0, 0);
            box.material = lightMat;
          }
        })
      }
      try {
        setLifeTime(devHelper.trenVals.timers.lifeTime);  // 2d 
        change3DTime(devHelper.trenVals.timers.lifeTime); // 3d
      }
      catch { }

      allMeshOptimization();
      findPointerMeshs();
      findSvgDisplays();
      findActiveMeshs();
      generateShadows();
      generateReceiveShadows();

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
        const meshNamesToSearch = scene.meshes.filter(mesh => (
          (mesh.id === elem.id || mesh.name.includes(elem.name || elem)) &&
          (!elem.parentName || (mesh.parent && mesh.parent.name === elem.parentName)) &&
          (mesh.name !== 'ButtonHightlight_049')
        ));
        meshNamesToSearch.forEach(mesh => {
          if (!activeMeshs.includes(mesh)) {
            makeActiveMesh(mesh, { name: elem.id ? elem.name : mesh.name, posIndex: typeof elem.position == 'number' ? elem.position : undefined });
          }
        });
      });
    }
    function findSvgDisplays() {
      devHelper.model3DVals.svgDisplaysArr.forEach(elem => {
        let displayMesh = findMesh(elem.name);
        if (displayMesh && devHelper.model3DVals.svgDisplays.meshs.indexOf(displayMesh) === -1) {
          makeSvgDisplay(displayMesh, devHelper.model3DVals.scene, elem.svgName);
        }
      });
    }
    function findPointerMeshs() {
      devHelper.model3DVals.movePointMeshToArr.forEach(elem => {
        let mesh = findMesh(elem.name);
        if (mesh && devHelper.model3DVals.movePointMesh.indexOf(mesh) === -1) {
          makeActiveMesh(mesh, elem.point);
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

    if (devHelper.model3DVals.loadModels.length > 1) {
      devHelper.model3DVals.loadModels.shift();
      loadModel(devHelper.model3DVals.loadModels[0], Scene, ShadowGenerator);
    }
    else {
      devHelper.model3DVals.octree = Scene.createOrUpdateSelectionOctree();
    }
  }
})

function setImageOnMonitor(url, scene, mesh) {
  if (mesh._sourceMesh !== undefined) mesh = createCloneInstancedMesh(mesh, url, scene);
  else {
    if (!mesh.material || mesh.material.name !== 'material_' + mesh.name) {
      mesh.material = new BABYLON.StandardMaterial('material_' + mesh.name, scene);
      mesh.material.diffuseTexture = new BABYLON.Texture(url, scene);
    } else {
      function updateTexture(mesh, newTextureURL) {
        return new Promise((resolve, reject) => {
          mesh.material.diffuseTexture.updateURL(newTextureURL, () => {
            if (mesh.material.diffuseTexture.isReady()) {
              resolve();
            }
          });
          const intervalId = setInterval(() => {
            if (mesh.material.diffuseTexture.isReady()) {
              clearInterval(intervalId);
              resolve();
            }
          }, 100); 
        });
      }
      updateTexture(mesh, url)
        .then(() => {
          // console.log("Texture updated successfully.");
        })
        .catch((error) => {
          // console.error("Error updating texture:", error);
        });
    }
  }
  if (devHelper.model3DVals.octree.dynamicContent.indexOf(mesh) === -1)
    devHelper.model3DVals.octree.dynamicContent.push(mesh);
}


function createCloneInstancedMesh(mesh, url = undefined, scene = undefined, duplcitate = false) {
  let newMesh = duplcitate ? mesh : mesh.sourceMesh.clone();
  newMesh.id = mesh.id;
  newMesh.name = mesh.name;
  newMesh.setParent(mesh.parent);
  newMesh.rotation = mesh.rotation;
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
  if (Mesh.material.name.indexOf(Mesh.name) === -1)
    makeUnicMat(Mesh);
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

function makeActiveMesh(Mesh = undefined, Vals = undefined) {
  if (Mesh === undefined || Vals === undefined) {
    if (devHelper.dev.enable === true) console.warn('Не переданы значения для создания активного меша в функции makeActivemesh.');
    return;
  } else {
    const mesh = Mesh._sourceMesh !== undefined ? createCloneInstancedMesh(Mesh) : Mesh;
    meshOptimization(mesh);
    if (Vals.name) {
      mesh.name = Vals.name;
      mesh.currentPosition = Vals.posIndex ? Vals.posIndex : typeof Vals.position === 'number' ? Vals.position : undefined;
      devHelper.model3DVals.activeMeshs.push(mesh);
      if (Vals.realName)
        mesh.realName = Vals.realName;

    } else if (typeof Vals === 'number') {
      mesh.isPickable = true;
      devHelper.model3DVals.movePointMesh.push(mesh);
      mesh.positionIndex = Vals;
    }
    if (mesh.name.indexOf('ButtonHightlight_') !== -1) {
      mesh.material.alpha = 0;
      mesh.material.transparencyMode = null;
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
            clickOnPointMesh(mesh, devHelper.model3DVals.cameraPositions.find(elem => elem.position === Vals));
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

    if (mesh.rotationQuaternion) {
      var eulerRotation = mesh.rotationQuaternion.toEulerAngles();
      mesh.rotation = eulerRotation;
      mesh.rotationQuaternion = null;
    }
    mesh.startState = {
      enable: false,
      position: undefined,
      rotation: undefined,
      scale: undefined,
      material: undefined,
      diffuseTexture: undefined,
      emissiveTexture: undefined,
    }
    return mesh;
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
    animMoveCamera(Vals, Vals.position > 100 ? 1 : 2);
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

function changeColorTexture(Mesh = undefined, State = undefined, Help = false) {
  let tempBool = false;
  if (devHelper.model3DVals.movePointMesh.indexOf(Mesh) !== -1) {
    if (devHelper.model3DVals.currentPosition === undefined || Mesh.positionIndex > 100)
      tempBool = true;
  }
  if (Help) tempBool = true;
  // else if (devHelper.model3DVals.activeMeshs.indexOf(Mesh) !== -1) {
  //   if (devHelper.model3DVals.currentPosition === Mesh.currentPosition)
  //     tempBool = true;
  // }

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
    if (!Mesh.overlayColor || Mesh.overlayColor !== BABYLON.Color3.Yellow()) Mesh.overlayColor = BABYLON.Color3.Yellow();
    devHelper.model3DVals.highlightMesh = State === true ? Mesh : undefined;
    if (Mesh.material.alpha !== 1) {
      Mesh.renderOverlay = newColor;
      // Mesh.material.alpha = newAlpha;
    }
    else Mesh.renderOverlay = newColor;
  }
}

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
    if (typeof Mesh === 'string')
      Mesh = findMesh(Mesh);
    Mesh.unfreezeWorldMatrix();
    if (!Mesh.startState) {
      Mesh.startState = {
        enable: false,
        position: undefined,
        rotation: undefined,
        scale: undefined,
        material: undefined,
        diffuseTexture: undefined,
        emissiveTexture: undefined,
      }
    }
    Mesh.startState.enable = true;
    if (Mesh.rotationQuaternion) Mesh.rotationQuaternion = null;
    let meshX = Type === 'r' ? (Mesh.rotationQuaternion ? Mesh.rotationQuaternion.toEulerAngles().y : Mesh.rotation.x) : Mesh.position.x;
    let meshY = Type === 'r' ? (Mesh.rotationQuaternion ? Mesh.rotationQuaternion.toEulerAngles().y : Mesh.rotation.y) : Mesh.position.y;
    let meshZ = Type === 'r' ? (Mesh.rotationQuaternion ? Mesh.rotationQuaternion.toEulerAngles().y : Mesh.rotation.z) : Mesh.position.z;
    let newValX = Val.x !== undefined ? (Type === 'r' ? (Mesh.rotationQuaternion ? (Val.x * (180 / Math.PI)) : Val.x) : Val.x) : undefined;
    let valX = newValX !== undefined ? newValX : meshX;
    let newValY = Val.y !== undefined ? (Type === 'r' ? (Mesh.rotationQuaternion ? (Val.y * (180 / Math.PI)) : Val.y) : Val.y) : undefined;
    let valY = newValY !== undefined ? newValY : meshY;
    let newValZ = Val.z !== undefined ? (Type === 'r' ? (Mesh.rotationQuaternion ? (Val.z * (180 / Math.PI)) : Val.z) : Val.z) : undefined;
    let valZ = newValZ !== undefined ? newValZ : meshZ;
    if (Type === 'r') {
      if (Mesh.startState.rotation === undefined)
        Mesh.startState.rotation = Mesh.rotation.clone();
    } else {
      if (Mesh.startState.position === undefined)
        Mesh.startState.position = Mesh.position.clone();
    }
    if (Duration === 0) {
      if (Type === 'r') Mesh.rotation = new BABYLON.Vector3(valX, valY, valZ);
      else Mesh.position = new BABYLON.Vector3(valX, valY, valZ);
    } else {
      Mesh.rotation = Mesh.rotation.clone();
      let animationX = new BABYLON.Animation(
        Type === 'r' ? "rotationAnimationX" : "positionAnimationX",
        Type === 'r' ? `rotation.x` : `position.x`,
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );
      let animationY = new BABYLON.Animation(
        Type === 'r' ? "rotationAnimationY" : "positionAnimationY",
        Type === 'r' ? `rotation.y` : `position.y`,
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );
      let animationZ = new BABYLON.Animation(
        Type === 'r' ? "rotationAnimationZ" : "positionAnimationZ",
        Type === 'r' ? `rotation.z` : `position.z`,
        60,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );
      let keysX = [
        {
          frame: 0,
          value: meshX,
        },
        {
          frame: Duration * 60,
          value: valX,
        }
      ];
      let keysY = [
        {
          frame: 0,
          value: meshY,
        },
        {
          frame: Duration * 60,
          value: valY,
        }
      ];
      let keysZ = [
        {
          frame: 0,
          value: meshZ,
        },
        {
          frame: Duration * 60,
          value: valZ,
        }
      ];
      animationX.setKeys(keysX);
      animationY.setKeys(keysY);
      animationZ.setKeys(keysZ);
      Scene.beginDirectAnimation(Mesh, [animationX, animationY, animationZ], 0, Duration * 60, false);
    }
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
      if (Vals.position <= 100) {
        createSvghelper(Vals.position);
        devHelper.model3DVals.movePointMesh.forEach(mesh => {
          if (mesh.positionIndex > 100) {
            mesh.isPickable = true;
            if (mesh.name.indexOf('highlight') !== -1) mesh.setEnabled(true);
          }
        })
      }
      disableGeneralView();
    } else {
      devHelper.model3DVals.movePointMesh.forEach(mesh => {
        if (mesh.positionIndex <= 100) {
          mesh.isPickable = true;
          if (mesh.name.indexOf('highlight') !== -1) mesh.setEnabled(true);
        }
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
      digitTime.material = unic0.material;
      break;
    case '1':
      digitTime.material = unic1.material;
      break;
    case '2':
      digitTime.material = unic2.material;
      break;
    case '3':
      digitTime.material = unic3.material;
      break;
    case '4':
      digitTime.material = unic4.material;
      break;
    case '5':
      digitTime.material = unic5.material;
      break;
    case '6':
      digitTime.material = unic6.material;
      break;
    case '7':
      digitTime.material = unic7.material;
      break;
    case '8':
      digitTime.material = unic8.material;
      break;
    case '9':
      digitTime.material = unic9.material;
      break;
  }
}

function isMeshVisible(mesh) {
  const camera = devHelper.model3DVals.camera;
  return camera.isInFrustum(mesh);
}

function changeScreenVals(Name, Val, Color = 'green') {
  const scene = devHelper.model3DVals.scene;
  const donorPrefix = Color === 'green' ? 'Unic_DigitGreen_donor_' : 'Unic_digits_';
  const donorMaterialsDigits = Array.from({ length: 10 }, (_, i) => {
    const donorName = donorPrefix + i;
    let tempMat = findMaterial(donorName);
    if (tempMat) {
      if (Color !== 'green') tempMat = tempMat.subMaterials[i + 1];
      return tempMat;
    }
  });
  if (!findMaterial('Unic_DigitGreen_donor_Dot_On') && !findMaterial('Unic_digits_tochka_on')) {
    setTimeout(() => {
      changeScreenVals(Name, Val, Color);
    }, 2000)
    return;
  } else {
    const data = {
      vozNagr1_1: {
        num1: { id: 'c35ce25e-1c22-4a6b-8136-905359c5a31c' },
        num2: { name: 'Digit006', parent: 'SensorScale001' },
        num3: { name: 'Digit005', parent: 'SensorScale001' },
        num4: { name: 'Digit004', parent: 'SensorScale001' },
        dot1: { name: 'Digit_dot005', parent: 'SensorScale001' },
        dot2: { name: 'Digit_dot004', parent: 'SensorScale001' },
        dot3: { name: 'Digit_dot003', parent: 'SensorScale001' }
      },
      vozNagr1_2: {
        num1: { name: 'Digit011', parent: 'SensorScale002' },
        num2: { name: 'Digit010', parent: 'SensorScale002' },
        num3: { name: 'Digit009', parent: 'SensorScale002' },
        num4: { name: 'Digit008', parent: 'SensorScale002' },
        dot1: { name: 'Digit_dot008', parent: 'SensorScale002' },
        dot2: { name: 'Digit_dot007', parent: 'SensorScale002' },
        dot3: { name: 'Digit_dot006', parent: 'SensorScale002' }
      },
      vozNagr2_1: {
        num1: { name: 'Digit015', parent: 'SensorScale003' },
        num2: { name: 'Digit014', parent: 'SensorScale003' },
        num3: { name: 'Digit013', parent: 'SensorScale003' },
        num4: { name: 'Digit012', parent: 'SensorScale003' },
        dot1: { name: 'Digit_dot011', parent: 'SensorScale003' },
        dot2: { name: 'Digit_dot010', parent: 'SensorScale003' },
        dot3: { name: 'Digit_dot009', parent: 'SensorScale003' }
      },
      vozNagr2_2: {
        num1: { name: 'Digit019', parent: 'SensorScale004' },
        num2: { name: 'Digit018', parent: 'SensorScale004' },
        num3: { name: 'Digit017', parent: 'SensorScale004' },
        num4: { name: 'Digit016', parent: 'SensorScale004' },
        dot1: { name: 'Digit_dot014', parent: 'SensorScale004' },
        dot2: { name: 'Digit_dot013', parent: 'SensorScale004' },
        dot3: { name: 'Digit_dot012', parent: 'SensorScale004' }
      },
      vozNagr3_1: {
        num1: { name: 'Digit023', parent: 'SensorScale005' },
        num2: { name: 'Digit022', parent: 'SensorScale005' },
        num3: { name: 'Digit021', parent: 'SensorScale005' },
        num4: { name: 'Digit020', parent: 'SensorScale005' },
        dot1: { name: 'Digit_dot017', parent: 'SensorScale005' },
        dot2: { name: 'Digit_dot016', parent: 'SensorScale005' },
        dot3: { name: 'Digit_dot015', parent: 'SensorScale005' }
      },
      vozNagr3_2: {
        num1: { name: 'Digit027', parent: 'SensorScale006' },
        num2: { name: 'Digit026', parent: 'SensorScale006' },
        num3: { name: 'Digit025', parent: 'SensorScale006' },
        num4: { name: 'Digit024', parent: 'SensorScale006' },
        dot1: { name: 'Digit_dot020', parent: 'SensorScale006' },
        dot2: { name: 'Digit_dot019', parent: 'SensorScale006' },
        dot3: { name: 'Digit_dot018', parent: 'SensorScale006' }
      },
      rashodSmeshGaza_1: {
        num1: { name: 'Digit031', parent: 'SensorScale007' },
        num2: { name: 'Digit030', parent: 'SensorScale007' },
        num3: { name: 'Digit029', parent: 'SensorScale007' },
        num4: { name: 'Digit028', parent: 'SensorScale007' },
        dot1: { name: 'Digit_dot023', parent: 'SensorScale007' },
        dot2: { name: 'Digit_dot022', parent: 'SensorScale007' },
        dot3: { name: 'Digit_dot021', parent: 'SensorScale007' }
      },
      rashodSmeshGaza_2: {
        num1: { name: 'Digit035', parent: 'SensorScale008' },
        num2: { name: 'Digit034', parent: 'SensorScale008' },
        num3: { name: 'Digit033', parent: 'SensorScale008' },
        num4: { name: 'Digit032', parent: 'SensorScale008' },
        dot1: { name: 'Digit_dot026', parent: 'SensorScale008' },
        dot2: { name: 'Digit_dot025', parent: 'SensorScale008' },
        dot3: { name: 'Digit_dot024', parent: 'SensorScale008' }
      },
      rashodSmeshGaza_3: {
        num1: { name: 'Digit039', parent: 'SensorScale009' },
        num2: { name: 'Digit038', parent: 'SensorScale009' },
        num3: { name: 'Digit037', parent: 'SensorScale009' },
        num4: { name: 'Digit036', parent: 'SensorScale009' },
        dot1: { name: 'Digit_dot029', parent: 'SensorScale009' },
        dot2: { name: 'Digit_dot028', parent: 'SensorScale009' },
        dot3: { name: 'Digit_dot027', parent: 'SensorScale009' }
      },
      rashodVozdyhGor_1: {
        num1: { name: 'Digit043', parent: 'SensorScale010' },
        num2: { name: 'Digit042', parent: 'SensorScale010' },
        num3: { name: 'Digit041', parent: 'SensorScale010' },
        num4: { name: 'Digit040', parent: 'SensorScale010' },
        dot1: { name: 'Digit_dot032', parent: 'SensorScale010' },
        dot2: { name: 'Digit_dot031', parent: 'SensorScale010' },
        dot3: { name: 'Digit_dot030', parent: 'SensorScale010' }
      },
      rashodVozdyhGor_2: {
        num1: { name: 'Digit047', parent: 'SensorScale011' },
        num2: { name: 'Digit046', parent: 'SensorScale011' },
        num3: { name: 'Digit045', parent: 'SensorScale011' },
        num4: { name: 'Digit044', parent: 'SensorScale011' },
        dot1: { name: 'Digit_dot035', parent: 'SensorScale011' },
        dot2: { name: 'Digit_dot034', parent: 'SensorScale011' },
        dot3: { name: 'Digit_dot033', parent: 'SensorScale011' }
      },
      rashodVozdyhGor_3: {
        num1: { name: 'Digit051', parent: 'SensorScale012' },
        num2: { name: 'Digit050', parent: 'SensorScale012' },
        num3: { name: 'Digit049', parent: 'SensorScale012' },
        num4: { name: 'Digit048', parent: 'SensorScale012' },
        dot1: { name: 'Digit_dot038', parent: 'SensorScale012' },
        dot2: { name: 'Digit_dot037', parent: 'SensorScale012' },
        dot3: { name: 'Digit_dot036', parent: 'SensorScale012' }
      },
      davVozGorBVN: {
        num1: { name: 'Digit055', parent: 'SensorScale013' },
        num2: { name: 'Digit054', parent: 'SensorScale013' },
        num3: { name: 'Digit053', parent: 'SensorScale013' },
        num4: { name: 'Digit052', parent: 'SensorScale013' },
        dot1: { name: 'Digit_dot041', parent: 'SensorScale013' },
        dot2: { name: 'Digit_dot040', parent: 'SensorScale013' },
        dot3: { name: 'Digit_dot039', parent: 'SensorScale013' }
      },
      rashodSmeshGaza_1_r: {
        num1: { name: 'Unic_digits_off008', parent: 'sm_BRY-i_INDIKATORS001' },
        num2: { name: 'Unic_digits_off007', parent: 'sm_BRY-i_INDIKATORS001' },
        num3: { name: 'Unic_digits_off006', parent: 'sm_BRY-i_INDIKATORS001' },
        num4: { name: 'Unic_digits_off005', parent: 'sm_BRY-i_INDIKATORS001' },
        dot1: { name: 'digits_tochka003', parent: 'sm_BRY-i_INDIKATORS001' },
        dot2: { name: 'digits_tochka002', parent: 'sm_BRY-i_INDIKATORS001' },
        dot3: { name: 'digits_tochka001', parent: 'sm_BRY-i_INDIKATORS001' }
      },
      rashodSmeshGaza_2_r: {
        num1: { name: 'Unic_digits_off012', parent: 'sm_BRY-i_INDIKATORS002' },
        num2: { name: 'Unic_digits_off011', parent: 'sm_BRY-i_INDIKATORS002' },
        num3: { name: 'Unic_digits_off010', parent: 'sm_BRY-i_INDIKATORS002' },
        num4: { name: 'Unic_digits_off009', parent: 'sm_BRY-i_INDIKATORS002' },
        dot1: { name: 'digits_tochka006', parent: 'sm_BRY-i_INDIKATORS002' },
        dot2: { name: 'digits_tochka005', parent: 'sm_BRY-i_INDIKATORS002' },
        dot3: { name: 'digits_tochka004', parent: 'sm_BRY-i_INDIKATORS002' }
      },
      rashodSmeshGaza_3_r: {
        num1: { name: 'Unic_digits_off016', parent: 'sm_BRY-i_INDIKATORS003' },
        num2: { name: 'Unic_digits_off015', parent: 'sm_BRY-i_INDIKATORS003' },
        num3: { name: 'Unic_digits_off014', parent: 'sm_BRY-i_INDIKATORS003' },
        num4: { name: 'Unic_digits_off013', parent: 'sm_BRY-i_INDIKATORS003' },
        dot1: { name: 'digits_tochka009', parent: 'sm_BRY-i_INDIKATORS003' },
        dot2: { name: 'digits_tochka008', parent: 'sm_BRY-i_INDIKATORS003' },
        dot3: { name: 'digits_tochka007', parent: 'sm_BRY-i_INDIKATORS003' }
      },
      klapPrirGazaBRU_1_r: {
        num1: { name: 'Unic_digits_off020', parent: 'sm_BRY-i_INDIKATORS004' },
        num2: { name: 'Unic_digits_off019', parent: 'sm_BRY-i_INDIKATORS004' },
        num3: { name: 'Unic_digits_off018', parent: 'sm_BRY-i_INDIKATORS004' },
        num4: { name: 'Unic_digits_off017', parent: 'sm_BRY-i_INDIKATORS004' },
        dot1: { name: 'digits_tochka012', parent: 'sm_BRY-i_INDIKATORS004' },
        dot2: { name: 'digits_tochka011', parent: 'sm_BRY-i_INDIKATORS004' },
        dot3: { name: 'digits_tochka010', parent: 'sm_BRY-i_INDIKATORS004' }
      },
      klapPrirGazaBRU_2_r: {
        num1: { name: 'Unic_digits_off024', parent: 'sm_BRY-i_INDIKATORS005' },
        num2: { name: 'Unic_digits_off023', parent: 'sm_BRY-i_INDIKATORS005' },
        num3: { name: 'Unic_digits_off022', parent: 'sm_BRY-i_INDIKATORS005' },
        num4: { name: 'Unic_digits_off021', parent: 'sm_BRY-i_INDIKATORS005' },
        dot1: { name: 'digits_tochka015', parent: 'sm_BRY-i_INDIKATORS005' },
        dot2: { name: 'digits_tochka014', parent: 'sm_BRY-i_INDIKATORS005' },
        dot3: { name: 'digits_tochka013', parent: 'sm_BRY-i_INDIKATORS005' }
      },
      klapPrirGazaBRU_3_r: {
        num1: { name: 'Unic_digits_off028', parent: 'sm_BRY-i_INDIKATORS006' },
        num2: { name: 'Unic_digits_off027', parent: 'sm_BRY-i_INDIKATORS006' },
        num3: { name: 'Unic_digits_off026', parent: 'sm_BRY-i_INDIKATORS006' },
        num4: { name: 'Unic_digits_off025', parent: 'sm_BRY-i_INDIKATORS006' },
        dot1: { name: 'digits_tochka018', parent: 'sm_BRY-i_INDIKATORS006' },
        dot2: { name: 'digits_tochka017', parent: 'sm_BRY-i_INDIKATORS006' },
        dot3: { name: 'digits_tochka016', parent: 'sm_BRY-i_INDIKATORS006' }
      },
      smesKlapBRU_1_r: {
        num1: { name: 'Unic_digits_off032', parent: 'sm_BRY-i_INDIKATORS007' },
        num2: { name: 'Unic_digits_off031', parent: 'sm_BRY-i_INDIKATORS007' },
        num3: { name: 'Unic_digits_off030', parent: 'sm_BRY-i_INDIKATORS007' },
        num4: { name: 'Unic_digits_off029', parent: 'sm_BRY-i_INDIKATORS007' },
        dot1: { name: 'digits_tochka021', parent: 'sm_BRY-i_INDIKATORS007' },
        dot2: { name: 'digits_tochka020', parent: 'sm_BRY-i_INDIKATORS007' },
        dot3: { name: 'digits_tochka019', parent: 'sm_BRY-i_INDIKATORS007' }
      },
      smesKlapBRU_2_r: {
        num1: { name: 'Unic_digits_off036', parent: 'sm_BRY-i_INDIKATORS008' },
        num2: { name: 'Unic_digits_off035', parent: 'sm_BRY-i_INDIKATORS008' },
        num3: { name: 'Unic_digits_off034', parent: 'sm_BRY-i_INDIKATORS008' },
        num4: { name: 'Unic_digits_off033', parent: 'sm_BRY-i_INDIKATORS008' },
        dot1: { name: 'digits_tochka024', parent: 'sm_BRY-i_INDIKATORS008' },
        dot2: { name: 'digits_tochka023', parent: 'sm_BRY-i_INDIKATORS008' },
        dot3: { name: 'digits_tochka022', parent: 'sm_BRY-i_INDIKATORS008' }
      },
      obshKlapVozGorBRU_r: {
        num1: { name: 'Unic_digits_off040', parent: 'sm_BRY-i_INDIKATORS009' },
        num2: { name: 'Unic_digits_off039', parent: 'sm_BRY-i_INDIKATORS009' },
        num3: { name: 'Unic_digits_off038', parent: 'sm_BRY-i_INDIKATORS009' },
        num4: { name: 'Unic_digits_off037', parent: 'sm_BRY-i_INDIKATORS009' },
        dot1: { name: 'digits_tochka027', parent: 'sm_BRY-i_INDIKATORS009' },
        dot2: { name: 'digits_tochka026', parent: 'sm_BRY-i_INDIKATORS009' },
        dot3: { name: 'digits_tochka025', parent: 'sm_BRY-i_INDIKATORS009' }
      },
      rashodVozdyhGor_3_r: {
        num1: { name: 'Unic_digits_off044', parent: 'sm_BRY-i_INDIKATORS010' },
        num2: { name: 'Unic_digits_off043', parent: 'sm_BRY-i_INDIKATORS010' },
        num3: { name: 'Unic_digits_off042', parent: 'sm_BRY-i_INDIKATORS010' },
        num4: { name: 'Unic_digits_off041', parent: 'sm_BRY-i_INDIKATORS010' },
        dot1: { name: 'digits_tochka030', parent: 'sm_BRY-i_INDIKATORS010' },
        dot2: { name: 'digits_tochka029', parent: 'sm_BRY-i_INDIKATORS010' },
        dot3: { name: 'digits_tochka028', parent: 'sm_BRY-i_INDIKATORS010' }
      },
      rashodVozdyhGor_2_r: {
        num1: { name: 'Unic_digits_off048', parent: 'sm_BRY-i_INDIKATORS011' },
        num2: { name: 'Unic_digits_off047', parent: 'sm_BRY-i_INDIKATORS011' },
        num3: { name: 'Unic_digits_off046', parent: 'sm_BRY-i_INDIKATORS011' },
        num4: { name: 'Unic_digits_off045', parent: 'sm_BRY-i_INDIKATORS011' },
        dot1: { name: 'digits_tochka033', parent: 'sm_BRY-i_INDIKATORS011' },
        dot2: { name: 'digits_tochka032', parent: 'sm_BRY-i_INDIKATORS011' },
        dot3: { name: 'digits_tochka031', parent: 'sm_BRY-i_INDIKATORS011' }
      },
      rashodVozdyhGor_1_r: {
        num1: { name: 'Unic_digits_off052', parent: 'sm_BRY-i_INDIKATORS012' },
        num2: { name: 'Unic_digits_off051', parent: 'sm_BRY-i_INDIKATORS012' },
        num3: { name: 'Unic_digits_off050', parent: 'sm_BRY-i_INDIKATORS012' },
        num4: { name: 'Unic_digits_off049', parent: 'sm_BRY-i_INDIKATORS012' },
        dot1: { name: 'digits_tochka036', parent: 'sm_BRY-i_INDIKATORS012' },
        dot2: { name: 'digits_tochka035', parent: 'sm_BRY-i_INDIKATORS012' },
        dot3: { name: 'digits_tochka034', parent: 'sm_BRY-i_INDIKATORS012' }
      },
      // -------------------------------------------------------
      // Сергей 
      // Третья панель
      pKolGaz: {
        num1: { name: 'Digit275', parent: 'SensorScale068' },
        num2: { name: 'Digit274', parent: 'SensorScale068' },
        num3: { name: 'Digit273', parent: 'SensorScale068' },
        num4: { name: 'Digit272', parent: 'SensorScale068' },
        dot1: { name: 'Digit_dot230', parent: 'SensorScale068' },
        dot2: { name: 'Digit_dot229', parent: 'SensorScale068' },
        dot3: { name: 'Digit_dot228', parent: 'SensorScale068' },
        dot4: { name: 'Digit_dot227', parent: 'SensorScale068' },
      },
      dpVerh: {
        num1: { name: 'Digit271', parent: 'SensorScale067' },
        num2: { name: 'Digit270', parent: 'SensorScale067' },
        num3: { name: 'Digit269', parent: 'SensorScale067' },
        num4: { name: 'Digit268', parent: 'SensorScale067' },
        dot1: { name: 'Digit_dot225', parent: 'SensorScale067' },
        dot2: { name: 'Digit_dot224', parent: 'SensorScale067' },
        dot3: { name: 'Digit_dot223', parent: 'SensorScale067' },
        dot4: { name: 'Digit_dot226', parent: 'SensorScale067' },
      },
      dpObsh: {
        num1: { name: 'Digit267', parent: 'SensorScale066' },
        num2: { name: 'Digit266', parent: 'SensorScale066' },
        num3: { name: 'Digit265', parent: 'SensorScale066' },
        num4: { name: 'Digit264', parent: 'SensorScale066' },
        dot1: { name: 'Digit_dot221', parent: 'SensorScale066' },
        dot2: { name: 'Digit_dot220', parent: 'SensorScale066' },
        dot3: { name: 'Digit_dot219', parent: 'SensorScale066' },
        dot4: { name: 'Digit_dot222', parent: 'SensorScale066' },
      },
      dpNiz: {
        num1: { name: 'Digit263', parent: 'SensorScale065' },
        num2: { name: 'Digit262', parent: 'SensorScale065' },
        num3: { name: 'Digit261', parent: 'SensorScale065' },
        num4: { name: 'Digit260', parent: 'SensorScale065' },
        dot1: { name: 'Digit_dot217', parent: 'SensorScale065' },
        dot2: { name: 'Digit_dot216', parent: 'SensorScale065' },
        dot3: { name: 'Digit_dot215', parent: 'SensorScale065' },
        dot4: { name: 'Digit_dot218', parent: 'SensorScale065' },
      },
      fHolodDut: {
        num1: { name: 'Digit259', parent: 'SensorScale064' },
        num2: { name: 'Digit258', parent: 'SensorScale064' },
        num3: { name: 'Digit257', parent: 'SensorScale064' },
        num4: { name: 'Digit256', parent: 'SensorScale064' },
        dot1: { name: 'Digit_dot213', parent: 'SensorScale064' },
        dot2: { name: 'Digit_dot212', parent: 'SensorScale064' },
        dot3: { name: 'Digit_dot211', parent: 'SensorScale064' },
        dot4: { name: 'Digit_dot214', parent: 'SensorScale064' },
      },
      pGorDut: {
        num1: { name: 'Digit255', parent: 'SensorScale063' },
        num2: { name: 'Digit254', parent: 'SensorScale063' },
        num3: { name: 'Digit253', parent: 'SensorScale063' },
        num4: { name: 'Digit252', parent: 'SensorScale063' },
        dot1: { name: 'Digit_dot209', parent: 'SensorScale063' },
        dot2: { name: 'Digit_dot208', parent: 'SensorScale063' },
        dot3: { name: 'Digit_dot207', parent: 'SensorScale063' },
        dot4: { name: 'Digit_dot210', parent: 'SensorScale063' },
      },
      urZasDat1: {
        num1: { name: 'Digit243', parent: 'SensorScale060' },
        num2: { name: 'Digit242', parent: 'SensorScale060' },
        num3: { name: 'Digit241', parent: 'SensorScale060' },
        num4: { name: 'Digit240', parent: 'SensorScale060' },
        dot1: { name: 'Digit_dot197', parent: 'SensorScale060' },
        dot2: { name: 'Digit_dot196', parent: 'SensorScale060' },
        dot3: { name: 'Digit_dot195', parent: 'SensorScale060' },
        dot4: { name: 'Digit_dot198', parent: 'SensorScale060' },
      },
      urZasDat2: {
        num1: { name: 'Digit247', parent: 'SensorScale061' },
        num2: { name: 'Digit246', parent: 'SensorScale061' },
        num3: { name: 'Digit245', parent: 'SensorScale061' },
        num4: { name: 'Digit244', parent: 'SensorScale061' },
        dot1: { name: 'Digit_dot201', parent: 'SensorScale061' },
        dot2: { name: 'Digit_dot200', parent: 'SensorScale061' },
        dot3: { name: 'Digit_dot199', parent: 'SensorScale061' },
        dot4: { name: 'Digit_dot202', parent: 'SensorScale061' },
      },
      urZasMeh: {
        num1: { name: 'Digit251', parent: 'SensorScale062' },
        num2: { name: 'Digit250', parent: 'SensorScale062' },
        num3: { name: 'Digit249', parent: 'SensorScale062' },
        num4: { name: 'Digit248', parent: 'SensorScale062' },
        dot1: { name: 'Digit_dot205', parent: 'SensorScale062' },
        dot2: { name: 'Digit_dot204', parent: 'SensorScale062' },
        dot3: { name: 'Digit_dot203', parent: 'SensorScale062' },
        dot4: { name: 'Digit_dot206', parent: 'SensorScale062' },
      },
      tVGazT1: {
        num1: { name: 'Digit239', parent: 'SensorScale059' },
        num2: { name: 'Digit238', parent: 'SensorScale059' },
        num3: { name: 'Digit237', parent: 'SensorScale059' },
        num4: { name: 'Digit236', parent: 'SensorScale059' },
        dot1: { name: 'Digit_dot193', parent: 'SensorScale059' },
        dot2: { name: 'Digit_dot192', parent: 'SensorScale059' },
        dot3: { name: 'Digit_dot191', parent: 'SensorScale059' },
        dot4: { name: 'Digit_dot194', parent: 'SensorScale059' },
      },
      tVGazT2: {
        num1: { name: 'Digit235', parent: 'SensorScale058' },
        num2: { name: 'Digit234', parent: 'SensorScale058' },
        num3: { name: 'Digit233', parent: 'SensorScale058' },
        num4: { name: 'Digit232', parent: 'SensorScale058' },
        dot1: { name: 'Digit_dot189', parent: 'SensorScale058' },
        dot2: { name: 'Digit_dot188', parent: 'SensorScale058' },
        dot3: { name: 'Digit_dot187', parent: 'SensorScale058' },
        dot4: { name: 'Digit_dot190', parent: 'SensorScale058' },
      },
      tVGazT3: {
        num1: { name: 'Digit231', parent: 'SensorScale057' },
        num2: { name: 'Digit230', parent: 'SensorScale057' },
        num3: { name: 'Digit229', parent: 'SensorScale057' },
        num4: { name: 'Digit228', parent: 'SensorScale057' },
        dot1: { name: 'Digit_dot185', parent: 'SensorScale057' },
        dot2: { name: 'Digit_dot184', parent: 'SensorScale057' },
        dot3: { name: 'Digit_dot183', parent: 'SensorScale057' },
        dot4: { name: 'Digit_dot186', parent: 'SensorScale057' },
      },
      tVGazT4: {
        num1: { name: 'Digit227', parent: 'SensorScale056' },
        num2: { name: 'Digit226', parent: 'SensorScale056' },
        num3: { name: 'Digit225', parent: 'SensorScale056' },
        num4: { name: 'Digit224', parent: 'SensorScale056' },
        dot1: { name: 'Digit_dot181', parent: 'SensorScale056' },
        dot2: { name: 'Digit_dot180', parent: 'SensorScale056' },
        dot3: { name: 'Digit_dot181', parent: 'SensorScale056' },
        dot4: { name: 'Digit_dot182', parent: 'SensorScale056' },
      },
      fAzotObsh: {
        num1: { name: 'Digit223', parent: 'SensorScale055' },
        num2: { name: 'Digit222', parent: 'SensorScale055' },
        num3: { name: 'Digit221', parent: 'SensorScale055' },
        num4: { name: 'Digit220', parent: 'SensorScale055' },
        dot1: { name: 'Digit_dot177', parent: 'SensorScale055' },
        dot2: { name: 'Digit_dot176', parent: 'SensorScale055' },
        dot3: { name: 'Digit_dot175', parent: 'SensorScale055' },
        dot4: { name: 'Digit_dot178', parent: 'SensorScale055' },
      },
      sodKislVAzot: {
        num1: { name: 'Digit219', parent: 'SensorScale054' },
        num2: { name: 'Digit218', parent: 'SensorScale054' },
        num3: { name: 'Digit217', parent: 'SensorScale054' },
        num4: { name: 'Digit216', parent: 'SensorScale054' },
        dot1: { name: 'Digit_dot173', parent: 'SensorScale054' },
        dot2: { name: 'Digit_dot172', parent: 'SensorScale054' },
        dot3: { name: 'Digit_dot171', parent: 'SensorScale054' },
        dot4: { name: 'Digit_dot174', parent: 'SensorScale054' },
      },
      tGorDut: {
        num1: { name: 'Digit215', parent: 'SensorScale053' },
        num2: { name: 'Digit214', parent: 'SensorScale053' },
        num3: { name: 'Digit213', parent: 'SensorScale053' },
        num4: { name: 'Digit212', parent: 'SensorScale053' },
        dot1: { name: 'Digit_dot169', parent: 'SensorScale053' },
        dot2: { name: 'Digit_dot168', parent: 'SensorScale053' },
        dot3: { name: 'Digit_dot167', parent: 'SensorScale053' },
        dot4: { name: 'Digit_dot170', parent: 'SensorScale053' },
      },
      pTechVodT1: {
        num1: { name: 'Digit211', parent: 'SensorScale052' },
        num2: { name: 'Digit210', parent: 'SensorScale052' },
        num3: { name: 'Digit209', parent: 'SensorScale052' },
        num4: { name: 'Digit208', parent: 'SensorScale052' },
        dot1: { name: 'Digit_dot165', parent: 'SensorScale052' },
        dot2: { name: 'Digit_dot164', parent: 'SensorScale052' },
        dot3: { name: 'Digit_dot163', parent: 'SensorScale052' },
        dot4: { name: 'Digit_dot166', parent: 'SensorScale052' },
      },
      pTechVodT2: {
        num1: { name: 'Digit207', parent: 'SensorScale051' },
        num2: { name: 'Digit206', parent: 'SensorScale051' },
        num3: { name: 'Digit205', parent: 'SensorScale051' },
        num4: { name: 'Digit204', parent: 'SensorScale051' },
        dot1: { name: 'Digit_dot161', parent: 'SensorScale051' },
        dot2: { name: 'Digit_dot160', parent: 'SensorScale051' },
        dot3: { name: 'Digit_dot159', parent: 'SensorScale051' },
        dot4: { name: 'Digit_dot162', parent: 'SensorScale051' },
      },
      pSjatVozd: {
        num1: { name: 'Digit203', parent: 'SensorScale050' },
        num2: { name: 'Digit202', parent: 'SensorScale050' },
        num3: { name: 'Digit201', parent: 'SensorScale050' },
        num4: { name: 'Digit200', parent: 'SensorScale050' },
        dot1: { name: 'Digit_dot157', parent: 'SensorScale050' },
        dot2: { name: 'Digit_dot156', parent: 'SensorScale050' },
        dot3: { name: 'Digit_dot155', parent: 'SensorScale050' },
        dot4: { name: 'Digit_dot158', parent: 'SensorScale050' },
      },
      pOsyshSjatVozd: {
        num1: { name: 'Digit199', parent: 'SensorScale049' },
        num2: { name: 'Digit198', parent: 'SensorScale049' },
        num3: { name: 'Digit197', parent: 'SensorScale049' },
        num4: { name: 'Digit196', parent: 'SensorScale049' },
        dot1: { name: 'Digit_dot153', parent: 'SensorScale049' },
        dot2: { name: 'Digit_dot152', parent: 'SensorScale049' },
        dot3: { name: 'Digit_dot151', parent: 'SensorScale049' },
        dot4: { name: 'Digit_dot154', parent: 'SensorScale049' },
      },
      pAzotkZatv: {
        num1: { name: 'Digit195', parent: 'SensorScale048' },
        num2: { name: 'Digit194', parent: 'SensorScale048' },
        num3: { name: 'Digit193', parent: 'SensorScale048' },
        num4: { name: 'Digit192', parent: 'SensorScale048' },
        dot1: { name: 'Digit_dot149', parent: 'SensorScale048' },
        dot2: { name: 'Digit_dot148', parent: 'SensorScale048' },
        dot3: { name: 'Digit_dot147', parent: 'SensorScale048' },
        dot4: { name: 'Digit_dot150', parent: 'SensorScale048' },
      },
      tReduct: {
        num1: { name: 'Digit191', parent: 'SensorScale047' },
        num2: { name: 'Digit190', parent: 'SensorScale047' },
        num3: { name: 'Digit189', parent: 'SensorScale047' },
        num4: { name: 'Digit188', parent: 'SensorScale047' },
        dot1: { name: 'Digit_dot145', parent: 'SensorScale047' },
        dot2: { name: 'Digit_dot144', parent: 'SensorScale047' },
        dot3: { name: 'Digit_dot143', parent: 'SensorScale047' },
        dot4: { name: 'Digit_dot146', parent: 'SensorScale047' },
      },
      fVodNaReduct: {
        num1: { name: 'Digit187', parent: 'SensorScale046' },
        num2: { name: 'Digit186', parent: 'SensorScale046' },
        num3: { name: 'Digit185', parent: 'SensorScale046' },
        num4: { name: 'Digit184', parent: 'SensorScale046' },
        dot1: { name: 'Digit_dot141', parent: 'SensorScale046' },
        dot2: { name: 'Digit_dot140', parent: 'SensorScale046' },
        dot3: { name: 'Digit_dot139', parent: 'SensorScale046' },
        dot4: { name: 'Digit_dot142', parent: 'SensorScale046' },
      },
      fPrirodGaz: {
        num1: { name: 'Digit183', parent: 'SensorScale045' },
        num2: { name: 'Digit182', parent: 'SensorScale045' },
        num3: { name: 'Digit181', parent: 'SensorScale045' },
        num4: { name: 'Digit180', parent: 'SensorScale045' },
        dot1: { name: 'Digit_dot137', parent: 'SensorScale045' },
        dot2: { name: 'Digit_dot136', parent: 'SensorScale045' },
        dot3: { name: 'Digit_dot135', parent: 'SensorScale045' },
        dot4: { name: 'Digit_dot138', parent: 'SensorScale045' },
      },
      fPrirodGazReg: {
        num1: { id: '438c0983-2a90-4674-80fe-0f12ebd0e09b', parent: 'sm_BRY-i_INDIKATORS008' },
        num2: { id: 'e1b7fe23-4bf7-43a6-8ed0-38ac5eb0fbf4', parent: 'sm_BRY-i_INDIKATORS008' },
        num3: { id: '2af6ba38-f4dc-4667-b063-b56677018eb2', parent: 'sm_BRY-i_INDIKATORS008' },
        num4: { id: '5c439d3a-fcc4-4e37-988c-519249c596dd', parent: 'sm_BRY-i_INDIKATORS008' },
        dot1: { id: '52a8b164-60de-444d-af8a-c3697567e43c', parent: 'sm_BRY-i_INDIKATORS008' },
        dot2: { id: '737a5112-ae86-44a6-baff-a6d711861845', parent: 'sm_BRY-i_INDIKATORS008' },
        dot3: { id: '20061ccf-44bc-49d0-9026-8759c6c60ed4', parent: 'sm_BRY-i_INDIKATORS008' },
      },
      fParaUvlajDutReg: {
        num1: { id: '53a0cad1-27fd-40e3-ace4-9082e8b47c89', parent: 'sm_BRY-i_INDIKATORS009' },
        num2: { id: '9924de46-0860-4bab-baab-473f7bb5699c', parent: 'sm_BRY-i_INDIKATORS009' },
        num3: { id: '26ecb4b6-ff76-4d2b-8ef3-a281e7b61578', parent: 'sm_BRY-i_INDIKATORS009' },
        num4: { id: 'ca7f9030-abf4-471e-b995-cb2f97d00cb8', parent: 'sm_BRY-i_INDIKATORS009' },
        dot1: { id: '58c690e5-199b-4502-b926-2f014e72b94c', parent: 'sm_BRY-i_INDIKATORS009' },
        dot2: { id: '255281c5-d9d6-40cf-8c82-8a88732459c0', parent: 'sm_BRY-i_INDIKATORS009' },
        dot3: { id: '8ed345ed-a844-4ac9-92af-449eaed48ecb', parent: 'sm_BRY-i_INDIKATORS009' },
      },
      // Вторя панель
      bzuDavlenie_l: {
        num1: { id: '3bb45076-6358-44f5-9512-ad83deffee68', parent: 'Numbers003' },
        num2: { id: 'b6749d50-1554-4ef6-b61f-d67d8bcbc883', parent: 'Numbers003' },
        num3: { id: '4ea0f852-66a7-4cb7-be0d-9861a1f8871e', parent: 'Numbers003' },
        num4: { id: '4066d5dd-4fcc-4679-85e7-2016b9a4449c', parent: 'Numbers003' },
        dot1: { id: '34116e21-6612-448c-90bf-ef11e5b25582', parent: 'Numbers003' },
        dot2: { id: '308d25d1-1da2-41a0-be31-4f043fa96831', parent: 'Numbers003' },
        dot3: { id: '10044bbc-773d-413e-8c58-b6aaa3bfba73', parent: 'Numbers003' },
      },
      bzuVesNetto_l: {
        num1: { id: '405dacf3-30bc-459a-86a8-c01063201a05', parent: 'Numbers004' },
        num2: { id: 'f155124e-9f0f-4b70-9198-01088627020d', parent: 'Numbers004' },
        num3: { id: '0802ab16-d7bd-4c96-935f-3c5f18a4e878', parent: 'Numbers004' },
        num4: { id: '84676e58-160f-4e06-b834-f9bcf44d5bfb', parent: 'Numbers004' },
        dot1: { id: '2af0834d-3218-44b2-9bdf-1ac972ae007f', parent: 'Numbers004' },
        dot2: { id: 'cd030085-6e65-4fa4-9201-c3026851dee0', parent: 'Numbers004' },
        dot3: { id: 'f5b39711-c8e3-4b68-9f2a-ca31b93069d2', parent: 'Numbers004' },
      },
      bzuDavlenie_r: {
        num1: { id: 'faad29d8-e8cb-46eb-b1e4-b7cfe7d33f1f', parent: 'Numbers002' },
        num2: { id: '137a700f-145a-4b34-9014-16969d7516ff', parent: 'Numbers002' },
        num3: { id: '8f61196e-efe8-4362-95ce-345c02f06b73', parent: 'Numbers002' },
        num4: { id: '1a21f04e-47b2-4df6-ba4e-e8efdbfe73f8', parent: 'Numbers002' },
        dot1: { id: '213137a8-eaef-4266-9c35-0ffd9b7e4514', parent: 'Numbers002' },
        dot2: { id: '25de8a00-f2db-4ae6-98e0-760e87bd942f', parent: 'Numbers002' },
        dot3: { id: 'b77a06ea-a04a-435b-99c4-86d4d7a1be41', parent: 'Numbers002' },
      },
      bzuVesNetto_r: {
        num1: { id: '25d64ffc-0cf0-4c26-adb2-ffaa39e3574d', parent: 'Numbers005' },
        num2: { id: '79ddd99d-9e4a-4c68-a405-b955746dd2a0', parent: 'Numbers005' },
        num3: { id: '082d89de-417e-4abf-998b-e7f8c2e88064', parent: 'Numbers005' },
        num4: { id: '8e279e52-f403-49ee-aca3-bc782852c3c5', parent: 'Numbers005' },
        dot1: { id: '514965b7-f0da-42a8-a9b1-52463bcbe6fc', parent: 'Numbers005' },
        dot2: { id: '3b9c8a37-66f7-4cd1-9073-b0320beaefe1', parent: 'Numbers005' },
        dot3: { id: '715fbce2-b391-4895-9d4f-5cb2b1c75547', parent: 'Numbers005' },
      },
      bzuPolShihZat_l: {
        num1: { id: 'e0fb496b-9583-4af0-af1b-938ac89eedcb', parent: 'Numbers006' },
        num2: { id: '035987f2-adba-461c-946f-eb8fc8fe85ea', parent: 'Numbers006' },
        num3: { id: '651f20eb-2527-4676-b8cb-bf6142acadf9', parent: 'Numbers006' },
        num4: { id: 'ee8ccace-5b2c-4706-bb4d-748743c74bd4', parent: 'Numbers006' },
        dot1: { id: 'a642fd22-5fce-45e2-83e9-a7fd13bb29a0', parent: 'Numbers006' },
        dot2: { id: '0bd09534-533d-4923-a589-453017f0c680', parent: 'Numbers006' },
        dot3: { id: '7c34a712-3610-4567-b468-f31138e2f058', parent: 'Numbers006' },
      },
      bzuVremVigruz_l: {
        num1: { id: 'f5c8ba31-eed8-4ecb-b2d6-4af27c06a465', parent: 'Numbers008' },
        num2: { id: '0862cc5f-e631-49b9-b3b2-461ca8e24ce1', parent: 'Numbers008' },
        num3: { id: '3665632f-1045-40c7-ae8b-06d5e292834a', parent: 'Numbers008' },
        num4: { id: 'f3fe3086-4735-4518-aefb-19e8b128a010', parent: 'Numbers008' },
        dot1: { id: '5ef6d958-902e-4372-971a-44e559fd2d4e', parent: 'Numbers008' },
        dot2: { id: 'bc3c8598-af77-422f-b884-46c019747ecf', parent: 'Numbers008' },
        dot3: { id: '94605d75-c631-4ebd-bb44-1339882b99e4', parent: 'Numbers008' },
      },
      bzuFactUgol_l: {
        num1: { id: '49b5a0d5-5572-4bf5-8e2b-4b9cc7f82ca6', parent: 'Numbers009' },
        num2: { id: '95ae010e-4f55-403d-b624-12e994eed25a', parent: 'Numbers009' },
        num3: { id: '125bc78e-0a29-49df-ab87-6ba4917292b6', parent: 'Numbers009' },
        num4: { id: '1ae0e601-30fc-4388-991b-5b33714a4973', parent: 'Numbers009' },
        dot1: { id: '0b17ea7e-ab8c-49df-8875-f267a1026612', parent: 'Numbers009' },
        dot2: { id: 'd7f68a64-2537-4b7a-ad5f-4db3681c7c36', parent: 'Numbers009' },
        dot3: { id: '2028f701-3437-4635-b55a-3f8999977a5f', parent: 'Numbers009' },
      },
      bzuPolShihZat_r: {
        num1: { id: 'af41ae9a-4601-46f2-9ee9-d8b1c168b8ec', parent: 'Numbers007' },
        num2: { id: 'c4bb0481-15ad-4800-961a-ac1705b17d30', parent: 'Numbers007' },
        num3: { id: '0bc37b9f-91b4-493a-a93c-c8f74aeb3431', parent: 'Numbers007' },
        num4: { id: '2df62fad-9bcc-42c6-8c29-4d7404efbcb4', parent: 'Numbers007' },
        dot1: { id: '0d0f431b-d231-4ae3-843c-f25db76a031b', parent: 'Numbers007' },
        dot2: { id: 'bc30927b-dd06-4333-93ea-bccf308ffa49', parent: 'Numbers007' },
        dot3: { id: 'dacfe64c-7225-4a16-bdc1-a5d243e45802', parent: 'Numbers007' },
      },
      bzuVremVigruz_r: {
        num1: { id: '7648bff7-bfe9-48aa-ac33-8e017e0ffb8b', parent: 'Numbers011' },
        num2: { id: '2711e804-d769-436a-8a6f-dfc936b19053', parent: 'Numbers011' },
        num3: { id: 'b2e7f898-619b-4fe4-a3d9-17fd1183b412', parent: 'Numbers011' },
        num4: { id: '22b255e2-4d84-407f-bd57-ab175a52bce5', parent: 'Numbers011' },
        dot1: { id: 'b2630a9b-4406-40a9-ab09-084a980cba27', parent: 'Numbers011' },
        dot2: { id: '9f2fb35d-7a15-4e5b-b941-bcb2912a451b', parent: 'Numbers011' },
        dot3: { id: 'a3af2fc4-fb9f-4b61-bf0a-f287da1ce0a6', parent: 'Numbers011' },
      },
      bzuFactUgol_r: {
        num1: { id: '557fbd47-cd2d-4984-bd58-f40b907068bb', parent: 'Numbers010' },
        num2: { id: 'f76d842d-c492-421b-b5f2-9b095648eb3c', parent: 'Numbers010' },
        num3: { id: '5da8a26b-cfed-4ab2-ae94-5a0995ad0104', parent: 'Numbers010' },
        num4: { id: 'c45a7542-42de-4a71-af34-6d9e3e3df7eb', parent: 'Numbers010' },
        dot1: { id: 'e96b9404-f702-4ffd-b9bf-26bd66cde886', parent: 'Numbers010' },
        dot2: { id: 'bc7bde17-39f0-4141-9998-8ebda7ff6420', parent: 'Numbers010' },
        dot3: { id: '84cef842-bd01-4662-a5df-399ecc326c2b', parent: 'Numbers010' },
      },
      bzuUrovZasip: {
        num1: { id: '0d46baf5-6404-4354-bc1c-6e37dbd22ddc', parent: 'Numbers012' },
        num2: { id: '84cd3a8e-a3ef-44fd-8215-2532412a8e5f', parent: 'Numbers012' },
        num3: { id: 'c4cae016-ec9a-4a4b-905f-70b1346b6d3d', parent: 'Numbers012' },
        num4: { id: '2eee1a17-a8a8-4c5f-af68-aa864f23f393', parent: 'Numbers012' },
        dot1: { id: '882223b4-e6c1-41aa-8ed8-3c8a925561c6', parent: 'Numbers012' },
        dot2: { id: '5498a664-8a3d-4317-a87f-91aabb26e663', parent: 'Numbers012' },
        dot3: { id: '8dee5aba-e133-486a-a64c-75ead44c5675', parent: 'Numbers012' },
      },

    };

    let num1, num2, num3, num4, dot;

    if (data[Name]) {
      const { num1: num1Data, num2: num2Data, num3: num3Data, num4: num4Data, dot1: dot1Data, dot2: dot2Data, dot3: dot3Data, dot4: dot4Data } = data[Name];
      num1 = scene.meshes.find(mesh => (num1Data.id && mesh.id === num1Data.id) || (mesh.name === num1Data.name && mesh.parent.name === num1Data.parent));
      num2 = scene.meshes.find(mesh => (num2Data.id && mesh.id === num2Data.id) || (mesh.name === num2Data.name && mesh.parent.name === num2Data.parent));
      num3 = scene.meshes.find(mesh => (num3Data.id && mesh.id === num3Data.id) || (mesh.name === num3Data.name && mesh.parent.name === num3Data.parent));
      num4 = scene.meshes.find(mesh => (num4Data.id && mesh.id === num4Data.id) || (mesh.name === num4Data.name && mesh.parent.name === num4Data.parent));
      const dotIndex = Val.indexOf('.');
      if (dotIndex === 1) {
        dot = scene.meshes.find(mesh => (dot1Data.id && mesh.id === dot1Data.id) || (mesh.name === dot1Data.name && mesh.parent.name === dot1Data.parent));
      } else if (dotIndex === 2) {
        dot = scene.meshes.find(mesh => (dot2Data.id && mesh.id === dot2Data.id) || (mesh.name === dot2Data.name && mesh.parent.name === dot2Data.parent));
      } else if (dotIndex === 3) {
        dot = scene.meshes.find(mesh => (dot3Data.id && mesh.id === dot3Data.id) || (mesh.name === dot3Data.name && mesh.parent.name === dot3Data.parent));
      } else if (dotIndex === 4) {
        dot = scene.meshes.find(mesh => (dot4Data.id && mesh.id === dot4Data.id) || (mesh.name === dot4Data.name && mesh.parent.name === dot4Data.parent));
      } else if (dotIndex === -1) {
        dot = [
          scene.meshes.find(mesh => (dot1Data.id && mesh.id === dot1Data.id) || (mesh.name === dot1Data.name && mesh.parent.name === dot1Data.parent)),
          scene.meshes.find(mesh => (dot2Data.id && mesh.id === dot2Data.id) || (mesh.name === dot2Data.name && mesh.parent.name === dot2Data.parent)),
          scene.meshes.find(mesh => (dot3Data.id && mesh.id === dot3Data.id) || (mesh.name === dot3Data.name && mesh.parent.name === dot3Data.parent)),
          dot4Data && scene.meshes.find(mesh => (dot4Data.id && mesh.id === dot4Data.id) || (mesh.name === dot4Data.name && mesh.parent.name === dot4Data.parent))
        ];
      }
    }
    if (num1) num1.material = donorMaterialsDigits[Val.replace(/\./g, '')[0]];
    if (num2) num2.material = donorMaterialsDigits[Val.replace(/\./g, '')[1]];
    if (num3) num3.material = donorMaterialsDigits[Val.replace(/\./g, '')[2]];
    if (num4) num4.material = donorMaterialsDigits[Val.replace(/\./g, '')[3]];
    if (dot) {
      let donorMaterialsDot = Color === 'green' ? findMaterial('Unic_DigitGreen_donor_Dot_On') : findMaterial('Unic_digits_tochka_on');
      if (dot.length > 1 && dot[0]) {
        dot.forEach(d => { if (d !== undefined) d.material = Color === 'green' ? findMaterial('Unic_DigitGreen_donor_Dot_Off') : findMaterial('Unic_digits_tochka_off') });
      } else {
        dot.material = donorMaterialsDot;
      }
    }
  }
}

function findMaterial(Name) {
  const tempMaterial =
    (devHelper.model3DVals.scene.meshes && devHelper.model3DVals.scene.meshes.find(mesh => (mesh.name === Name || mesh.id === Name))?.material) ||
    (devHelper.model3DVals.scene.materials && devHelper.model3DVals.scene.materials.find(material => (material.name === Name || material.id === Name)));
  return tempMaterial || console.warn(`Material ${Name} not found`);
}
function findMesh(Name, Log = true) {
  const mesh = devHelper.model3DVals.scene.meshes && devHelper.model3DVals.scene.meshes.find(mesh => (mesh.uniqueId === Name || mesh.name === Name || mesh.id === Name));
  return mesh || (devHelper.dev.enable === true && Log === true && console.warn(`Mesh ${Name} not found`));
}

function getClientRectFromMesh(Mesh) {
  const meshVectors = Mesh.getBoundingInfo().boundingBox.vectors
  const worldMatrix = Mesh.getWorldMatrix()
  const transformMatrix = devHelper.model3DVals.scene.getTransformMatrix()
  const viewport = devHelper.model3DVals.camera.viewport
  const coordinates = meshVectors.map(v => {
    const proj = BABYLON.Vector3.Project(v, worldMatrix, transformMatrix, viewport)
    proj.x = proj.x * devHelper.model3DVals.engine.getRenderWidth()
    proj.y = proj.y * devHelper.model3DVals.engine.getRenderHeight()
    return proj
  })
  const [minX, maxX] = extent(coordinates, c => c.x)
  const [minY, maxY] = extent(coordinates, c => c.y)
  const rect = {
    width: maxX - minX,
    height: maxY - minY,
    left: minX,
    top: minY,
    right: maxX,
    bottom: maxY,
  }

  function extent(array, accessor) {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0, n = array.length; i < n; ++i) {
      const value = accessor(array[i], i, array);
      if (value != null) {
        if (value < min) min = value;
        if (value > max) max = value;
      }
    }
    if (min === Infinity || max === -Infinity) {
      return undefined;
    }
    return [min, max];
  }
  return rect
}
