<div class="signIn">
  <button type="button" class="signIn__close">X</button>
  <div class="signIn__logInForm">
    <h2>Sign In</h2>
    <form class="" action="index.html" method="post">
      <label for="logIn_email">
        <svg id="envelopeRed" class="logIn_email" viewBox="0 0 68 42" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Style-Guide" transform="translate(-281.000000, -2628.000000)">
            <g id="Group-14" transform="translate(119.000000, 2019.000000)">
              <g id="Page-1" transform="translate(8.000000, 109.000000)">
                <g id="Group-51" transform="translate(156.000000, 501.000000)">
                  <polygon id="Fill-20" class="envelopeRed" fill="#FF6565" points="65.2889378 1.5518971 36.7362584 29.1819441 7.29130767 1.5518971"></polygon>
                  <polygon id="Stroke-21" stroke="#AFC5DB" stroke-width="3" points="0.362309589 39.1087358 58.3599397 39.1087358 58.3599397 0.783186722 0.362309589 0.783186722"></polygon>
                  <polyline id="Stroke-22" stroke="#AFC5DB" stroke-width="3" points="0.362155616 0.782879115 29.8071063 28.4129261 58.3597858 0.782879115"></polyline>
                  <path d="M20.7837729,19.9458075 L0.362386575,39.1089665" id="Stroke-23" stroke="#AFC5DB" stroke-width="3"></path>
                  <path d="M38.5573693,19.9458075 L58.3597858,39.1089665" id="Stroke-24" stroke="#AFC5DB" stroke-width="3"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <!-- <svg class="logIn_email">
          <use href="#envelope"></use>
        </svg> -->
        <input type="text" name="logIn_email" value="" placeholder="E-mail address">
      </label>
      <label for="logIn_password">
        <svg class="logIn_password">
          <use href="#lock"></use>
        </svg>
        <input type="text" name="logIn_password" value="" placeholder="Password">
      </label>
      <a href="#">No account yet? Create one</a>
      <button type="button" name="button">Sign In</button>
    </form>
    <div class="signIn__logInForm__withMedia">
      <a href="" class="withFacebook">Sign in with Facebook
        <svg id="arrowForwRed" class="logIn_facebook" viewBox="0 0 55 41" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
          <polygon id="Fill-41" class="arrowForwRed" fill="#FF6565" points="29.3808877 0.727521992 48.0639233 19.3900503 29.3808877 38.0518097"></polygon>
          <path d="M0.31740411,19.3897427 L52.499489,19.3897427" id="Stroke-42" stroke="#3E3E3E" stroke-width="3"></path>
          <polyline id="Stroke-43" stroke="#3E3E3E" stroke-width="3" points="34.0046079 0.727521992 52.6876436 19.3900503 34.0046079 38.0518097"></polyline>
        </svg>
      </a>
      <a href="" class="withGoogle">Sign in with Google
        <svg id="arrowForwRed" class="logIn_google" viewBox="0 0 55 41" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
          <polygon id="Fill-41" class="arrowForwRed" fill="#FF6565" points="29.3808877 0.727521992 48.0639233 19.3900503 29.3808877 38.0518097"></polygon>
          <path d="M0.31740411,19.3897427 L52.499489,19.3897427" id="Stroke-42" stroke="#3E3E3E" stroke-width="3"></path>
          <polyline id="Stroke-43" stroke="#3E3E3E" stroke-width="3" points="34.0046079 0.727521992 52.6876436 19.3900503 34.0046079 38.0518097"></polyline>
        </svg>
      </a>
    </div>
  </div>
</div>

<script>
  //Close Sign In
  var closeButton = document.querySelector(".signIn__close");
  var divLogIn = document.querySelector(".signIn");
  closeButton.addEventListener("click", function(){
    divLogIn.style.display = "none";
  });

  var logInFacebook = document.querySelector(".withFacebook");
  var logInGoogle = document.querySelector(".withGoogle");


</script>
