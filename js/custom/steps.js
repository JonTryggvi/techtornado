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




//Go between steps
 $("#next1").click(function(){
   $(".placement-line").addClass("placement-line-two");
   $(".placement-line").removeClass("placement-line-two2one");
   $(".input-form__step-one-info").css("display", "none");
   $(".input-form__step-two-info").css("display", "block");
   $(".input-form__step-three-info").css("display", "none");
   $(".input-form__step-two").css("background-color", "#E7FCF9");
 });
 $("#backTo1").click(function(){
   $(".placement-line").addClass("placement-line-two2one");
   $(".placement-line").removeClass("placement-line-two");
   $(".placement-line").removeClass("placement-line-three2two");
   $(".input-form__step-one-info").css("display", "block");
   $(".input-form__step-two-info").css("display", "none");
   $(".input-form__step-three-info").css("display", "none");
   $(".input-form__step-two").css("background-color", "#FFFFFF");
 });
 $("#next2").click(function(){
   $(".placement-line").addClass("placement-line-three");
   $(".placement-line").removeClass("placement-line-three2two");
   $(".input-form__step-one-info").css("display", "none");
   $(".input-form__step-two-info").css("display", "none");
   $(".input-form__step-three-info").css("display", "block");
   $(".input-form__step-three").css("background-color", "#E7FCF9");
 });
 $("#backTo2").click(function(){
   $(".placement-line").addClass("placement-line-three2two");
   $(".placement-line").removeClass("placement-line-three");
   $(".input-form__step-one-info").css("display", "none");
   $(".input-form__step-two-info").css("display", "block");
   $(".input-form__step-three-info").css("display", "none");
   $(".input-form__step-three").css("background-color", "#FFFFFF");
 });
 $("#next3").click(function(){
   $(".placement-line").addClass(".placement-line-four");
 });

 $('#form-select-dropdown').niceSelect();
 $("#form-multible-select").chosen({placeholder_text_single: "Veldu póstnúmer", width: "100%"});
 //console.log($("#form-multible-select"));

 var selectbox = $("#form-multible-select");
 var chosen = $('.chosen-choices');
 //console.log(selectbox[0].length);
 $("#form-multible-select").on('change', function() {
   //console.dir(this);
   var isItTrue = false;
    //console.dir(this.children);
    for (var i = 0; i <this.children.length; i++) {
      if(this.children[i].selected === true ) {
        isItTrue = true;
      }
    }
    //console.log(isItTrue);
    if(isItTrue){
      $('#next1').attr("disabled", false);
      $('#next1').addClass( "button-active" );
      $('#next1').addClass( "button-active-hover" );
    }
    else {
      $('#next1').attr("disabled", true);
      $('#next1').removeClass( "button-active" );
      $('#next1').removeClass( "button-active-hover" );
    }


 });

 //console.log($("#routeName"));
 $("#step-three").on('change', function() {

   if($('#routeName').val() === '' || $('#routeAboutIce').val() === '' || $('#routeAboutEng').val() === ''){
     //console.log("empty");
     $('#next3').attr("disabled", true);
     $('#next3').removeClass( "button-active" );
     $('#next3').removeClass( "button-active-hover" );
   }
   else{
     //console.log("something there");
     $('#next3').attr("disabled", false);
     $('#next3').addClass( "button-active" );
     $('#next3').addClass( "button-active-hover" );
   }

 });
});
