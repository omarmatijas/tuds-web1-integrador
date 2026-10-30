let vistasCarrusel = [];
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
    inicializarCarruselPortada();
}

function inicializarCarruselPortada() {
    carruselPortada = document.getElementById("carrusel-proceso");
    if (!carruselPortada) {
        return;
    }

    for (let i = 0; i < pasosProceso.length; i++) {
        const vista = crearVistaPaso(pasosProceso[i], i);
        vistasCarrusel.push(vista);
        carruselPortada.appendChild(vista);
    }

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

    carruselPortada.appendChild(controles);
    mostrarPaso(indiceCarrusel);
}

function crearVistaPaso(paso, indice) {
    const vista = document.createElement("div");
    vista.className = "carrusel-vista";

    const numero = document.createElement("span");
    numero.className = "paso-numero";
    numero.textContent = indice + 1;

    const imagen = document.createElement("img");
    imagen.src = paso.src;
    imagen.alt = paso.alt;
    imagen.title = paso.titulo;

    const texto = document.createElement("p");
    texto.textContent = paso.texto;

    vista.appendChild(numero);
    vista.appendChild(imagen);
    vista.appendChild(texto);
    return vista;
}

function mostrarPaso(indice) {
    for (let i = 0; i < vistasCarrusel.length; i++) {
        vistasCarrusel[i].hidden = i !== indice;
    }
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