// modelLoader.js

export async function loadDartboardModel(scene) {
    return new Promise((resolve) => {
      const loader = new THREE.GLTFLoader();
      loader.load("./assets/dartboard.glb", (gltf) => {
        const dartboard = gltf.scene;
        dartboard.visible = false;
        scene.add(dartboard);
        resolve(dartboard);
      });
    });
  }
  