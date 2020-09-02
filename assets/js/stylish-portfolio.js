$(document).ready(function() {
  "use strict"; // Start of use strict
  // Creates an image slider
  //var slider = new BeerSlider(document.getElementById('image-slider-container'));

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    console.log(this.hostname);  
    var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 50)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  // $('.js-scroll-trigger').not('#navbarDropdown').click(function() {
  //   $('.navbar-collapse').collapse('hide');
  //   setTimeout(() => $('div.dropdown-menu').removeClass("show"), 400);
  // });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

}); // End of use strict
