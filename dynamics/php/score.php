<?php
//Actualización de récords en base de datos.
include("conexion-base.php");
$conectar= connect ("proyecto_dos");
if(!$conectar) {
  echo mysqli_connect_error()."<br>";
  echo mysqli_connect_errno()."<br>";
  exit();
}
else {
  if (isset($_GET['name']) && isset($_GET['puntos']))
  {
    $nombre = $_GET['name'];
    $puntos = $_GET['puntos'];
    $consulta = "INSERT INTO pac(Nombre,Puntos) VALUES ('$nombre',$puntos)";
    mysqli_query($conectar,$consulta);
    echo "exito";
  }
  elseif (isset($_GET['nombre']) && isset($_GET['score']))
   {
    $nombre2 = $_GET['nombre'];
    $puntos2 = $_GET['score'];
    $consulta2 = "INSERT INTO candy(Nombre,Puntos) VALUES ('$nombre2',$puntos2)";
    mysqli_query($conectar,$consulta2);
    echo "exito";
  }


}
 ?>
