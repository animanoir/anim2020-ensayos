//Inicializa parámetros necesarios para la ejecución del programa.
function init() {
  console.info('intro.js corriendo con Three.js versión ' + THREE.REVISION + '...');

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth, window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();

  // Figuras
  var cubeGeometry = new THREE.BoxGeometry(6, 6, 6);
  var cubeMaterial = new THREE.MeshBasicMaterial({
    color: 'white',
    wireframe: true
  })
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  scene.add(cube);

  // Responsividad
  window.addEventListener('resize', onResize, false);
  function onResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // add the output of the renderer to the html element
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(new THREE.Color(0x000000));
  renderer.render(scene, camera);
  document.getElementById("3canvas").appendChild(renderer.domElement);

}

init();