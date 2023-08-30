# Learning_WebSockets

## What are WebSockets?

When you need continuous data from a server, two approaches come to mind:
1. Frequent API calls to request data (Polling)
2. Utilizing WebSockets

A WebSocket is a communication protocol that enables seamless and continuous interaction between clients and servers. It offers various communication patterns, including:
- Client to Server (e.g., submitting a new post)
- Server to Client (e.g., notifying about likes/views)
- Server to Multiple Clients (e.g., broadcasting updates)

WebSocket connections maintain a persistent, bidirectional link for ongoing communication.

## How WebSockets Work

Unlike traditional HTTP connections, where a client sends a request and waits for a response, WebSocket connections remain open. This persistence allows continuous data exchange between clients and servers until either side decides to terminate the connection. This is akin to a publish-subscribe messaging pattern, where clients "subscribe" to updates, and servers "publish" messages to subscribers.

### Advantages

1. **Single Connection**: Only one request-response is needed to establish a connection.
2. **Stateful Connection**: WebSockets can maintain connection state, keeping track of data sent between client and server without relying on cookies or session IDs.

The WebSocket protocol serves two primary purposes:
1. Opening a handshake.
2. Facilitating data transfer.

## Getting Started with WebSockets in Node.js

To demonstrate WebSocket usage in Node.js, we've provided two files: `server` and `client`.

### Client

The client-side HTML contains a textarea for input and a send button to communicate with the server. When the page loads, it establishes a WebSocket connection with the server.

### Server

The server-side JavaScript uses the ws module to create a WebSocket server. It handles incoming connections, manages messages, and responds conditionally to specific inputs.

```
// server.js
const WebSocketServer = require("ws");
const wss = new WebSocketServer.Server({ port: 8080 });

wss.on("connection", (ws) => {
  // WebSocket server logic
});
```

### Usage
1. Run your WebSocket server using node main.js.
2. Open client.html in a browser to interact with the WebSocket server.
3. Input text, click "Send," and observe the interactions in the browser console and terminal.

### Conclusion
WebSockets offer a powerful solution for real-time communication between clients and servers. By maintaining a persistent connection, WebSockets enable efficient data exchange, making them ideal for applications requiring continuous updates or instant notifications.

This was a basic project for me to learn and implement WebSockets