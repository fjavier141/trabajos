$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  window.onload = function () {
    var item = document.getElementById("portafolio")
    item.style.color = '#1c9b0c';
    item.style.textShadow = '1px 1px 2px #1c9b0c';
  }

  $('#CL-AT').mouseover(function(){
    document.getElementById('region-III').style.display = 'block';
  })
  $('#CL-AT').mouseout(function(){
    document.getElementById('region-III').style.display = 'none';
  })
  $('#CL-CO').mouseover(function(){
    document.getElementById('region-IV').style.display = 'block';
  })
  $('#CL-CO').mouseout(function(){
    document.getElementById('region-IV').style.display = 'none';
  })
  $('#CL-RM').mouseover(function(){
    document.getElementById('region-RM').style.display = 'block';
  })
  $('#CL-RM').mouseout(function(){
    document.getElementById('region-RM').style.display = 'none';
  })
  $('#CL-VS').mouseover(function(){
    document.getElementById('region-V').style.display = 'block';
  })
  $('#CL-VS').mouseout(function(){
    document.getElementById('region-V').style.display = 'none';
  })
  $('#CL-BI').mouseover(function(){
    document.getElementById('region-VIII').style.display = 'block';
  })
  $('#CL-BI').mouseout(function(){
    document.getElementById('region-VIII').style.display = 'none';
  })
});
