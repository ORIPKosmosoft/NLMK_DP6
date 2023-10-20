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
Реализовать просмотр инстансов и забить их
--------------------------------------------------------------------
*/
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("renderCanvas");
  const engine = new BABYLON.Engine(canvas, true);

  const createScene = function () {
    let scene = new BABYLON.Scene(engine);
    devHelper.model3DVals.scene = scene;
    let camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0.35, 2.15, -3.4), scene);
    devHelper.model3DVals.camera = camera;
    camera.rotation = new BABYLON.Vector3(0.1913, -0.0046, 0);
    camera.attachControl(canvas, true);
    camera.minZ = 0.1;
    let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, -1, 0), scene);
    light.intensity = 0.5;
    let light2 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light2.intensity = 2;
    window.addEventListener('load', function () {
      setTimeout(() => {
        loadModel('All', scene);
        loadModel('Highlight', scene);
      }, 1000);
    });

    scene.actionManager = new BABYLON.ActionManager(scene);
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnEveryFrameTrigger,
        function () {
          // TODO Добавить органичесние на поворот камеры на главном виде и щитов
          // if (devHelper.model3DVals.currentPosition === undefined) {
          //   if (camera.rotation.y >= 1.01)
          //     camera.rotation.y = 1.01;
          //   if (camera.rotation.y <= -0.93)
          //     camera.rotation.y = -0.93;
          //   if (camera.rotation.x >= 0.608)
          //     camera.rotation.x = 0.608;
          //   if (camera.rotation.x <= -0.12) {
          //     camera.rotation.x = -0.12;
          //   }
          //   console.log('X: ' + camera.rotation.x, 'Y: ' + camera.rotation.y);
          // }
        }
      )
    );
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
        changeSvgtexture(devHelper.model3DVals.svgDisplays.meshs[0], 'dp');
      })
      document.getElementById('movePositionX2').addEventListener('click', () => {
        changeSvgtexture(devHelper.model3DVals.svgDisplays.meshs[0], 'bzu');
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
        animMoveCamera([0.35, 2.15, -3.4], [0.1913, -0.0046, 0], undefined);
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
      // Для поиска нужного меша
    } else {
      document.querySelector('.help-btn-block').remove();
    }
    /* Блок кнопопк для камеры
    ----------------------------------------------------------------------------------------------------------
    */
   return scene;
  };
  canvas.addEventListener("pointermove", function () {
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    if (pickResult.hit) {
      if (devHelper.dev.enable === true) console.log(pickResult.pickedMesh.name);
      devHelper.model3DVals.meshUnderPointer = pickResult.pickedMesh.name;
    }
    else devHelper.model3DVals.meshUnderPointer = undefined;
  });

  const scene = createScene();
  engine.runRenderLoop(function () {
    scene.render();
  });

  // scene.onPointerMove = function (evt, pickInfo) {
  //   if (pickInfo.hit) {
  //     var mesh = pickInfo.pickedMesh;
  //     console.log(mesh.name);
  //   }
  // };


  window.addEventListener("resize", function () {
    engine.resize();
  });

  function loadModel(Name, Scene) {
    BABYLON.SceneLoader.ImportMesh('', '../media/models/Babylon/', `${Name}.babylon`, Scene, function (meshes) {
      if (Name === 'All') {
        meshes.forEach(element => {
          element.actionManager = new BABYLON.ActionManager(Scene);
          element.isPickable = true;
          if (element.name && element.name === 'Display_flat002') {
            makeSvgDisplay(element, Scene, 'bzu');
            makeMovePoint(element, Scene, [-6.56, 1.12, -0.79], [-0.0165, -0.7836, 0], 1);
          } else if (element.name && element.name === 'Display_flat003') {
            makeMovePoint(element, Scene, [-6.56, 1.12, -0.79], [-0.0165, -0.7836, 0], 2);
          } else if (element.name && element.name === 'Object042') {
            devHelper.model3DVals.activeMeshs.push(element);
            element.name = 'kl022'

            // element.instances.forEach(instance => {
            //   instance.actionManager = new BABYLON.ActionManager(Scene);
            //   instance.isPickable = true;
            // })

          }
        });
        change3DTime();
      } else {
        meshes.forEach(element => {
          element.actionManager = new BABYLON.ActionManager(Scene);
          element.isPickable = true;
          const groundMat = new BABYLON.StandardMaterial("groundMat");
          groundMat.diffuseColor = new BABYLON.Color3(2, 1, 0);
          groundMat.alpha = 0;
          element.material = groundMat;
          if (element.name && element.name === 'Console_BVNK_highlight') {
            makeMovePoint(element, Scene, [-3.56, 1.73, -1], [0.5216195764415446, 0.007373100235868478, 0], 2);
          } else if (element.name && element.name === 'Console_BZU_highlight') {
            makeMovePoint(element, Scene, [-3.56, 1.73, -1], [0.5216195764415446, 0.007373100235868478, 0], 1);
          } else if (element.name && element.name === 'Console_DP6_highlight') {
            makeMovePoint(element, Scene, [-3.56, 1.73, -1], [0.5216195764415446, 0.007373100235868478, 0], 1);
          } else if (element.name && element.name === 'Console_UGKS_highlight') {
            makeMovePoint(element, Scene, [-3.56, 1.73, -1], [0.5216195764415446, 0.007373100235868478, 0], 1);
          } else if (element.name && element.name === 'Console_PSODP6_highlight') {
            element.dispose();
          }
        })
      }
    });
  }

});

