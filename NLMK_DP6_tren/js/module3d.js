/*----------TODO----------------------------------------------------
Пусть в канвасе будет постоянно изменяться текст, будем следить за этим на мониторе
--------------------------------------------------------------------
Cделать выбор для клика по разным жлементам на 3Д виде
Пока реализован выбор между объектами указанными в наборе действий
В релизной версии изменить на все элементы, на которые можно нажать
-----------------------------------------------------------------
сделать 2 варианта замены текстуры на лампочках, прогрессбарах: канвас и смещение текстуры
const texture = new THREE.CanvasTexture(ctx.canvas);
const material = new THREE.MeshBasicMaterial({
  map: texture,
});
----------------------------------------------------------
Создать уникальные материалы для каждого меша
*/
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import Stats from 'three/addons/stats.module.js'
//import { SVGRenderer } from 'three/addons/renderers/SVGRenderer.js';

if (trenWorkObj.dev === true) {
  trenWorkObj.perfomance = new Stats();
  document.body.appendChild(trenWorkObj.perfomance.dom);
}

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('div[model3D]')) {
    const total3DModelsWeight = { Pult: '13637846' };
    let obj3dSup = { cameras: [], scenes: [], renderers: [], controls: [] };
    trenWorkObj.active3dPosition = 0;
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
    loaderGLTF.load(`media/models/${document.querySelector('div[model3D]').getAttribute('model3D')}.glb`, (gltf) => {
      // loaderGLTF.load(`media/models/${document.querySelector('div[model3D]').getAttribute('model3D')}.gltf`, (gltf) => {
      scene.add(gltf.scene);
      let _scale = 5000;
      gltf.scene.scale.set(_scale, _scale, _scale);
      gltf.scene.position.set(0, 3, 4.7);
      // gltf.scene.position.set(0, 0, 0);
      gltf.scene.layers.set(1);
      trenWorkObj.mainModel = gltf.scene;
      animate();
      Array.from(document.querySelectorAll('.spin-loader')).forEach((Element, Index) => {
        Element.remove();
        document.querySelectorAll('.model3D-window')[Index].style.top = '0px';
      })

      let unicMatArr = [];
      gltf.scene.children.forEach((Element) => {
        if (unicMatArr.indexOf(Element.children[0].material) === -1) unicMatArr.push(Element.children[0].material);
        else {
          let clonedMaterial = Element.children[0].material.clone();
          Element.children[0].material = clonedMaterial;
        }
        if (Element.children[0].material)
          Element.children[0].startMaterialColor = { r: Element.children[0].material.color.r, g: Element.children[0].material.color.g, b: Element.children[0].material.color.b }
        // if (Element.children[0].name && Element.children[0].name === 'Display_bend') {
        //   trenWorkObj.tempMonitor = Element.children[0];
        //   const img = new Image();
        //   img.src = 'data:image/svg+xml,' + encodeURIComponent(new XMLSerializer().serializeToString(document.querySelector('object').contentDocument.querySelector('svg')));
        //   img.onload = function () {
        //     const material = new THREE.MeshBasicMaterial({ map: createSchemeTexture(img) });
        //     Element.children[0].material = material;
        //     Element.children[0].material.map.offset.y = 0.03;
        //   };
        // }
      });
    },
      (xhr) => {
        let maxWeight = 1;
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
      if (trenWorkObj.dev === true) trenWorkObj.perfomance.begin();
      if (obj3dSup.renderers.length > 0) {
        obj3dSup.renderers.forEach((Element, Index) => {
          Element.render(scene, obj3dSup.cameras[Index]);
        })
      }
      scene.children.forEach((Element) => {
        if (Element.name && Element.name.indexOf('playerPosition_') !== -1)
          if (Element.name.indexOf(trenWorkObj.active3dPosition) !== -1 && Element.material.opacity !== 1)
            Element.material.opacity = 1;
      })
      if (trenWorkObj.dev === true) trenWorkObj.perfomance.end();
      requestAnimationFrame(animate);
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
        //           obj3dSup.cameras[1].position.set(tempCoorDiv.children[0].value, tempCoorDiv.children[1].value, tempCoorDiv.children[2].value);
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
        //           obj3dSup.cameras[1].lookAt(tempCoorDiv.children[4].value, tempCoorDiv.children[5].value, tempCoorDiv.children[6].value);
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
            sphereArr[i].material.opacity = (raycaster.intersectObject(sphereArr[i]).length > 0 || i === trenWorkObj.active3dPosition) ? 1 : 0.4;
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
              obj3dSup.cameras[1].position.set(-4.1, 3.7, 2.2);
              obj3dSup.cameras[1].lookAt(-4.1, 1.5, 0.4);
              // obj3dSup.cameras[1].position.set(0, 5, 6);
              // obj3dSup.cameras[1].lookAt(0, 5, 4);
            }
            if (mouseoverSphere.name.indexOf('1') !== -1) {
              obj3dSup.cameras[1].position.set(6.4, 3.7, 2.2);
              obj3dSup.cameras[1].lookAt(6.4, 1.5, 0.4);
            }
            if (mouseoverSphere.name.indexOf('2') !== -1) {
              obj3dSup.cameras[1].position.set(10.2, 3.7, 2.2);
              obj3dSup.cameras[1].lookAt(10.2, 1.5, 0.4);
            }
            if (mouseoverSphere.name.indexOf('3') !== -1) {
              obj3dSup.cameras[1].position.set(13, 3.7, 4);
              obj3dSup.cameras[1].lookAt(14.25, 1.5, 2.7);
            }
            if (mouseoverSphere.name.indexOf('4') !== -1) {
              obj3dSup.cameras[1].position.set(-11.2, 2.5, 3.9);
              obj3dSup.cameras[1].lookAt(-12.1, 2.5, 3);
            }
            trenWorkObj.activeControlCamera = mouseoverSphere.name.indexOf('4') !== -1 ? false : true;
            trenWorkObj.active3dPosition = parseFloat(mouseoverSphere.name.substring(mouseoverSphere.name.indexOf('_') + 1, mouseoverSphere.name.length));
            mouseoverSphere.material.opacity = 1;
            obj3dSup.cameras[1].startEulerY = undefined;
          }
        });
      } else {
        camera = new THREE.PerspectiveCamera(90, Element.getBoundingClientRect().width / Element.getBoundingClientRect().height, 0.1, 1000);
        camera.layers.set(0);
        camera.position.set(-4.1, 3.7, 2.2);
        // camera.position.set(-11.2, 2.5, 3.9);
        // camera.lookAt(-12.1, 2.5, 3);
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

          let tempObj = trenWorkObj.mouseover3dObjectTren;
          let intersects = raycaster.intersectObjects(scene.children);
          if (trenWorkObj.trenEnded === false && trenWorkObj.waitingInput === true) {
            if (trenWorkObj.dev === true) {
              if (intersects.length > 0 && intersects[0].object.name) {
                if (tempDevName !== intersects[0].object.name) {
                  tempDevName = intersects[0].object.name;
                  // Наведение мышки на любой меш на сцене2
                  // console.log(tempDevName);
                }
              }
            }
            // trenWorkObj.mouseover3dObjectTren = intersects.length > 0 && intersects[0].object.name && intersects[0].object.name === trenWorkObj.trenActionArr[trenWorkObj.scenarioSelected].actions[trenWorkObj.activeAction].target ? intersects[0].object : undefined;
            trenWorkObj.mouseover3dObjectTren =
              intersects.length > 0 &&
                intersects[0].object.name &&
                trenWorkObj.active3dObjects.indexOf(intersects[0].object.name) !== -1 ?
                intersects[0].object : undefined;
            if (tempObj !== trenWorkObj.mouseover3dObjectTren && trenWorkObj.mouseover3dObjectTren !== undefined) {
              trenWorkObj.mouseover3dObjectTren.material.color.r = 5;
              trenWorkObj.mouseover3dObjectTren.material.color.g = 5;
              trenWorkObj.mouseover3dObjectTren.material.color.b = 0;
            } else if (tempObj !== trenWorkObj.mouseover3dObjectTren && tempObj !== undefined) {
              tempObj.material.color.r = tempObj.startMaterialColor.r;
              tempObj.material.color.g = tempObj.startMaterialColor.g;
              tempObj.material.color.b = tempObj.startMaterialColor.b;
            }
            document.querySelector('.game-view').style.cursor = trenWorkObj.mouseover3dObjectTren === undefined ? 'move' : 'pointer';
          }
        });

        renderer.domElement.addEventListener('mousedown', (e) => {
          if (trenWorkObj.mouseover3dObjectTren !== undefined) {
            document.querySelector('.game-view').style.cursor = 'move';
            trenWorkObj.mouseover3dObjectTren.material.color.r = trenWorkObj.mouseover3dObjectTren.startMaterialColor.r;
            trenWorkObj.mouseover3dObjectTren.material.color.g = trenWorkObj.mouseover3dObjectTren.startMaterialColor.g;
            trenWorkObj.mouseover3dObjectTren.material.color.b = trenWorkObj.mouseover3dObjectTren.startMaterialColor.b;
            // trenWorkObj.mouseover3dObjectTren = undefined;
          } else {
            if (trenWorkObj.activeControlCamera === true) controls.lock();
          }

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

    
    let _colors = {
      0: "rgb(237 0 0)",
      1500: "rgb(14 69 249)",
      3000: "rgb(187 118 158)",
      4500: "rgb(83 203 190)",
      6000: "rgb(46 157 42)",
    }
    let _pos = {
      0: 0.9,
      1500: 0.1,
      3000: 0.3,
      4500: 0.5,
      6000: 0.7,
    }
    let _timer = 0;


    let shemeSVG = document.getElementById("S1");
    let svg = shemeSVG.contentDocument;
   
    //let mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.3), new THREE.MeshBasicMaterial({ map: tempTexture }));
    let mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.3), SwapMaterial());
    mesh.position.set(-4, 3.6, 1.85);
    
    scene.add(mesh);
    console.log(mesh);


    document.getElementById("A1").addEventListener("click", (e) => {
      let img = new Image();
      console.log(img.complete);
      let svgData = (new XMLSerializer()).serializeToString(svg);
      img.src = 'data:image/svg+xml,' + encodeURIComponent(svgData);// + "?" + Math.random();
      img.onload = function () {
        let tempTexture = new THREE.Texture(img);
        tempTexture.needsUpdate = true;
        mesh.material.map = tempTexture;
      }
    })

    document.getElementById("A2").addEventListener("click", (e) => {
      
    })
    document.getElementById("A3").addEventListener("click", (e) => {
      mesh.material.map.offset.x = 0.7;
    })

    function SwapMaterial() {
      let img = new Image();
      let svgData = (new XMLSerializer()).serializeToString(svg);
      img.src = 'data:image/svg+xml,' + encodeURIComponent(svgData);// + "?" + Math.random();
      img.onload = function () {
        let tempTexture = new THREE.Texture(img);
        tempTexture.needsUpdate = true;
        mesh.material.map = tempTexture;
        return tempTexture
      }
    }

    setInterval( ()=>{
      if (_timer == 7500) _timer = 0;
      // svg
      //svg = shemeSVG.contentDocument;
      let elements = svg.getElementsByClassName("fil28");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.fill = _colors[_timer];
      }
      // mesh
      SwapMaterial();
      //mesh.material.map.offset.x = _pos[_timer];     
      _timer += 1500;
    }, 1500)

    return;   

  }

  
  
})

function createSchemeTexture(Img) {
  const texture = new THREE.Texture(Img);
  texture.needsUpdate = true;
  texture.flipY = false;
  return texture;
}


