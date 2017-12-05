///dropdown for Genre
$(document).ready(function() {

  $('#filterDropdown').click(function() {
    $('.filterGenre__icon').toggleClass('iconActive');
    $('.filterGenre__dropdown').toggleClass('dropdownActive');
  });

<<<<<<< HEAD
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
=======
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

  ////floating button
  var paths = [{
      path: 'M77.7122332,142.612593 C117.736274,127.78677 174.519689,111.164655 156.124449,66.1757496 C137.729209,21.1868438 126.894016,6.99966701 82.429832,1.58158455 C37.9656476,-3.8364979 2.47925544,29.2496673 2.00462116,73.7991365 C1.52998687,118.348606 37.6881921,157.438416 77.7122332,142.612593 Z',
      fill: '#FF6565'
    },
    {
      path: 'M77.3080886,142.479321 C113.828227,137.154549 160.022115,111.02626 155.720304,66.042478 C151.418494,21.0586959 123.195846,-6.8199141 82.0256874,1.44831291 C40.8555289,9.71653993 -9.67048085,35.925882 1.60047658,73.6658649 C12.871434,111.405848 40.7879504,147.804093 77.3080886,142.479321 Z',
      fill: '#FF6565'
    },
    {
      path: 'M80.7122332,146.612593 C125.868647,144.562587 156.343176,128.036664 159.124449,70.1757496 C161.905722,12.3148354 124.624258,-1.35704686 79.4775428,0.182045709 C34.3308276,1.72113827 4.9571936,35.3927144 0.837241732,79.7384733 C-3.28271014,124.084232 35.5558196,148.662598 80.7122332,146.612593 Z',
      fill: '#FF6565'
    },
    {
      path: 'M97.6907049,154.149794 C142.82695,143.103926 176.838802,139.397539 168.148687,81.9014386 C159.458573,24.4053378 128.592961,-10.9676162 77.1851757,3.38154271 C25.77739,17.7307016 -5.12486654,36.6657282 1.98427531,82.3254743 C9.09341716,127.98522 52.5544596,165.195662 97.6907049,154.149794 Z',
      fill: '#FF6565'
    },
    {
      path: 'M77.3080886,142.479321 C113.828227,137.154549 160.022115,111.02626 155.720304,66.042478 C151.418494,21.0586959 123.195846,-6.8199141 82.0256874,1.44831291 C40.8555289,9.71653993 -9.67048085,35.925882 1.60047658,73.6658649 C12.871434,111.405848 40.7879504,147.804093 77.3080886,142.479321 Z',
      fill: '#FF6565'
    }
  ];

  var svggaur = $('.svggaur');

  // if (svggaur) {
  //   for (var i = 0; i < svggaur.length; i++) {
  //     console.log(svggaur[i]);
  //     var s = Snap(svggaur[i]);
  //     var p = s.path(paths[0].path).attr({
  //       fill: paths[0].fill
  //     });
  //     var counter = 0;
  //
  //     setInterval(morph, 2500);
  //
  //     function morph() {
  //       if (counter < paths.length) {
  //         ++counter;
  //       } else {
  //         counter = 0;
  //       }
  //       p.animate({
  //         d: paths[counter].path,
  //         fill: paths[counter].fill
  //       }, 1600, mina.easein)
  //     }
  //   }
  // }

});
>>>>>>> devMaster
