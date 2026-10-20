let formulario;
let carruselPortada;
let pasosCarrusel;
let indiceCarrusel = 0;

document.addEventListener("DOMContentLoaded", inicializarEventos);

function inicializarEventos() {
    inicializarValidacionFormContacto();
    inicializarCarruselPortada();
}

function inicializarCarruselPortada() {
    carruselPortada = document.getElementById("carrusel-proceso");
    if (!carruselPortada) {
        return;
    }

    pasosCarrusel = carruselPortada.querySelectorAll(".proceso li");
    document.getElementById("carrusel-anterior").addEventListener("click", mostrarPasoAnterior);
    document.getElementById("carrusel-siguiente").addEventListener("click", mostrarPasoSiguiente);
    mostrarPaso(indiceCarrusel);
}

function mostrarPaso(indice) {
    for (let i = 0; i < pasosCarrusel.length; i++) {
        pasosCarrusel[i].hidden = i !== indice;
    }
    document.getElementById("carrusel-indicador").textContent = (indice + 1) + " / " + pasosCarrusel.length;
}

function mostrarPasoSiguiente() {
    indiceCarrusel = indiceCarrusel + 1;
    if (indiceCarrusel >= pasosCarrusel.length) {
        indiceCarrusel = 0;
    }
    mostrarPaso(indiceCarrusel);
}

function mostrarPasoAnterior() {
    indiceCarrusel = indiceCarrusel - 1;
    if (indiceCarrusel < 0) {
        indiceCarrusel = pasosCarrusel.length - 1;
    }
    mostrarPaso(indiceCarrusel);
}

function inicializarValidacionFormContacto() {
    formulario = document.getElementById("formulario-contacto");
    if (formulario) {
        formulario.addEventListener("submit", validarFormularioContacto);
    }
}

function validarFormularioContacto(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
        alert("Por favor, completar todos los campos del formulario.");
        return false;
    }

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, ingresar un correo electrónico valido.");
        return false;
    }

    const regexTelefono = /^[0-9]{7,15}$/;
    if (!regexTelefono.test(telefono)) {
        alert("Por favor, ingresar un número de telefono válido (solo números, mínimo 7 digitos).");
        return false;
    }

    if (mensaje.length < 10) {
        alert("El mensaje debe contener al menos 10 caracteres.");
        return false;
    }

    alert(`¡Gracias por contactarte, ${nombre}! Tu consulta sobre nuestras cervezas artesanales fue enviada con exito. Nos comunicaremos a la brevedad.`);

    formulario.reset();
    return true;
}

