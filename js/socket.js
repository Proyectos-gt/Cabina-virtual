var socket = new WebSocket('ws://192.168.5.154:25000/');
socket.onopen = function(event) {
  //log('Conexion Abiera ');
  var json = JSON.stringify({ Mensaje: 'Esperando Conexion' });
  socket.send(json);
  //log('Sent: ' + json);
}

socket.onerror = function(event) {
  //log('Error: ' + JSON.stringify(event));
}

socket.onmessage = function (event) {
  text = JSON.parse(event.data);

  if(text.Mensaje === "Telus"){
    $("#moderador").attr("src", "https://appear.in/unitypromotoresgt");
    $("#nombre").text(text.Nombre);
    $("#telefono").text("Telefono: "+ text.Telefono);
    $("#empresa").text("Empresa: "+ text.Mensaje);
    $("#iconoEmpresa").attr("src", "img/Telus.jpg");
    $("#codigo").text("Codigo: " + text.Codigo);
  }
}

socket.onclose = function(event) {
  //log('Closed connection');
}

$('#enviar').on('click', function(){
    var json = JSON.stringify({ Mensaje: 'Telus', Nombre: $('#name').val(), Telefono: $('#phone').val(), Codigo: $('#identificador').val() });
    socket.send(json);
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