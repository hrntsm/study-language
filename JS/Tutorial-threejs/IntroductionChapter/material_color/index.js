window.addEventListener('load', init);

const width = 960;
const height = 540;

function init() {
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas')
    });
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.Per
}