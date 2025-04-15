#!/bin/bash
# filepath: /home/lambda/code_projects/digital_engineering/visualcomputing_2025/vc_ss25_projekt6_ar_sports/start-server-mac.sh

PORT=8081

# Get IP address (for macOS)
IP=$(ipconfig getifaddr en0)
if [ -z "$IP" ]; then
    # Try alternative interface if en0 doesn't work
    IP=$(ipconfig getifaddr en1)
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js is not installed! Please install it from https://nodejs.org/"
    exit 1
fi

# Check if http-server is installed
if ! command -v http-server &> /dev/null; then
    echo "[ERROR] http-server is not installed! Install it with: npm install -g http-server"
    exit 1
fi

# Check if ngrok is installed
if ! command -v ngrok &> /dev/null; then
    echo "[ERROR] ngrok is not installed! Please install it from https://ngrok.com/download"
    exit 1
fi

# Start local server in background
echo "Starting local server on http://$IP:$PORT ..."
npx http-server -a 0.0.0.0 -p $PORT &

# Wait for server to start
sleep 2

# Start ngrok
echo "Starting ngrok tunnel..."
ngrok http $PORT > /dev/null &

# Wait for ngrok to start
sleep 3

# Get the public URL and open QR code generator
echo "Generating QR code for ngrok URL..."
url=$(curl -s http://localhost:4040/api/tunnels | grep -o '"public_url":"[^"]*' | grep -o 'http[^"]*')
open "https://puliczek.github.io/ngrokqr/?url=$url"

# Wait for processes to complete (equivalent to pause)
echo "Press Enter to exit..."
read