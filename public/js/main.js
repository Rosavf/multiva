

$(document).ready(function(){

    var table = new Table();

    $.ajax({

        url:"http://localhost/testservice/test.php",

        method:"GET",

        data:"",

        success:function(response){

            console.log(response);

        }


    });

    table.write("#tablaMultiservicios");

});