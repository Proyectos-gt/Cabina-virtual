//--------------------- activando el sidebar-----------------------------
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

setTimeout(() => {
    $('#sidebar').toggleClass('active');
}, 500);


//-----------------------cambiando icono  e iniciando la video conferencia -------------------------
$('#sidebarCollapse').on('click', function (e) {
    $("#formulario").show();

    if ($('#sidebar').hasClass('active')) {

        $('#icono').attr('src', 'img/face-roja.png');
        $('#icono').attr('style', 'padding: 12px;');

        $('#menu').removeClass('flex-lg-row');
        $('#menu').addClass('flex-lg-column');

        $('#titulollamada').text('Finalizar Llamada');
    }

    else {
       
        $("#formulario").hide();
        $("#titulollamada").text("Iniciar Video Llamada");
        
        $("#icono").attr("src", "img/face.png");
        $("#icono").attr("style", "padding: 0px;");
        $("#frameVideo").attr('src', '');

        $('#menu').removeClass('flex-lg-column');
        $('#menu').addClass('flex-lg-row');

        setTimeout(() => {
            $('#sidebar').addClass('active');
            $('#Encuesta').modal('show');
        }, 500);
    }
});

//---------------------- Scripts para controlar el formulario formulario -------------------------------------
var fecha = new Date();
$("#identificador").val("TE-" + fecha.getDate() + fecha.getSeconds() + fecha.getMilliseconds());


//------------------------ funcion para abrir la ventana para escanear documentos ----------------------------
function Scaner() {
    window.open('https://reclamosgt.unitypromotores.com/Scanner/scannerDocumentos.aspx?codigo='+ $("#identificador").val(),'','width=350,height=550,left=50,top=50,toolbar=yes');
}

