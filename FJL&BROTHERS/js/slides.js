var index = 0;

//imageSlide();

function previousSlide(n){
  index = index + n;
  manualSlide(index);
}

function nextSlide(n){
  index = index + n;
  manualSlide(index);
}

imageSlide();
function imageSlide(){
  var slide = document.getElementsByClassName("slide");
  if(index >= slide.length){
    index = 0;
  }
  for(var i = 0; i < slide.length; i++){
    slide[i].style.display = "none";
  }
  slide[index].style.display = "block";
  index = index + 1;
  setTimeout(imageSlide, 5000);
}

function manualSlide(n){
  var slide = document.getElementsByClassName("slide");
  if(n >= slide.length){
    index = 0;
  }
  if(n < 0){
    index = slide.length - 1;
  }
  for(var i = 0; i < slide.length; i++){
    slide[i].style.display = "none";
  }
  slide[index].style.display = "block";
}
