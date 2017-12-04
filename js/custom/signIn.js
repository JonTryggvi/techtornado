$(document).ready(function() {
  // Input Email Icon
  $(".inputLogInEmail").focus(function() {
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
  $(".inputLogInPassword").focus(function() {
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
  $(".withFacebook").mouseover(function() {
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
  $(".withGoogle").mouseover(function() {
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


  // signin with jquery
  var btnSignin = $('#btnSignin');
  var signIn = $('.signIn');
  var btnCLoseSignIn = $('#btnCLoseSignIn');
  var btnSendSignIn = $('#btnSendSignIn');
  var btnUserOptions = $('#btnUserOptions');
  var userOptionsDropdown = $('#userOptionsDropdown');
  btnSignin.click(function() {
    console.log('x');
    signIn.addClass('scaleUp');
  });

  btnCLoseSignIn.click(function() {
    console.log('x');
    signIn.removeClass('scaleUp');
  });

  btnSendSignIn.click(function() {
    $.post('api-signin.php', {
      'loggedin': true
    }).done(function(data) {
      console.log(data);
      signIn.removeClass('scaleUp');
    });
  });

  btnUserOptions.click(function() {
    // console.log('x');
    userOptionsDropdown.toggleClass('dropDownActive');
  });

  $(document).mouseup(function(e) {
    var container = btnUserOptions;

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      userOptionsDropdown.removeClass('dropDownActive');
    }
  });


});



// var closeButton = document.querySelector(".signIn__close");
// var divLogIn = document.querySelector(".signIn");
// closeButton.addEventListener("click", function() {
//   divLogIn.style.display = "none";
// });
//
// var logInFacebook = document.querySelector(".withFacebook");
// var logInGoogle = document.querySelector(".withGoogle");