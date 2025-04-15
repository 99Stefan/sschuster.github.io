// sessionManager.js

export async function setupXRSession(renderer, scene, camera) {
    if (!navigator.xr) {
      alert("WebXR nicht verfügbar");
      throw new Error("WebXR nicht verfügbar");
    }
  
    const supported = await navigator.xr.isSessionSupported("immersive-ar");
    if (!supported) {
      alert("AR nicht unterstützt");
      throw new Error("AR nicht unterstützt");
    }
  
    const session = await navigator.xr.requestSession("immersive-ar", {
      requiredFeatures: ["hit-test", "dom-overlay"],
      domOverlay: { root: document.body },
    });
  
    renderer.xr.setReferenceSpaceType("local");
    await renderer.xr.setSession(session);
  
    const refSpace = await session.requestReferenceSpace("local");
    const viewerSpace = await session.requestReferenceSpace("viewer");
    const hitTestSource = await session.requestHitTestSource({ space: viewerSpace });
  
    return { session, refSpace, viewerSpace, hitTestSource };
  }
  