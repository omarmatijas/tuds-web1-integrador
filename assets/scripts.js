let formulario;
let carruselPortada;
let imagenCarrusel;
let textoCarrusel;
let numeroCarrusel;
let indicadorCarrusel;
let indiceCarrusel = 0;

const pasosProceso = [
    {
        src: "./assets/img/01_maceracion.jpg",
        alt: "Maceración de la malta en una olla de acero",
        titulo: "Maceración",
        texto: "Maceracion: se mezcla la malta con agua caliente para extraer los azucares necesarios."
    },
    {
        src: "./assets/img/02_coccion.png",
        alt: "Cocción del mosto hirviendo en una olla",
        titulo: "Cocción",
        texto: "Cocción: el líquido obtenido, llamado mosto, se hierve y se agrega el lúpulo, que aporta sabor, aroma y amargor."
    },
    {
        src: "./assets/img/03_fermentacion.jpg",
        alt: "Tanques de fermentación de acero inoxidable",
        titulo: "Fermentación",
        texto: "Fermentación: se enfría el mosto y se incorpora la levadura, que transforma los azúcares en alcohol y dióxido de carbono."
    },
    {
        src: "./assets/img/04_marudacion.jpg",
        alt: "Tanques de maduración en la planta de elaboración",
        titulo: "Maduración",
        texto: "Maduración: la cerveza permanece un tiempo en reposo para desarrollar mejor sus sabores y aromas."
    },
    {
        src: "./assets/img/05_envasado.jpg",
        alt: "Envasado de cerveza en una botella de vidrio",
        titulo: "Envasado",
        texto: "Envasado: finalmente, la cerveza se filtra o acondiciona según el estilo y se coloca en botellas, latas o barriles."
    }
];

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

    const vista = document.createElement("div");
    vista.className = "carrusel-vista";

    numeroCarrusel = document.createElement("span");
    numeroCarrusel.className = "paso-numero";

    imagenCarrusel = document.createElement("img");

    textoCarrusel = document.createElement("p");

    vista.appendChild(numeroCarrusel);
    vista.appendChild(imagenCarrusel);
    vista.appendChild(textoCarrusel);

    const controles = document.createElement("div");
    controles.className = "carrusel-controles";

    const botonAnterior = document.createElement("button");
    botonAnterior.type = "button";
    botonAnterior.textContent = "Anterior";
    botonAnterior.addEventListener("click", mostrarPasoAnterior);

    indicadorCarrusel = document.createElement("p");

    const botonSiguiente = document.createElement("button");
    botonSiguiente.type = "button";
    botonSiguiente.textContent = "Siguiente";
    botonSiguiente.addEventListener("click", mostrarPasoSiguiente);

    controles.appendChild(botonAnterior);
    controles.appendChild(indicadorCarrusel);
    controles.appendChild(botonSiguiente);

    carruselPortada.appendChild(vista);
    carruselPortada.appendChild(controles);
    mostrarPaso(indiceCarrusel);
}

function mostrarPaso(indice) {
    const paso = pasosProceso[indice];

    imagenCarrusel.src = paso.src;
    imagenCarrusel.alt = paso.alt;
    imagenCarrusel.title = paso.titulo;
    textoCarrusel.textContent = paso.texto;
    numeroCarrusel.textContent = indice + 1;
    indicadorCarrusel.textContent = (indice + 1) + " / " + pasosProceso.length;
}

function mostrarPasoSiguiente() {
    indiceCarrusel = indiceCarrusel + 1;
    if (indiceCarrusel >= pasosProceso.length) {
        indiceCarrusel = 0;
    }
    mostrarPaso(indiceCarrusel);
}

function mostrarPasoAnterior() {
    indiceCarrusel = indiceCarrusel - 1;
    if (indiceCarrusel < 0) {
        indiceCarrusel = pasosProceso.length - 1;
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

