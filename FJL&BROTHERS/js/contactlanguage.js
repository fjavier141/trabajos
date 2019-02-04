$(function () { // Same as document.addEventListener("DOMContentLoaded"...
    var cont_contact = "";

    if ($elección == 0) {
        cont_contact = "data/contact.json";
    } else {
        cont_contact= "data/contact-es.json";
    }

    $ajaxUtils
        .sendGetRequest(cont_contact,
            function (request) {
                var cont_contactText = request.responseText;
                insertContactContent(cont_contactText);
            });

    document.getElementById("EN")
        .addEventListener("click", function () {
            cont_contact = "data/contact.json";
            // Call server to get the name
            $ajaxUtils
                .sendGetRequest(cont_contact,
                    function (request) {
                        var cont_contactText = request.responseText;
                        insertContactContent(cont_contactText);
                    });
        });
    document.getElementById("ES")
        .addEventListener("click", function () {
            cont_contact = "data/contact-es.json";
            // Call server to get the name
            $ajaxUtils
                .sendGetRequest(cont_contact,
                    function (request) {
                        var cont_contactText = request.responseText;
                        insertContactContent(cont_contactText);
                    });
        });

    function insertContactContent(input5) {
        input5 = JSON.parse(input5);
        //ENCABEZADO
        $("#contact-container").children('h2').html(input5[0]["contact-container"]);
        //DIRECCION
        $("#direccion").children('h3').html(input5[1]["h3"]);
        $("#tit-direccion").html("<strong>"+ input5[1]["Dirección"] +"</strong>");
        $("#tit-email").html("<strong>"+ input5[1]["Email"] +"</strong>");        
        //SUBMIT
        $(".alert").html(input5[2]["alert"]);           
        $("#btn-submit").html(input5[3]["boton"]); 
        //MAPA  
        $("#mapa").children('h3').html(input5[4]["map-tit"]); 
        $("#map-tile").children('span').html(input5[5]["map"]);        
    }




});