# # Entwicklungstagebuch für die Visual Computing Forschungsaufgabe 

Name: Stefan Schuster

Team: 6 AR-Sports


## Woche 1 - 17-23 März 2025 KW 12

### Bearbeitete Aufgaben:
- Verstehen der Aufgabenstellung.
- Vertraut machen mit den Technologien die für das Projekt empfohlen sind.
- Vertraut machen mit den wöchentlichen Update Meetings Folien und dem Entwicklertagebuch.

### Aufgetretene Probleme:
- Muss das Projekt zum Schluss eine App sein die man auf das Smartphone herunterladen kann? Oder kann es auch eine Anwendung sein die man über das Internet aufruft?
- Wie ausführlich müssen die wöchentlichen Update Meeting Folien ausgefüllt werden?
- Muss jeder ein eigenes Entwicklertagebuch führen?

### Pläne für nächste Woche:
- Aufgabenstellung sobald sie klar ist in Arbeitspakete aufteilen
- Arbeitspakete grob verteilen auf alle
- Ins doing kommen und nächste Woche validieren wie der Stand ist und wie man die Effektivität im Sinne bessere Aufteilung der Aufgabenpakete und klare Ziele setzen verbessern kann um gute Zwischenziele zu erreichen
Erstes Arbeitspaket bearbeiten

### Zeitaufwand:

| Aufgaben                     | Zeitaufwand |
|--------------------------|------------|
| Verstehen der Aufgabenstellung           | 2 Stunden    |
| Vertraut machen mit Technologien           | 1 Stunden    |
| Vertraut machen mit Update Meetings und Entwicklertagebuch     | 2 Stunden    |
| **Gesamt**                 | **5 Stunden** |
---


## Woche 2 - 24-30 März 2025 KW 13

### Bearbeitete Aufgaben:

- Diskutieren von verschiedenen Sportarten und einigen → <strong>Darts</strong></li>
- Implementieren der AR-Dartscheibe und ausprobieren

### Aufgetretene Probleme:
- Dartscheibe nicht komplett selbst erstellbar. Zu kompliziert, da:
1. A-Frame kann keine Kreissegmente nativ. Man müsste eigene Geometrien in JS bauen oder alles über ein Blender-Modell oder Shader lösen
2. Positionierung von 20 Segmenten + Zahlen ist sehr aufwendig. Man bräuchte Mathe (Winkel, Rotation, Radius) für jedes Feld und die Anpassung für Farbmuster (rot, grün, weiß, schwarz)
3. Optisch wird’s nie so schick wie mit einer Textur oder Modell vor allem, wenn wir später die Punkte präzise zählen wollen

→ Daher Bild aus dem Internet heruntergeladen und bearbeitet. Dann Index.html erstellt.

- Probleme mit Gitlab. Mergen von Branches oft problembehaftet. Kostet viel Zeit.

### Pläne für nächste Woche:
- Fixierung der Dartscheibe
- Implementierung der Punkteausgabe
- Erste Spielnahe Tests

### Zeitaufwand:

| Aufgaben                     | Zeitaufwand |
|--------------------------|------------|
| Diskutieren von verschiedenen Sportarten und einigen          | 0,5 Stunden    |
| Implementieren der AR Dartscheibe und ausprobieren           | 2 Stunden    |
| Implementieren der Treffererkennung und Testen     | 2,5 Stunden    |
| **Gesamt**                 | **5 Stunden** |


## Woche 3 - 31 März - 06 April 2025 KW 14

### Bearbeitete Aufgaben:
- Dartscheibe fixieren ohne Erfolg, da auf Apple nicht möglich
- Neue Dartscheibe in Blender erstellt bzw gedreht etc. nach download
- Wurfbutton implementiert
- Punkteausgabe implementiert
- Random Testwurffunktion erstellt um besser und einfacher Testen zu können
- Komplett neue Dartscheibe in Blender erstellt
- Treffererkennung überarbeitet und getestet. Läuft perfekt
- Freies setzen der Dartscheibe versucht umzusetzen. Leider gescheitert 

