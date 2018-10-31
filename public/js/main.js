$(document).ready(function(){


    $.ajax({

        url:"http://localhost/wbrest/informe.php",

        method:"GET",

        data:"",

        success:function(response){

            var table = new Table("#tablaMultiservicios",response);
            
        }


    });



});