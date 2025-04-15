// throwTest.js – Dartwurf mit Dartpfeil2.glb

let dartCount = 0;
let totalScore = 0;
const boardOuterRadius = 0.2255;

document.addEventListener("DOMContentLoaded", () => {
  const throwButton = document.getElementById("throwButton");
  const scene = document.querySelector("a-scene");
  const scoreText = document.querySelector("#scoreText");
  const totalScoreText = document.querySelector("#totalScoreText");

  throwButton.addEventListener("click", () => {
    // Vorherigen Dart löschen
    const previousDart = document.querySelector(`#dart-${dartCount}`);
    if (previousDart) previousDart.remove();

    dartCount++;

    const r = Math.sqrt(Math.random()) * boardOuterRadius * 1.2;
    const angle = Math.random() * 2 * Math.PI;
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);

    // Dartpfeil (3D-Modell)
    const dart = document.createElement("a-entity");
    dart.setAttribute("id", `dart-${dartCount}`);
    dart.setAttribute("gltf-model", "#dartModel");
    dart.setAttribute("scale", "1 1 1"); // ggf. anpassen
    dart.setAttribute("rotation", "90 0 180");
    dart.setAttribute("position", "0 1.6 0");
    scene.appendChild(dart);

    // Animation Richtung Trefferpunkt
    dart.setAttribute("animation", {
      property: "position",
      to: `${x.toFixed(3)} ${(1.6 + y).toFixed(3)} -0.915`,
      dur: 700,
      easing: "easeOutQuad"
    });

    setTimeout(() => {
      const result = evaluateHit(x, y);
      const rReal = Math.sqrt(x * x + y * y);
      const points = rReal > boardOuterRadius ? 0 : result.points;

      const text = rReal > boardOuterRadius
        ? "Daneben! → 0 Punkte"
        : `${result.zone} ${result.segment || ""} → ${points} Punkte`;

      totalScore += points;
      scoreText.setAttribute("value", text);
      scoreText.setAttribute("visible", true);
      totalScoreText.setAttribute("value", `Gesamt: ${totalScore}`);
    }, 750);
  });
});
