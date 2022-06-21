let user = JSON.parse(localStorage.getItem('user')) || [];
let container = document.querySelector('.container');

// Chequear si el usuario es admin

(() => {
    if (user.rol != 'admin') {
        container.innerHTML = `<div class="denegado"><h4 class="denegado-aviso text-center text-white">No posee 
        los permisos para acceder a esta sección. </h4> <a class="btn btn-volver" href="../index.html">Regresar</a></div>`
    } else {
        let saludo = document.querySelector('.saludo');
        saludo.innerHTML = user.nombre;
    }
    
})();


class Pelicula {
    constructor(id, titulo, descripcion, imagen, categoria) {
        this.id = id;
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.imagen = imagen;
            this.categoria = categoria
    }
}

// Obtener datos
let peliculas = JSON.parse(localStorage.getItem('peliculas')) || [];

// Obtener/crear objetos principales a usar
let tablaBody = document.getElementById('body_tabla');
let modal = new bootstrap.Modal(document.getElementById('modal'));
let modalBody = document.querySelector('.modal-body');
let modalTitulo = document.getElementById('modalTitulo');

// Llenar Tabla
const setTabla = () => {
    tablaBody.innerHTML = '';

    peliculas.map((pelicula, index) => {
        let fila = document.createElement('tr');
        let celda = `<th scope="row">${index + 1}</th>
        <td>${pelicula.titulo.length > 30 ? pelicula.titulo.substring(0,30) + '...' : pelicula.titulo}</td>
        <td>${pelicula.descripcion.length > 30 ? pelicula.descripcion.substring(0,30) + '...' : pelicula.descripcion}</td>
        <td>${pelicula.imagen.length > 30 ? pelicula.imagen.substring(0,30) + '...' : pelicula.imagen}</td>
        <td>${pelicula.categoria}</td>
        <td><button id="edit" class="btn btn-outline-light btn-sm" onclick="mostrarModal(${pelicula.id})"><i class="fa fa-pencil-square-o" aria-hidden="true">Edit</i></button></td>
        <td><button id="delete" class="btn btn-danger btn-sm" onclick="eliminarPelicula(${index})"><i class="fa fa-trash-o" aria-hidden="true">X</i></button></td>`;

        fila.innerHTML = celda;
        tablaBody.appendChild(fila);
    })

}

// Agregar nueva pelicula
function guardarPelicula() {
    // e.preventDefault();

    let id = new Date().getTime();
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;
    let categoria = document.getElementById('categoria').value;

    peliculas.push(new Pelicula(id, titulo, descripcion, imagen, categoria));
    localStorage.setItem('peliculas', JSON.stringify(peliculas));

    setTabla();
    modal.hide();
}

// Mostrar modal
function mostrarModal(id) {
    modal.show();
    !id ? initModalAgregar() : initModalEdit(id);
}

function initModalAgregar() {
    modalTitulo.innerHTML = 'Agregar nueva película';
    modalBody.innerHTML = '';
    modalBody.innerHTML =  `<form id="form-agregar" onsubmit="return false">
    <label>Título</label>
    <input id="titulo" class="form-control" type="text"  placeholder="Ingrese el título" required />
    <label>Descripción</label>
    <textarea id="descripcion" class="form-control"  placeholder="Ingrese la descripción" required></textarea>
    <label>Categoría</label>
    <select id="categoria" class="form-select" required>
        <option selected>Elija una categoría</option>
        <option value="recomendados">Recomendados</option>
        <option value="series">Series</option>
        <option value="anime">Anime</option>
        <option value="proximamente">Próximamente</option>
    </select>
    <label>Imagen</label>
    <input
      id="imagen"
      class="form-control"
      type="text"
      placeholder="Ingrese una url"
      required
    />
  </form>
  <button class="btn btn-primary mt-3 float-end" onclick="guardarPelicula()">Guardar</button>`
}

// Crear modal edit
function initModalEdit(id) {
    let peli = peliculas.find(pelicula => pelicula.id == id);

    modalTitulo.innerHTML = 'Editar película';
    modalBody.innerHTML = '';   
    modalBody.innerHTML =  `<form id="form-update" onsubmit="return false">
    <label><b>Título</b></label>
    <input id="titulo" class="form-control" type="text" value="${peli.titulo}" required />
    <label>Descripción</label>
    <textarea id="descripcion" class="form-control" value="${peli.descripcion}" required>${peli.descripcion}</textarea>
    <label>Categoría</label>
    <select id="categoria" class="form-select">
        <option selected>Elija una categoría</option>
        <option value="recomendados">Recomendados</option>
        <option value="series">Series</option>
        <option value="anime">Anime</option>
        <option value="proximamente">Próximamente</option>
    </select>
    <label>Imagen</label>
    <input
      id="imagen"
      class="form-control"
      type="text"
      placeholder="Ingrese una url"
      value="${peli.imagen}"
      required
    />
    <button class="btn btn-primary mt-3 float-end" onclick="editPelicula(${peli.id})">Guardar</button>
  </form>`

}

// Edit Pelicula
function editPelicula(id) {
    let index = peliculas.findIndex(pelicula => pelicula.id == id);
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;
    let categoria = document.getElementById('categoria').value;

    peliculas[index] = {
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        imagen: imagen,
        categoria: categoria
    }

    localStorage.setItem('peliculas', JSON.stringify(peliculas));
    setTabla();
    modal.hide();
}

// Eliminar película
function eliminarPelicula(index) {
    // let peliIndex = peliculas.findIndex(pelicula => pelicula.id == id);
    peliculas.splice(index, 1);
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
    setTabla();
}

setTabla();
