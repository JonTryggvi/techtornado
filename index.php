<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Tech Tornado</title>
    <link rel="stylesheet" href="css/styles.css">

  </head>
  <body>
    <?php include_once('partials/svg.php'); ?>
    <div class="size">
      <!-- we must use the svg code when we are animating  -->
      <p>this is how we animate svg</p>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  id="arrowForwRed" viewBox="0 0 55 41" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
        <polygon id="Fill-41" fill="#FF6565" points="29.3808877 0.727521992 48.0639233 19.3900503 29.3808877 38.0518097" class="redArrowForward"></polygon>
        <path d="M0.31740411,19.3897427 L52.499489,19.3897427" id="Stroke-42" stroke="#3E3E3E" stroke-width="3"></path>
        <polyline id="Stroke-43" stroke="#3E3E3E" stroke-width="3" points="34.0046079 0.727521992 52.6876436 19.3900503 34.0046079 38.0518097"></polyline>
      </svg>

      <!-- but when we are not we can simply use <svg><use></use></svg> -->

    </div>

    <div class="size">
      <p>this is the use method</p>
    <svg>
      <use href="#acceptHollowRed"></use>
    </svg>
    </div>

    <!-- <img class="size" src="img/icons/accept_hollow_red.svg" alt=""> -->
    <!-- <h1>Tech Tornado is up and running!!</h1> -->
  </body>
</html>
