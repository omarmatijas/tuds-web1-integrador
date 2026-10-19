//Validacion del formulario

const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

const nombre = document.getElementById("nombre").value.trim();
const email = document.getElementById("email").value.trim();
const telefono = document.getElementById("telefono").value.trim();
const mensaje = document.getElementById("mensaje").value.trim();

if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
    alert("Por favor, debes completar todos los campos del formulario.");
return;
}

const regexTelefono = /^[0-9+\s-]{7,15}\$/;
if (!regexTelefono.test(telefono)) {
    alert("Por favor, ingresar un numero de telefono valido(Solo numeros, minimo 7 digitos).");
    return;
}

if (mensaje.length <10){
    alert("El mensaje debe contener al menso 10caracteres.");
    return;
}

alert('¡Gracias por contactarte, ${nombre}! Tu consulta sobre nuestras cervezas artesanales fue enviada con exito. Nos comunicaremos a la brevedad.');

formulario.reset();
});

