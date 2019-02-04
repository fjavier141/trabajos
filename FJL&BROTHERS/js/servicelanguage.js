$(function () { // Same as document.addEventListener("DOMContentLoaded"...
    var cont_service = "";

    if ($elección == 0) {
        cont_service = "data/services.json";
    } else {
        cont_service = "data/services-es.json";
    }

    $ajaxUtils
        .sendGetRequest(cont_service,
            function (request) {
                var cont_serviceText = request.responseText;
                insertServiceContent(cont_serviceText);
            });

    document.getElementById("EN")
        .addEventListener("click", function () {
            cont_service = "data/services.json";
            // Call server to get the name
            $ajaxUtils
                .sendGetRequest(cont_service,
                    function (request) {
                        var cont_serviceText = request.responseText;
                        insertServiceContent(cont_serviceText);
                    });
        });
    document.getElementById("ES")
        .addEventListener("click", function () {
            cont_service = "data/services-es.json";
            // Call server to get the name
            $ajaxUtils
                .sendGetRequest(cont_service,
                    function (request) {
                        var cont_serviceText = request.responseText;
                        insertServiceContent(cont_serviceText);
                    });
        });

    function insertServiceContent(input3) {
        input3 = JSON.parse(input3);
        //ENCABEZADO
        $("#services-container").children('h2').html(input3[0]["servicios-container"]);
        //SERVICIOS
        $("#our-services").children('h3').html(input3[1]["our-services"]["h3"]);
        $("#our-services").children('p').html(input3[1]["our-services"]["p"]);
        $("#servicio-1").children('h4').html(input3[1]["servicio-1"]["h4"]);
        $("#servicio-1").children('p').html(input3[1]["servicio-1"]["p"]);
        $("#servicio-3").children('h4').html(input3[1]["servicio-3"]["h4"]);
        $("#servicio-3").children('p').html(input3[1]["servicio-3"]["p"]);
        $("#servicio-4").children('h4').html(input3[1]["servicio-4"]["h4"]);
        $("#servicio-4").children('p').html(input3[1]["servicio-4"]["p"]);
        $("#servicio-3").children('h4').html(input3[1]["servicio-3"]["h4"]);
        //FRASE CELEBRE 2
        $("#frase2").children('h1').html(input3[2]["frase2"]);
        //SOBRE NOSOTROS
        $(".about-us").children('h3').html(input3[3]["about-us"]["h3"]);
        $(".about-us").children('p').html(input3[3]["about-us"]["p"]);                
    }




});