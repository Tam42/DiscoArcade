let paleta;

fetch("../dynamics/php/paleta.php")
.then((response)=>{
  return resp = response.json();
})
.then((text)=>{
  paleta = text[0];
})

setTimeout(()=>{
  console.log(paleta);
  let x=1;
  let y=1;
  $(document).ready(()=>{
    window.setInterval(()=>{
      if(paleta==1)
      {
        x = x.toString();
        $("#medio").css("background-image", "url('../statics/images/disco"+x+".png')");
        if (x==1)
          x=2
        else if(x==2)
          x=3;
        else
          x=1;
      }
      else if (paleta==2)
      {
        y=y.toString();
        $("#medio").css("background-image", "url('../statics/images/discoN"+y+".png')");
        if (y==1)
          y=2
        else if(y==2)
          y=3;
        else
          y=1;
      }
    },2000);
  });

  let pacman = document.getElementById('inicioPac');
  let busca = document.getElementById("inicioBusca")
  let cierre = document.getElementById("cierre");

  pacman.addEventListener("click",()=>{
    $(".modal").css("display","flex");
    $("#titulo").text("Pac-Man");
    $("#jugarD").css("display","flex");
    $(".body").html("Para comenzar este grandioso juego tienes que saber lo siguiente: <br><br> -Pac-man se moverá con tus teclas: 'W' (arriba), 'A' (izquierda), 'S' (abajo) y 'D'(derecha).<br><br> -En caso de tocar a un fantasma morirás automáticamente.Tus puntos recolectados serán los totales. <br><br> -En caso de recolectar todos los puntos, GANARÁS, y según tu tiempo te daremos puntos extras.<br><br> -Tendrás la opción de finalizar el juego(No se guardará su estado) y regresar al menú(Se guardara el estado). ")
    $("#jugarD").click(function(){
      window.location = "./Animation1.html";
    })
  });
  busca.addEventListener("click",()=>{
    $(".modal").css("display","flex");
    $("#titulo").text("Buscaminas");
    $(".body").html("Buscaminas.");
    $("#jugarD").css("display","flex");
  });
  cierre.addEventListener("click",()=>{
    $(".modal").css("display","none");
  });
  $("#navPac").click(function(){
    $(".modal").css("display","flex");
    $("#titulo").text("Pac-Man");
    $("#jugarD").css("display","flex");
    $(".body").html("Para comenzar este grandioso juego tienes que saber lo siguiente: <br><br> -Pac-man se moverá con tus teclas: 'W' (arriba), 'A' (izquierda), 'S' (abajo) y 'D'(derecha).<br><br> -En caso de tocar a un fantasma morirás automáticamente.Tus puntos recolectados serán los totales. <br><br> -En caso de recolectar todos los puntos, GANARÁS, y según tu tiempo te daremos puntos extras.<br><br> -Tendrás la opción de finalizar el juego(No se guardará su estado) y regresar al menú(Se guardara el estado). ")
    $("#jugarD").click(function(){
      window.location = "./Animation1.html";
    })
  });

  $("#navBusca").click(function(){
    $(".modal").css("display","flex");
    $("#titulo").text("Buscaminas");
    $(".body").html("Buscaminas.");
    $("#jugarD").css("display","flex");
  });

  $("#inicioCandy").click(function(){
    $(".modal").css("display","flex");
    $("#titulo").text("Candy-Crush");
    $(".body").html("¡Bienvenido a esta dulce aventura. <br> Con ayuda de tu mouse tendrás que formar filas o columnas de longitus 3. Solo se contarán aquellas que formes por tu cuenta, las que ya existen no se cuentan. <br>Tendrás la opción de finalizar el juego(No se guardará su estado) y regresar al menú(Se guardara el estado). ");
    $("#jugarD").css("display","flex");
    $("#jugarD").click(function(){
      window.location = "./Animation2.html";
    })
  });

  $("#navCandy").click(function(){
    $(".modal").css("display","flex");
    $("#titulo").text("Candy-Crush");
    $(".body").html("¡Bienvenido a esta dulce aventura. <br> Con ayuda de tu mouse tendrás que formar filas o columnas de longitus 3. Solo se contarán aquellas que formes por tu cuenta, las que ya existen no se cuentan. <br>Tendrás la opción de finalizar el juego(No se guardará su estado) y regresar al menú(Se guardara el estado). ");
    $("#jugarD").css("display","flex");
    $("#jugarD").click(function(){
      window.location = "./Animation2.html";
    })
  });

  $("#creditos").click(function(){
    $(".modal").css("display","flex");
    $("#titulo").text("Créditos");
    $("#jugarD").css("display","none");
    $(".body").html("Este proyecto fue realizado por el equipo 'Fiebre de programar por la noche', conformado por: <br> <ol><li>Arena Vázquez Tamara Isabel</li><li>Garfias Becerril Giovanni</li><li>León Gómez Erick</li><li>Baez de la Rosa Ingrid Montserrat</li></ol> El proyectó se comenzó a realizar el 10 de junio de 2020 y se concluyó el 18 de junio del mismo año. Agradecemos infinitamente a todos los menotres del curso web por ayudarnos a resolver todas las dudas que tuvimos al desarrollar este proyecto. <br><br> Curso web 2020. ");
  })

  $("#score").click(function(){
    window.location="./scores.html";
  })
},1000);
