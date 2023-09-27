/*----------TODO----------------------------------------------------
Нужно добавить trenWorkObj объект на главной 3Д сцене что под мышкой
--------------------------------------------------------------------
*/
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';


document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('div[model3D]')) {
    const total3DModelsWeight = { Pult: '13637846' };
    let obj3dSup = { cameras: [], scenes: [], renderers: [], controls: [] };
    let active3dPosition = 0;
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
    loaderGLTF.load(`media/models/${document.querySelector('div[model3D]').getAttribute('model3D')}.gltf`, (gltf) => {
      scene.add(gltf.scene);
      let _scale = 50;
      gltf.scene.scale.set(_scale, _scale, _scale);
      gltf.scene.position.set(0, 3, 4.7);
      gltf.scene.layers.set(1);
      animate();
      Array.from(document.querySelectorAll('.spin-loader')).forEach((Element, Index) => {
        Element.remove();
        document.querySelectorAll('.model3D-window')[Index].style.top = '0px';
      })
      gltf.scene.children[0].children.forEach((Element) => {
        if (Element.material)
          Element.startMaterialColor = { r: Element.material.color.r, g: Element.material.color.g, b: Element.material.color.b }
      })
    },
      (xhr) => {
        let maxWeight = 0;
        for (let key in total3DModelsWeight) {
          if (key == document.querySelector('div[model3D]').getAttribute('model3D'))
            maxWeight = total3DModelsWeight[key];
        }
        let tempLoad = ((xhr.loaded / (maxWeight === 0 ? xhr.total : maxWeight)).toFixed(2) * 100).toFixed(0);
        Array.from(document.querySelectorAll('.spin-loader-text')).forEach((Element) => {
          Element.innerText = tempLoad;
        })
      },
      (error) => {
        console.log(error)
      }
    )

    function animate() {
      requestAnimationFrame(animate);
      if (obj3dSup.renderers.length > 0) {
        obj3dSup.renderers.forEach((Element, Index) => {
          Element.render(scene, obj3dSup.cameras[Index]);
        })
      }
      scene.children.forEach((Element) => {
        if (Element.name && Element.name.indexOf('playerPosition_') !== -1)
          if (Element.name.indexOf(active3dPosition) !== -1 && Element.material.opacity !== 1)
            Element.material.opacity = 1;
      })
    }


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

        let sphereArr = [],
          mouseoverSphere;
        const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
        for (let i = 0; i < 4; i++) {
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
          sphere.name = 'playerPosition_' + i;
          sphere.touchableWithCamera = true;
          sphereArr.push(sphere);
        }

        const raycaster = new THREE.Raycaster();
        raycaster.layers.set(1);
        const mouseVector = new THREE.Vector2();
        renderer.domElement.addEventListener('mousemove', (event) => {
          const canvasBounds = renderer.domElement.getBoundingClientRect();
          mouseVector.x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
          mouseVector.y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;
          raycaster.setFromCamera(mouseVector, camera);
          mouseoverSphere = undefined;
          for (let i = 0; i < 4; i++) {
            sphereArr[i].material.opacity = (raycaster.intersectObject(sphereArr[i]).length > 0 || i === active3dPosition) ? 1 : 0.4;
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

              active3dPosition = 0;
              obj3dSup.cameras[1].position.set(-4.1, 3.7, 2.2);
              obj3dSup.cameras[1].lookAt(-4.1, 1.5, 0.4);
            }
            if (mouseoverSphere.name.indexOf('1') !== -1) {
              active3dPosition = 1;
              obj3dSup.cameras[1].position.set(6.4, 3.7, 2.2);
              obj3dSup.cameras[1].lookAt(6.4, 1.5, 0.4);
            }
            if (mouseoverSphere.name.indexOf('2') !== -1) {
              active3dPosition = 2;
              obj3dSup.cameras[1].position.set(10.2, 3.7, 2.2);
              obj3dSup.cameras[1].lookAt(10.2, 1.5, 0.4);
            }
            if (mouseoverSphere.name.indexOf('3') !== -1) {
              active3dPosition = 3;
              obj3dSup.cameras[1].position.set(13, 3.7, 4);
              obj3dSup.cameras[1].lookAt(14.25, 1.5, 2.7);
            }
            mouseoverSphere.material.opacity = 1;
            obj3dSup.cameras[1].startEulerY = undefined;
          }
        });
      } else {
        camera = new THREE.PerspectiveCamera(90, Element.getBoundingClientRect().width / Element.getBoundingClientRect().height, 0.1, 1000);
        camera.layers.set(0);
        // camera.layers.enableAll();
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
        renderer.domElement.addEventListener('mousemove', (event) => {
          const canvasBounds = renderer.domElement.getBoundingClientRect();
          mouseVector.x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
          mouseVector.y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;
          raycaster.setFromCamera(mouseVector, camera);

          let tempObj = trenWorkObj.mouseover3dObjectTren;
          let intersects = raycaster.intersectObjects(scene.children);
          trenWorkObj.mouseover3dObjectTren = intersects.length > 0 && intersects[0].object.name && intersects[0].object.name === trenWorkObj.trenActionArr[trenWorkObj.scenarioSelected].actions[trenWorkObj.activeAction].target ? intersects[0].object : undefined;
          if (tempObj !== trenWorkObj.mouseover3dObjectTren && trenWorkObj.mouseover3dObjectTren !== undefined) {
            trenWorkObj.mouseover3dObjectTren.material.color.r = 5;
            trenWorkObj.mouseover3dObjectTren.material.color.g = 5;
            trenWorkObj.mouseover3dObjectTren.material.color.b = 0;
          } else if (tempObj !== trenWorkObj.mouseover3dObjectTren && tempObj !== undefined) {
            tempObj.material.color.r = tempObj.startMaterialColor.r;
            tempObj.material.color.g = tempObj.startMaterialColor.g;
            tempObj.material.color.b = tempObj.startMaterialColor.b;
          }
          document.querySelector('.model-window').style.cursor = trenWorkObj.mouseover3dObjectTren === undefined ? 'move' : 'pointer';
        });

        renderer.domElement.addEventListener('mousedown', (e) => {
          // trenWorkObj.mouseover3dObject = undefined;

          controls.lock();
        });
        renderer.domElement.addEventListener('touchstart', (e) => {
          controls.lock();
        });
        renderer.domElement.addEventListener('mouseup', () => {
          controls.unlock();
        });
        renderer.domElement.addEventListener('mouseout', () => {
          controls.unlock();
        });
      }

      obj3dSup.cameras.push(camera)
      obj3dSup.renderers.push(renderer)
      obj3dSup.scenes.push(scene)
      obj3dSup.controls.push(controls)


    })
  }
})
