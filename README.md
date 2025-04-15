
# Cloud Computing Sommersemester 2025
## Gruppe 6: AR-Sports

Willkommen zum AR-Dart-Game-Projekt! Dieses Projekt wurde im Rahmen des Sommersemesters 2025 entwickelt.

---

## Voraussetzungen

1. Installieren Sie `ngrok` auf Ihrer lokalen Maschine und richten Sie es ein: [ngrok Setup Guide](https://dashboard.ngrok.com/get-started/setup).
2. Stellen Sie sicher, dass `http-server` installiert ist. Falls nicht, führen Sie den folgenden Befehl aus:

   ```bash
   npm install -g http-server
   ```

---

## Server für das AR-Dart-Game starten

### Windows

#### Option 1: Standard-Kommandozeile oder PowerShell
1. Öffnen Sie PowerShell oder eine andere Kommandozeile.
2. Führen Sie die Datei start-server.bat aus:

   ```bat
   ./start-server.bat
   ```

#### Option 2: Windows Subsystem for Linux (WSL)
1. Installieren Sie `ngrok` in Ihrer WSL-Umgebung.
2. Führen Sie die Datei start-server.sh aus:

   ```bash
   ./start-server.sh
   ```

---

### Linux

1. Stellen Sie sicher, dass `ngrok` installiert ist.
2. Starten Sie den Server mit folgendem Befehl:

   ```bash
   ./start-server.sh
   ```

### MacOS
1. Stellen Sie sicher, dass `ngrok` installiert ist: [How to install ngrok on MacOS](https://gist.github.com/wosephjeber/aa174fb851dfe87e644e). Machen Sie dies auf MacOS via [Homebrew](https://brew.sh/) (wenn notwendig auch Homebrew insatllieren)
2. Starten Sie den Server mit folgendem Befehl:

   ```bash
   ./start-server-mac.sh
   ```

---

## Hinweise

- **ngrok**: Stellen Sie sicher, dass Ihr `ngrok`-Konto korrekt eingerichtet ist, um den Tunnel zu starten.
- **http-server**: Dieser Server dient zur Bereitstellung der statischen Dateien, die für das AR-Dart-Game benötigt werden.

---

Viel Erfolg mit dem AR-Dart-Game!