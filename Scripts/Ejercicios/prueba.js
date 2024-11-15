let preguntas;
let preguntaActual = 0;

// Cargar preguntas desde el JSON
async function cargarPreguntas() {
    const respuesta = await fetch('/Scripts/Ejercicios/preguntas.json');
    preguntas = await respuesta.json();
    mostrarPregunta();
}

// Mostrar la pregunta actual y sus opciones
function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    document.getElementById("pregunta").innerText = pregunta.pregunta;

    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = ''; // Limpiar opciones previas

    pregunta.opciones.forEach((opcion, index) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        
        input.type = "radio";
        input.name = "opcion";
        input.value = index;

        label.appendChild(input);
        label.appendChild(document.createTextNode(opcion));
        opcionesDiv.appendChild(label);
        opcionesDiv.appendChild(document.createElement("br"));
    });
}

// Verificar respuesta seleccionada
function verificarRespuesta() {
    const opciones = document.getElementsByName("opcion");
    let respuestaSeleccionada;

    for (const opcion of opciones) {
        if (opcion.checked) {
            respuestaSeleccionada = parseInt(opcion.value);
            break;
        }
    }

    if (respuestaSeleccionada === preguntas[preguntaActual].respuesta) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. Inténtalo de nuevo.");
    }

    // Mostrar siguiente pregunta si hay más
    if (preguntaActual < preguntas.length - 1) {
        preguntaActual++;
        mostrarPregunta();
    } else {
        alert("¡Has completado todas las preguntas!");
    }
}

// Llamada inicial para cargar las preguntas
cargarPreguntas();
