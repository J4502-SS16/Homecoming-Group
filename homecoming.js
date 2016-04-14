$(document).ready(function(){
  $('.menu-trigger').click(function(){
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
