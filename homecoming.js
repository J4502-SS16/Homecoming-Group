$(document).ready(function(){
  $('.logo').click(function(){
      $('nav ul').slideToggle(500);
      //500 refers to speed of how quick it slides open//
  });
  $(window).resize(function(){
    if($(window).width()>700){
        $('nav ul').removeAttr('style');
    }
    //this first one tells it to slide out and the second removes display none//
    //700 refers to size of screen that its displaying on//
  });
});
//this is for pop up text on homepage images//
var item = document.getElementById("MarchingMizzou");
item.addEventListener("mousover", func, false);
item.addEventListener("mousout", func1, false);

function func()
{
  document.getElementByID("text").setAttribute("style", "display:block;")
}
function func1()
{
  document.getElementById("text").setAttribute("style", "display:block;")
}
