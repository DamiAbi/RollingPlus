let fila = document.querySelector(`.contenedor-carousel`)
let peliculas = document.querySelector(`.pelicula`)

let flechaIzquierda = document.querySelector(`.flecha-izquierda`)
let flechaDerecha = document.querySelector(`.flecha-derecha`)

//Event listener para flecha derecha // 
flechaDerecha.addEventListener(`click`,() => {
   fila.scrollLeft += fila.offsetWidth;
  console.log(`hola`)
})

//Event listener para flecha Izquierda // 
flechaIzquierda.addEventListener(`click`,() => {
   fila.scrollLeft -= fila.offsetWidth;
   
}) 


let fila2 = document.querySelector(`.contenedor-carousel-2`)
let peliculas2 = document.querySelector(`.pelicula-2`)

let flechaIzquierda2 = document.querySelector(`.flecha-izquierda-2`)
let flechaDerecha2 = document.querySelector(`.flecha-derecha-2`)

flechaDerecha2.addEventListener(`click`,() => {
   fila2.scrollLeft += fila2.offsetWidth;
  console.log(`hola`)
})
-2

flechaIzquierda2.addEventListener(`click`,() => {
   fila2.scrollLeft -= fila2.offsetWidth;
   
}) 
let fila3 = document.querySelector(`.contenedor-carousel-3`)
let peliculas3 = document.querySelector(`.pelicula-3`)

let flechaIzquierda3 = document.querySelector(`.flecha-izquierda-3`)
let flechaDerecha3 = document.querySelector(`.flecha-derecha-3`)
/ 
flechaDerecha3.addEventListener(`click`,() => {
   fila3.scrollLeft += fila3.offsetWidth;
  console.log(`hola`)
})
-2
 
flechaIzquierda3.addEventListener(`click`,() => {
   fila3.scrollLeft -= fila3.offsetWidth;
   
}) 

let fila4 = document.querySelector(`.contenedor-carousel-4`)
let peliculas4 = document.querySelector(`.pelicula-4`)

let flechaIzquierda4 = document.querySelector(`.flecha-izquierda-4`)
let flechaDerecha4 = document.querySelector(`.flecha-derecha-4`)
 
flechaDerecha4.addEventListener(`click`,() => {
   fila4.scrollLeft += fila4.offsetWidth;
  console.log(`hola`)
})
-2
flechaIzquierda4.addEventListener(`click`,() => {
   fila4.scrollLeft -= fila4.offsetWidth;
   
}) 


function cargarTarjetas() {
    contenedorTarjetas.innerHTML=" ";
    if(peliculas.length > 0){
       peliculas.map(peliculas=>{
       let div=document.createElement('div')
       div.classList="col-12 col-md-4 mb-3";
       let tarjeta=`<div class="card h-100">
       <img src="${peliculas.imagen}" class="card-img-top" alt="${peliculas.nombre}">
    <div class="card-body">
     <h5 class="${peliculas.nombre}">Card title</h5>
     <p class="card-text">${peliculas.descripcion}</p>
     <a href="#" class="btn btn-primary">Ver mas</a>
   </div>
   <div>`
       div.innerHTML=tarjeta
       contenedorTarjetas.appendChild(div)
    });
    }else{
       let div=document.createElement('div')
       let alerta=`<div class="alert-warning" role="alert">No hay peliculas disponibles
       <div>`
       div.innerHTML=alerta
       contenedorTarjetas.appendChild(div)
    }
}

peliculas.forEach( pelicula => { pelicula.addEventListener( "mouseenter", (e) =>
{ const elemento= e.currentTarget;setTimeout( ()=>
    {pelicula.forEach( pelicula => pelicula.classList.remove( "hover"));
    elemento.classList.add("hover");
}, 300)}) })





