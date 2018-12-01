<?php

if (isset($_POST)&& !empty($_POST)) {

  $uname = $_POST['uname'];
  $pw = $_POST['pw'];

  if($uname =='admin' && $pw=='admin'){
    ?>
    {
      "Success":true,
      "secret":"This is a secrete , no one knows about the amdin"
    }
    <?php
  }else{
    ?>

    {
      "Success":false,
      "message":"Invalid Crednetials !"
    }
  <?php

    }
}else{
  ?>
  {
      "Success":false,
      "secret":"Only post requests are accepted!!!!! Chetin huh????? "
    }
  <?php
}

?>
