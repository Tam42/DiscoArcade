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
  session_start();
  $usuario = $_SESSION['name'];
  $dato="UPDATE password SET color = $color WHERE Usuario = '$usuario'";
  if (mysqli_query($conectar,$dato)) {
    // code...
    header("Location: ../../templates/principal.html");
  }else {
   // code...
    echo "No se pudo guardar el color.";
  }
}
 ?>
