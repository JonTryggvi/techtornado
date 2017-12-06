///dropdown for Genre
$(document).ready(function() {

  $('#filterDropdown').click(function() {
    $('.filterGenre__icon').toggleClass('iconActive');
    $('.filterGenre__dropdown').toggleClass('dropdownActive');
  });


      //image slider
      $("#myImageSlider").owlCarousel({
          stagePadding: 100,
          loop: true,
          margin: 10,
          nav: false,
          items: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          autoplayTimeout: 10000,
          responsive: {
            600: {
              items: 1,
              stagePadding: 60
            },
            1000: {
              items: 1,
              stagePadding: 100
            },
            1400: {
              items: 1,
              stagePadding: 140
            },
            1600: {
              items: 1,
              stagePadding: 350
            },
            1800: {
              items: 1,
              stagePadding: 400
            }
            }
          });



          //to trigger next slide by clicking on item in slide.
          //butt how to trigger next and previous??
          // see more on https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html
          // var owl = $("#myImageSlider");
          // owl.owlCarousel();
          //
          // $('.owl-item').click(function() {
          //     owl.trigger('next.owl.carousel');
          // });

          // $('.owl-item').click(function() {
          //   // With optional speed parameter
          //   // Parameters has to be in square bracket '[]'
          //   owl.trigger('prev.owl.carousel');
          // });


          // open the sponsers modal
          var btnShowSponsers = $('#btnShowSponsers');
          var btnCLoseSponsers = $('#btnCLoseSponsers');
          var sponsorsModal = $('#sponsorsModal');

          btnShowSponsers.click(function() {
            console.log('x');
            sponsorsModal.addClass('scaleUp');
          });

          btnCLoseSponsers.click(function() {
            console.log('x');
            sponsorsModal.removeClass('scaleUp');
              });

});
