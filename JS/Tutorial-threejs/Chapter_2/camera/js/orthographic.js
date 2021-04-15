window.addEventListener('load', init);

function init() {
    const width = 960;
    const heigh = 540;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#orthographic'),
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, heigh);
    renderer.shadowMap.enabled = true;

    const scene = new THREE.Scene();

    const camere = new THREE.OrthographicCamera(-480, +480, 270, -270, 1, 1000);

    {
        const spotLight = new THREE.SpotLight(
            0xffffff,
            4,
            2000,
            Math.PI / 5,
            0.2,
            1.5
        );
        spotLight.position.set(500, 300, 500);
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 2048;
        spotLight.shadow.mapSize.height = 2048;
        scene.add(spotLight);
    }

    {
        const texture = new THREE.TextureLoader().load('https://github.com/ics-creative/tutorial-three/blob/master/samples/imgs/floor.png');
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(10, 10);
        texture.magFilter = THREE.NearestFilter;

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(1000, 1000),
            new THREE.MeshStandardMaterial({
                // map: texture,
                color: 0xffffff,
                roughness: 0.0,
                metalness: 0.6
            })
        );
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        scene.add(floor);
    }

    {
        const material = new THREE.MeshStandardMaterial({
            color: 0x22dd22,
            roughness: 0.1,
            metalness: 0.2
        });
        const geometry = new THREE.BoxGeometry(45, 45, 45);

        for (let i = 0; i < 60; i++) {
            const box = new THREE.Mesh(geometry, material);
            box.position.x = Math.round((Math.random() - 0.5) * 19) * 50 + 25;
            box.position.y = 25;
            box.position.z = Math.round((Math.random() - 0.5) * 19) * 50 + 25;
            box.receiveShadow = true;
            box.castShadow = true;
            scene.add(box);
        }
    }

    tick();

    function tick() {
        camere.position.x = -500;
        camere.position.y = 500;
        camere.position.z = 500;
        camere.lookAt(new THREE.Vector3(0, 0, 0));

        renderer.render(scene, camere);
        requestAnimationFrame(tick);
    }
}