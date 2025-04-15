// js/placement.js

export function handlePlacement(renderer, scene, camera, dartboard, sessionData, onPlaced) {
  const { refSpace, hitTestSource } = sessionData;

  const controller = renderer.xr.getController(0);
  controller.addEventListener("select", () => {
    if (sessionData.placed || !sessionData.lastHitPose || !dartboard) return;

    const hit = sessionData.lastHitPose.transform.position;
    const xrCam = renderer.xr.getCamera(camera);
    const realCam = xrCam.cameras?.[0] || xrCam;

    const position = new THREE.Vector3(hit.x, realCam.position.y, hit.z);

    dartboard.visible = true;
    dartboard.position.copy(position);
    dartboard.lookAt(realCam.position);
    dartboard.rotateX(THREE.MathUtils.degToRad(90));
    dartboard.updateMatrix();
    dartboard.matrixAutoUpdate = false;

    sessionData.placed = true;
    document.getElementById("reset").style.display = "block";

    if (typeof onPlaced === "function") {
      onPlaced();
    }

    console.log("✅ Dartscheibe platziert bei:", position);
  });

  scene.add(controller);
}
