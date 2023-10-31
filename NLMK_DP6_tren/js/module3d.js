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
Добавить изменение времени на3Д к главному изменении времени
change3DTime
--------------------------------------------------------------------
Добавить всплывающую подсказку при наведении на хотспот
--------------------------------------------------------------------
не отрисовывать рендер пока не перешли в тренажёр
проблема в другом?
--------------------------------------------------------------------
При приблежении к хотспотам разрешить обзор немного, но при отпускании мышки камера вернётся в начальное положение
--------------------------------------------------------------------
Сделать текстуры для каждого монитора
И уже обновлять сами текстуры
--------------------------------------------------------------------
*/
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("renderCanvas");
  devHelper.model3DVals.engine = new BABYLON.Engine(canvas, true);

  const createScene = function () {
    let scene = new BABYLON.Scene(devHelper.model3DVals.engine);
    devHelper.model3DVals.scene = scene;
    let camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0.35, 2.15, -3.4), scene);
    devHelper.model3DVals.camera = camera;
    camera.rotation = new BABYLON.Vector3(0.1913, -0.0046, 0);
    camera.attachControl(canvas, true);
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
    window.addEventListener('load', function () {
      setTimeout(() => {
        loadModel('All', scene, shadowGenerator);
        loadModel('Highlight', scene);
        // loadModel('Console_BVNK', scene);
        // loadModel('Console_BZU', scene);
        // loadModel('Console_DP6', scene);
        // loadModel('Console_PSODP6', scene);
        // loadModel('Console_UGKS', scene);
      }, 1000);
    });

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
          // if (devHelper.dev.enable === true) console.log('X: ' + camera.rotation.x, 'Y: ' + camera.rotation.y);
        }
      )
    );
    scene.onPointerUp = function (evt, pickResult) {
      if (devHelper.model3DVals.currentPosition !== undefined)
        animMoveCamera(devHelper.model3DVals.cameraPositions[devHelper.model3DVals.currentPosition], 0.5);
    };
    /* Положения камеры на объекты
    начальное положение
    0.35, 2.15, -3.4
    0.1913, -0.0046, 0
    Монитор1
    -6.56, 1.12, -0.79
    -0.0165, -0.7836, 0
    */
    /* Блок кнопопк для камеры
    ----------------------------------------------------------------------------------------------------------
     */
    if (devHelper.dev.enable === true) {
      document.getElementById('movePositionX1').addEventListener('click', () => {
        changeSvgElem({ name: 'vnk_1', color: '#000000' });
        changeSvgtexture(devHelper.model3DVals.svgDisplays.meshs[0], 'vnk_main');
      })
      document.getElementById('movePositionX2').addEventListener('click', () => {
        changeSvgElem('fire_vnk_1', { position: { x: 10 } });
      })
      document.getElementById('movePositionY1').addEventListener('click', () => {
        changeSvgtexture(devHelper.model3DVals.svgDisplays.meshs[0], 'BVNK_VNK2', true);
      })
      document.getElementById('movePositionY2').addEventListener('click', () => {
        changeSvgtexture(devHelper.model3DVals.svgDisplays.meshs[0], 'BVNK_VNK3', true);
      })
      document.getElementById('movePositionZ1').addEventListener('click', () => {
        changeSvgtexture(devHelper.model3DVals.svgDisplays.meshs[0], 'vnk_main', true);
      })
      document.getElementById('movePositionZ2').addEventListener('click', () => {
        changeSvgtexture(devHelper.model3DVals.svgDisplays.meshs[0], 'vnk_spvg', true);
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
    return scene;
  };
  canvas.addEventListener("pointermove", function () {
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    if (pickResult.hit) {
      // if (devHelper.dev.enable === true) console.log(pickResult.pickedMesh.name, pickResult.pickedMesh.uniqueId);
      devHelper.model3DVals.meshUnderPointer = pickResult.pickedMesh.name;
    }
    else devHelper.model3DVals.meshUnderPointer = undefined;
  });

  const scene = createScene();
  // if (devHelper.dev.enable === true) scene.debugLayer.show();
  // engine.runRenderLoop(function () {
  //   scene.render();
  // });

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
          Mesh.actionManager = new BABYLON.ActionManager(Scene);
          Mesh.isPickable = true;
          if (Mesh.name && Mesh.name === 'Display_flat002') {
            makeActiveMesh(Mesh, 1);
            makeSvgDisplay(Mesh, Scene, 'BVNK_VNK1');
          } else if (Mesh.name && Mesh.name === 'Display_flat003') {
            makeActiveMesh(Mesh, 2);
            makeSvgDisplay(Mesh, Scene, 'vnk_main');
          } else if (Mesh.id && Mesh.id === '25408591-8ddd-4b64-a7ad-499aaa995ae6') {
            makeActiveMesh(Mesh, { name: 'kl022', posIndex: 3 });
          } else if (Mesh.id && Mesh.id === '8d7497bf-6a8b-4906-8a35-1dc986e6e655') {
            makeActiveMesh(Mesh, { name: 'kl021', posIndex: 3 });
          } else if (Mesh.name && Mesh.name === 'Rectangle001') {
            if (Mesh.id && Mesh.id === 'c4938c6e-adb9-4618-8fe0-76497fa5e0a7') {
              Mesh.receiveShadows = true;
              ShadowGenerator.getShadowMap().renderList.push(Mesh);
            }
          } else if (Mesh.name && Mesh.name === 'Room') {
            Mesh.receiveShadows = true;
          } else if (Mesh.name && Mesh.name === 'Monitor_flat021') {
            ShadowGenerator.getShadowMap().renderList.push(Mesh);
          } else if (Mesh.name && Mesh.name === 'Monitor_flat023') {
            ShadowGenerator.getShadowMap().renderList.push(Mesh);
          } else if (Mesh.name && Mesh.name === 'Console_PSODP6') {

          } else if (Mesh.name && Mesh.name === 'Console_BVNK') {

          } else if (Mesh.name && Mesh.name === 'Console_UGKS') {

          }
        })
        change3DTime();
      } else if (Name === 'Highlight') {
        meshes.forEach(element => {
          element.actionManager = new BABYLON.ActionManager(Scene);
          element.isPickable = true;
          const lightMat = new BABYLON.StandardMaterial("lightMat");
          lightMat.diffuseColor = new BABYLON.Color3(2, 1, 0);
          lightMat.alpha = 0;
          element.material = lightMat;
          if (element.name && element.name === 'Console_BVNK_highlight') {
            makeActiveMesh(element, 3);
          } else if (element.name && element.name === 'Console_BZU_highlight') {
            makeActiveMesh(element, 3);
          } else if (element.name && element.name === 'Console_DP6_highlight') {
            makeActiveMesh(element, 3);
          } else if (element.name && element.name === 'Console_UGKS_highlight') {
            makeActiveMesh(element, 3);
          } else if (element.name && element.name === 'Console_PSODP6_highlight') {
            element.dispose();
          }
        })
      }
      try {
        setLifeTime(devHelper.trenVals.timers.lifeTime);  // 2d 
        change3DTime(devHelper.trenVals.timers.lifeTime); // 3d
      }
      catch { }
    });

  }
});

