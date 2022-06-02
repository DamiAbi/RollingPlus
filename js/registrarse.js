//localstorage debe tener una clave llamada usuarios -> array de objetos con los datos de cada usuario registrado

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

class Usuario {
    constructor(nombre, email, password, rol = "usuario") {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}

const registroUsuario = function (e) {

    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;


    if (isNaN(nombre))
    {
        //comparar contraseñas
        if (password !== password2) 
        {
            return alert("Las contraseñas no coinciden");
        }
    
        let validar = usuarios.find((user) => {
            return user.email === correo;
        });
    
        if (validar) {
            return alert("El correo ya está registrado.");
        }
        
        usuarios.push(new Usuario(nombre, correo, password));
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        document.getElementById("formulario").reset();
    
        alert("Usuario registrado correctamente");

        // document.getElementById("text_nombre").focus();
        location.replace("../pages/login.html");
        
    }
    else
    {
        return alert("El nombre DEBE ser un texto valido")
    }


};

document.getElementById("formulario").addEventListener("submit", registroUsuario);
