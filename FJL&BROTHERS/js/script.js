(function (global) { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbarNavDropdown").collapse('hide');
    }
  });
  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on

  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });

  //Carga de contenido

  var elección = 0;
  var barras = "";

  if (localStorage.getItem('value') == null) {
    elección = 0;
  } else {
    elección = localStorage.getItem('value');
  }

  if (elección == 0) {
    barras = "data/navbar-footer.json";
  } else {
    barras = "data/navbar-footer-es.json";
  }

  $ajaxUtils
    .sendGetRequest(barras,
      function (request) {
        var barFootText = request.responseText;
        barFoot(barFootText);
      });

  document.getElementById("EN")
    .addEventListener("click", function () {
      elección = 0;
      localStorage.setItem('value', elección);
      barras = "data/navbar-footer.json";
      // Call server to get the name
      $ajaxUtils
        .sendGetRequest(barras,
          function (request) {
            var barFootText = request.responseText;
            barFoot(barFootText);
          });
    });
  document.getElementById("ES")
    .addEventListener("click", function () {
      elección = 1;
      localStorage.setItem('value', elección);
      barras = "data/navbar-footer-es.json";
      // Call server to get the name
      $ajaxUtils
        .sendGetRequest(barras,
          function (request) {
            var barFootText = request.responseText;
            barFoot(barFootText);
          });
    });

  function barFoot(input1) {
    input1 = JSON.parse(input1);
    //NAVBAR
    $("#inicio").html(input1[0].inicio);
    $("#servicios").html(input1[0].servicios);
    $("#portafolio").html(input1[0].portafolio);
    $("#contacto").html(input1[0].contacto);
     //FOOTER
     $("#tit_acerca").html(input1[1].tit_acerca);
     $("#p_acerca").html(input1[1].p_acerca);
     $("#tit_contacto").html(input1[1].tit_contacto);     
    
  }
  global.$elección = elección;

})(window);