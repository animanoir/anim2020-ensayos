//Inicializa parámetros necesarios para la ejecución del programa.
console.info('intro.js corriendo con Three.js versión ' + THREE.REVISION + '...');


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth, window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var colorFondo = new THREE.Color(0x000000);

var axes = new THREE.AxesHelper(20);
scene.add(axes);

renderer.setSize(window.innerWidth, window.innerHeight);

// Figuras
var cubeGeometry = new THREE.SphereGeometry(5, 32, 32);
var cubeMaterial = new THREE.MeshBasicMaterial({
  color: 'white',
  wireframe: true
})
var sphere1 = new THREE.Mesh(cubeGeometry, cubeMaterial);

var sphereGeometry2 = new THREE.SphereGeometry(5, 32, 32);
var sphere2 = new THREE.Mesh(sphereGeometry2, cubeMaterial);
sphere2.position.x = 20;

scene.add(sphere1, sphere2);



// add the output of the renderer to the html element
renderer.setClearColor(colorFondo);
document.getElementById("3canvas").appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  sphere1.rotation.x += 0.01;
  sphere1.rotation.y += 0.01;
  sphere2.rotation.x += 0.01;
  sphere2.rotation.y += 0.01;

  camera.position.z = 20;
  camera.rotation.z += 0.0003;

  renderer.render(scene, camera);
}

animate();
onResize();

// Responsividad
window.addEventListener('resize', onResize, false);

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function crearEsferas(){
  var sphereSize = Math.ceil((Math.random() * 7));
  var sphereGeometry = new THREE.Sphere(sphereSize, sphereSize, sphereSize);
  var sphereMaterial = new THREE.MeshLambertMaterial({color: 'white'});

  var sphere = new THREE.Mesg(sphereGeometry, sphereMaterial);
}