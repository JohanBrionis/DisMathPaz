let editor;
let ejercicioActual = 0;
let ejercicios = [];

function cambiarEjercicio(direccion) {
    ejercicioActual += direccion;

    // Asegurarse de que no se salga del rango de los ejercicios
    if (ejercicioActual < 0) {
        ejercicioActual = 0;
    } else if (ejercicioActual >= ejercicios.length) {
        ejercicioActual = ejercicios.length - 1;
    }
    
    mostrarEjercicio(ejercicioActual);
}

// Cargar los ejercicios desde el archivo JSON
fetch('/Scripts/Ejercicios/ejercicios.json')
  .then(response => response.json())
  .then(data => {
    ejercicios = data.ejercicios;
    inicializarEditor();
    mostrarEjercicio(ejercicioActual);
});

// Inicializar el editor CodeMirror
function inicializarEditor() {
    editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
        mode: "text/html",
        theme: "dracula",
        lineNumbers: true,
        extraKeys: {
            "Ctrl-Space": "autocomplete"
        }
    });

    editor.on("inputRead", function(cm, event) {
        if (!cm.state.completionActive && event.text.length) {
            CodeMirror.commands.autocomplete(cm);
        }
    });
}

// Mostrar el ejercicio actual en la página
function mostrarEjercicio(index) {
    const ejercicio = ejercicios[index];
    document.getElementById('resultado').innerText = "";
    document.getElementById('titulo').innerText = ejercicio.titulo;
    document.getElementById('nivel').innerText = ejercicio.nivel;
    document.getElementById('descripcion').innerText = ejercicio.descripcion;
    editor.setValue(ejercicio.codigoInicial || "");
}

// Comprobación flexible del código ingresado
function verificarCodigo() {
  const codigoUsuario = editor.getValue().trim();
  const respuestaCorrecta = ejercicios[ejercicioActual].respuestaCorrecta.trim();
  const resultadoDiv = document.getElementById('resultado');

  // Comparación usando expresiones regulares
  const patron = new RegExp(respuestaCorrecta, 'i'); // 'i' para ignorar mayúsculas/minúsculas
  if (patron.test(codigoUsuario)) {
    resultadoDiv.innerText = '¡Correcto!';
    resultadoDiv.style.color = 'green';
  } else {
    resultadoDiv.innerText = 'Respuesta incorrecta. Revisa el formato o los detalles.';
    resultadoDiv.style.color = 'red';
  }
}

