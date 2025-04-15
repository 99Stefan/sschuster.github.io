// js/distanceTracker.js

export function startDistanceTracking(renderer, camera, dartboard) {
    const distanceText = document.querySelector('#distanceText');
  
    if (!distanceText) {
      console.warn("❗ Kein #distanceText Element gefunden");
      return;
    }
  
    setInterval(() => {
      if (!dartboard.visible) return;
  
      const camPos = renderer.xr.getCamera(camera).position;
      const boardPos = dartboard.position;
  
      const distance = camPos.distanceTo(boardPos);
      distanceText.setAttribute('value', `Entfernung: ${distance.toFixed(2)} m`);
    }, 500); // Alle 0,5 Sekunden aktualisieren
  }
  