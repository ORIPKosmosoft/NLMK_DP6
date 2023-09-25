import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


document.addEventListener('DOMContentLoaded', function() {
	if (document.querySelector('div[model3D]')) {
		let obj3dSup = { cameras: [], scenes: [], renderers: [], controls: [] };
		let active3dPosition = 0;
		Array.from(document.querySelectorAll('div[model3D]')).forEach((Element) => {
			const scene = new THREE.Scene();
			const light = new THREE.PointLight(0xffffff, 500);
			light.position.set(0, 10, 0);
			// TODO расположить 2 света
			scene.add(light);
			const ambientLight = new THREE.AmbientLight();
			scene.add(ambientLight);
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

				let sphereArr = [],
					mouseoverSphere;
				const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
				for (let i = 0; i < 4; i++) {
					const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.2 });
					const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
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
				const mouse = new THREE.Vector2();
				renderer.domElement.addEventListener('mousemove', () => {
					const canvasBounds = renderer.domElement.getBoundingClientRect();
					mouse.x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
					mouse.y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;
					raycaster.setFromCamera(mouse, camera);
					mouseoverSphere = undefined;
					for (let i = 0; i < 4; i++) {
						sphereArr[i].material.opacity = (raycaster.intersectObject(sphereArr[i]).length > 0 || i === active3dPosition) ? 1 : 0.2;
						if (raycaster.intersectObject(sphereArr[i]).length > 0) mouseoverSphere = sphereArr[i];
					}
				});
				renderer.domElement.addEventListener('click', (e) => {
					if (mouseoverSphere) {
						let tX = 14.25,
							tY = 1.5,
							tZ = 2.7;
						if (mouseoverSphere.name.indexOf('0') !== -1) {
							active3dPosition = 0;
							obj3dSup.cameras[1].position.set(-4.1, 3.7, 2.2);
							tX = -4.1, tY = 1.5, tZ = 0.4;
						}
						if (mouseoverSphere.name.indexOf('1') !== -1) {
							active3dPosition = 1;
							obj3dSup.cameras[1].position.set(6.4, 3.7, 2.2);
							tX = 6.4, tY = 1.5, tZ = 0.4;
						}
						if (mouseoverSphere.name.indexOf('2') !== -1) {
							active3dPosition = 2;
							obj3dSup.cameras[1].position.set(10.2, 3.7, 2.2);
							tX = 10.2, tY = 1.5, tZ = 0.4;
						}
						if (mouseoverSphere.name.indexOf('3') !== -1) {
							active3dPosition = 3;
							tX = 14.25, tY = 1.5, tZ = 2.7;
							obj3dSup.cameras[1].position.set(13, 3.7, 4);
						}
						obj3dSup.cameras[1].newLookAt = { x: tX, y: tY, z: tZ };
						obj3dSup.cameras[1].lookAtCoors = { x: tX, y: tY, z: tZ };
						obj3dSup.cameras[1].lookAt(tX, tY, tZ);
						obj3dSup.controls[1].target.set(tX, tY, tZ);
					}
				});
			} else {
				camera = new THREE.PerspectiveCamera(90, Element.getBoundingClientRect().width / Element.getBoundingClientRect().height, 0.1, 1000);
				controls = new OrbitControls(camera, renderer.domElement);

				camera.position.set(-4.1, 3.7, 2.2);
				camera.lookAtCoors = { x: -4.1, y: 1.5, z: 0.4 };
				camera.lookAt(camera.lookAtCoors.x, camera.lookAtCoors.y, camera.lookAtCoors.z);
				camera.updateProjectionMatrix();

				controls.target.set(camera.lookAtCoors.x, camera.lookAtCoors.y, camera.lookAtCoors.z);
				controls.update();
				controls.enabled = false;


				camera.mouseStartPx = {};
				camera.newLookAt = {};
				Object.assign(camera.newLookAt, camera.lookAtCoors);

				renderer.domElement.addEventListener('mousedown', (e) => {
					camera.mouseStartPx.x = e.clientX;
					camera.mouseStartPx.y = e.clientY;
				})
				renderer.domElement.addEventListener('mouseup', (e) => {
					camera.mouseStartPx = {};
				})
				renderer.domElement.addEventListener('mouseout', (e) => {
					camera.mouseStartPx = {};
				})
				renderer.domElement.addEventListener('mousemove', (e) => {
					if (camera.mouseStartPx.x) {
						camera.newLookAt.x += (e.clientX - camera.mouseStartPx.x) / 10000;
						if (camera.newLookAt.x > camera.lookAtCoors.x + 1) {
							camera.newLookAt.x = camera.lookAtCoors.x + 1;
							camera.mouseStartPx.x = e.clientX;
						}
						if (camera.newLookAt.x < camera.lookAtCoors.x - 1) {
							camera.newLookAt.x = camera.lookAtCoors.x - 1;
							camera.mouseStartPx.x = e.clientX;
						}
						camera.newLookAt.y -= (e.clientY - camera.mouseStartPx.y) / 10000;
						if (camera.newLookAt.y > camera.lookAtCoors.y + 0.6) {
							camera.newLookAt.y = camera.lookAtCoors.y + 0.6;
							camera.mouseStartPx.y = e.clientY;
						}
						if (camera.newLookAt.y < camera.lookAtCoors.y - 0.8) {
							camera.newLookAt.y = camera.lookAtCoors.y - 0.8;
							camera.mouseStartPx.y = e.clientY;
						}
						camera.lookAt(camera.newLookAt.x, camera.newLookAt.y, camera.lookAtCoors.z);
						controls.target.set(camera.newLookAt.x, camera.newLookAt.y, camera.lookAtCoors.z);
					}
				})
			}

			obj3dSup.cameras.push(camera)
			obj3dSup.renderers.push(renderer)
			obj3dSup.scenes.push(scene)
			obj3dSup.controls.push(controls)

			// if (camera.isPerspectiveCamera === true) {
			// 	document.querySelector('.container-3D').children[3].addEventListener('click', (e) => {
			// 		let tempVals = {
			// 			x: parseFloat(document.querySelector('.container-3D').children[0].value),
			// 			y: parseFloat(document.querySelector('.container-3D').children[1].value),
			// 			z: parseFloat(document.querySelector('.container-3D').children[2].value),
			// 		}
			// 		camera.position.set(tempVals.x, tempVals.y, tempVals.z);
			// 		camera.updateProjectionMatrix();

			// 	})
			// 	document.querySelector('.container-3D').children[7].addEventListener('click', (e) => {
			// 		let tempVals = {
			// 			x: parseFloat(document.querySelector('.container-3D').children[4].value),
			// 			y: parseFloat(document.querySelector('.container-3D').children[5].value),
			// 			z: parseFloat(document.querySelector('.container-3D').children[6].value),
			// 		}
			// 		controls.target.set(tempVals.x, tempVals.y, tempVals.z);
			// 		controls.update();
			// 		camera.updateProjectionMatrix();

			// 		// updateCameraRotation(parseFloat(document.querySelector('.container-3D').children[4].value));
			// 		// function updateCameraRotation(deg) {
			// 		// 	let cameraAngle = THREE.MathUtils.degToRad(deg);
			// 		// 	camera.rotation.x = cameraAngle;
			// 		// 	camera.updateProjectionMatrix();
			// 		// }

			// 	})
			// 	document.querySelector('.container-3D').children[11].addEventListener('click', (e) => {
			// 		let tempVals = {
			// 			x: parseFloat(document.querySelector('.container-3D').children[8].value),
			// 			y: parseFloat(document.querySelector('.container-3D').children[9].value),
			// 			z: parseFloat(document.querySelector('.container-3D').children[10].value),
			// 		}
			// 		controls.target.set(tempVals.x, tempVals.y, tempVals.z);
			// 		controls.update();
			// 		camera.lookAt(tempVals.x, tempVals.y, tempVals.z);
			// 		camera.updateProjectionMatrix();
			// 	})
			// }



			var loaderGLTF = new GLTFLoader();
			loaderGLTF.load(`media/models/${Element.getAttribute('model3D')}.gltf`, (gltf) => {
					scene.add(gltf.scene);
					let _scale = 50;
					gltf.scene.scale.set(_scale, _scale, _scale);
					gltf.scene.position.set(0, 3, 4.7)
					animate();
				},
				(xhr) => {
					// console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
				},
				(error) => {
					console.log(error)
				}
			)

			function animate(TempBool) {
				requestAnimationFrame(animate);
				renderer.render(scene, camera);
				scene.children.forEach((Element) => {
					if (Element.name && Element.name.indexOf('playerPosition_') !== -1)
						if (Element.name.indexOf(active3dPosition) !== -1 && Element.material.opacity !== 1)
							Element.material.opacity = 1;
				})
			}
		})
	}
})
