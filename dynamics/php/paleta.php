<?php
include("conexion-base.php");
$conectar= connect ("proyecto_dos");
if(!$conectar) {
  echo mysqli_connect_error()."<br>";
  echo mysqli_connect_errno()."<br>";
  exit();
}
else {
  session_start();
  $name = $_SESSION['name'];
  $consulta = "SELECT color FROM password WHERE Usuario='$name'";
  $respuesta = mysqli_query($conectar,$consulta);
  $row = mysqli_fetch_array($respuesta);
  echo json_encode($row);

}

 ?>
