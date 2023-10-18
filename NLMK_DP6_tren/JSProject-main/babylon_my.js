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
  Разобраться с полтолком текстурой
--------------------------------------------------------------------
облегчить модели пультов
--------------------------------------------------------------------
Разобраться с изменением мешей
--------------------------------------------------------------------
Разобраться с изменением текстур мешей
--------------------------------------------------------------------

*/
const devHelper = {
  trenVals: {
    waitingInput: true,
    currentAction: 0,
    currentActionTime: 0,
    actionTimer: 0,
    realTimer: 0,
    type: undefined,
    trenEnded: false,
    lifeTime: '08:00',
    actionArr: [],
    scenario: undefined,
    messages: {
      normal: [],
      error: []
    },
    ended: false,
  },
  model3DVals: {
    activeControlCamera: true,
    unicMeshArr: [],
    mouseoverMesh: undefined,
    cameras: [],
    scenes: [],
    renderers: [],
    controls: [],
    mainModel: undefined,
    active3dObjects: [],
    currentPosition: undefined,
    playerPosMeshs: [],
    cameraMove: {
      start: undefined,
      end: undefined,
      startTime: undefined,
      duration: undefined,
      lookStart: undefined,
      lookEnd: undefined,
    }

  },
  svgVals: [],
  dev: {
    enable: false,
    perfomance: undefined,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("renderCanvas"); // Get the canvas element
  const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

  const createScene = function () {
    let scene = new BABYLON.Scene(engine);
    devHelper.model3DVals.scene = scene;
    let camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0.35, 2.15, -3.4), scene);
    devHelper.model3DVals.camera = camera;
    camera.rotation = new BABYLON.Vector3(0.1913, -0.0046, 0);
    // camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    camera.minZ = 0.1;
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 2;
    loadModel('All', scene);
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
    // document.querySelector('#movePositionX1').addEventListener('click', () => {
    //   camera.position = new BABYLON.Vector3(parseFloat(camera.position.x) + 0.01, parseFloat(camera.position.y), parseFloat(camera.position.z))
    // })
    // document.querySelector('#movePositionX2').addEventListener('click', () => {
    //   camera.position = new BABYLON.Vector3(parseFloat(camera.position.x) - 0.01, parseFloat(camera.position.y), parseFloat(camera.position.z))
    // })
    // document.querySelector('button').addEventListener('click', animMoveCamera);
    // document.querySelector('button').addEventListener('click', () => {
    //   console.log(devHelper.model3DVals.camera.rotation);
    // });
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
      // let unicMatArr = [];
      meshes.forEach(element => {
        // console.log(element.name, element.id);
        // if (element.material) {
        //   if (unicMatArr.indexOf(element.material) === -1) unicMatArr.push(element.material);
        //   else {
        //     let clonedMaterial = element.material.clone();
        //     element.material = clonedMaterial;
        //   }
        // }
        if (element.name && element.name === 'Display_flat002') {
          let newTexture = new BABYLON.Texture('../media/images/UI/photo_1.jpg', Scene);
          let newMaterial = new BABYLON.StandardMaterial('material_' + element.name, Scene);
          newMaterial.diffuseTexture = newTexture;
          element.material = newMaterial;

          element.isPickable = true;
          element.actionManager = new BABYLON.ActionManager(Scene);
          element.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPointerOverTrigger,
              function () {
                if (element.material) element.material.diffuseColor = new BABYLON.Color3(1, 1, 0);
              }
            )
          );
          element.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPointerOutTrigger,
              function () {
                if (element.material) element.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
              }
            )
          );
          element.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPickTrigger,
              function () {
                animMoveCamera([-6.56, 1.12, -0.79], [-0.0165, -0.7836, 0], 1)
              }
            )
          );



          // const dynamicTexture = new BABYLON.DynamicTexture("dynamicTexture", { width: 2000, height: 902 }, Scene);
          // const context = dynamicTexture.getContext();
          // const svgString = `<svg width="2000" height="902">${document.querySelector('object').contentDocument.querySelector('svg').innerHTML}</svg>`;
          // console.log(svgString);
          // console.log();

          // const DOMURL = window.URL || window.webkitURL || window;
          // const img = new Image();
          // const svg = new Blob([svgString], { type: "image/svg+xml" });
          // const url = DOMURL.createObjectURL(svg);

          // img.onload = function () {
          //   context.drawImage(img, 0, 0);
          //   let newMaterial = new BABYLON.StandardMaterial('newMaterial', Scene);
          //   newMaterial.diffuseTexture = dynamicTexture;
          //   element.material = newMaterial;
          //   DOMURL.revokeObjectURL(url);
          //   console.log(img);
          // };

          // img.src = url;

          // const img = new Image();
          // img.src = 'data:image/svg+xml,' + encodeURIComponent(new XMLSerializer().serializeToString(document.querySelector('object').contentDocument.querySelector('svg')));
          // img.onload = function () {
          //   console.log(img);
          //   let newTexture = new BABYLON.Texture(img.src, Scene, false, false, BABYLON.Texture.NEAREST_SAMPLINGMODE, null, null, null, null, null, true);
          //   let newMaterial = new BABYLON.StandardMaterial('newMaterial', Scene);
          //   newMaterial.diffuseTexture = newTexture;
          //   element.material = newMaterial;
          // };
          // img.onerror = function () {
          //   console.error("Ошибка загрузки изображения");
          // };
        } else if (element.name && element.name === 'Display_flat003') {
          console.log(element);
        }
      });
      // let tempMesh = meshes.find(mesh => mesh.name === 'Display_flat002');
      // if (tempMesh) {
      //   let newTexture = new BABYLON.Texture('../media/images/UI/photo_1.jpg', Scene);
      //   let newMaterial = new BABYLON.StandardMaterial('newMaterial', Scene);
      //   newMaterial.diffuseTexture = newTexture;
      //   tempMesh.material = newMaterial;
      //   console.log('Меш с новой текстурой:', tempMesh);
      // } else {
      //   console.log('Меш не найден в загруженной модели.');
      // }
      // }
    });
  }
});

function animMoveCamera(PosCoors, LookAtCoors, CurPos) {
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