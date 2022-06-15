let consulta = JSON.parse(localStorage.getItem("consultas")) || []
let msjExito = document.getElementById("formContacto")


class Consulta {

    constructor(nombre, email, mensaje) 
    {
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;
    }
}

function enviarMensaje(e){
    
    e.preventDefault()

    let nombre = document.getElementById("nombre").value
    let email = document.getElementById("email").value
    let mensaje = document.getElementById("msjForm").value
    
    if (isNaN(nombre)) 
    {    
        consulta.push(new Consulta(nombre, email, mensaje))
        localStorage.setItem("consultas", JSON.stringify(consulta)) 
        
        document.getElementById("formulario").reset()

        let msj = document.createElement("div")
        msj.classList= "col-12 col-md-12 col-lg-12"
        
        let cuerpo = `  <div class="alert alert-warning mt-5" role="alert">
                            Le enviaremos la respuesta a ${email}
                        </div>`
        
        msj.innerHTML = cuerpo
        document.getElementById("formContacto").appendChild(msj)

    }else{
        return alert("Debe ingresar datos validos")
    }

}

document.getElementById("formulario").addEventListener("submit", enviarMensaje)






// 77CB606427F054F44F674FECD4DB259B9977
// smtp.elasticemail.com 2525