$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  window.onload = function () {
    var item = document.getElementById("inicio")
    item.style.color = '#1c9b0c';
    item.style.textShadow = '1px 1px 2px #1c9b0c';
  }

  $("#navbarToggle").click(function (event) {

      document.getElementById("left").style.display = 'none';
      document.getElementById("right").style.display = 'none';

  });
});