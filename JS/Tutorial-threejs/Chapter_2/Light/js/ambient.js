window.addEventListener('load', init);

function init() {
    const width = 960;
    const height = 540;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myAmbientCanvas')
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(20, 20, 20);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const meshFloor = new THREE.Mesh(
        new THREE.BoxGeometry(2000, 0.1, 2000),
        new THREE.MeshStandardMaterial({ color: 0x808080, roughness: 0.0 })
    );
    scene.add(meshFloor);

    const meshKnot = new THREE.Mesh(
        new THREE.TorusKnotGeometry(3, 1, 100, 16),
        new THREE.MeshStandardMaterial({ color: 0xaa0000, roughness: 0.0 })
    );
    meshKnot.position.set(0, 5, 0);
    scene.add(meshKnot);

    const light = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(light);

    tick();

    function tick() {
        meshKnot.rotation.x += 0.01;
        meshKnot.rotation.y += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame(tick);
    }
}