const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const server = app.listen(port, () => {
  console.log("App is listening to the port:", port);
});
const io = require("socket.io")(server);
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
io.on("connection", (socket) => {
  console.log("The USer is connected :", socket.id);
  socket.on("disconnect", () => {
    console.log("USer disconencted: ", socket.id);
  });

  socket.on("message", (data) => {
    socket.broadcast.emit("message", data);
  });
  socket.on("username", (data) => {
    socket.broadcast.emit("username", data);
  });
});
