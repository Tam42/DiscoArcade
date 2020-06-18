let body = document.getElementsByTagName("body"); 
let side = 8;
let main = document.createElement("div");
main.classList.add("grid");
body[0].appendChild(main);
const container = document.querySelector(".grid");
const tsquares = [];
const scoreDisplay = document.getElementById('score')
let score = 0
let split; 
let news;
let validcheck;

let startcolor;
let startidsquare;

let dropcolor;
let dropidsquare;

let startcheck; 
let check;

const color=[
   'one',
   'two',
   'three',
   'four',
   'five',
   'six',
   'seven'
];



function containerColors(){
for (let i=0; i<side*side; i++){
    const square = document.createElement("div");
    square.setAttribute('draggable', true);
    square.setAttribute('id', i);
    let random = Math.floor(Math.random()*color.length);
    square.classList.add(color[random]);
    container.appendChild(square);
    tsquares.push(square);
}
}

containerColors();

tsquares.forEach((square) =>{ 
    square.addEventListener("dragend", dragend),
    square.addEventListener("dragstart", dragstart),
    square.addEventListener("dragover", dragover),
    square.addEventListener("dragenter", dragenter),
    square.addEventListener("dragleave", dragleave),
    square.addEventListener("drop", drop)
})

function dragstart(){
    startcolor = this.classList[0];
    startidsquare = parseInt(this.id);
}

function dragover(event){
    event.preventDefault();

}

function dragenter(event){
    event.preventDefault();

}

function dragleave(){
}

function drop(){
    dropcolor= this.classList[0];
    dropidsquare = parseInt(this.id);
  }
  
