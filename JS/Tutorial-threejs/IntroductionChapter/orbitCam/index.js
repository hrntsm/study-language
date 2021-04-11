window.addEventListener('load', init);

function init() {
    const width = 960;
    const height = 540;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas')
    });
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, 1000);

    const controls = new THREE.OrbirControls(camera);

    const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(300, 300, 300),
        new THREE.MeshNormalMaterial()
    );
    scene.add(mesh);

    tick();

    function tick() {
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
}