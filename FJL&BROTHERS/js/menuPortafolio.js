$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  window.onload = function () {
    var item = document.getElementById("portafolio")
    item.style.color = '#1c9b0c';
    item.style.textShadow = '1px 1px 2px #1c9b0c';
  }
/*
  for(var i = 0; i < 15; i++){
    $("#" + (i + 1) + "-region").mouseover(function () {
      $("#region-" + (i + 1)).css("display", "block");
    })
    $("#" + (i + 1) + "-region").mouseout(function () {
      $("#region-" + (i + 1)).css("display", "none");
    })    
  }
*/
  $("#1-region").mouseover(function () {
    $("#region-1").css("display", "block");
    $("#region-1").css("top", "5%");
  })
  $("#1-region").mouseout(function () {
    $("#region-1").css("display", "none");
  })
  $("#2-region").mouseover(function () {
    $("#region-2").css("display", "block");
    $("#region-2").css("top", "10%");
  })
  $("#2-region").mouseout(function () {
    $("#region-2").css("display", "none");
  })
  $("#3-region").mouseover(function () {
    $("#region-3").css("display", "block");
    $("#region-3").css("top", "15%");
  })
  $("#3-region").mouseout(function () {
    $("#region-3").css("display", "none");
  })
  $("#4-region").mouseover(function () {
    $("#region-4").css("display", "block");
    $("#region-4").css("top", "20%");
  })
  $("#4-region").mouseout(function () {
    $("#region-4").css("display", "none");
  })
  $("#5-region").mouseover(function () {
    $("#region-5").css("display", "block");
    $("#region-5").css("top", "25%");
  })
  $("#5-region").mouseout(function () {
    $("#region-5").css("display", "none");
  })
  $("#6-region").mouseover(function () {
    $("#region-6").css("display", "block");
    $("#region-6").css("top", "30%");
  })
  $("#6-region").mouseout(function () {
    $("#region-6").css("display", "none");
  })
  $("#7-region").mouseover(function () {
    $("#region-7").css("display", "block");
    $("#region-7").css("top", "35%");
  })
  $("#7-region").mouseout(function () {
    $("#region-7").css("display", "none");
  })
  $("#8-region").mouseover(function () {
    $("#region-8").css("display", "block");
    $("#region-8").css("top", "40%");
  })
  $("#8-region").mouseout(function () {
    $("#region-8").css("display", "none");
  })
  $("#9-region").mouseover(function () {
    $("#region-9").css("display", "block");
    $("#region-9").css("top", "45%");
  })
  $("#9-region").mouseout(function () {
    $("#region-9").css("display", "none");
  })
  $("#10-region").mouseover(function () {
    $("#region-10").css("display", "block");
    $("#region-10").css("top", "50%");
  })
  $("#10-region").mouseout(function () {
    $("#region-10").css("display", "none");
  })
  $("#11-region").mouseover(function () {
    $("#region-11").css("display", "block");
    $("#region-6").css("top", "55%");
  })
  $("#11-region").mouseout(function () {
    $("#region-11").css("display", "none");
  })
  $("#12-region").mouseover(function () {
    $("#region-12").css("display", "block");
    $("#region-6").css("top", "60%");
  })
  $("#12-region").mouseout(function () {
    $("#region-12").css("display", "none");
  })
  $("#13-region").mouseover(function () {
    $("#region-13").css("display", "block");
    $("#region-13").css("top", "27%");
  })
  $("#13-region").mouseout(function () {
    $("#region-13").css("display", "none");
  })
  $("#14-region").mouseover(function () {
    $("#region-14").css("display", "block");
    $("#region-14").css("top", "47%");
  })
  $("#14-region").mouseout(function () {
    $("#region-14").css("display", "none");
  })
  $("#15-region").mouseover(function () {
    $("#region-15").css("display", "block");
    $("#region-15").css("top", "0");
  })
  $("#15-region").mouseout(function () {
    $("#region-15").css("display", "none");
  })

});