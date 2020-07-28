//var socket = new WebSocket('ws://192.168.81.225:25000/');
//var socket = new WebSocket('wss://socket.unitypromotores.com/cabina-virtual');
var VideoModerador;

var socket = new WebSocket('wss://socket.unitypromotores.com/cabina-virtual');
var alarma = document.getElementById("audio");

socket.onopen = function (event) {
  //log('Conexion Abiera ');
  var json = JSON.stringify({ Mensaje: 'Esperando Conexion' });
  socket.send(json);
  //log('Sent: ' + json);
}

socket.onerror = function (event) {
  //log('Error: ' + JSON.stringify(event));
}

function closeWin() {
  VideoModerador.close();
}

function OpenVideo() {
  var playPromise = alarma.play();
   
  if (playPromise !== undefined) {
    playPromise.then(_ => {
    })
    .catch(error => {
    });
  }

  VideoModerador = window.open('https://whereby.com/unitypromotores-sala-2', "ventana1", "width=750,height=550,scrollbars=NO,location=NO");
}

socket.onmessage = function (event) {
  text = JSON.parse(event.data);

  if(text.Mensaje === "Pronico" || text.Mensaje === "Tv-azteca"){
    //$("#moderador").attr("src", "https://whereby.com/unitypromotores-sala-2");
    $("#iconoEmpresa").attr("src", "img/unity.png");
    $("#nombre").text(text.Nombre);
    $("#telefono").text("Telefono: " + text.Telefono);
    $("#empresa").text("Empresa: " + text.Mensaje);
    $("#codigo").text("Codigo: " + text.Codigo);
    $("#buscar-codigo").text(text.Codigo);
    $("#tipo").text("Tipo: " + text.Tipo);

    OpenVideo();
  }
}

socket.onclose = function (event) {
  //log('Closed connection');
}

$('#enviar').on('click', function () {
  var json = JSON.stringify(
    {
      Mensaje: $.get("id"),
      Nombre: $('#name').val(),
      Telefono: $('#phone').val(),
      Codigo: $('#identificador').val(),
      Tipo: $("#ddlOpciones option:selected").text()
    });

  socket.send(json);

  $.post("https://encuestas.unitypromotores.com/api/v1/encuesta/guardar",
    {
      "table_name": 'cabina_virtual',
      "nombre": $('#name').val(),
      "correo": $('#email').val(),
      "telefono": $('#phone').val(),
      "codigo": $('#identificador').val()
    },
  ).done(function () {
    setTimeout(
      function () {
        console.log('envio exitoso');
      }, 200);
  }).fail(function () {
    setTimeout(
      function () {
        console.log('no se pudo enviar');
      }, 200);
  });

  $('#name').val('');
  $('#phone').val('');
  $('#email').val('');
});

(function ($) {
  $.get = function (key) {
      key = key.replace(/[\[]/, '\\[');
      key = key.replace(/[\]]/, '\\]');
      var pattern = "[\\?&]" + key + "=([^&#]*)";
      var regex = new RegExp(pattern);
      var url = unescape(window.location.href);
      var results = regex.exec(url);
      if (results === null) {
          return null;
      } else {
          return results[1];
      }
  }
})(jQuery);

window.addEventListener('beforeunload', function () {
  socket.close();
});
