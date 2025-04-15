let throwBtn;

export function setupUI() {
  // Start-Button
  const startButton = document.createElement("button");
  startButton.id = "start-ar";
  startButton.textContent = "Kamera starten (AR)";
  Object.assign(startButton.style, {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "15px 30px",
    fontSize: "18px",
    zIndex: 9999
  });
  document.body.appendChild(startButton);

  // Reset-Button
  const resetButton = document.createElement("button");
  resetButton.id = "reset";
  resetButton.textContent = "Zurücksetzen";
  Object.assign(resetButton.style, {
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "10px 20px",
    background: "rgba(255, 255, 255, 0.9)",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    zIndex: 9999,
    display: "none"
  });
  document.body.appendChild(resetButton);

  // Wurf-Button (anfangs versteckt)
  throwBtn = document.createElement("div");
  throwBtn.id = "throwButton";
  throwBtn.textContent = "Pfeil werfen";
  Object.assign(throwBtn.style, {
    position: "absolute",
    bottom: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "10px 20px",
    fontSize: "18px",
    background: "#0d6efd",
    color: "white",
    borderRadius: "8px",
    fontFamily: "sans-serif",
    zIndex: 1000,
    cursor: "pointer",
    display: "none"
  });
  document.body.appendChild(throwBtn);
}

export function showThrowButton() {
  if (throwBtn) throwBtn.style.display = "block";
}

export function hideThrowButton() {
  if (throwBtn) throwBtn.style.display = "none";
}
