document.addEventListener("DOMContentLoaded", inicializarEventos);

function inicializarEventos() {
    inicializarValidacionFormContacto();

function inicializarValidacionFormContacto() {
    formulario = document.getElementById("formulario-contacto");
    if (formulario) {
        formulario.addEventListener("submit", validarFormularioContacto);
        formulario.addEventListener("reset", limpiarMensajesError);
    }
}

function validarFormularioContacto(evento) {
    evento.preventDefault();
    limpiarMensajesError();

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const mensaje = document.getElementById("mensaje");
    const errores = [];

    if (nombre.value.trim() === "") {
        errores.push({
            campo: nombre,
            mensaje: "Por favor, completar el nombre y apellido."
        });
    }

    const emailValor = email.value.trim();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailValor === "") {
        errores.push({
            campo: email,
            mensaje: "Por favor, completar el correo electrónico."
        });
    } else if (!regexEmail.test(emailValor)) {
        errores.push({
            campo: email,
            mensaje: "Por favor, ingresar un correo electrónico valido."
        });
    }

    const telefonoValor = telefono.value.trim();
    const regexTelefono = /^[0-9]{7,15}$/;
    if (telefonoValor === "") {
        errores.push({
            campo: telefono,
            mensaje: "Por favor, completar el teléfono."
        });
    } else if (!regexTelefono.test(telefonoValor)) {
        errores.push({
            campo: telefono,
            mensaje: "Por favor, ingresar un número de telefono válido (solo números, mínimo 7 digitos)."
        });
    }

    const mensajeValor = mensaje.value.trim();
    if (mensajeValor === "") {
        errores.push({
            campo: mensaje,
            mensaje: "Por favor, completar el mensaje."
        });
    } else if (mensajeValor.length < 10) {
        errores.push({
            campo: mensaje,
            mensaje: "El mensaje debe contener al menos 10 caracteres."
        });
    }

    if (errores.length > 0) {
        for (let i = 0; i < errores.length; i++) {
            mostrarMensajeError(errores[i].campo, errores[i].mensaje);
        }
        return false;
    }

    const contenedorResumen = document.getElementById("contenedor-resumenFormulario");
    contenedorResumen.innerHTML = "";

    const resumen = document.createElement("div");
    resumen.className = "resumen-formulario";

    const titulo = document.createElement("h3");
    titulo.textContent = "¡Gracias por contactarte con HAUSBIER!";

    const parrafoNombre = document.createElement("p");
    parrafoNombre.textContent = "Nombre y apellido: " + nombre.value.trim();

    const parrafoEmail = document.createElement("p"); 
    parrafoEmail.textContent = "Correo electrónico: " + email.value.trim();

    const parrafoTelefono = document.createElement("p"); 
    parrafoTelefono.textContent = "Teléfono: " + telefono.value.trim();

    const parrafoConfirmacion = document.createElement("p"); 
    parrafoConfirmacion.textContent = "Tu consulta fue enviada correctamente. ¡¡¡Gracias por elegir HAUSBIER!!!";

    resumen.appendChild(titulo);
    resumen.appendChild(parrafoNombre);
    resumen.appendChild(parrafoEmail);
    resumen.appendChild(parrafoTelefono);
    resumen.appendChild(parrafoConfirmacion);

    contenedorResumen.appendChild(resumen);
    formulario.reset();

    return true;

}

function mostrarMensajeError(campo, texto) {
    const aviso = document.createElement("p");
    aviso.className = "error";
    aviso.textContent = texto;
    campo.insertAdjacentElement("afterend", aviso);
}

function limpiarMensajesError() {
    const avisos = formulario.querySelectorAll(".error");
    for (let i = 0; i < avisos.length; i++) {
        avisos[i].remove();
    }
}
}