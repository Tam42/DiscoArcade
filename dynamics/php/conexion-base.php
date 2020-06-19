<?php
  define("USER","root");
  define("HOST","localhost");
  define("PASSWORD","root");
  function connect ($base) {
    $conectar = mysqli_connect(HOST, USER, PASSWORD, $base);
    if (!$conectar){
      echo "No se ha podido acceder a la base. <br>";
    }
    return $conectar;
    }
 ?>
