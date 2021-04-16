window.addEventListener('load', init);

function init() {
    const width = 960;
    const height = 540;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#NoFogCanvas'),
        antialias: true,
        devicePixelRatio: window.devicePixelRatio
    });
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    const group = new THREE.Group();
    scene.add(group);
    const geometry = new THREE.BoxBufferGeometry(50, 50, 50);
    const material = new THREE.MeshStandardMaterial();

    for (let i = 0; i < 1000; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = (Math.random() - 0.5) * 2000;
        mesh.position.y = (Math.random() - 0.5) * 2000;
        mesh.position.z = (Math.random() - 0.5) * 2000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;

        group.add(mesh);
    }

    scene.add(new THREE.DirectionalLight(0xff0000, 2));
    scene.add(new THREE.AmbientLight(0x00ffff));

    tick();

    function tick() {
        group.rotateY(0.01);
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
}