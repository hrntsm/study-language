window.addEventListener('load', init);

function init() {
    const width = 960;
    const height = 540;
    let rot = 0;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas'),
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(100, 150, 500);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const plane = new THREE.GridHelper(600);
    scene.add(plane);
    const plane2 = new THREE.AxesHelper(300);
    scene.add(plane2);

    const group = new THREE.Group();
    scene.add(group);

    let targetMesh = new THREE.Mesh();

    for (let i = 0; i < 10; i++) {
        const material = i === 0 ? new THREE.MeshNormalMaterial() : new THREE.MeshBasicMaterial();
        const geometry = new THREE.SphereGeometry(30, 30, 30);
        const mesh = new THREE.Mesh(geometry, material);
        const radian = (i / 10) * Math.PI * 2;
        mesh.position.set(200 * Math.cos(radian), 0, 200 * Math.sin(radian));
        group.add(mesh);

        if (i === 0) {
            targetMesh = mesh;
        }
    }

    const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(50, 50, 0),
    ]);
    const line = new THREE.Line(geometry, new THREE.LineBasicMaterial());
    scene.add(line);

    tick();

    function tick() {
        group.rotation.x += 0.02;
        group.rotation.y += 0.01;

        const world = targetMesh.getWorldPosition(new THREE.Vector3());

        const posions = line.geometry.attributes.position.array;
        posions[0] = 0;
        posions[1] = 0;
        posions[2] = 0;
        posions[3] = world.x;
        posions[4] = world.y;
        posions[5] = world.z;
        line.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
}