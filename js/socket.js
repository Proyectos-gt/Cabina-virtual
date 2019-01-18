var socket = new WebSocket('ws://192.168.5.154:25000/');
socket.onopen = function(event) {
  //log('Conexion Abiera ');
  var json = JSON.stringify({ Mensaje: 'Hola' });
  socket.send(json);
  //log('Sent: ' + json);
}

socket.onerror = function(event) {
  //log('Error: ' + JSON.stringify(event));
}

socket.onmessage = function (event) {
  text = event.data;
  //log('Received: ' + text);
 
}

socket.onclose = function(event) {
  //log('Closed connection');
}

$('#enviar').on('click', function(){
    socket.send($('#name').val());
    $("#frameVideo").attr("src", "https://appear.in/unitypromotoresgt");
    $("#formularioUnity").attr("style", "display:none");
});
/*
document.querySelector('#close').addEventListener('click', function(event) {
  socket.close();
  log('Closed connection');
});

document.querySelector('#enviar').addEventListener('click', function(event) {
  var json = document.getElementById('name').value ;
  socket.send(json);
  log('Sent: ' + json);
});

var log = function(text) {

  var li = document.createElement('li');
  li.innerHTML = text;
  document.getElementById('log').appendChild(li);
}

window.addEventListener('beforeunload', function() {
  socket.close();
});
*/