window.addEventListener('load', init);

function init() {
    const width = 960;
    const height = 540;
    let rot = 0;
    let mouseX = 0;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas')
    });

    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const material = new THREE.MeshStandardMaterial({
        color: 0xff0000,
        side: THREE.DoubleSide
    });

    const geometry = new THREE.SphereGeometry(300, 30, 30);
    const earthMesh = new THREE.Mesh(geometry, material);
    scene.add(earthMesh);

    createStarField();

    function createStarField() {
        const geometry = new THREE.Geometry();
        for (let i = 0; i < 1000; i++) {
            geometry.vertices.push(
                new THREE.Vector3(
                    3000 * (Math.random() - 0.5),
                    3000 * (Math.random() - 0.5),
                    3000 * (Math.random() - 0.5)
                )
            );
        }

        const material = new THREE.PointsMaterial({
            size: 10,
            color: 0xFFFFFF
        });

        const mesh = new THREE.Points(geometry, material);
        scene.add(mesh);
    }

    document.addEventListener('mousemove', event => {
        mouseX = event.pageX;
    });

    tick();

    function tick() {
        const targetRot = (mouseX / window.innerWidth) * 360;
        rot += (targetRot - rot) * 0.02;

        const radian = (rot * Math.PI) / 180;
        camera.position.x = 1000 * Math.sin(radian);
        camera.position.z = 1000 * Math.cos(radian);

        camera.lookAt(new THREE.Vector3(0, 0, 0));
        earthMesh.rotation.y += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame(tick);
    }
}