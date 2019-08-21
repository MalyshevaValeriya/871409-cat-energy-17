if (document.documentElement.clientWidth>=768) {

  var sliderToggle=document.body.getElementsByClassName("slider__toggle")[0];
  var sliderScale=document.body.getElementsByClassName("slider__scale")[0];


  var sliderItemAfter=document.body.getElementsByClassName("slider__img slider__img--after")[0];
  var sliderItemBefore=document.body.getElementsByClassName("slider__img slider__img--before")[0];

    //Разрезаем пополам картинки
  sliderToggle.addEventListener('mousedown', toggleClick);
  sliderToggle.addEventListener('mouseup', toggleMouseUp);
  document.body.addEventListener('mouseup', toggleMouseUp);
  //sliderToggle.addEventListener('mouseover', toggleMouseUp);

  //функция навешивания двигания картинки при клике
  function toggleClick(event) {
    document.body.addEventListener('mousemove', move);
  }

  //функция удаления двигания картинки при клике
  function toggleMouseUp() {
    document.body.removeEventListener('mousemove', move);
  }

  //функция двигания картинки
  function move(event) {

  //вычисляем координату X кнопки
  var toggleCoordsX=event.pageX-sliderScale.getBoundingClientRect().left;
  //console.log("x-coords: "+ toggleCoordsX);
  if (toggleCoordsX<0) {
    toggleCoordsX=0;
      };
  if (toggleCoordsX>sliderScale.offsetWidth-18) {
    toggleCoordsX=sliderScale.offsetWidth-18;
      };

  //console.log("x-coords: "+ toggleCoordsX);

  var scaleRatio=toggleCoordsX/(sliderScale.offsetWidth-18);

  //console.log(scaleRatio);

  sliderToggle.style.left=toggleCoordsX+"px";
  sliderItemBefore.style.clip="rect(0px,"+sliderItemBefore.width*(1-scaleRatio)+"px,517px,0px)";
  sliderItemAfter.style.clip="rect(0px,690px,517px,"+sliderItemAfter.width*(1-scaleRatio)+"px)";
  window.getSelection().removeAllRanges();
  }

  sliderBefore=document.getElementById("slider-before");

  sliderBefore.onclick = function() {
  console.log("before");
  sliderItemBefore.style.clip="rect(0px,690px,517px,0px)";
  sliderItemAfter.style.clip="rect(0px,0px,517px,0px)";
  sliderToggle.style.left="0px";
  }



  sliderAfter=document.getElementById("slider-after");

  sliderAfter.onclick = function() {
  console.log("after");
  sliderItemBefore.style.clip="rect(0px,0px,517px,0px)";
  sliderItemAfter.style.clip="rect(0px,690px,517px,0px)";
  sliderToggle.style.left=sliderScale.offsetWidth-18+"px";
  }

}
