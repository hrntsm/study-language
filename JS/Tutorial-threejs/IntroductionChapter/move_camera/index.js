window.addEventListener('load', init);

function init() {
    const width = 960;
    const height = 540;
    let rot = 0;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas')
    });

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        45,
        width / height
    );
    camera.position.set(0, 500, +1000);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const container = new THREE.Object3D();
    scene.add(container);

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
            color: 0xffffff
        });

        const mesh = new THREE.Points(geometry, material);
        scene.add(mesh);
    }

    tick();

    function tick() {
        rot += 0.5;
        const radian = (rot * Math.PI) / 180;
        camera.position.x = 1000 * Math.sin(radian);
        camera.position.y = 1000 * Math.cos(radian);

        camera.lookAt(new THREE.Vector3(0, 0, 0));

        renderer.render(scene, camera);

        requestAnimationFrame(tick);
    }
}