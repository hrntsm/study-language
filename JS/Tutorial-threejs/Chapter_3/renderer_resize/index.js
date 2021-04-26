window.addEventListener('load', init);


function init() {
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas'),
        antialias: true,
    });

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 1.0);
    camera.position.set(0, 0, +1000);

    const geometry = new THREE.SphereGeometry(300, 30, 30);
    const material = new THREE.MeshBasicMaterial({ wireframe: true });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    tick();

    function tick() {
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }

    onResize();
    window.addEventListener('resize', onResize);

    function onResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
}