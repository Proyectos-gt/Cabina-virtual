//--------------------- activando el sidebar-----------------------------
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

setTimeout(() => {
    $('#sidebar').toggleClass('active');
}, 500);


//-----------------------cambiando icono y e iniciando la video conferencia -------------------------
$('#sidebarCollapse').on('click', function (e) {
    //$("#frameVideo").attr('src', 'file:///C:/Users/JorgeLaj/Desktop/Proyectos/VideoConferencia/formulario.html');
    // $("#frameVideo").attr('src', '/Consultas/VideoConferencia/formulario.html');
    $("#frameVideo").hide();
    $("#formulario").show();

    if ($("#sidebar").hasClass('active')) {

        $("#icono").attr("src", "img/face-roja.png");
        $("#icono").attr("style", "padding: 12px;");

        $("#menu").removeClass("flex-lg-row");
        $("#menu").addClass("flex-lg-column");

        $("#titulollamada").text("Finalizar Llamada");
    }

    else {
        $("#formulario").hide();
        $("#titulollamada").text("Iniciar Video Llamada");

        $("#icono").attr("src", "img/face.png");
        $("#icono").attr("style", "padding: 0px;");
        $("#frameVideo").attr('src', '');

        $("#menu").removeClass("flex-lg-column");
        $("#menu").addClass("flex-lg-row");

        setTimeout(() => {
            $('#Encuesta').modal('show');
        }, 500);
    }
});

//------------------------ funcion para abrir la ventana para escanear documentos ----------------------------
function Scaner() {
    window.open('https://reclamosgt.unitypromotores.com/Scanner/scannerDocumentos.aspx?id=' + $("#identificador").val() + '', "ventana1", "width=350,height=550,scrollbars=NO")
}

//---------------------- Scripts para controlar el formulario formulario -------------------------------------
var fecha = new Date();
$("#identificador").val("TE-" + fecha.getDate() + fecha.getSeconds() + fecha.getMilliseconds());

$('#enviar').on('click', function (event) {
    $("#formulario").hide();
    $("#frameVideo").show();
    $("#frameVideo").attr("src", "https://appear.in/unitypromotoresgt");

    /* 
      $.post("http://192.168.81.41:4000/api/clientes",
          {
              "table_name": "clientes",
              "codigo": "TE-" + fecha.getDate() + fecha.getMilliseconds,
              "nombre": $("#name").val(),
              "correo": $("#email").val(),
              "telefono": $("#phone").val()
          },
      ).done(function () {
          setTimeout(
              function () {
               //   toastr.success('Formulario enviado con exito', 'Excelente!');
               console.log("se guardo correctamente");
              }, 200);
      })
          .fail(function () {
              setTimeout(
                  function () {
                     // toastr.error('No se a podido enviar el formulario', 'Error!');
                     console.log("error al guardar los datos");
                  }, 200);
          });*/
});