### Aufgetretene Probleme:
- Probleme bei der Installation von ngrok. Viel Wartezeit bei der Installation. Ohne dem Server ist es nicht möglich die Dartscheibe zu fixieren, da das Testing nicht möglich ist.
- Bedienung von Blender sehr gewöhnungsbedürftig
- Gedownloadete Dartscheibe zu groß, 70MB. Nur verarbeitbar wenn zwischen 0,5 und 2 MB liegt. Also komplett neue Dartscheibe in Blender erstellen
- Bei komplett neu erstellter Dartscheibe gibt es noch Probleme die Zahlen anzuzeigen
- Freies setzen der dartscheibe sehr schwer umsetzbar

### Pläne für nächste Woche:
- Bei neuer Dartscheibe Zahlen sichtbar machen
- Dartscheibe frei setzen implementieren
- Evtl Dartpfeil in Blender erstellen

### Zeitaufwand:

| Aufgaben                     | Zeitaufwand |
|--------------------------|------------|
| Dartscheibe fixieren ohne Erfolg, da auf Apple nicht möglich           | 1,5 Stunden    |
| Neue Dartscheibe in Blender erstellt| 2 Stunden    |
| Wurfbutton implementiert     | 0,5 Stunden    |
| Punkteausgabe implementiert     | 0,5 Stunden    |
| Random Testwurffunktion erstellt um besser und einfacher Testen zu können     | 1 Stunden    |
| Komplett neue Dartscheibe in Blender erstellt     | 3,5 Stunden    |
| Treffererkennung überarbeitet und getestet. Läuft perfekt     | 0,5 Stunden    |
| Freies setzen der dartscheibe sehr schwer umsetzbar     | 3 Stunden    |
| **Gesamt**                 | **12,5 Stunden** |
---


## Woche 4 - 07 April - 13 April 2025 KW 15

### Bearbeitete Aufgaben:
- Zahlen in weiß auf die Dartscheibe implementiert
- Dartscheibe frei setzen implementieren mit Rücknahme Funktion und aufteilen der index.html und Tests
- Dartpfeil in Blender modellieren

### Aufgetretene Probleme:
- Tippen in AR-Modus wurde lange nicht erkannt. Nach langer Recherche und vielen ausprobieren gelöst.
- Dartscheibe nicht direkt an der Wand setzbar. Dartscheibe nur auf dem Boden setzbar. Deshalb Offset nach oben auf Gesichtshöhe implementiert.
- Dartscheibe war nur setzbar mit der Ausrichtung wo die AR-Session gestartet wurde. Bug gefixt durch dauerhaftes schauen wie die Kamera ausgerichtet ist.
- Reset Button hat zu Crash der App geführt. Anpassungen im Code machen die App robuster gegen Crashes.

### Pläne für nächste Woche:
- Dartpfeil in Blender modellieren
- Weitere Features wie Sound, Visuelle Effekte etc. implementieren

### Zeitaufwand:

| Aufgaben                     | Zeitaufwand |
|--------------------------|------------|
| Zahlen in weiß auf die Dartscheibe implementiert           | 3 Stunden    |
| Dartscheibe frei setzen mit Rücknahme Funktion und aufteilen der index.html und Tests | 9 Stunden    |
| Dartpfeil in Blender modellieren | 2 Stunden    |

| **Gesamt**                 | **14 Stunden** |
---


## Woche 5 - 14 April - 20 April 2025 KW 16

### Bearbeitete Aufgaben:
- Dartpfeil in Blender modellieren

### Aufgetretene Probleme:


### Pläne für nächste Woche:
- 

### Zeitaufwand:

| Aufgaben                     | Zeitaufwand |
|--------------------------|------------|
| Dartpfeil in Blender modellieren           | 3 Stunden    |
|  |  Stunden    |
|  |  Stunden    |

| **Gesamt**                 | **3 Stunden** |
---


---
# Gesamtstunden: 39,5 Stunden