//importing the ws module
const WebSocketServer = require("ws");

//creating a new websocket server at port
const wss = new WebSocketServer.Server({ port: 8080 });

//creating connection using websocket
wss.on("connection", (ws) => {
  console.log("Server: new client connected");

  //sending welcome message to client
  ws.send("Server: connectin Established🤝");
  ws.send("Server: Welcome");

  //on message from client
  ws.on("message", (data) => {
    //conditional responses
    if (data == "/help") {
      ws.send(
        "Server: how can i help? \n 1. report a bug. \n 2. contact develper. \n 3. something else. \n 4. want a coffee? "
      );
    }
    console.log(`Client: ${data}`);
  });

  // handling what to do when clients disconnects from server
  ws.on("close", () => {
    console.log("Server: the client has disconnected");
  });
  // handling client connection error
  ws.onerror = function () {
    console.log("Server: Some Error occurred");
  };
});
