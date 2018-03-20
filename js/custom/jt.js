$(document).ready(function() {
  var nextArrow = $('.nextArrow');
  var prevArrow = $('.prevArrow');
  var nextText = $('.nextText');
  var prevText = $('.prevText');
  var headSlider = $('#dasSlider');
  var decline = $('.pending_decline');
  var pendingItem = $('.eventsection__left__container__list__item');
  var setActiveAfter = $('#setActiveAfter');
  nextArrow.hover(
    function() {
      prevArrow.css('opacity', 0).css('transition', 'all 100ms ease');
      nextText.css('width', '90px').css('transition', 'all 300ms ease');
    },
    function() {
      prevArrow.css('opacity', 1).css('transition', 'all 300ms 100ms ease');
      nextText.css('width', 0).css('transition', 'all 200ms ease');
    }
  );

  prevArrow.hover(
    function() {
      nextArrow.css('opacity', 0).css('transition', 'all 100ms ease');
      prevText.css('width', '120px').css('transition', 'all 300ms ease');
    },
    function() {
      nextArrow.css('opacity', 1).css('transition', 'all 300ms 100ms ease');
      prevText.css('width', 0).css('transition', 'all 200ms ease');
    }
  );

  headSlider.owlCarousel({
    'items': 1,
    'loop': true,
    'smartSpeed': 500
  });

  nextArrow.click(function() {
    // console.log('y');
    headSlider.trigger('next.owl.carousel');
  });

  prevArrow.click(function() {
    headSlider.trigger('prev.owl.carousel');
  });

  var thisDecline = $('#thisDecline');
  thisDecline.click(function() {
    console.log('x');
    console.dir(setActiveAfter);
    setActiveAfter.addClass('selectedEvent');
    $('.pendingIndicator').text('2');
    $(this)[0].parentNode.parentNode.remove();

  });
});