window.addEventListener('load', init);

function init() {
    const width = 960;
    const height = 540;

    const canvasElement = document.querySelector('#myVRMCanvas');
    const renderer = new THREE.WebGLRenderer({
        canvas: canvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
    camera.position.set(0, 3, -3);

    const controls = new THREE.OrbitControls(camera, canvasElement);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, 1, -1);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    const plane2 = new THREE.GridHelper(6);
    scene.add(plane2);
    const plane = new THREE.AxesHelper(3);
    scene.add(plane);

    const loader = new THREE.VRMLoader();
    loader.load('models/vrm/Alicia/AliciaSolid.vrm', (vrm) => {
        const model = vrm.scene;
        scene.add(model);
    });

    tick();

    function tick() {
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
}