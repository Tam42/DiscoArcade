<?php
include("conexion-base.php");
$conectar= connect ("proyecto_dos");
if(!$conectar) {
  echo mysqli_connect_error()."<br>";
  echo mysqli_connect_errno()."<br>";
  exit();
}
else {
  $color= 0;
  if ($_POST['col'] == "uno") {
    // code...
    $color= 1;
  }elseif ($_POST['col'] == "dos") {
    // code...
    $color= 2;
  }
  $dato="INSERT INTO password (color) VALUES($color)";
  if (mysqli_query($conectar,$dato)) {
    // code...
    header("Location: ../../templates/elturista.html");
  }else {
   // code...
    echo "No se pudo guardar el color.";
  }
}
 ?>
