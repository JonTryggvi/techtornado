<?php
  session_start();
  if($_GET['logout']== true || !empty($_GET)){
    session_destroy();
  }

 ?>
