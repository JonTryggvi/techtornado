$(document).ready(function(){

  $("#fromOnetoTwo").click(function(){
    $(".step1").css("display", "none");
    $(".step2").css("display", "block");
    $(".step3").css("display", "none");
    $(".step4").css("display", "none");
    $(".stepDone").css("display", "none");
    $(".step2__line").addClass("step2-line");
  });
  $("#fromTwotoOne").click(function(){
    $(".step1").css("display", "block");
    $(".step2").css("display", "none");
    $(".step3").css("display", "none");
    $(".step4").css("display", "none");
    $(".stepDone").css("display", "none");
    // $(".placement-line").addClass("placement-line-two");
    // $(".placement-line").removeClass("placement-line-two2one");
    // $(".input-form__step-two").css("background-color", "#E7FCF9");
  });
  $("#fromTwotoThree").click(function(){
    $(".step1").css("display", "none");
    $(".step2").css("display", "none");
    $(".step3").css("display", "block");
    $(".step4").css("display", "none");
    $(".stepDone").css("display", "none");
    $(".step3__line").addClass("step3-line");
    // $(".placement-line").removeClass("placement-line-two2one");
    // $(".input-form__step-two").css("background-color", "#E7FCF9");
  });
  $("#fromThreetoTwo").click(function(){
    $(".step1").css("display", "none");
    $(".step2").css("display", "block");
    $(".step3").css("display", "none");
    $(".step4").css("display", "none");
    $(".stepDone").css("display", "none");
    // $(".placement-line").addClass("placement-line-two");
    // $(".placement-line").removeClass("placement-line-two2one");
    // $(".input-form__step-two").css("background-color", "#E7FCF9");
  });
  $("#fromThreetoFour").click(function(){
    $(".step1").css("display", "none");
    $(".step2").css("display", "none");
    $(".step3").css("display", "none");
    $(".step4").css("display", "block");
    $(".stepDone").css("display", "none");
    $(".step4__line").addClass("step4-line");
    // $(".placement-line").addClass("placement-line-two");
    // $(".placement-line").removeClass("placement-line-two2one");
    // $(".input-form__step-two").css("background-color", "#E7FCF9");
  });
  $("#fromFourtoThree").click(function(){
    $(".step1").css("display", "none");
    $(".step2").css("display", "none");
    $(".step3").css("display", "block");
    $(".step4").css("display", "none");
    $(".stepDone").css("display", "none");
    // $(".placement-line").addClass("placement-line-two");
    // $(".placement-line").removeClass("placement-line-two2one");
    // $(".input-form__step-two").css("background-color", "#E7FCF9");
  });
  $("#fromFourtoDone").click(function(){
    $(".step1").css("display", "none");
    $(".step2").css("display", "none");
    $(".step3").css("display", "none");
    $(".step4").css("display", "none");
    $(".stepDone").css("display", "block");
    $(".stepDone__line").addClass("stepDone-line");
    // $(".placement-line").addClass("placement-line-two");
    // $(".placement-line").removeClass("placement-line-two2one");
    // $(".input-form__step-two").css("background-color", "#E7FCF9");
  });



   /***** * * * CREATE EVENT * * * *****/
   //EVENT NAME
   $(".inputCreateEventName").focus(function() {
     $(".tagRedFill").css({
       "transition": "all 300ms 100ms ease",
       "fill": "#FF6565",
       "transform": "translate(-6px, 5px)"
     });
     $(".tagFill").css({
       "fill": "#000"
     });
   });
   //LOCATION
   $(".inputCreateEventLocation").focus(function() {
     $(".locationRedFill").css({
       "transition": "all 300ms 100ms ease",
       "fill": "#FF6565",
       "transform": "translate(-2px, -1px)"
     });
     $(".locationRedStroke").css({
       "stroke": "#000"
     });
   });
   //CLOCK
   $(".inputCreateEventClock").focus(function() {
     console.log("Event");
     $(".clockRedFill").css({
       "transition": "all 300ms 100ms ease",
       "fill": "#FF6565",
       "transform": "translateX(0px)"
     });
     $(".clockRedStroke").css({
       "stroke": "#000"
     });
   });
   //PRICE
   $(".inputCreateEventPrice").focus(function() {
     $(".priceRedFill").css({
       "transition": "all 300ms 100ms ease",
       "stroke": "#FF6565",
       "transform": "translateX(0px)"
     });
     $(".priceRedStroke").css({
       "stroke": "#000",
       "fill": "#000"
     });
   });

});
