import * as THREE from 'three'
// import '/css/three_js.css'
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
    '/assets/coffee.min.gltf',
    //called when resource is loaded
    function(gltf){
        scene.add(gltf.scene);
        // console.log('loaded')
        model = gltf.scene.children[0];
        loaded = 1;
        gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
        gltf.scene.scale.set(0.6, 0.6, 0.6);

        gltf.scene.position.set(0, -3.5, 0);
        gltf.scene.rotation.x = -0.3;
        gltf.scene.rotation.y = -0.3;
        gltf.scene.rotation.z = -0.3;
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

const directional = new THREE.DirectionalLight(0xffffff, 0.5);
directional.position.set(0, -2, -3);
scene.add(directional)

const spotLight = new THREE.SpotLight(0xffffff, 0.5);
spotLight.position.set(0, -2, -3);
scene.add(spotLight)

const SpotLight2 = new THREE.SpotLight(0xffffff, 0.5);
SpotLight2.position.set(0, 2, -3);
scene.add(SpotLight2)

const PointLight = new THREE.PointLight(0xffffff, 0.5);
PointLight.position.set(5, 4, -8);
scene.add (PointLight)





//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
scene.add(camera);
camera.position.x = 26;
camera.lookAt(0, 0, 0)



//renderer
const canvas = document.querySelector('#cup-canvas');
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



//clock
const clock = new THREE.Clock();
//animation 
function animate() {   
    requestAnimationFrame(animate); 
    const elapsedTime = clock.getElapsedTime();
    //rotate the planet
    // planet.rotation.y = elapsedTime;

      
    //update controls
    controls.update();

    if(loaded){
        model.rotation.y = scroll_delta/600;
        model.rotation.z = scroll_delta/3000;
        model.rotation.x = -scroll_delta/3000;
    // console.log(model.rotation)
    }



    renderer.render(scene, camera);
} 
animate();
