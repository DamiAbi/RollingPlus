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