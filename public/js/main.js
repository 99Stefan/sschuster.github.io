// js/main.js
import { initRendererAndScene } from "./setup.js";
import { loadDartboardModel } from "./modelLoader.js";
import { setupXRSession } from "./sessionManager.js";
import { handlePlacement } from "./placement.js";
import { setupResetButton } from "./reset.js";
import { setupUI, showThrowButton } from "./uiManager.js";
import { updateDistance } from "./uiManager.js";

let renderer, scene, camera, dartboard;
let sessionData = {
  placed: false,
  hitTestSource: null,
  viewerSpace: null,
  refSpace: null,
  lastHitPose: null,
  session: null,
};

setupUI(); // Buttons & Texte hinzufügen

document.getElementById("start-ar").addEventListener("click", async () => {
  ({ renderer, scene, camera } = initRendererAndScene());
  dartboard = await loadDartboardModel(scene);

  const { session, refSpace, viewerSpace, hitTestSource } = await setupXRSession(renderer);
  Object.assign(sessionData, { session, refSpace, viewerSpace, hitTestSource });

  document.getElementById("start-ar").style.display = "none";

  // Dartscheibe platzieren
  handlePlacement(renderer, scene, camera, dartboard, sessionData, () => {
    showThrowButton(); // Nur wenn platziert, Button anzeigen
  });

  // Reset
  setupResetButton(renderer, scene, dartboard, sessionData, () => {
    startAnimationLoop(renderer, camera, sessionData);
  });

  startAnimationLoop(renderer, camera, sessionData);
});

function startAnimationLoop(renderer, camera, sessionData) {
  renderer.setAnimationLoop((timestamp, frame) => {
    if (!frame) return;

    const viewerPose = frame.getViewerPose(sessionData.refSpace);
    if (!viewerPose) return;

    const results = frame.getHitTestResults(sessionData.hitTestSource);
    if (results.length > 0 && !sessionData.placed) {
      sessionData.lastHitPose = results[0].getPose(sessionData.refSpace);
    }

    renderer.render(scene, camera);
  });
}

renderer.setAnimationLoop((timestamp, frame) => {
  if (!frame) return;

  const viewerPose = frame.getViewerPose(sessionData.refSpace);
  if (!viewerPose) return;

  const results = frame.getHitTestResults(sessionData.hitTestSource);
  if (results.length > 0 && !sessionData.placed) {
    sessionData.lastHitPose = results[0].getPose(sessionData.refSpace);
  }

  // 📏 Entfernung zur Dartscheibe berechnen (nach Platzierung)
  if (sessionData.placed && dartboard?.visible) {
    const cam = renderer.xr.getCamera(camera);
    const camPos = cam.cameras?.[0]?.position || cam.position;
    const distance = camPos.distanceTo(dartboard.position);
    updateDistance(distance);
  }

  renderer.render(scene, camera);
});