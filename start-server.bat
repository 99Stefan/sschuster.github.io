@echo off
set PORT=8081

:: IP-Adresse ermitteln (für Windows)
for /f "tokens=2 delims=:" %%A in ('ipconfig ^| findstr /C:"IPv4-Adresse"') do set IP=%%A
set IP=%IP:~1%

:: Prüfen, ob Node.js installiert ist
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js ist nicht installiert! Bitte installiere es von https://nodejs.org/
    exit /b
)

:: Prüfen, ob http-server installiert ist
where http-server >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] http-server ist nicht installiert! Installiere es mit: npm install -g http-server
    exit /b
)

:: Starte lokalen Server im Hintergrund
echo Starte lokalen Server auf http://%IP%:%PORT% ...
start /B npx http-server -a 0.0.0.0 -p %PORT%

:: Warte kurz, damit sichergestellt ist, dass der Server läuft
timeout /T 2 /NOBREAK >nul

:: Starte ngrok
echo Starte ngrok Tunnel...
start /B ngrok http %PORT%

timeout /T 1 /NOBREAK >nul

powershell -Command "Start-Process ngrok -ArgumentList 'http','3000'; Start-Sleep -Seconds 3; $url = (Invoke-RestMethod 'http://localhost:4040/api/tunnels').tunnels[0].public_url; Start-Process ('https://puliczek.github.io/ngrokqr/?url=' + $url)"
:: Warte darauf, dass beide Prozesse laufen
pause
