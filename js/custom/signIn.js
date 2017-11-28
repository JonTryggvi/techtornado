$( document ).ready(function() {
  // Input Email Icon
  $( ".inputLogInEmail" ).focus(function() {
    $(".envelopeRed").css({
      "transition": "all 300ms 100ms ease",
      "fill": "#FF6565",
      "transform": "translateX(0px)"
    });
    $(".envelopeRedToBlack").css({
      "stroke": "#000"
    });
  });


  // Input password Icon
  $( ".inputLogInPassword" ).focus(function() {
    $(".lockRed").css({
      "transition": "all 300ms 100ms ease",
      "fill": "#FF6565",
      "transform": "translateX(0px)"
    });
    $(".lockRedBlack").css({
      "stroke": "#000"
    });
  });

  // Sign in with Facebook Icon
  $(".withFacebook").mouseover(function(){
    $(".arrowForwRedFacebook").css({
      "transition": "all 300ms 100ms ease",
      "fill": "#FF6565",
      "transform": "translateX(0px)"
    });
  });
  $(".withFacebook").mouseout(function() {
    $(".arrowForwRedFacebook").css({
      "transition": "all 300ms 100ms ease",
      "fill": "transparent",
      "transform": "translateX(-5px)"
    });
  });
  // Sign in with Google Icon
  $(".withGoogle").mouseover(function(){
    $(".arrowForwRedGoogle").css({
      "transition": "all 300ms 100ms ease",
      "fill": "#FF6565",
      "transform": "translateX(0px)"
    });
  });
  $(".withGoogle").mouseout(function() {
    $(".arrowForwRedGoogle").css({
      "transition": "all 300ms 100ms ease",
      "fill": "transparent",
      "transform": "translateX(-5px)"
    });
  });
});
