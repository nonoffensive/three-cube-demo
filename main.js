import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  DirectionalLight,
  Scene,
  WebGLRenderer
} from './node_modules/three/src/Three.js';

import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

const renderer = new WebGLRenderer();
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const geometry = new BoxGeometry(1, 1, 1);
//const material = new MeshBasicMaterial({color: 0x00ff00 });
const material = new MeshPhongMaterial(new Color(0x888888));
const cube = new Mesh(geometry, material);
const light = new DirectionalLight(new Color(0xffffff), 1);

scene.add(cube);
scene.add(light);

camera.position.z = 5;

light.position.z = 5;
light.position.x = 1;
light.position.y = 1;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();