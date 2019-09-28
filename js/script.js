$(document).ready(function() {
  $('#banner').viewportChecker({
    repeat: true,
      callbackFunction: function(elem, action){
          $(".home-nav-item").removeClass('active');
          $("#m-banner").addClass('active');
      }
  });
  $('#advantages').viewportChecker({
    repeat: true,
      callbackFunction: function(elem, action){
          $(".home-nav-item").removeClass('active');
          $("#m-advantages").addClass('active');
      }
  });

  $('#situation').viewportChecker({
    repeat: true,
      callbackFunction: function(elem, action){
          $(".home-nav-item").removeClass('active');
          $("#m-situation").addClass('active');
      }
  });
  $('.popular').viewportChecker({
    repeat: true,
      callbackFunction: function(elem, action){
          $(".home-nav-item").removeClass('active');
          $("#m-popular").addClass('active');
      }
  });
  /*Header menu*/

  $(".header-menu img").click(function(){
    $("#menu").toggleClass("show");
  });

  $("#menu a").click(function(){

    setTimeout(function() {
      $(".header-menu img").click();
    }, 200);
    
  });

  $(document).on('click','.milk-shadow',function(){
    $(".header-menu img").click();
  });


$('.car-slider.cs-a').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: $('.slider-arrow-item--prev.a-prev'),
  nextArrow: $('.slider-arrow-item--next.a-next'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.car-slider.cs-b').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: $('.slider-arrow-item--prev.b-prev'),
  nextArrow: $('.slider-arrow-item--next.b-next '),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.car-slider.cs-c').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: $('.slider-arrow-item--prev.c-prev '),
  nextArrow: $(' .slider-arrow-item--next.c-next'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});



$('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });

});


$(".home-nav-item").click(function() {
  $(".home-nav-item").removeClass('active');
  $(this).addClass('active');
});