function makeSvgDisplay(Mesh, Scene, SvgName) {
  let planeTexture = new BABYLON.DynamicTexture(`texture_${Mesh.name}`, { width: 2000, height: 993 }, Scene, true);
  planeTexture.update();
  Mesh.material.diffuseTexture = Mesh.material.emissiveTexture = planeTexture;
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
    if (devHelper.dev.enable === true) console.warn('Не переданы значения для создания активного меша в функции makeActiveMesh.');
    return;
  } else {
    if (Mesh instanceof BABYLON.InstancedMesh) {
      let tempMesh = Mesh.sourceMesh.clone();
      tempMesh.name = Mesh.name;
      tempMesh.material = Mesh.material.clone(`material_${tempMesh.name}`);
      tempMesh.setAbsolutePosition(new BABYLON.Vector3(Mesh.absolutePosition._x, Mesh.absolutePosition._y, Mesh.absolutePosition._z));
      Mesh.dispose();
      Mesh = tempMesh;
    }
    Mesh.actionManager = new BABYLON.ActionManager(devHelper.model3DVals.scene);
    if (Vals.name) {
      Mesh.name = Vals.name;
      Mesh.currentPosition = Vals;
      Mesh.isPickable = false;
      if (devHelper.model3DVals.activeMeshs[Vals] === undefined)
        devHelper.model3DVals.activeMeshs[Vals] = [Mesh];
      else devHelper.model3DVals.activeMeshs[Vals].push(Mesh);
    } else if (typeof Vals === 'number') {
      Mesh.isPickable = true;
      devHelper.model3DVals.movePointMesh.push(Mesh);
      Mesh.positionIndex = Vals;
    }
    Mesh.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        function () {
          if (Vals.name) {
            clickOnMesh(Mesh);
          } else if (typeof Vals === 'number') {
            clickOnPointMesh(Mesh, devHelper.model3DVals.cameraPositions[Vals]);
          }
        }
      )
    );
    Mesh.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPointerOverTrigger,
        function () { changeColorTexture(Mesh, true); }
      )
    );
    Mesh.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPointerOutTrigger,
        function () { changeColorTexture(Mesh, false); }
      )
    );
    makeUnicMat(Mesh);
  }
}

function clickOnPointMesh(Mesh = undefined, Vals = undefined) {
  if (Mesh === undefined || Vals === undefined) {
    if (devHelper.dev.enable === true) console.warn('Не переданы значения для создания активного меша в функции clickOnPointMesh.');
    return;
  } else {
    changeColorTexture(Mesh, false);
    animMoveCamera(Vals);
  }
}

function makeUnicMat(UnicMesh) {
  if (UnicMesh.material) {
    let tempMaterial = UnicMesh.material.clone(`material_${UnicMesh.name}`);
    UnicMesh.material = tempMaterial;
  }
}

