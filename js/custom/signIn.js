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
    $(".logIn_facebook").css({
      "transform": "translateX(5px)"
    });
  });
  $(".withFacebook").mouseout(function() {
    $(".arrowForwRedFacebook").css({
      "transition": "all 300ms 100ms ease",
      "fill": "transparent",
      "transform": "translateX(-5px)"
    });
    $(".logIn_facebook").css({
      "transform": "translateX(0px)"
    });
  });

  // Sign in with Google Icon
  $(".withGoogle").mouseover(function() {
    $(".arrowForwRedGoogle").css({
      "transition": "all 300ms 100ms ease",
      "fill": "#FF6565",
      "transform": "translateX(0px)"
    });
    $(".logIn_google").css({
      "transform": "translateX(5px)"
    });
  });
  $(".withGoogle").mouseout(function() {
    $(".arrowForwRedGoogle").css({
      "transition": "all 300ms 100ms ease",
      "fill": "transparent",
      "transform": "translateX(-10px)"
    });
    $(".logIn_google").css({
      "transform": "translateX(0px)"
    });
  });


  // signin with jquery
  var btnSignin = $('#btnSignin');
  var signIn = $('.signIn');
  var btnCLoseSignIn = $('#btnCLoseSignIn');
  var btnSendSignIn = $('#btnSendSignIn');
  var btnUserOptions = $('#btnUserOptions');
  var userOptionsDropdown = $('#userOptionsDropdown');
  var btnSignOut = $('#signOut');
  var btnCreateevent = $('#btnCreateevent');
  btnSignin.click(function() {
    //console.log('x');
    signIn.addClass('scaleUp');
  });

  btnCreateevent.click(function() {
    //console.log('x');
    signIn.addClass('scaleUp');
  });

  btnCLoseSignIn.click(function() {
    //console.log('x');
    signIn.removeClass('scaleUp');
  });

  btnSendSignIn.click(function() {
    $.post('api-signin.php', {
      'loggedin': true
    }).done(function(data) {
      console.log(data);
      signIn.removeClass('scaleUp');
      hidePages('rootPage', 'showRootPage');
      pageCms.classList.add('showRootPage');
      localStorage.pageId = 'pageCms';
      window.location.replace('index.php');
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

  btnSignOut.click(function() {
    // console.log('x');
    $.get('api-loggout.php?logout=true', function() {
      hidePages('rootPage', 'showRootPage');
      pageFront.classList.add('showRootPage');
      window.location.replace('index.php');
    });
  });

});

$('.loader').delay(1500).fadeOut('fast');

// var closeButton = document.querySelector(".signIn__close");
// var divLogIn = document.querySelector(".signIn");
// closeButton.addEventListener("click", function() {
//   divLogIn.style.display = "none";
// });
//
// var logInFacebook = document.querySelector(".withFacebook");
// var logInGoogle = document.querySelector(".withGoogle");