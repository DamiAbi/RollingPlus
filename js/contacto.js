let consulta = JSON.parse(localStorage.getItem("consultas")) || []

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

    if (isNan(nombre)) 
    {
        consulta.push(new Consulta(nombre, email, mensaje))
        localStorage.setItem("consultas", JSON.stringify(consulta))
        
        document.getElementById("formulario").reset()
        alert("Su mensaje ha sido enviado con exito")
        

    }

}