function makeSvgDisplay(Mesh, Scene, SvgName) {
  let tempMat = new BABYLON.StandardMaterial(`material_${Mesh.name}`, Scene);
  Mesh.material = tempMat;
  devHelper.model3DVals.svgDisplays.meshs.push(Mesh);
  let tempInterval = setInterval(() => {
    if (devHelper.model3DVals.svgDisplays.textures.length === document.querySelector('.svg-scheme-container').querySelectorAll('object').length) {
      changeSvgtexture(Mesh, SvgName);
      clearInterval(tempInterval);
    }
  }, 500);
}

function makeMovePoint(Mesh, Scene, PosCoors, LookAtCoors, CurPos) {
  devHelper.model3DVals.movePointMesh.push(Mesh);
  makeUnicMat(Mesh);
  Mesh.actionManager = new BABYLON.ActionManager(Scene);
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
  Mesh.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      function () {
        changeColorTexture(Mesh, false);
        animMoveCamera(PosCoors, LookAtCoors, CurPos);
      }
    )
  );
}

function makeUnicMat(UnicMesh) {
  if (UnicMesh.material) {
    let tempMaterial = UnicMesh.material.clone('material_' + UnicMesh.name);
    UnicMesh.material = tempMaterial;
  }
}

function changeSvgtexture(Mesh = undefined, SvgName = undefined) {
  if (Mesh && SvgName) {
    let Texture = devHelper.model3DVals.svgDisplays.textures.find(ele => ele.name.indexOf(SvgName) !== -1);
    console.log(SvgName, Texture);
    let textureContext = Texture.getContext();
    let newIndex = devHelper.model3DVals.svgDisplays.textures.indexOf(Texture);
    let outputImage = devHelper.model3DVals.svgDisplays.tagImgs[newIndex];
    outputImage.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(devHelper.model3DVals.svgDisplays.svgs[newIndex]))));
    outputImage.onload = function () {
      textureContext.drawImage(outputImage, 0, 0);
      Texture.update();
      if (Mesh.material.diffuseTexture !== Texture) Mesh.material.diffuseTexture = Mesh.material.emissiveTexture = Texture;
    }
  } else {
    if (devHelper.dev.enable === true) console.warn(`В функцию changeSvgtexture передали не все переменные.`);
    return
  }
}

function changeColorTexture(Mesh = undefined, State = undefined) {
  if (devHelper.model3DVals.currentPosition === undefined) {
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
  // Пример кода часов 3Д
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
  let digit1 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits000');
  let digit2 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits001');
  let digit3 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits002');
  let digit4 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits003');
  let digit5 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits004');
  let digit6 = devHelper.model3DVals.scene.meshes.find(mesh => mesh.name === 'Time_digits005');
  digit1.material = unic0.material.clone();
  digit2.material = unic7.material.clone();
  digit3.material = unic3.material.clone();
  digit4.material = unic4.material.clone();
  digit5.material = unic5.material.clone();
  digit6.material = unic4.material.clone();
}

function rotateMesh(Mesh = undefined, Angle = 0, Axis = undefined, Duration = 60, Scene = devHelper.model3DVals.scene) {
  if (devHelper.dev.enable === true) {
    if (Mesh === undefined) console.warn(`В функцию rotateMesh не передали меш.`);
    if (Axis === undefined) console.warn(`В функцию rotateMesh не передали тип.`);
  }
  if (Mesh !== undefined || Axis !== undefined) {
    if (Mesh.rotation._isDirty === false) Mesh.rotation = new BABYLON.Vector3(0, 0, 0);
    Angle = Angle * (Math.PI / 180);
    console.log(Angle);
    let animation = new BABYLON.Animation(
      "rotationAnimation",
      `rotation.${Axis}`,
      60,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );
    var keys = [
      {
        frame: 0,
        value: Mesh.rotation[Axis]
      },
      {
        frame: Duration,
        value: Angle
      }
    ];
    animation.setKeys(keys);
    Scene.beginDirectAnimation(Mesh, [animation], 0, Duration, false);
  } else return
}

function animMoveCamera(PosCoors, LookAtCoors, CurPos) {
  devHelper.model3DVals.currentPosition = CurPos;
  if (CurPos === undefined)
    devHelper.model3DVals.movePointMesh.forEach(mesh => mesh.isPickable = true);
  else devHelper.model3DVals.movePointMesh.forEach(mesh => mesh.isPickable = false);
  devHelper.model3DVals.camera.inputs.attached.mouse._allowCameraRotation = CurPos === 1 ? false : true;
  var positionAnimation = new BABYLON.Animation(
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
    frame: 120,
    value: new BABYLON.Vector3(PosCoors[0], PosCoors[1], PosCoors[2])
  });
  positionAnimation.setKeys(positionKeys);

  var rotationAnimation = new BABYLON.Animation(
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
    frame: 120,
    value: new BABYLON.Vector3(LookAtCoors[0], LookAtCoors[1], LookAtCoors[2])
  });
  rotationAnimation.setKeys(rotationKeys);
  devHelper.model3DVals.camera.animations = [positionAnimation, rotationAnimation];
  devHelper.model3DVals.scene.beginAnimation(devHelper.model3DVals.camera, 0, 120, false);
}

