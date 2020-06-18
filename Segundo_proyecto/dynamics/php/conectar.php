<?php
  include("conexion-base.php");
  $conectar= connect ("proyecto_dos");
  if(!$conectar) {
    echo mysqli_connect_error()."<br>";
    echo mysqli_connect_errno()."<br>";
    exit();
  }
  else {
    $name=(isset($_POST['usuario']) && $_POST{'usuario'} != " ") ? $_POST{'usuario'} : "No ingreso usuario";
    $pass=(isset($_POST['contra']) && $_POST{'contra'} != " ") ? $_POST{'contra'} : "No ingreso contraseña";
    $passhash= password_hash($pass,PASSWORD_BCRYPT);
    $tabla= "SELECT * FROM password WHERE Usuario='$name'";
    $consulta= mysqli_query($conectar, $tabla);
    $contar=mysqli_num_rows($consulta);
    if ($contar>0) {
      // code...
      header("Location: ../../templates/cassette.html");
    }else {
      // code...
       $datos="INSERT INTO password(Usuario,Password) VALUES('$name','$pass')";
       if (mysqli_query($conectar,$datos)) {
         // code...
         header("Location: ../../templates/cassette2.html");
       }else {
        // code...
         echo "No se a podido realizar su registro.";
        }
    }
  }
 ?>
