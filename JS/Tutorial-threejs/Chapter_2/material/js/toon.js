window.addEventListener('load', init);

function init() {
    const width = 960;
    const height = 540;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myToonCanvas'),
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
    // ライティング非考慮
    // const material = new THREE.MeshBasicMaterial({ color: 0x6699ff });
    // ノーマル
    // const material = new THREE.MeshNormalMaterial();
    // Lambert
    // const material = new THREE.MeshLambertMaterial();
    // phong
    // const material = new THREE.MeshPhongMaterial({ color: 0x6699ff });
    // toon
    const material = new THREE.MeshToonMaterial({ color: 0x6699ff});
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const directionaLight = new THREE.DirectionalLight(0xffffff);
    directionaLight.position.set(1, 1, 1);
    scene.add(directionaLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
    scene.add(pointLight);
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 30);
    scene.add(pointLightHelper);

    tick();

    function tick() {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;

        pointLight.position.set(
            500 * Math.sin(Date.now() / 500),
            500 * Math.sin(Date.now() / 1000),
            500 * Math.cos(Date.now() / 500)
        );

        renderer.render(scene, camera);

        requestAnimationFrame(tick);
    }
}