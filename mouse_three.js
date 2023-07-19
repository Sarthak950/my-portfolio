import * as THREE from 'three'
import './public/css/three_js.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

const gltfloader =  new GLTFLoader();
const dracoloader = new DRACOLoader();

// Specify path to a folder containing WASM/JS decoding libraries.
dracoloader.setDecoderPath( '/draco/' );

gltfloader.setDRACOLoader( dracoloader );
let model;
let loaded =0;
gltfloader.load(
    //resource url
    '/assets/mouse.min.gltf',
    //called when resource is loaded
    function(gltf){
        scene.add(gltf.scene);
        console.log('loaded mouse')
        model = gltf.scene.children[0];
        loaded = 1;
        gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
        gltf.scene.scale.set(0.6, 0.6, 0.6);

        gltf.scene.position.set(0, -3.5, 0);
        gltf.scene.rotation.x = 0.8;
        gltf.scene.rotation.y = -0.3;
        gltf.scene.rotation.z = +0.1;
    },
    function(xhr){
        // console.log((xhr.loaded/xhr.total * 100) + '% loaded')
    },
    //called when loading is in progresses
    function (error){
        console.log(error)
        console.log('An error happened')
    }

)



//scene
const scene = new THREE.Scene();



// scene.add(new THREE.AmbientLight(0xfffff, 0.5))
const directional = new THREE.DirectionalLight(0xffffff, 0.5);
directional.position.set(0, 2, -3);
scene.add(directional)
const directional2 = new THREE.DirectionalLight(0xffffff, 0.5);
directional2.position.set(0, 2, +3);
scene.add(directional2)

const spotLight = new THREE.SpotLight(0xffffff, 0.5);
spotLight.position.set(0, -2, -3);
scene.add(spotLight)

const SpotLight2 = new THREE.SpotLight(0xffffff, 0.5);
SpotLight2.position.set(0, 2, -3);
scene.add(SpotLight2)

//camera
const canvas = document.querySelector('#mouse-canvas');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
scene.add(camera);
camera.position.x = 26;
camera.lookAt(0, 0, 0)


//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
});
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
renderer.render(scene, camera);
//add anti aliasing
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


//controls
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0, 0);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;


camera.rotation.x = -6.162975822039155e-33
camera.rotation.y = 1.57
camera.rotation.z = 0

camera.rotation.x = -6.162975822039155e-33
camera.rotation.y = 1.57
camera.rotation.z = 0
camera.rotation.x = -6.162975822039155e-33
camera.rotation.y = 1.57
camera.rotation.z = 0

//clock
const clock = new THREE.Clock();
//animation 
function animate() {   
    requestAnimationFrame(animate); 
    const elapsedTime = clock.getElapsedTime();


    
      
    //update controls
    controls.update();
    //
    if(loaded){
        model.rotation.y = -scroll_delta/1000 + Math.PI/2;
    } 



    renderer.render(scene, camera);
} 
animate();
