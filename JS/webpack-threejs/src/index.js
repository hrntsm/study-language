const THREE = require('three');

window.addEventListener('load', init);

function init() {
    const width = 960;
    const height = 540;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas')
    });
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        45,
        width / height,
        1, 10000
    );
    camera.position.set(0, 0, 1000);

    const geometry = new THREE.BoxGeometry(500, 500, 500);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    tick();

    function tick() {
        requestAnimationFrame(tick);
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
}