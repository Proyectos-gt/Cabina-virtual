//activando el sidebar
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

setTimeout(() => {
    $('#sidebar').toggleClass('active');
}, 500);


//cambiando icono e iniciando la video conferencia
$('#sidebarCollapse').on('click', function (e) {
    $("#formulario").show();

    if ($('#sidebar').hasClass('active')) {

        $('#icono').attr('src', 'img/face-roja.png');
        $('#icono').attr('style', 'padding: 12px;');

        $('#menu').removeClass('flex-lg-row');
        $('#menu').addClass('flex-lg-column');

        $('#Finalizarllamada').removeClass('d-none');
        $('#codigollamada').text("Codigo: " + $('#identificador').val());
    }

    else {
       
        $("#formulario").hide();
        $("#Finalizarllamada").addClass("d-none");
        
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

//Scripts para generar el identificador de la llamada
var fecha = new Date();
$("#identificador").val("TE-" + fecha.getDate() + fecha.getSeconds() + fecha.getMilliseconds());


//funcion para abrir la ventana para escanear documentos
function Scaner() {
    window.open('https://reclamosgt.unitypromotores.com/Scanner/scannerDocumentos.aspx?codigo='+ $("#identificador").val(),'','width=350,height=550,left=50,top=50,toolbar=yes');
}

//funcion para llevar a la encuesta
function encuesta(){
    window.location.href="https://encuestas.unitypromotores.com/cabina?id=" + $("#identificador").val();
}

//funcion para abrir y cerrar el side
function side(){
    if ($('#sidebar').hasClass('active')) {
        $("#sidebar").removeClass("active");
        $('#MENU').addClass('opciones');
        $('#MENU').removeClass('opciones2');
    } else {
        $('#sidebar').addClass('active');
        $('#MENU').removeClass('opciones');
        $('#MENU').addClass('opciones2');
    }
}

function Archivos() {
    window.open('https://archivos-reclamos.unitypromotores.com/explorador.html#search='+$('#buscar-codigo').text()+'', "ventana1", "width=850,height=550,scrollbars=NO");     
}

$('#documentos').on('click', function(e){
   side();
   $('#moderador').attr('src','https://archivos-reclamos.unitypromotores.com/explorador.html#search='+$('#buscar-codigo').text());
});

$('#pendientes').on('click', function(e){
   side();
   $('#moderador').attr('src','https://reclamosgt.unitypromotores.com/MdBitacora/CabinaVirtual/Pendientes.aspx');
});

