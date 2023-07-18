import * as THREE from 'three'
// import '/css/three_js.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

const gltfloader =  new GLTFLoader();
const dracoloader = new DRACOLoader();

// Specify path to a folder containing WASM/JS decoding libraries.
dracoloader.setDecoderPath( 'node_modules/three/examples/jsm/libs/draco/' );

gltfloader.setDRACOLoader( dracoloader );
let model;
let loaded =0;
gltfloader.load(
    //resource url
    '../public/assets/coffee.min.gltf',
    //called when resource is loaded
    function(gltf){
        scene.add(gltf.scene);
        console.log('loaded')
        model = gltf.scene.children[0];
        loaded = 1;
        gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
        gltf.scene.scale.set(0.6, 0.6, 0.6)
    },
    //called when loading is in progresses
    function(xhr){
        console.log((xhr.loaded/xhr.total*100) + '% loaded')
    },
    function (error){
        console.log('An error happened')
    }

)



//scene
const scene = new THREE.Scene();
scene.add(
    new THREE.AmbientLight(0xffffff, 0.5),
    new THREE.DirectionalLight(0xffffff, 0.5),
    new THREE.PointLight(0xffffff, 0.5)
    
)
//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
scene.add(camera);
camera.position.x = 25;
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
// const controls = new OrbitControls(camera, canvas);
// controls.target.set(0, 0, 0);
// controls.enableDamping = true;



//clock
const clock = new THREE.Clock();
//animation 
function animate() {   
    requestAnimationFrame(animate); 
    const elapsedTime = clock.getElapsedTime();
    //rotate the planet
    // planet.rotation.y = elapsedTime;

      
    //update controls
    // controls.update();

    if(loaded){
        model.rotation.y = elapsedTime;
    }



    renderer.render(scene, camera);
} 
animate();
