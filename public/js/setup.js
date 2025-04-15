// setup.js

export function initRendererAndScene() {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);
  
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera();
  
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);
  
    return { renderer, scene, camera };
  }
  