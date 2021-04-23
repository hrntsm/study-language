window.addEventListener('load', init);

function init() {
    const width = 960;
    const height = 540;

    const canvasElement = document.querySelector('#myTDSCanvas');
    const renderer = new THREE.WebGLRenderer({
        canvas: canvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
    camera.position.set(3, 3, 5);

    const controls = new THREE.OrbitControls(camera, canvasElement);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const plane2 = new THREE.GridHelper(6);
    scene.add(plane2);
    const plane = new THREE.AxesHelper(3);
    scene.add(plane);

    const loader = new THREE.TDSLoader();
    loader.setResourcePath('models/3ds/portalgun/textures/');
    loader.load('models/3ds/portalgun/portalgun.3ds', (object) => {
        scene.add(object);
    });

    tick();

    function tick() {
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
}