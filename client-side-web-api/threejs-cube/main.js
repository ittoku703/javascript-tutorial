const scene = new THREE.Scene();
// arguments:
// 1. 視野
// 2. アスペクト比
// 3. ニアプレーン
// 4. 遠方平面
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// redererはカメラで見たときに特定のシーンをレンダリングするオブジェクト
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let cube;

let loader = new THREE.TextureLoader();

loader.load('metal003.png', function (texture) {
  // 立方体の全ての側面に2x２の画像の繰り返しをラップさせる
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);

  // cubeを完成させる（geometryは形状、materialは外観）
  let geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
  let material = new THREE.MeshLambertMaterial({ map: texture, shading: THREE.FlatShading });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  draw();
});

// 照明を追加する
let light = new THREE.AmbientLight('rgb(255,255,255)');
scene.add(light);

let spotLight = new THREE.SpotLight('rgb(255,255,255)');
spotLight.position.set(100, 1000, 1000);
spotLight.castShadow = true;
scene.add(spotLight);

// cubeが回転するアニメーション
function draw() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);

  requestAnimationFrame(draw);
}
