<?php
  session_start();
  $isLoggedin = (bool)$_SESSION['loggedin'];
  // var_dump($isLoggedin);
 ?>
<div id="topBar" class="top-bar-container">
  <div class="top-bar topbar_wrapper">
    <svg data-page="pageFront" class="top-bar__logo btnRootNav">
      <use href="#topBarLogo" data-page="pageFront" class="btnRootNav"></use>
    </svg>
    <?php if (!$isLoggedin): ?>
    <a id="btnSignin" class="top-bar__sign-in" href="#" data-page="pageCms">Sign In</a>
  <?php else: ?>
    <div id="btnUserOptions" class="top-bar__user">
      <span>Jón Tryggvi</span>
      <img src="img/userImg.png" alt="">
      <div id="userOptionsDropdown" class="user-dropdown">
        <div  class="user-dropdown__user-info">
          <img src="img/userImg.png" alt="">
          <div class="user-dropdown__user-info__contact">
            <span>Jón Tryggvi Unnarsson</span>
            <a  href="#">dasfunkyt@gmail.com</a>
          </div>
        </div>
        <a href="#" id="editProfile" class="user-dropdown__editProfile">Edit Profile</a>
        <a href="#" id="signOut" class="user-dropdown__signOut btnRootNav" data-page="pageFront">Sign Out</a>
      </div>
    </div>
  <?php endif; ?>
  </div>
</div>
