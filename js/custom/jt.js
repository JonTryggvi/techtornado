var nextArrow = $('.nextArrow');
var prevArrow = $('.prevArrow');
var nextText = $('.nextText');
var prevText = $('.prevText');
var headSlider = $('.fp-hero__slider__content');
nextArrow.hover(
  function() {
    prevArrow.css('opacity', 0).css('transition', 'all 100ms ease');
    nextText.css('width', '90px').css('transition', 'all 300ms ease');
  },
  function() {
    prevArrow.css('opacity', 1).css('transition', 'all 300ms 300ms ease');
    nextText.css('width', 0).css('transition', 'all 300ms ease');
  }
);

prevArrow.hover(
  function() {
    nextArrow.css('opacity', 0).css('transition', 'all 100ms ease');
    prevText.css('width', '120px').css('transition', 'all 300ms ease');
  },
  function() {
    nextArrow.css('opacity', 1).css('transition', 'all 300ms ease');
    prevText.css('width', 0).css('transition', 'all 300ms ease');
  });
$(document).ready(function() {
  headSlider.owlCarousel({
    'items': 1
  });
})