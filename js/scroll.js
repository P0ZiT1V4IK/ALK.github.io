$(document).ready(function() {
   var margin = 120; // переменная для контроля докрутки
   $('a[href*="#"]').click(function() { // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top-margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
      }, {
         duration: 900, // тут можно контролировать скорость
         easing: "swing"
      });
      return false;
   });
});
