<?php
//Obtnecion de datos para imprimir en pantalla SCORE.
include("conexion-base.php");
$conectar= connect ("proyecto_dos");
if(!$conectar) {
  echo mysqli_connect_error()."<br>";
  echo mysqli_connect_errno()."<br>";
  exit();
}
else {
  if ($_GET['valor']==1)
  {
    $scores = [];
    $scoresP =[];
    $consulta = "SELECT*FROM pac ORDER BY Puntos DESC LIMIT 5";
    $respuesta = mysqli_query($conectar,$consulta);
    while($row = mysqli_fetch_array($respuesta))
    {
      array_push($scoresP,$row[0],$row[1]);
      array_push($scores,$scoresP);
      $scoresP = [];
    }

    echo json_encode($scores);
  }
  elseif ($_GET['valor']==2)
  {
    $scores2 = [];
    $scoresP2 =[];
    $consulta2 = "SELECT*FROM candy ORDER BY Puntos DESC LIMIT 5";
    $respuesta2 = mysqli_query($conectar,$consulta2);
    while($row = mysqli_fetch_array($respuesta2))
    {
      array_push($scoresP2,$row[0],$row[1]);
      array_push($scores2,$scoresP2);
      $scoresP2 = [];
    }

    echo json_encode($scores2);
  }

}

 ?>
