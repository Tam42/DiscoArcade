//Aquí va el código de js del primer juego
//NO MOVER NADA
let fAmarillo = new Image();
fAmarillo.src = "../statics/images/fAmarillo.png";
let fRosa = new Image();
fRosa.src = "../statics/images/fRosa.png";
let fRojo = new Image();
fRojo.src = "../statics/images/fRojo.png";
let fAzul = new Image();
fAzul.src = "../statics/images/fAzul.png";
let pacD = new Image();
pacD.src = "../statics/images/PacmanD.png";
let pacI = new Image();
pacI.src = "../statics/images/PacmanI.png";
let pacAr = new Image();
pacAr.src = "../statics/images/PacmanAr.png";
let pacAb = new Image();
pacAb.src = "../statics/images/PacmanAb.png";
let muerte = new Image();
muerte.src = "../statics/images/muerte.png";
let over = new Image();
over.src = "../statics/images/gOver.png";
let ganar = new Image();
ganar.src = "../statics/images/ganar.png";
let imPac = pacD;

let c = new Date()
c.setTime(c.getTime()-10);
let puntuacion = [];
let matriz = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [1,5,5,5,5,1,1,5,5,1,5,5,5,5,5,5,5,5,5,5,5,1],
              [1,5,1,1,5,1,1,5,5,1,5,1,5,5,5,1,1,1,1,1,5,1],
              [1,5,1,1,5,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1],
              [1,5,5,1,5,5,5,1,5,5,5,1,5,5,5,5,5,5,5,1,5,1],
              [1,5,5,1,1,5,5,1,1,1,1,1,5,5,1,1,5,5,5,5,5,1],
              [1,5,5,5,1,5,5,5,5,5,5,5,5,5,1,1,5,5,1,5,5,1],
              [1,5,5,5,5,5,1,5,5,5,5,5,5,5,1,1,5,5,1,1,5,1],
              [1,5,1,5,5,5,5,5,1,1,1,5,5,5,5,5,5,5,5,1,5,1],
              [1,5,1,5,5,5,5,5,1,1,1,5,1,1,1,1,1,1,1,1,5,1],
              [1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
let body;
let division;
let extra =0;
let puntajeExtra;
let siHay;
let newV;
let existentes = document.cookie;
if (existentes)
{
  division = existentes.split(";");
  for (var i = 0; i < division.length; i++)
  {
    let establecido = division[i];
    let newV = establecido.split("=");
    if (newV[0]=="puntos" || newV[0]==" puntos")
    {
      siHay = true;
      let puntAcum = parseInt(newV[1],10);
      for (var h = 0; h < puntAcum; h++)
      {
        puntuacion.push(1);
      }
    }
    else if (newV[0]==" matriz" || newV[0]=="matriz" )
    {
      valorM = newV[1];
      matrizJugada = JSON.parse(valorM);
      matriz= matrizJugada;
    }
    console.log(newV[0]);
  }
  if (siHay==false)
  {
    document.cookie = "puntos=0";
    let respaldo = matriz;
    let matCookie = JSON.stringify(respaldo);
    document.cookie = "matriz="+matCookie;
  }
}
else
{
  document.cookie = "puntos=0";
  let respaldo = matriz;
  let matCookie = JSON.stringify(respaldo);
  document.cookie = "matriz="+matCookie;
}


let puntaje =   document.getElementById("puntaje");
let finalizar = document.getElementById("finalizar");
let menu = document.getElementById("menu");
const width = 500;
const height = 250;
let x=-245;
let y=-115;
let direccionnn = 1;
let orientacion = "derecha";
let recorrex = 1;
let recorrey = 1;
let puntosx = 1;
let puntosy=1;
let recorrefx = 1;
let recorrefy = 10;
let fx1 = -195;
let fy1 = 10;
let rx1 = 3;
let ry1 = 6;
let fo1 = "abajo";

let fx2 = 30;
let fy2 = -115;
let rx2 = 12;
let ry2 = 1;
let fo2 = "arriba";

let fx3 = -120;
let fy3 = 110;
let rx3 = 6;
let ry3 = 10;
let fo3 = "derecha";

let fx4 = 230;
let fy4 = -65;
let rx4 = 20;
let ry4 = 3;
let fo4 = "izquierda";

let valid = true;

let trans;
let matAct;

let ad = 0;
let cont = 0;


function fantasma1 ()
{
  if( fy1<110 && fo1 == "abajo")
  {
    fy1+=25;
    ry1++;
  }
  else if(fy1 == 110 && fo1=="abajo")
  {
    fo1 = "arriba";
    fy1-=25;
    ry1--;
  }
  else if( fy1>10 && fo1 == "arriba")
  {
    fy1-=25;
    ry1--;
  }
  else if(fy1 == 10 && fo1=="arriba")
  {
    fo1 = "abajo";
    fy1+=25;
    ry1++;
  }
}

function fantasma2 ()
{
  if(fy2<60 && fo2 == "abajo")
  {
    fy2+=25;
    ry2++;
  }
  else if(fy2 == 60 && fo2=="abajo")
  {
    fo2 = "arriba";
    fy2-=25;
    ry2--;
  }
  else if(fy2>-115 && fo2 == "arriba")
  {
    fy2-=25;
    ry2--;
  }
  else if(fy2 == -115 && fo2=="arriba")
  {
    fo2 = "abajo";
    fy2+=25;
    ry2++;
  }
}
function fantasma3 ()
{
  if(fx3<-20 && fo3 == "derecha")
  {
    fx3+=25;
    rx3++;
  }
  else if(fx3 == -20 && fo3=="derecha")
  {
    fo3 = "izquierda";
    fx3-=25;
    rx3--;
  }
  else if(fx3>-120 && fo3 == "izquierda")
  {
    fx3-=25;
    rx3--;
  }
  else if(fx3 == -120 && fo3=="izquierda")
  {
    fo3 = "derecha";
    fx3+=25;
    rx3++;
  }
}

function fantasma4 ()
{
  if(fx4<230 && fo4 == "derecha")
  {
    fx4+=25;
    rx4++;
  }
  else if(fx4 == 230 && fo4=="derecha")
  {
    fo4 = "izquierda";
    fx4-=25;
    rx4--;
  }
  else if(fx4>80 && fo4 == "izquierda")
  {
    fx4-=25;
    rx4--;
  }
  else if(fx4 == 80 && fo4=="izquierda")
  {
    fo4 = "derecha";
    fx4+=25;
    rx4++;
  }

}
function direccion()
{
  if (x<250 && orientacion == "derecha")
  {
    if((recorrex == rx3 && fo3 == "izquierda") || (recorrex == rx4 && fo4 == "izquierda"))
    {
      if((recorrex == rx3 && recorrey==ry3) || (recorrex == rx4 && recorrey==ry4)  )
      {
        valid = false;
      }
    }
    recorrex++;
    if(matriz[recorrey][recorrex] == 0 && valid == true)
    {
     x+=25;
    }
    else if(matriz[recorrey][recorrex]== 5 && valid == true)
    {
      puntuacion.push(1);
      matriz[recorrey][recorrex]= 0;
      x+=25;
    }
    else if(matriz[recorrey][recorrex]== 1)
    {
      recorrex = recorrex -1;
    }
    if((recorrex == rx1 && recorrey == ry1)|| (recorrex == rx2 && recorrey == ry2) || (recorrex == rx3 && recorrey == ry3) || (recorrex == rx4 && recorrey == ry4))
      valid = false;
  }
  else if (orientacion== "derecha" && x>=250 ){
    x=-260;
    recorrex = 0;
  }
  else if(orientacion == "abajo" && y<250)
  {
    if((recorrex == rx2 && fo2 == "arriba")|| recorrex == rx1 && fo1 == "arriba")
    {
      if(recorrex == rx2 && recorrey==ry2 || recorrex == rx1 && recorrey==ry1)
      {
        valid = false;
      }
    }
    recorrey ++;
    if(matriz[recorrey][recorrex] == 0 && valid == true)
    {
      y+=25;
    }
    else if(matriz[recorrey][recorrex]== 5 && valid == true)
    {
       puntuacion.push(1);
      matriz[recorrey][recorrex]= 0;
      y+=25;
    }
    else if(matriz[recorrey][recorrex] == 1)
    {
      recorrey=recorrey-1;
    }
    if((recorrex == rx1 && recorrey == ry1)|| (recorrex == rx2 && recorrey == ry2) || (recorrex == rx3 && recorrey == ry3) || (recorrex == rx4 && recorrey == ry4))
      valid = false;
  }
  else if(orientacion == "arriba" && y>-125)
  {
    if((recorrex == rx2 && fo2 == "abajo")|| recorrex == rx1 && fo1 == "abajo")
    {
      if(recorrex == rx2 && recorrey==ry2 || recorrex == rx1 && recorrey==ry1)
      {
        valid = false;
      }
    }
    recorrey--;
    if(matriz[recorrey][recorrex] == 0 && valid == true)
    {
      y-=25;
    }
    else if(matriz[recorrey][recorrex]== 5 && valid == true)
    {
      puntuacion.push(1);
      matriz[recorrey][recorrex]= 0;
      y-=25;
    }
    else if(matriz[recorrey][recorrex] == 1)
    {
      recorrey++;
    }
    if((recorrex == rx1 && recorrey == ry1)|| (recorrex == rx2 && recorrey == ry2) || (recorrex == rx3 && recorrey == ry3)|| (recorrex == rx4 && recorrey == ry4))
      valid = false;
  }
  else if(orientacion == "izquierda" && x>-250)
  {
    if((recorrex == rx3 && fo3 == "derecha") || (recorrex == rx4 && fo4 == "derecha"))
    {
      if((recorrex == rx3 && recorrey==ry3) || (recorrex == rx4 && recorrey==ry4)  )
      {
        valid = false;
      }
    }
    recorrex--;
    if(matriz[recorrey][recorrex] == 0 && valid == true)
    {
      x-=25;
    }
    else if(matriz[recorrey][recorrex]== 5 && valid == true)
    {
      puntuacion.push(1);
      matriz[recorrey][recorrex]= 0;
      x-=25;
    }
    else if(matriz[recorrey][recorrex] == 1)
    {
      recorrex = recorrex +1;
    }
    if((recorrex == rx1 && recorrey == ry1)|| (recorrex == rx2 && recorrey == ry2) || (recorrex == rx3 && recorrey == ry3) || (recorrex == rx4 && recorrey == ry4))
      valid = false;
  }
  else if(orientacion == "izquierda" && x<=-250)
  {
    x=240;
    recorrex=20;
  }
  trans = puntuacion.length;
  trans = trans.toString();
  document.cookie = "puntos="+trans;
  matAct = matriz;
  matAct = JSON.stringify(matAct);
  document.cookie = "matriz="+matAct;

}

function tablero()
{

  //Cuerpo superior izquierdo. Forma pistola. Unidades: 5
  context.beginPath();
  context.moveTo(-155,-125);
  context.lineTo(-109,-125);
  context.moveTo(-109,-125);
  context.lineTo(-109,-79);
  context.moveTo(-109,-79);
  context.lineTo(-132,-79);
  context.moveTo(-132,-79);
  context.lineTo(-132,-56);
  context.moveTo(-132,-56);
  context.lineTo(-155,-56);
  context.moveTo(-155,-56);
  context.lineTo(-155,-125);
  context.strokeStyle = "#0B10F5";

  //Rectangulo central vertical. Unidades: 2.
  context.rect(-58,-125,23,46);
  context.strokeStyle = "#0B10F5";
  //Cubo superior centrado aislado.
  context.rect(-8,-102,23,23);
  context.strokeStyle = "#0B10F5";

  //Rectángulo inferior izquierdo. Unidades: 2.
  context.rect(-230,50,23,46);
  context.strokeStyle = "#0B10F5";

  //Rectángulo superior derecho. Unidades:5.
  context.rect(95,-102,115,23);
  context.strokeStyle = "#0B10F5";

  //Rectángulo medio derecho. Unidades: 6
  context.rect(70,-20,46,69);
  context.strokeStyle = "#0B10F5";

  //Cubo inferior aislado
  context.rect(-132,23,23,23);
  context.strokeStyle = "#0B10F5";

  //Rectángulo centrado inferior. Unidades:6.
  context.rect(-83,48,73,46);
  context.strokeStyle = "#0B10F5";

  //Cuerpo inferior derecha.
  context.moveTo(18,94);
  context.lineTo(215,94);
  context.moveTo(215,94);
  context.lineTo(215,25);
  context.moveTo(215,25);
  context.lineTo(187,25);
  context.moveTo(187,25);
  context.lineTo(187,2);
  context.moveTo(187,2);
  context.lineTo(164,2);
  context.moveTo(164,2);
  context.lineTo(164,48);
  context.moveTo(164,48);
  context.lineTo(191,48);
  context.moveTo(191,48);
  context.lineTo(191,71);
  context.moveTo(191,71);
  context.lineTo(18,71);
  context.moveTo(18,71);
  context.lineTo(18,94);
  context.strokeStyle = "#0B10F5";

  //Jaula central
  context.moveTo(-109,-56);
  context.lineTo(-109,-10);
  context.moveTo(-109,-10);
  context.lineTo(15,-10);
  context.moveTo(15,-10);
  context.lineTo(15,-56);
  context.moveTo(15,-56);
  context.lineTo(-8,-56);
  context.moveTo(-8,-56);
  context.lineTo(-8,-28);
  context.moveTo(-8,-28);
  context.lineTo(-86,-28);
  context.moveTo(-109,-56);
  context.lineTo(-86,-56);
  context.moveTo(-86,-56);
  context.lineTo(-86,-28);

  //Cubo aislado superior derecho.
  context.rect(195,-50,23,23);

  //Cuerpo superior izquierdo. Unidades: 8.
  context.moveTo(-224,-102);
  context.lineTo(-180,-102);
  context.moveTo(-180,-102);
  context.lineTo(-180,-28);
  context.moveTo(-180,-28);
  context.lineTo(-157,-28);
  context.moveTo(-157,-28);
  context.lineTo(-157,13);
  context.moveTo(-157,13);
  context.lineTo(-180,13);
  context.moveTo(-180,13);
  context.lineTo(-180,-10);
  context.moveTo(-180,-10);
  context.lineTo(-203,-10);
  context.moveTo(-203,-10);
  context.lineTo(-203,-53);
  context.moveTo(-203,-53);
  context.lineTo(-223,-53);
  context.moveTo(-223,-53);
  context.lineTo(-223,-100);
  context.strokeStyle = "#0B10F5";
  context.stroke();
  context.closePath();


  for (var j = -245; j <=230 ; j+=25)
  {
    for (var i = -115; i <= 110 ; i+=25)
    {
      if(matriz[puntosx][puntosy]==5)
      {
      context.beginPath();
      context.arc(j,i,2,0,2* Math.PI);
      context.fillStyle = "#F5791B";
      context.fill();
      context.strokeStyle = "#F55A31";
      context.stroke();
      context.closePath();
      }
      else if(matriz[puntosx][puntosy]==5)
      {
      context.beginPath();
      context.arc(j,i,0,0,2* Math.PI);
      context.stroke();
      context.closePath();
      }
      puntosx++;
    }
    puntosx=1;
    puntosy++;
  }
  puntosy=1;

}
function dibujar(context,muerte,ad)
{
  context.drawImage(muerte,130*ad,50,130,150,-100,0,130,150);
}

function step()
{
  cont ++;
  if (cont > 18 )
  {
    context.clearRect(0,0,500,500);
    if (ad<5)
    {
      ad++;
    }
    cont = 0
  }
  dibujar(context,muerte,ad);
  if (ad<5) {
    requestAnimationFrame(step);
  }
  else{
    context.clearRect(-width / 2, -height / 2, width, height);
    context.drawImage(over,-250,-125,width,height);
    puntaje.id="puntaje2";

  }

}

function pacman(){
  extra ++;
  finalizar.addEventListener("click",()=>{
    document.cookie = "puntos=0;expires="+c.toGMTString();
    document.cookie = "matriz=0;expires="+c.toGMTString();
    window.location = "./principal.html";
  });
  menu.addEventListener("click",()=>{
    window.location = "./principal.html";
  });
  document.addEventListener("keypress",(event) =>{
    let tecla = event.keyCode;
    if(tecla == 100)
    {
      orientacion = "derecha";
      imPac = pacD;
    }
    else if(tecla==97)
    {
      orientacion = "izquierda";
      imPac = pacI;
    }
    else if(tecla == 115)
    {
      orientacion = "abajo";
      imPac = pacAb;
    }
    else if(tecla == 119)
    {
      orientacion = "arriba";
      imPac = pacAr;
    }
  })
  context.clearRect(-width / 2, -height / 2, width, height);
  fantasma1();
  context.drawImage(fAmarillo,fx1-10,fy1-10,20,20);
  fantasma2();
  context.drawImage(fRosa,fx2-10,fy2-10,20,20);
  fantasma3();
  context.drawImage(fRojo,fx3-10,fy3-10,20,20);
  fantasma4();
  context.drawImage(fAzul,fx4-10,fy4-10,20,20);
  direccion();
  context.drawImage(imPac,x-10,y-10,20,20);
  tablero();
  if(valid == true)
  {
    if(puntuacion.length < 144)
    {
      puntaje.innerText="";
      puntaje.innerText = "Puntaje: "+puntuacion.length;
      setTimeout(pacman,500);
    }
    else if(puntuacion.length == 144)
    {
       document.cookie = "puntos=0;expires="+c.toGMTString();
       document.cookie = "matriz=0;expires="+c.toGMTString();
       context.clearRect(-width / 2, -height / 2, width, height);
       context.drawImage(ganar,-50,-90,ganar.width/4,ganar.height/4);
       body = document.getElementsByTagName("body");
       botonNuevo = document.createElement("button");
       botonNuevo.setAttribute("id","nuevo");
       textoNuevo = document.createElement("span")
       textoNuevo.innerText="Jugar de nuevo";
       textoNuevo.setAttribute("id","t4")
       body[0].prepend(botonNuevo,textoNuevo);
       puntaje.id="puntaje2";
       puntajeExtra = Math.round(800/(extra/100)) + puntuacion.length;
       puntaje.innerText = "¡You Win! Total de puntos: " + puntajeExtra;
       fetch("../dynamics/php/sesion.php")
       .then((response)=>{
         return resp = response.text();
       })
       .then((text)=>{
         console.log(text);
         fetch("../dynamics/php/score.php?puntos="+puntajeExtra+"&name="+text)
         .then((response)=>{
           console.log("Exitoso");
         })
       })
       let reiniciar = document.getElementById("nuevo");
       reiniciar.addEventListener("click",()=>
       {
         valid=true;

         x=-245;
         y=-115;
         direccionnn = 1;
         orientacion = "derecha";
         recorrex = 1;
         recorrey = 1;
         puntosx = 1;
         puntosy=1;
         recorrefx = 1;
         recorrefy = 10;
         puntuacion = [];

         fx1 = -195;
         fy1 = 10;
         rx1 = 3;
         ry1 = 6;
         fo1 = "abajo";

         fx2 = 30;
         fy2 = -115;
         rx2 = 12;
         ry2 = 1;
         fo2 = "arriba";

         fx3 = -120;
         fy3 = 110;
         rx3 = 6;
         ry3 = 10;
         fo3 = "derecha";
         fx4 = 230;
         fy4 = -65;
         rx4 = 20;
         ry4 = 3;
         fo4 = "izquierda";
         ad=0;
         cont =0;
         imPac = pacD;
         extra = 0;
         puntajeExtra=0;
         valid = true;

         matriz = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                       [1,5,5,5,5,1,1,5,5,1,5,5,5,5,5,5,5,5,5,5,5,1],
                       [1,5,1,1,5,1,1,5,5,1,5,1,5,5,5,1,1,1,1,1,5,1],
                       [1,5,1,1,5,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1],
                       [1,5,5,1,5,5,5,1,5,5,5,1,5,5,5,5,5,5,5,1,5,1],
                       [1,5,5,1,1,5,5,1,1,1,1,1,5,5,1,1,5,5,5,5,5,1],
                       [0,5,5,5,1,5,5,5,5,5,5,5,5,5,1,1,5,5,1,5,5,0],
                       [1,5,5,5,5,5,1,5,5,5,5,5,5,5,1,1,5,5,1,1,5,1],
                       [1,5,1,5,5,5,5,5,1,1,1,5,5,5,5,5,5,5,5,1,5,1],
                       [1,5,1,5,5,5,5,5,1,1,1,5,1,1,1,1,1,1,1,1,5,1],
                       [1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1],
                       [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
         document.cookie = "puntos=0";
         respaldo = matriz;
         matCookie = JSON.stringify(respaldo);
         document.cookie = "matriz="+matCookie;
         var borrar = document.getElementsByTagName("body");
         borrar[0].removeChild(botonNuevo);
         borrar[0].removeChild(textoNuevo);
         puntaje.id="puntaje";
         pacman();
           });
    }
  }
  else{
    document.cookie = "puntos=0;expires="+c.toGMTString();
    document.cookie = "matriz=0;expires="+c.toGMTString();
    context.clearRect(-width / 2, -height / 2, width, height);
    requestAnimationFrame(step);
    fetch("../dynamics/php/sesion.php")
    .then((response)=>{
      return resp = response.text();
    })
    .then((text)=>{
      console.log(text);
      fetch("../dynamics/php/score.php?puntos="+puntuacion.length+"&name="+text)
      .then((response)=>{
        console.log("Exitoso");
      })
    })

    setTimeout(()=>{
      body = document.getElementsByTagName("body");
      botonNuevo = document.createElement("button");
      botonNuevo.setAttribute("id","nuevo");
      textoNuevo = document.createElement("span")
      textoNuevo.innerText="Jugar de nuevo";
      textoNuevo.setAttribute("id","t4");
      body[0].prepend(botonNuevo,textoNuevo);
      let reiniciar = document.getElementById("nuevo");
      reiniciar.addEventListener("click",()=>
      {
        valid=true;

        x=-245;
        y=-115;
        direccionnn = 1;
        orientacion = "derecha";
        recorrex = 1;
        recorrey = 1;
        puntosx = 1;
        puntosy=1;
        recorrefx = 1;
        recorrefy = 10;
        puntuacion = [];

        fx1 = -195;
        fy1 = 10;
        rx1 = 3;
        ry1 = 6;
        fo1 = "abajo";

        fx2 = 30;
        fy2 = -115;
        rx2 = 12;
        ry2 = 1;
        fo2 = "arriba";

        fx3 = -120;
        fy3 = 110;
        rx3 = 6;
        ry3 = 10;
        fo3 = "derecha";
        fx4 = 230;
        fy4 = -65;
        rx4 = 20;
        ry4 = 3;
        fo4 = "izquierda";
        ad=0;
        cont =0;
        imPac = pacD;
        extra = 0;
        puntajeExtra=0;
        valid = true;

        matriz = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                      [1,5,5,5,5,1,1,5,5,1,5,5,5,5,5,5,5,5,5,5,5,1],
                      [1,5,1,1,5,1,1,5,5,1,5,1,5,5,5,1,1,1,1,1,5,1],
                      [1,5,1,1,5,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1],
                      [1,5,5,1,5,5,5,1,5,5,5,1,5,5,5,5,5,5,5,1,5,1],
                      [1,5,5,1,1,5,5,1,1,1,1,1,5,5,1,1,5,5,5,5,5,1],
                      [0,5,5,5,1,5,5,5,5,5,5,5,5,5,1,1,5,5,1,5,5,0],
                      [1,5,5,5,5,5,1,5,5,5,5,5,5,5,1,1,5,5,1,1,5,1],
                      [1,5,1,5,5,5,5,5,1,1,1,5,5,5,5,5,5,5,5,1,5,1],
                      [1,5,1,5,5,5,5,5,1,1,1,5,1,1,1,1,1,1,1,1,5,1],
                      [1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1],
                      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
        document.cookie = "puntos=0";
        respaldo = matriz;
        matCookie = JSON.stringify(respaldo);
        document.cookie = "matriz="+matCookie;
        var borrar = document.getElementsByTagName("body");
        borrar[0].removeChild(botonNuevo);
        borrar[0].removeChild(textoNuevo);
        puntaje.id="puntaje";
        pacman();
          });
    },2000);
  }
}

let canvas= document.getElementById('canvas');
canvas.width = width;
canvas.height = height;
let context = canvas.getContext("2d");
context.translate(width/2, height/2);

pacman();
