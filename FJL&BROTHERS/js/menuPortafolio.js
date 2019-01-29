$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  window.onload = function () {
    var item = document.getElementById("portafolio")
    item.style.color = '#1c9b0c';
    item.style.textShadow = '1px 1px 2px #1c9b0c';
  }
  var atacama = document.getElementById('CL-AT');
  atacama.addEventListener("mouseover", funcion);
  atacama.addEventListener("mouseover", funcion);  

  function funcion(){
    document.getElementById('region-III').style.display = 'block';
  }
  setTimeout(function(){
    document.getElementById('region-III').style.display = 'none';
  },1000)
});
