// hitDetection.js
// Funktion zur Berechnung der Trefferzone und Punkte

function evaluateHit(x, y) {
  const r = Math.sqrt(x * x + y * y);

  // Offizielle Maße in Metern
  const bullseyeR = 0.00635;
  const bullR = 0.0159;
  const tripleInnerR = 0.099;
  const tripleOuterR = 0.107;
  const doubleInnerR = 0.162;
  const doubleOuterR = 0.170;
  const boardOuterR = 0.170;

  // Bullseye
  if (r <= bullseyeR) return { zone: "Bullseye", segment: null, points: 50 };
  if (r <= bullR) return { zone: "Bull", segment: null, points: 25 };

  // Winkel → Segment
  const angle = Math.atan2(y, x);
  const degrees = (angle * 180) / Math.PI;
  const normalized = (degrees + 360 + 9) % 360; // 9° Versatz: Segment 6 oben
  const segmentIndex = Math.floor(normalized / 18);
  const segmentOrder = [6,13,4,18,1,20,5,12,9,14,11,8,16,7,19,3,17,2,15,10];
  const hitNumber = segmentOrder[segmentIndex];

  // Triple
  if (r > tripleInnerR && r <= tripleOuterR) {
    return { zone: "Triple", segment: hitNumber, points: hitNumber * 3 };
  }

  // Double
  if (r > doubleInnerR && r <= doubleOuterR) {
    return { zone: "Double", segment: hitNumber, points: hitNumber * 2 };
  }

  // Single Feld
  if (r <= boardOuterR) {
    return { zone: "Single", segment: hitNumber, points: hitNumber };
  }

  // Daneben
  return { zone: "Miss", segment: null, points: 0 };
}
