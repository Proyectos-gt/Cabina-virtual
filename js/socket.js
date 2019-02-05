var socket = new WebSocket('ws://192.168.81.225:25000/');

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
    $("#iconoEmpresa").attr("src", "img/Telus.jpg");
    $("#nombre").text(text.Nombre);
    $("#telefono").text("Telefono: "+ text.Telefono);
    $("#empresa").text("Empresa: "+ text.Mensaje);
    $("#codigo").text("Codigo: " + text.Codigo);
    $("#tipo").text("Tipo: " + text.Tipo);
  }
}

socket.onclose = function(event) {
  //log('Closed connection');
}

$('#enviar').on('click', function(){
    var json = JSON.stringify(
      { 
        Mensaje: 'Telus', 
        Nombre: $('#name').val(), 
        Telefono: $('#phone').val(), 
        Codigo: $('#identificador').val(),
        Tipo: $("#ddlOpciones option:selected").text()
      });

    socket.send(json);
   
    $('#name').val('');
    $('#phone').val('');
    $('#email').val('');
});

window.addEventListener('beforeunload', function() {
  socket.close();
});
