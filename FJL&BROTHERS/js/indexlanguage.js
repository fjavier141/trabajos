$(function () { // Same as document.addEventListener("DOMContentLoaded"...
    var cont_index = "";

    if ($elección == 0) {
        cont_index = "data/index.json";
    } else {
        cont_index = "data/index-es.json";
    }

    $ajaxUtils
        .sendGetRequest(cont_index,
            function (request) {
                var cont_indexText = request.responseText;
                insertIndexContent(cont_indexText);
            });

    document.getElementById("EN")
        .addEventListener("click", function () {
            cont_index = "data/index.json";
            // Call server to get the name
            $ajaxUtils
                .sendGetRequest(cont_index,
                    function (request) {
                        var cont_indexText = request.responseText;
                        insertIndexContent(cont_indexText);
                    });
        });
    document.getElementById("ES")
        .addEventListener("click", function () {
            cont_index = "data/index-es.json";
            // Call server to get the name
            $ajaxUtils
                .sendGetRequest(cont_index,
                    function (request) {
                        var cont_indexText = request.responseText;
                        insertIndexContent(cont_indexText);
                    });
        });

    function insertIndexContent(input2) {
        input2 = JSON.parse(input2);
        //SLIDES
        $("#upper1").children('h2').html(input2[0]["slide1"]["h2"]);
        $("#upper1").children('p').html(input2[0]["slide1"]["p"]); 
        $("#lower1").children('button').html(input2[0]["slide1"]["button"]);
        $("#upper2").children('h2').html(input2[0]["slide2"]["h2"]);
        $("#upper2").children('p').html(input2[0]["slide2"]["p"]); 
        $("#lower2").children('button').html(input2[0]["slide2"]["button"]);              
        $("#upper3").children('h2').html(input2[0]["slide3"]["h2"]);
        $("#upper3").children('p').html(input2[0]["slide3"]["p"]); 
        $("#lower3").children('button').html(input2[0]["slide3"]["button"]);    
        //MISION AND VALUES
        $("#descripcion").children('p').html(input2[1]["description"]["p"]);
        $("#vision").children('h3').html('<i id="logoSolar" class="fas fa-solar-panel"></i> ' + input2[1]["vision"]["h3"]);  
        $("#vision").children('p').html(input2[1]["vision"]["p"]);
        $("#mision").children('h3').html('<i id="logoWind" class="fas fa-wind"></i> ' + input2[1]["mision"]["h3"]);     
        $("#mision").children('p').html(input2[1]["mision"]["p"]);
        //FRASE
        $("#frase").children('h1').html(input2[2]["frase"]);
    }




});