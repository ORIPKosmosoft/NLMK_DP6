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
Запретить клик через другие модели
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

    loadModel('All', scene);
    loadModel('Highlight', scene);

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
      document.querySelector('#takePosition').addEventListener('click', () => {
        document.querySelector('.value-input').children[0].value = camera.position.x;
        document.querySelector('.value-input').children[1].value = camera.position.y;
        document.querySelector('.value-input').children[2].value = camera.position.z;
        document.querySelectorAll('.value-input')[1].children[0].value = camera.rotation.x;
        document.querySelectorAll('.value-input')[1].children[1].value = camera.rotation.y;
        document.querySelectorAll('.value-input')[1].children[2].value = camera.rotation.z;
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
      document.querySelector('#back-btn').addEventListener('click', () => {
        animMoveCamera([0.35, 2.15, -3.4], [0.1913, -0.0046, 0], undefined);
      })
      // Для поиска нужного меша
      canvas.addEventListener("pointermove", function () {
        var pickResult = scene.pick(scene.pointerX, scene.pointerY);
        if (pickResult.hit) {
          var meshName = pickResult.pickedMesh.name;
          console.log("Имя меша под мышью: " + pickResult.pickedMesh);
        } else {
          console.log("Меш не найден под мышью.");
        }
      });
    } else {
      document.querySelector('.help-btn-block').remove();
    }
    /* Блок кнопопк для камеры
----------------------------------------------------------------------------------------------------------
 */
    return scene;
  };

  const scene = createScene();
  engine.runRenderLoop(function () {
    scene.render();
  });

  window.addEventListener("resize", function () {
    engine.resize();
  });

  function loadModel(Name, Scene) {
    BABYLON.SceneLoader.ImportMesh('', '../media/models/Babylon/', `${Name}.babylon`, Scene, function (meshes) {
      if (Name === 'All') {
        meshes.forEach(element => {
          if (devHelper.dev.enable === true) element.isPickable = true;
          if (element.name && element.name === 'Display_flat002') {
            // const imgTag = document.createElement('img');
            // imgTag.src = '../media/images/schemes/dp.svg';
            // let newTexture = new BABYLON.Texture('../media/images/UI/photo_1.jpg', Scene);
            // let newMaterial = new BABYLON.StandardMaterial('material_' + element.name, Scene);
            // newMaterial.diffuseTexture = newTexture;
            // element.material = newMaterial;
            makeMovePoint(element, Scene, [-6.56, 1.12, -0.79], [-0.0165, -0.7836, 0], 1);
          } else if (element.name && element.name === 'Display_flat003') {
            makeMovePoint(element, Scene, [-6.56, 1.12, -0.79], [-0.0165, -0.7836, 0], 2);
          } else if (element.name && element.name === 'Object042') {
          } 
        });
        change3DTime();
      } else {
        meshes.forEach(element => {
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

////////////////////////
  const c_dynamicMaterial = new BABYLON.StandardMaterial(`dynamicMaterial_${getRandomInt()}`, scene);
  function newTextureOnMesh(mesh, _svg){
    _svg = _svg.contentDocument.querySelector('svg')
    let outputImage = document.querySelector('#output-scheme-img')
    let planeTexture = new BABYLON.DynamicTexture("texturePlane", {width: _svg.getAttribute('width'), height: _svg.getAttribute('height')}, scene, true);
    c_dynamicMaterial.diffuseTexture = c_dynamicMaterial.emissiveTexture = planeTexture;
    mesh.material = c_dynamicMaterial;
  
    let textureContext = planeTexture.getContext();
    let xml = new XMLSerializer().serializeToString(_svg)
    let svg64 = btoa(unescape(encodeURIComponent(xml)))
    let b64Start = 'data:image/svg+xml;base64,';
  
    outputImage.onload = function() {
      textureContext.drawImage(document.querySelector('#output-scheme-img'), 0, 0);
      planeTexture.update();
    }
    outputImage.src = b64Start + svg64;
  }
////////////////////


});


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

function changeColorTexture(Mesh, State) {
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
