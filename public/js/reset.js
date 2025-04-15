import { hideThrowButton } from "./uiManager.js";

export function setupResetButton(renderer, scene, dartboard, sessionData, onResetCallback) {
  const { viewerSpace } = sessionData;

  document.getElementById("reset").addEventListener("click", async () => {
    dartboard.visible = false;
    dartboard.matrixAutoUpdate = true;

    sessionData.placed = false;
    sessionData.lastHitPose = null;

    if (sessionData.hitTestSource) sessionData.hitTestSource.cancel?.();

    const session = renderer.xr.getSession();
    sessionData.hitTestSource = await session.requestHitTestSource({ space: viewerSpace });

    document.getElementById("reset").style.display = "none";
    hideThrowButton();

    if (onResetCallback) onResetCallback();

    console.log("Dartscheibe zurückgesetzt");
  });
}
