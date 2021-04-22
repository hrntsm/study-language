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

    const plane2 = new THREE.GridHelper(600);
    scene.add(plane2);
    const plane = new THREE.AxesHelper(300);
    scene.add(plane);

    const material = new THREE.MeshNormalMaterial();
    const geometry = new THREE.SphereGeometry(30, 30, 30);

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    tick();

    function tick() {
        rot += 0.5;
        const radian = (rot * Math.PI) / 180;
        mesh.position.x = 200 * Math.sin(radian);
        mesh.position.y = 50;
        mesh.position.z = 200 * Math.cos(radian);

        renderer.render(scene, camera);

        const worldPosition = mesh.getWorldPosition(new THREE.Vector3());

        const projection = worldPosition.project(camera);
        const sx = (width / 2) * (+projection.x + 1.0);
        const sy = (height / 2) * (-projection.y + 1.0);

        const tf = document.getElementById('hub');
        tf.innerHTML = `�スクリーン座標(${Math.round(sx)}, ${Math.round(sy)})`;
        tf.style.transform = `translate(${sx}px, ${sy}px)`;

        const line = document.getElementById('svgLine');
        line.setAttribute('x2', sx);
        line.setAttribute('y2', sy);

        requestAnimationFrame(tick);
    }
}