const express = require('express');
const cron = require('node-cron');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const port = 3000;



// Create an HTTP server and attach WebSocket server to it
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('WebSocket connected');

  // Schedule a notification every 10 seconds
  const cronJob = cron.schedule('*/3 * * * * *', () => {
    // Notify the connected client
    if (ws.readyState === WebSocket.OPEN) {
      ws.send('SendPushNotification');
    }
  });

  // Stop the cron job when the WebSocket connection is closed
  ws.on('close', () => {
    cronJob.stop();
    console.log('WebSocket connection closed');
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

