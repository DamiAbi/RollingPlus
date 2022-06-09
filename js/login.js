let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function handleSubmit(e) {

    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // let login = document.getElementById("linkLogin")

    let validar = usuarios.find((user) => {
        return user.email === email;
    });

    if (validar) 
    {
        if (validar.password === password) 
        {
            localStorage.setItem("user", JSON.stringify(validar));
            
            if (validar.rol === "admin") 
            {
                location.replace("../administracion.html");
            }
            else{
                location.replace("../index.html")
            }
        } 
        else 
        {
            alert("El correo o el password es incorrecto");
        }

    } else {
        alert("El correo ingresado no existe");
    }
}

document.getElementById("formulario").addEventListener("submit", handleSubmit);

