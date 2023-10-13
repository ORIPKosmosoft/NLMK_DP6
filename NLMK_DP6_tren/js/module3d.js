/*----------TODO----------------------------------------------------
Пусть в канвасе будет постоянно изменяться текст, будем следить за этим на мониторе
Или в IMG
--------------------------------------------------------------------
Сделать переход по карте по объектам
----------------------------------------------------------
Создать уникальные материалы для каждого меша
*/
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import Stats from 'three/addons/stats.module.js'

if (devHelper.dev.enable === true) {
  devHelper.dev.perfomance = new Stats();
  document.body.appendChild(devHelper.dev.perfomance.dom);
}

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('div[model3D]')) {
    const total3DModelsWeight = { Console_BVNK: '6476388' };
    devHelper.model3DVals = { cameras: [], scenes: [], renderers: [], controls: [] };
    devHelper.model3DVals.currentPosition = 0;
    const scene = new THREE.Scene();
    const light1 = new THREE.PointLight(0xffffff, 400);
    light1.position.set(7, 10, 0);
    const light2 = new THREE.PointLight(0xffffff, 400);
    light2.position.set(-7, 10, 0);
    scene.add(light1);
    scene.add(light2);
    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);

    let loaderGLTF = new GLTFLoader();
    // loadGLB(loaderGLTF, document.querySelector('div[model3D]').getAttribute('model3D'), scene);
    
    Array.from(document.querySelectorAll('div[model3D]')).forEach((Element) => {
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(Element.getBoundingClientRect().width, Element.getBoundingClientRect().height);
      Element.append(renderer.domElement);
      let camera, controls;

      if (Element.parentElement.classList.contains('model-map-window')) {
        camera = new THREE.OrthographicCamera(
          Element.getBoundingClientRect().width / -43,
          Element.getBoundingClientRect().width / 43,
          Element.getBoundingClientRect().height / 43,
          Element.getBoundingClientRect().height / -43,
          1,
          10000);
        camera.position.set(2.5, 5.5, 7.3);
        camera.updateProjectionMatrix();
        camera.lookAt(2.5, 3, 0);
        camera.updateProjectionMatrix();
        camera.rotation.x = THREE.MathUtils.degToRad(-35);
        camera.updateProjectionMatrix();
        camera.layers.enableAll();

        let sphereArr = [], sphereCount = 5,
          mouseoverSphere;
        const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
        for (let i = 0; i < sphereCount; i++) {
          const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.4 });
          const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
          sphere.layers.set(1);
          scene.add(sphere);
          if (i === 0)
            sphere.position.set(-4.1, 0, 3.5);
          else if (i === 1)
            sphere.position.set(6.4, 0, 3.5);
          else if (i === 2)
            sphere.position.set(10.2, 0, 3.5);
          else if (i === 3)
            sphere.position.set(12, 0, 4);
          else if (i === 4)
            sphere.position.set(-12, 2.5, 3);
          // else if (i === 5)
          //   sphere.position.set(-12, 2.5, 3.5);
          sphere.name = 'playerPosition_' + i;
          sphere.touchableWithCamera = true;
          sphereArr.push(sphere);
        }
        //---------------------------------------------------------------------------------
        // Создание элемента управления камерой
        // let tempCoorDiv = document.createElement('div');
        // tempCoorDiv.style = `
        //   position: absolute;
        //   top: ${document.querySelector('.model-window').getBoundingClientRect().top}px;
        //   left: 0px;
        //   width: 50%;
        //   height: 11%;
        //   display: flex;
        //   flex-flow: column nowrap;
        //   place-content: center;
        //   flex-direction: column;
        //   flex-wrap: wrap;
        //   align-content: center;
        //   `;
        // for (let a = 0; a < 2; a++) {
        //   if (a === 0) {
        //     for (let i = 0; i < 3; i++) {
        //       let tempInput = document.createElement('input');
        //       tempInput.type = 'number';
        //       tempInput.style.width = '11%';
        //       tempInput.value = 0;
        //       tempCoorDiv.append(tempInput);
        //       if (i === 2) {
        //         let tempBtn = document.createElement('button');
        //         tempBtn.innerText = 'Примернить положение';
        //         tempBtn.style.width = '11%';
        //         tempInput.style.width = '11%';
        //         tempCoorDiv.append(tempBtn);
        //         tempBtn.addEventListener('click', (e) => {
        //           devHelper.model3DVals.cameras[1].position.set(tempCoorDiv.children[0].value, tempCoorDiv.children[1].value, tempCoorDiv.children[2].value);
        //         })
        //       }
        //     }
        //   } else if (a === 1) {
        //     for (let i = 0; i < 3; i++) {
        //       let tempInput = document.createElement('input');
        //       tempInput.type = 'number';
        //       tempInput.style.width = '11%';
        //       tempInput.value = 0;
        //       tempCoorDiv.append(tempInput);
        //       if (i === 2) {
        //         let tempBtn = document.createElement('button');
        //         tempBtn.innerText = 'Примернить LookAt';
        //         tempBtn.style.width = '11%';
        //         tempCoorDiv.append(tempBtn);
        //         tempBtn.addEventListener('click', (e) => {
        //           devHelper.model3DVals.cameras[1].lookAt(tempCoorDiv.children[4].value, tempCoorDiv.children[5].value, tempCoorDiv.children[6].value);
        //         })
        //       }
        //     }

        //   }
        // }
        // document.querySelector('.model-window').append(tempCoorDiv);
        //---------------------------------------------------------------------------------

        const raycaster = new THREE.Raycaster();
        raycaster.layers.set(1);
        const mouseVector = new THREE.Vector2();
        renderer.domElement.addEventListener('mousemove', (event) => {
          const canvasBounds = renderer.domElement.getBoundingClientRect();
          mouseVector.x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
          mouseVector.y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;
          raycaster.setFromCamera(mouseVector, camera);
          mouseoverSphere = undefined;
          for (let i = 0; i < sphereCount; i++) {
            sphereArr[i].material.opacity = (raycaster.intersectObject(sphereArr[i]).length > 0 || i === devHelper.model3DVals.currentPosition) ? 1 : 0.4;
            if (raycaster.intersectObject(sphereArr[i]).length > 0)
              mouseoverSphere = sphereArr[i];
          }
          document.querySelector('.model-map-window').style.cursor = mouseoverSphere === undefined ? 'default' : 'pointer';
        });
        renderer.domElement.addEventListener('click', (e) => {
          if (mouseoverSphere) {
            sphereArr.forEach((Element) => {
              Element.material.opacity = 0.4;
            })
            if (mouseoverSphere.name.indexOf('0') !== -1) {
              devHelper.model3DVals.cameras[1].position.set(-4.1, 3.7, 2.2);
              devHelper.model3DVals.cameras[1].lookAt(-4.1, 1.5, 0.4);
            }
            if (mouseoverSphere.name.indexOf('1') !== -1) {
              devHelper.model3DVals.cameras[1].position.set(6.4, 3.7, 2.2);
              devHelper.model3DVals.cameras[1].lookAt(6.4, 1.5, 0.4);
            }
            if (mouseoverSphere.name.indexOf('2') !== -1) {
              devHelper.model3DVals.cameras[1].position.set(10.2, 3.7, 2.2);
              devHelper.model3DVals.cameras[1].lookAt(10.2, 1.5, 0.4);
            }
            if (mouseoverSphere.name.indexOf('3') !== -1) {
              devHelper.model3DVals.cameras[1].position.set(13, 3.7, 4);
              devHelper.model3DVals.cameras[1].lookAt(14.25, 1.5, 2.7);
            }
            if (mouseoverSphere.name.indexOf('4') !== -1) {
              devHelper.model3DVals.cameras[1].position.set(-11.2, 2.5, 3.9);
              devHelper.model3DVals.cameras[1].lookAt(-12.1, 2.5, 3);
            }
            devHelper.model3DVals.activeControlCamera = mouseoverSphere.name.indexOf('4') !== -1 ? false : true;
            devHelper.model3DVals.currentPosition = parseFloat(mouseoverSphere.name.substring(mouseoverSphere.name.indexOf('_') + 1, mouseoverSphere.name.length));
            mouseoverSphere.material.opacity = 1;
            devHelper.model3DVals.cameras[1].startEulerY = undefined;
          }
        });
      } else {
        camera = new THREE.PerspectiveCamera(90, Element.getBoundingClientRect().width / Element.getBoundingClientRect().height, 0.1, 1000);
        camera.layers.set(0);
        camera.position.set(-4.1, 3.7, 2.2);
        camera.lookAtCoors = { x: -4.1, y: 1.5, z: 0.4 };
        camera.lookAt(camera.lookAtCoors.x, camera.lookAtCoors.y, camera.lookAtCoors.z);
        camera.updateProjectionMatrix();
        camera.mouseStartPx = {};
        camera.newLookAt = {};
        Object.assign(camera.newLookAt, camera.lookAtCoors);

        controls = new PointerLockControls(camera, renderer.domElement);
        controls.maxPolarAngle = 2.7;
        controls.minPolarAngle = 2.2;

        const raycaster = new THREE.Raycaster();
        raycaster.layers.set(0);
        const mouseVector = new THREE.Vector2();
        let tempDevName = undefined;
        renderer.domElement.addEventListener('mousemove', (event) => {
          const canvasBounds = renderer.domElement.getBoundingClientRect();
          mouseVector.x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
          mouseVector.y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;
          raycaster.setFromCamera(mouseVector, camera);

          let tempObj = devHelper.model3DVals.mouseoverMesh;
          let intersects = raycaster.intersectObjects(scene.children);
          if (devHelper.trenVals.ended === false && devHelper.trenVals.waitingInput === true) {
            if (devHelper.dev.enable === true) {
              if (intersects.length > 0 && intersects[0].object.name) {
                if (tempDevName !== intersects[0].object.name) {
                  tempDevName = intersects[0].object.name;
                  // Наведение мышки на любой меш на сцене2
                }
              }
            }
            devHelper.model3DVals.mouseoverMesh =
              intersects.length > 0 &&
                intersects[0].object.name &&
                devHelper.model3DVals.active3dObjects.indexOf(intersects[0].object.name) !== -1 ?
                intersects[0].object : undefined;
            if (tempObj !== devHelper.model3DVals.mouseoverMesh && devHelper.model3DVals.mouseoverMesh !== undefined) {
              devHelper.model3DVals.mouseoverMesh.material.color.r = 5;
              devHelper.model3DVals.mouseoverMesh.material.color.g = 5;
              devHelper.model3DVals.mouseoverMesh.material.color.b = 0;
            } else if (tempObj !== devHelper.model3DVals.mouseoverMesh && tempObj !== undefined) {
              tempObj.material.color.r = tempObj.startMaterialColor.r;
              tempObj.material.color.g = tempObj.startMaterialColor.g;
              tempObj.material.color.b = tempObj.startMaterialColor.b;
            }
            document.querySelector('.game-view').style.cursor = devHelper.model3DVals.mouseoverMesh === undefined ? 'move' : 'pointer';
          }
        });

        renderer.domElement.addEventListener('mousedown', (e) => {
          if (devHelper.model3DVals.mouseoverMesh !== undefined) {
            document.querySelector('.game-view').style.cursor = 'move';
            devHelper.model3DVals.mouseoverMesh.material.color.r = devHelper.model3DVals.mouseoverMesh.startMaterialColor.r;
            devHelper.model3DVals.mouseoverMesh.material.color.g = devHelper.model3DVals.mouseoverMesh.startMaterialColor.g;
            devHelper.model3DVals.mouseoverMesh.material.color.b = devHelper.model3DVals.mouseoverMesh.startMaterialColor.b;
          } else {
            if (devHelper.model3DVals.activeControlCamera === true) controls.lock();
          }

        });
        renderer.domElement.addEventListener('mouseup', () => {
          controls.unlock();
        });
        renderer.domElement.addEventListener('mouseout', () => {
          controls.unlock();
        });
      }

      devHelper.model3DVals.cameras.push(camera);
      devHelper.model3DVals.renderers.push(renderer);
      devHelper.model3DVals.scenes.push(scene);
      devHelper.model3DVals.controls.push(controls);
    })

    //---------------------------------------------------------------------------------
    // замена текстуры материала на мониторе
    // SwapMaterial();  
    // function SwapMaterial() {
    //   let img = new Image();
    //   let svgData = (new XMLSerializer()).serializeToString(document.getElementById("S1").contentDocument);
    //   img.src = 'data:image/svg+xml,' + encodeURIComponent(svgData);
    //   img.onload = function () {
    //     let tempTexture = new THREE.Texture(img);
    //     tempTexture.needsUpdate = true;
    //     ЗАМЕНИТЬ_МЕШ.material.map = tempTexture;
    //     return tempTexture
    //   }
    // }
    //---------------------------------------------------------------------------------
  }
})






