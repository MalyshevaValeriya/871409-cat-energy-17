var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });




if (document.documentElement.clientWidth>=1300) {


var sliderToggle=document.body.getElementsByClassName("slider__toggle")[0];

var sliderScale=document.body.getElementsByClassName("slider__scale")[0];

var sliderItemAfter=document.body.getElementsByClassName("slider__img slider__img--after")[0];
var sliderItemBefore=document.body.getElementsByClassName("slider__img slider__img--before")[0];

//Разрезаем пополам картинки
sliderItemBefore.style.clip="rect(0px,345px,517px,0px)";
sliderItemAfter.style.clip="rect(0px,690px,517px,345px)";
//sliderScale.style.height="36px";
//sliderScale.style.backgroundColor="green";

sliderToggle.addEventListener('mousedown', toggleClick);
sliderToggle.addEventListener('mouseup', toggleMouseUp);
sliderToggle.addEventListener('mouseover', toggleMouseUp);

//функция навешивания двигания картинки при клике
function toggleClick(event) {
sliderToggle.addEventListener('mousemove', move);
}
//функция удаления двигания картинки при клике
function toggleMouseUp() {
sliderToggle.removeEventListener('mousemove', move);
}

//функция двигания картинки
function move(event) {

//вычисляем координату X кнопки
var toggleCoordsX=event.pageX-sliderScale.getBoundingClientRect().left;
console.log("x-coords: "+ toggleCoordsX);
if (toggleCoordsX<0) {
  toggleCoordsX=0;
    };
if (toggleCoordsX>sliderScale.offsetWidth-18) {
  toggleCoordsX=sliderScale.offsetWidth-18;
    };
console.log("x-coords: "+ toggleCoordsX);
var scaleRatio=toggleCoordsX/(sliderScale.offsetWidth-18);
console.log(scaleRatio);
sliderToggle.style.left=toggleCoordsX+"px";

sliderItemBefore.style.clip="rect(0px,"+sliderItemBefore.width*(1-scaleRatio)+"px,517px,0px)";
sliderItemAfter.style.clip="rect(0px,690px,517px,"+sliderItemAfter.width*(1-scaleRatio)+"px)";

}



  console.log(2)}
