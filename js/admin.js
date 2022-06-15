class Pelicula {
    constructor(id, titulo, descripcion, imagen) {
        this.id = id;
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.imagen = imagen;
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
        <td>${pelicula.titulo}</td>
        <td>${pelicula.descripcion}</td>
        <td>${pelicula.imagen}</td>
        <td><button id="edit" class="btn btn-warning btn-sm" onclick="mostrarModal(${pelicula.id})"><i class="fa fa-pencil-square-o" aria-hidden="true">Edit</i></button></td>
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

    peliculas.push(new Pelicula(id, titulo, descripcion, imagen));
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
    <label><b>Título</b></label>
    <input id="titulo" class="form-control" type="text"  placeholder="Ingrese el título" required />
    <label>Descripción</label>
    <textarea id="descripcion" class="form-control"  placeholder="Ingrese la descripción" required></textarea>
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

    peliculas[index] = {
        id: id,
        titulo: titulo,
        descripcion: descripcion,
        imagen: imagen
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