function dragend(){
    if(dropidsquare === startidsquare+1 || dropidsquare === startidsquare+side || dropidsquare== startidsquare-1 || dropidsquare== startidsquare-side){
        tsquares[dropidsquare].classList.remove(dropcolor); 
        tsquares[dropidsquare].classList.add(startcolor);
        tsquares[startidsquare].classList.remove(startcolor);
        tsquares[startidsquare].classList.add(dropcolor); 
        checkthree();
        }
      }

   //Función para movimientos válidos 
   function checkthree(){
        //Valida el primer elemento del arreglo.
      if(dropidsquare == 0){
        var derecha1 = (dropidsquare+2);
        var right1 = document.getElementById(derecha1);
        var r1= right1.classList;

        var derecha2 = (dropidsquare+2);
        var right2 = document.getElementById(derecha2);
        var r2= right2.classList;

        var abajo1 = (dropidsquare+side);
        var down1 = document.getElementById(abajo1);
        var d1= down1.classList;

        var abajo2 = (dropidsquare+(side*2));
        var down2 = document.getElementById(abajo2);
        var d2= down2.classList;

        if(r1== startcolor && r2==startcolor){
          tsquares[dropidsquare].classList.remove(startcolor); 
          var random = Math.floor(Math.random()*color.length);
          tsquares[dropidsquare].classList.add(color[random]);
          score+=4;
          scoreDisplay.innerHTML = score;

        }
  
        else if(d1== startcolor && d2==startcolor){
          tsquares[dropidsquare].classList.remove(startcolor); 
          let random = Math.floor(Math.random()*color.length);
          tsquares[dropidsquare].classList.add(color[random]);
          score+=4;
          scoreDisplay.innerHTML = score;
        }
        
      }   

        //Valida el segundo elemento del arreglo.
      else if(dropidsquare == 1){
          var derecha1 = (dropidsquare+2);
        var right1 = document.getElementById(derecha1);
        var r1= right1.classList;

        var derecha2 = (dropidsquare+2);
        var right2 = document.getElementById(derecha2);
        var r2= right2.classList;

        var izquierda1 = (dropidsquare-1);
        var left1 = document.getElementById(izquierda1);
        var l1= left1.classList;

        var abajo1 = (dropidsquare+side);
        var down1 = document.getElementById(abajo1);
        var d1= down1.classList;

        var abajo2 = (dropidsquare+(side*2));
        var down2 = document.getElementById(abajo2);
        var d2= down2.classList;

        if(r1== startcolor && r2==startcolor){
          tsquares[dropidsquare].classList.remove(startcolor); 
          var random = Math.floor(Math.random()*color.length);
          tsquares[dropidsquare].classList.add(color[random]);
          score+=4;
          scoreDisplay.innerHTML = score;

        }
        
        else if(r1== startcolor && l1==startcolor){
          tsquares[dropidsquare].classList.remove(startcolor); 
          let random = Math.floor(Math.random()*color.length);
          tsquares[dropidsquare].classList.add(color[random]);
          score+=4;
          scoreDisplay.innerHTML = score;
        }

        else if(d1== startcolor && d2==startcolor){
          tsquares[dropidsquare].classList.remove(startcolor); 
          let random = Math.floor(Math.random()*color.length);
          tsquares[dropidsquare].classList.add(color[random]);
          score+=4;
          scoreDisplay.innerHTML = score;
        }
          
      }
 
      //Valida los elementos del 2 al 7 del arreglo.
      else if ( dropidsquare == 2 || dropidsquare == 3 || dropidsquare == 4 || dropidsquare == 5 || dropidsquare == 6 || dropidsquare == 7 ) {
        var derecha1 = (dropidsquare+2);
        var right1 = document.getElementById(derecha1);
        var r1= right1.classList;

        var derecha2 = (dropidsquare+2);
        var right2 = document.getElementById(derecha2);
        var r2= right2.classList;

        var izquierda1 = (dropidsquare-1);
        var left1 = document.getElementById(izquierda1);
        var l1= left1.classList;
        
        var izquierda2 = (dropidsquare-2);
        var left2 = document.getElementById(izquierda2);
        var l2= left2.classList;

        var abajo1 = (dropidsquare+side);
        var down1 = document.getElementById(abajo1);
        var d1= down1.classList;

        var abajo2 = (dropidsquare+(side*2));
        var down2 = document.getElementById(abajo2);
        var d2= down2.classList;

        if(r1== startcolor && r2==startcolor){
          tsquares[dropidsquare].classList.remove(startcolor); 
          var random = Math.floor(Math.random()*color.length);
          tsquares[dropidsquare].classList.add(color[random]);
          score+=4;
          scoreDisplay.innerHTML = score;
        }
        else if(l1== startcolor && l2==startcolor){
          tsquares[dropidsquare].classList.remove(startcolor); 
          let random = Math.floor(Math.random()*color.length);
          tsquares[dropidsquare].classList.add(color[random]);
          score+=4;
          scoreDisplay.innerHTML = score;
        }
        else if(r1== startcolor && l1==startcolor){
          tsquares[dropidsquare].classList.remove(startcolor); 
          let random = Math.floor(Math.random()*color.length);
          tsquares[dropidsquare].classList.add(color[random]);
          score+=4;
          scoreDisplay.innerHTML = score;
        }
        else if(d1== startcolor && d2==startcolor){
          tsquares[dropidsquare].classList.remove(startcolor); 
          let random = Math.floor(Math.random()*color.length);
          tsquares[dropidsquare].classList.add(color[random]);
          score+=4;
          scoreDisplay.innerHTML = score;
        }
      }

      //Valida los elementos del 8 al 15 del arreglo.
      else if(dropidsquare == 8 || dropidsquare == 9 || dropidsquare == 10 || dropidsquare == 11 || dropidsquare == 12 || dropidsquare == 13 || dropidsquare == 14 || dropidsquare == 15){
          var derecha1 = (dropidsquare+2);
          var right1 = document.getElementById(derecha1);
          var r1= right1.classList;
  
          var derecha2 = (dropidsquare+2);
          var right2 = document.getElementById(derecha2);
          var r2= right2.classList;
  
          var izquierda1 = (dropidsquare-1);
          var left1 = document.getElementById(izquierda1);
          var l1= left1.classList;
          
          var izquierda2 = (dropidsquare-2);
          var left2 = document.getElementById(izquierda2);
          var l2= left2.classList;
  
          var abajo1 = (dropidsquare+side);
          var down1 = document.getElementById(abajo1);
          var d1= down1.classList;
  
          var abajo2 = (dropidsquare+(side*2));
          var down2 = document.getElementById(abajo2);
          var d2= down2.classList;
  
          var arriba1 = (dropidsquare-side);
          var up1 = document.getElementById(arriba1);
          var u1= up1.classList;

          if(r1== startcolor && r2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            var random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
  
          }
          else if(l1== startcolor && l2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(r1== startcolor && l1==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(d1== startcolor && d2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(d1== startcolor && u1==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
        }

        //Valida los elementos del 48 al 55 del arreglo.
        else if(dropidsquare == 48 || dropidsquare == 49 || dropidsquare == 50 || dropidsquare == 51 || dropidsquare == 52 || dropidsquare == 53 || dropidsquare == 54 || dropidsquare == 55){
          var derecha1 = (dropidsquare+2);
          var right1 = document.getElementById(derecha1);
          var r1= right1.classList;
  
          var derecha2 = (dropidsquare+2);
          var right2 = document.getElementById(derecha2);
          var r2= right2.classList;
  
          var izquierda1 = (dropidsquare-1);
          var left1 = document.getElementById(izquierda1);
          var l1= left1.classList;
          
          var izquierda2 = (dropidsquare-2);
          var left2 = document.getElementById(izquierda2);
          var l2= left2.classList;
  
          var abajo1 = (dropidsquare+side);
          var down1 = document.getElementById(abajo1);
          var d1= down1.classList;

          var arriba1 = (dropidsquare-side);
          var up1 = document.getElementById(arriba1);
          var u1= up1.classList;

          var arriba2 = (dropidsquare-(side*2));
          var up2 = document.getElementById(arriba2);
          var u2= up2.classList;

          if(r1== startcolor && r2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            var random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
  
          }
          else if(l1== startcolor && l2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(r1== startcolor && l1==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(u1== startcolor && u2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(d1== startcolor && u1==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
        }

        //Valida los elementos del 56 al 61 del arreglo.
        else if (dropidsquare == 56 || dropidsquare == 57 || dropidsquare == 58 || dropidsquare == 59 || dropidsquare == 60 || dropidsquare == 61) {
          var derecha1 = (dropidsquare+2);
          var right1 = document.getElementById(derecha1);
          var r1= right1.classList;

          var derecha2 = (dropidsquare+2);
          var right2 = document.getElementById(derecha2);
          var r2= right2.classList;

          var izquierda1 = (dropidsquare-1);
          var left1 = document.getElementById(izquierda1);
          var l1= left1.classList;
        
          var izquierda2 = (dropidsquare-2);
          var left2 = document.getElementById(izquierda2);
          var l2= left2.classList;

          var arriba1 = (dropidsquare-side);
          var up1 = document.getElementById(arriba1);
          var u1= up1.classList;

          var arriba2 = (dropidsquare-(side*2));
          var up2 = document.getElementById(arriba2);
          var u2= up2.classList;
        
          if(r1== startcolor && r2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            var random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;

          }
          else if(l1== startcolor && l2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(r1== startcolor && l1==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(u1== startcolor && u2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
        }

        //Valida el elemento 62 del arreglo.
        else if(dropidsquare == 62){
          var derecha1 = (dropidsquare+2);
          var right1 = document.getElementById(derecha1);
          var r1= right1.classList;

          var izquierda1 = (dropidsquare-1);
          var left1 = document.getElementById(izquierda1);
          var l1= left1.classList;
        
          var izquierda2 = (dropidsquare-2);
          var left2 = document.getElementById(izquierda2);
          var l2= left2.classList;

          var arriba1 = (dropidsquare-side);
          var up1 = document.getElementById(arriba1);
          var u1= up1.classList;

          var arriba2 = (dropidsquare-(side*2));
          var up2 = document.getElementById(arriba2);
          var u2= up2.classList;
          
          if(l1== startcolor && l2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(r1== startcolor && l1==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(u1== startcolor && u2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
        }
        
        //Valida el elemento 63 del arreglo.
        else if(dropidsquare == 63){
          var izquierda1 = (dropidsquare-1);
          var left1 = document.getElementById(izquierda1);
          var l1= left1.classList;
        
          var izquierda2 = (dropidsquare-2);
          var left2 = document.getElementById(izquierda2);
          var l2= left2.classList;

          var arriba1 = (dropidsquare-side);
          var up1 = document.getElementById(arriba1);
          var u1= up1.classList;

          var arriba2 = (dropidsquare-(side*2));
          var up2 = document.getElementById(arriba2);
          var u2= up2.classList;
        
          if(l1== startcolor && l2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(u1== startcolor && u2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
        }

        //Validación para los demás elementos del arreglo.
        else{
          var derecha1 = (dropidsquare+2);
          var right1 = document.getElementById(derecha1);
          var r1= right1.classList;

          var derecha2 = (dropidsquare+2);
          var right2 = document.getElementById(derecha2);
          var r2= right2.classList;

          var izquierda1 = (dropidsquare-1);
          var left1 = document.getElementById(izquierda1);
          var l1= left1.classList;
        
          var izquierda2 = (dropidsquare-2);
          var left2 = document.getElementById(izquierda2);
          var l2= left2.classList;

          var abajo1 = (dropidsquare+side);
          var down1 = document.getElementById(abajo1);
          var d1= down1.classList;

          var abajo2 = (dropidsquare+(side*2));
          var down2 = document.getElementById(abajo2);
          var d2= down2.classList;

          var arriba1 = (dropidsquare-side);
          var up1 = document.getElementById(arriba1);
          var u1= up1.classList;

          var arriba2 = (dropidsquare-(side*2));
          var up2 = document.getElementById(arriba2);
          var u2= up2.classList;
        
          if(r1== startcolor && r2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            var random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(l1== startcolor && l2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(r1== startcolor && l1==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(d1== startcolor && d2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(u1== startcolor && u2==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
          else if(d1== startcolor && u1==startcolor){
            tsquares[dropidsquare].classList.remove(startcolor); 
            let random = Math.floor(Math.random()*color.length);
            tsquares[dropidsquare].classList.add(color[random]);
            score+=4;
            scoreDisplay.innerHTML = score;
          }
        }
      }
