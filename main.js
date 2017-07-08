(function ($) {
 $(document).ready(function(){

   // hide .navbar first
   $("#scroll-nav-bar").hide();

   // fade in .navbar
   $(function () {
     $(window).scroll(function () {
       // set distance user needs to scroll before we fadeIn navbar
       if ($(this).scrollTop() > 980) {
          $('#scroll-nav-bar').fadeIn("slow");
       } else {
          $('#scroll-nav-bar').fadeOut("slow");
       }
   });


});

});
}(jQuery));
