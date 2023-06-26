const socket = io();
const field = document.getElementById("field");
const serverm = document.getElementById("server");
const messagearea = document.getElementById("messagearea");
const btn = document.getElementById("send");
const name = document.getElementById("name");

socket.on("connect", () => {
  console.log("USer connected");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const pp = document.createElement("p");
    pp.textContent = "me : " + field.value;
    messagearea.appendChild(pp);
    socket.emit("message", field.value);
    socket.emit("username", name.value);
    field.value = "";
  });

  let msgss;

  socket.on("message", (data) => {
    // console.log("mesage:", data);
    msgss = data;
  });
  socket.on("username", (name) => {
    console.log(name, ":", msgss);
    sermsg(msgss, name);
  });
});
//   handling mesage
function sermsg(chat, namee) {
  const p = document.createElement("p");
  p.textContent = namee + " : " + chat;
  messagearea.appendChild(p);
}

//   //   handling mesage
//   function clmsg(chat) {
//     const p = document.createElement("p");
//     p.innerText = chat;
//     messagearea.appendChild(p);
//   }
