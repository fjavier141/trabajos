$(function () { // Same as document.addEventListener("DOMContentLoaded"...
    var cont_portfolio = "";

    if ($elección == 0) {
        cont_portfolio = "data/portfolio.json";
    } else {
        cont_portfolio = "data/portfolio-es.json";
    }

    $ajaxUtils
        .sendGetRequest(cont_portfolio,
            function (request) {
                var cont_portfolioText = request.responseText;
                insertPortfolioContent(cont_portfolioText);
                colorear(cont_portfolioText);
            });

    document.getElementById("EN")
        .addEventListener("click", function () {
            cont_portfolio = "data/portfolio.json";
            // Call server to get the name
            $ajaxUtils
                .sendGetRequest(cont_portfolio,
                    function (request) {
                        var cont_portfolioText = request.responseText;
                        insertPortfolioContent(cont_portfolioText);
                    });
        });
    document.getElementById("ES")
        .addEventListener("click", function () {
            cont_portfolio = "data/portfolio-es.json";
            // Call server to get the name
            $ajaxUtils
                .sendGetRequest(cont_portfolio,
                    function (request) {
                        var cont_portfolioText = request.responseText;
                        insertPortfolioContent(cont_portfolioText);
                    });
        });

    function insertPortfolioContent(input4) {
        input4 = JSON.parse(input4);
        var innerHTML = "";
        //ENCABEZADO
        $("#portfolio-container").children('h2').html(input4[0]["portfolio-container"]);
        //TITULO  
        $("#contenedor-mapaChile").children('h1').html(input4[1]["contenedor-mapaChile"]);
        //INSERCION DE DESCRIPCION PROYECTOS
        var regionesProyectos = "";
        for (var i = 0; i < input4[2]["Regiones"].length; i++) {
            if (input4[2]["Regiones"][i]["projects"][0] != 'x') {
                innerHTML += '<div id=region-' + (i + 1) + ' class="automatic-box">\n' +
                    '<h3>' + input4[2]["Regiones"][i]["name"] + '</h3>\n' +
                    '<div class = "decoration" ></div>\n' +
                    '<p>' + input4[2]["Regiones"][i]["projects"] + '</p>\n' +
                    '</div>\n';
            }
        }
        $(".container-automatic-box").html(innerHTML);

    }

    function colorear(input4) {
        input4 = JSON.parse(input4);
        for (var i = 0; i < input4[2]["Regiones"].length; i++) {
            if (input4[2]["Regiones"][i]["projects"][0] != 'x') {
                $("#" + (i + 1) + "-region").css("fill", "#ddd");
                $("#" + (i + 1) + "-region").mouseover(function () {
                    $(this).css("fill", "#f9bc50");
                    $(this).css("cursor", "pointer");
                });
                $("#" + (i + 1) + "-region").mouseout(function () {
                    $(this).css("fill", "#ddd");
                });

            }
        }
    }

});