function changeSvgtexture(Mesh = undefined, SvgName = undefined, ChangeTexture = false, Window = undefined, Pos = undefined) {
  if (Mesh && SvgName) {
    if (ChangeTexture === true) Mesh.svgArr = [{ name: SvgName, x: 0, y: 0 }];
    let svgIndex = devHelper.model3DVals.svgDisplays.svgNames.findIndex(function (obj) { return obj === SvgName; })
    let outputImage = devHelper.model3DVals.svgDisplays.tagImgs[svgIndex];
    outputImage.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(devHelper.model3DVals.svgDisplays.svgs[svgIndex]))));
    outputImage.onload = function tempF() { updateMeshTextureSvg(); }
  } else {
    if (devHelper.dev.enable === true) console.warn(`В функцию changeSvgtexture передали не все переменные.`);
    return
  }
}

function updateSvgTextures() {
  var uniqueSvg = [...new Set(devHelper.model3DVals.svgDisplays.meshs
    .flatMap(mesh => mesh.svgArr || []).map(element => element.name))].map(name => ({ name, }));
  uniqueSvg.forEach((element) => {
    let svgIndex = devHelper.model3DVals.svgDisplays.svgNames.findIndex(function (obj) { return obj === element.name; })
    let outputImage = devHelper.model3DVals.svgDisplays.tagImgs[svgIndex];
    outputImage.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(devHelper.model3DVals.svgDisplays.svgs[svgIndex]))));
  });
}

function updateMeshTextureSvg() {
  devHelper.model3DVals.svgDisplays.meshs.forEach(DisplayMesh => {
    let textureContext = DisplayMesh.material.diffuseTexture.getContext();
    textureContext.clearRect(0, 0, textureContext.width, textureContext.height);
    DisplayMesh.svgArr.forEach(element => {
      let svgIndex = devHelper.model3DVals.svgDisplays.svgNames.findIndex(function (obj) { return obj === element.name; });
      let outputImage = devHelper.model3DVals.svgDisplays.tagImgs[svgIndex];
      textureContext.drawImage(outputImage, element.x, element.y);
    })
    DisplayMesh.material.diffuseTexture.update();
  })
}

function addSvgToTextrue(Mesh = undefined, NewSvgVals = undefined, ClearCanvas = false, addNewSvg = true) {
  if (Mesh && NewSvgVals) {
    if (addNewSvg === true) Mesh.svgArr.push({ name: NewSvgVals.window, x: NewSvgVals.x, y: NewSvgVals.y });
    let windowIndex = devHelper.svgVals.findIndex(function (obj) { return obj.name === NewSvgVals.window; })
    let outputImage = devHelper.model3DVals.svgDisplays.tagImgs[windowIndex];
    outputImage.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(devHelper.model3DVals.svgDisplays.svgs[windowIndex]))));
    outputImage.onload = function tempF() { updateMeshTextureSvg(); }
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

    let newBlue1 = State === true ? 0 : 1;
    let newBlue2 = State === true ? -1 : 0;
    let newAlpha = State === true ? 0.5 : 0;
    if (Mesh.material.alpha !== 1) {
      Mesh.material.alpha = newAlpha;
    } else {
      if (Mesh.material.diffuseColor) Mesh.material.diffuseColor.b = newBlue1;
      else if (Mesh.material._emissiveColor)
        Mesh.material._emissiveColor.b = Mesh.material._emissiveColor.r === 1 ? newBlue1 : newBlue2;
    }
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

function moveRotationMesh(Mesh = undefined, Type = 'r', Val = 0, Axis = undefined, Duration = 1, Scene = devHelper.model3DVals.scene) {
  if (devHelper.dev.enable === true) {
    if (Mesh === undefined) console.warn(`В функцию rotateMesh не передали меш.`);
    if (Axis === undefined) console.warn(`В функцию rotateMesh не передали Angle.`);
  }
  if (Mesh !== undefined || Axis !== undefined) {
    if (Mesh.rotation._isDirty === false) Mesh.rotation = new BABYLON.Vector3(0, 0, 0);
    if (Type === 'r') Val = Val * (Math.PI / 180);
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
        value: Val
      }
    ];
    animation.setKeys(keys);
    Scene.beginDirectAnimation(Mesh, [animation], 0, Duration * 60, false);
  } else return
}

function animMoveCamera(Vals, Speed = 2) {
  let speed = Speed * 60;
  if (Vals.position === undefined) {
    devHelper.model3DVals.movePointMesh.forEach(mesh => mesh.isPickable = true);
    if (document.getElementById('svg-helper')) document.getElementById('svg-helper').remove();
  }
  else {
    devHelper.model3DVals.movePointMesh.forEach(mesh => mesh.isPickable = false);
    if (devHelper.model3DVals.activeMeshs[Vals.position])
      devHelper.model3DVals.activeMeshs[Vals.position].forEach(mesh => mesh.isPickable = true);
  }
  // if (Vals.position === 1) { // все мониторы
  //   devHelper.model3DVals.camera.inputs.attached.mouse._allowCameraRotation = false;
  // } else {
  //   devHelper.model3DVals.camera.inputs.attached.mouse._allowCameraRotation = true;
  // }

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
    createSvghelper(Vals.position);
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