var i=0;

function addMsg(e) {
  e.preventDefault();
  var message = document.createElement("div");
  var user = document.createElement("p");
  var text = document.createElement("p");
  user.appendChild(document.createTextNode("Username"));
  text.appendChild(document.createTextNode("Message number "+i));
  message.appendChild(user);
  message.appendChild(text);
  message.classList.add("chat-msg");
  document.getElementById("messages").appendChild(message);
  message.scrollIntoView();
  i++;
  return false;
}
