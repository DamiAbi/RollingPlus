let pelicula = JSON.parse(localStorage.getItem('pelicula')) || [];

(() => {
    let titulo = document.querySelector('.titulo');
    let descripcion = document.querySelector('.descripcion');
    let imagen = document.querySelector('.imagen');

    titulo.innerHTML = pelicula.titulo;
    descripcion.innerHTML = pelicula.descripcion;
    imagen.src = pelicula.imagen;
})();
