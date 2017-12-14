<?php
  session_start();
  $isLoggedin = (bool)$_SESSION['loggedin'];
  // var_dump($isLoggedin);
 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Tech Tornado</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="css/styles.css">

  </head>
  <body>
    <?php include_once('partials/svg.php'); ?>
    <?php include_once('partials/top-bar.php'); ?>
    <?php include_once('partials/hero.php'); ?>
    <?php include_once('partials/cms-view.php');?>
    <?php include_once('partials/signin.php'); ?>
    <?php if ($isLoggedin) {
     include_once('partials/cms-view.php');
 } ?>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.min.js"></script>
    <script type="text/javascript" src="js/scripts.js"></script>
  </body>
</html>
