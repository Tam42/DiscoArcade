/*Mediante DOM y peticiones imprimó los 5 scores más altos*/
fetch("../dynamics/php/puntajes.php?valor=1")
.then((response)=>{
  return resp = response.json();
})
.then((text)=>{
  console.log(text);
  let body = document.getElementById("tab");
  text.forEach(element => {
    let row = document.createElement("tr");
    let nombre = document.createElement("td");
    nombre.innerText = element[0];
    let puntos = document.createElement("td");
    puntos.innerText = element[1];
    row.appendChild(nombre);
    row.appendChild(puntos);
    body.appendChild(row);
  });

})

fetch("../dynamics/php/puntajes.php?valor=2")
.then((response)=>{
  return resp = response.json();
})
.then((text)=>{
  console.log(text);
  let body = document.getElementById("tab2");
  text.forEach(element => {
    let row = document.createElement("tr");
    let nombre = document.createElement("td");
    nombre.innerText = element[0];
    let puntos = document.createElement("td");
    puntos.innerText = element[1];
    row.appendChild(nombre);
    row.appendChild(puntos);
    body.appendChild(row);
  });

})
