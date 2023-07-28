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
    '/assets/globe.min.gltf',
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
        gltf.scene.scale.set(6, 6, 6);

        gltf.scene.position.set(0, 0, 0);
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

const ambient_light = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambient_light);


const directional2 = new THREE.DirectionalLight(0xffffff, 0.3);
directional2.position.set(0, 1, -3);
scene.add(directional2)


//  z-index:1camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
scene.add(camera);
camera.position.x = 4;
camera.lookAt(0, 0, 0)



//renderer
const canvas = document.querySelector('#earth_canvas');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
});
renderer.setSize(window.innerWidth*1.2, window.innerHeight*1.2);
renderer.render(scene, camera);
//add anti aliasing
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));





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
            model.rotation.y = scroll_delta/500 + elapsedTime/20;
            // model.rotation.y += elapsedTime/ 200;
        // console.log(model.rotation)
    }



    renderer.render(scene, camera);
} 
animate();