function loadGLB(Loader, Name, Scene) {
  Loader.load(`media/models/${Name}.glb`, (gltf) => {
    if(devHelper.dev.enable === true) console.log(gltf);
    Scene.add(gltf.scene);
    let _scale = 1;
    gltf.scene.scale.set(_scale, _scale, _scale);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.layers.set(1);
    devHelper.model3DVals.mainModel = gltf.scene;
    if (Name === 'Room') {
      animate();
      loadGLB(Loader, 'Room_Clock', Scene);
    }
    if (Name === 'Room_Clock') loadGLB(Loader, 'Room_Group_000', Scene); // -5fps много весит, ненужно
    if (Name === 'Room_Group_000') loadGLB(Loader, 'Room_Group_001', Scene);
    if (Name === 'Room_Group_001') loadGLB(Loader, 'Room_Lightning', Scene);
    if (Name === 'Room_Lightning') loadGLB(Loader, 'Room_Vent', Scene); // почему так много весит - облегчить
    if (Name === 'Room_Vent') loadGLB(Loader, 'Table', Scene);
    if (Name === 'Table') loadGLB(Loader, 'TV_panels', Scene);
    if (Name === 'TV_panels') loadGLB(Loader, 'ComputersGroup00', Scene);
    if (Name === 'ComputersGroup00') loadGLB(Loader, 'ComputersGroup01', Scene); //-5fps
    if (Name === 'ComputersGroup01') loadGLB(Loader, 'ComputersGroup02', Scene);
    if (Name === 'ComputersGroup02') loadGLB(Loader, 'ComputersGroup03', Scene);
    // if (Name === 'ComputersGroup03') loadGLB(Loader, 'Console_BVNK', Scene); // баги с текстурами
    // if (Name === 'ComputersGroup03') loadGLB(Loader, 'Console_BZU', Scene); // лаги
    // if (Name === 'ComputersGroup03') loadGLB(Loader, 'Console_DP6', Scene); // баги с текстурами
    // if (Name === 'ComputersGroup03') loadGLB(Loader, 'Console_UGKS', Scene); // баги с текстурами
    // if (Name === 'ComputersGroup03') loadGLB(Loader, 'Console_PSODP6', Scene);
    if (Name === 'ComputersGroup03') loadGLB(Loader, 'Joystick', Scene);
    if (Name === 'Joystick') loadGLB(Loader, 'Mikrofon', Scene);
    if (Name === 'Mikrofon') loadGLB(Loader, 'Telephone', Scene);
    
    Array.from(document.querySelectorAll('.spin-loader')).forEach((Element, Index) => {
      Element.remove();
      document.querySelectorAll('.model3D-window')[Index].style.top = '0px';
    })

    // let unicMatArr = [];
    // gltf.scene.children.forEach((Element) => {
    //   if (unicMatArr.indexOf(Element.children[0].material) === -1) unicMatArr.push(Element.children[0].material);
    //   else {
    //     let clonedMaterial = Element.children[0].material.clone();
    //     Element.children[0].material = clonedMaterial;
    //   }
    //   if (Element.children[0].material)
    //     Element.children[0].startMaterialColor = { r: Element.children[0].material.color.r, g: Element.children[0].material.color.g, b: Element.children[0].material.color.b }
    //   // if (Element.children[0].name && Element.children[0].name === 'Display_bend') {
    //   //   devHelper.tempMonitor = Element.children[0];
    //   //   const img = new Image();
    //   //   img.src = 'data:image/svg+xml,' + encodeURIComponent(new XMLSerializer().serializeToString(document.querySelector('object').contentDocument.querySelector('svg')));
    //   //   img.onload = function () {
    //   //     const material = new THREE.MeshBasicMaterial({ map: createSchemeTexture(img) });
    //   //     Element.children[0].material = material;
    //   //     Element.children[0].material.map.offset.y = 0.03;
    //   //   };
    //   // }
    // });
  },
    (xhr) => {
      // let maxWeight = 1;
      // for (let key in total3DModelsWeight) {
      //   if (key == document.querySelector('div[model3D]').getAttribute('model3D'))
      //     maxWeight = total3DModelsWeight[key];
      // }
      // let tempLoad = ((xhr.loaded / (maxWeight === 0 ? xhr.total : maxWeight)).toFixed(2) * 100).toFixed(0);
      // Array.from(document.querySelectorAll('.spin-loader-text')).forEach((Element) => {
      //   Element.innerText = tempLoad;
      // })
    },
    (error) => {
      console.log(error)
    }
  )
}

function animate() {
  if (devHelper.dev.enable === true) devHelper.dev.perfomance.begin();
  if (devHelper.model3DVals.renderers.length > 0) {
    devHelper.model3DVals.renderers.forEach((Element, Index) => {
      Element.render(devHelper.model3DVals.scenes[Index], devHelper.model3DVals.cameras[Index]);
    })
  }
  devHelper.model3DVals.scenes[0].children.forEach((Element) => {
    if (Element.name && Element.name.indexOf('playerPosition_') !== -1)
      if (Element.name.indexOf(devHelper.model3DVals.currentPosition) !== -1 && Element.material.opacity !== 1)
        Element.material.opacity = 1;
  })
  if (devHelper.dev.enable === true) devHelper.dev.perfomance.end();
  requestAnimationFrame(animate);
}