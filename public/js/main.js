$(document).ready(function(){


    $.ajax({

        url:"http://localhost/wbrest/informe.php",

        method:"GET",

        data:"",

        success:function(response){

            var data = JSON.parse(response);

            var table = new Table("#tablaMultiservicios",data);
            
        }


    });



});