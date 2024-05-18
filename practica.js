// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Función para generar un número aleatorio y sistemas numéricos aleatorios
    function generateExercise() {
        const number = Math.floor(Math.random() * 100); // Número aleatorio entre 0 y 99
        const systems = ['decimal', 'binario', 'octal', 'hexadecimal'];
        let sourceSystem, targetSystem;

        // Asegurarse de que el sistema fuente y el sistema destino sean diferentes
        do {
            sourceSystem = systems[Math.floor(Math.random() * systems.length)];
            targetSystem = systems[Math.floor(Math.random() * systems.length)];
        } while (sourceSystem === targetSystem);

        let sourceNumber;

        switch (sourceSystem) {
            case 'decimal':
                sourceNumber = number.toString(10);
                break;
            case 'binario':
                sourceNumber = number.toString(2);
                break;
            case 'octal':
                sourceNumber = number.toString(8);
                break;
            case 'hexadecimal':
                sourceNumber = number.toString(16).toUpperCase();
                break;
        }

        return { sourceNumber, sourceSystem, targetSystem };
    }

    // Función para convertir el número entre sistemas numéricos
    function convertNumber(number, sourceSystem, targetSystem) {
        let decimalNumber;
        let explanation = `Paso 1: Convertir ${number} desde ${sourceSystem} a decimal.\n\n`;

        // Convertir el número fuente a decimal
        switch (sourceSystem) {
            case 'decimal':
                decimalNumber = parseInt(number, 10);
                explanation += `El número ${number} ya está en decimal.\n\n`;
                break;
            case 'binario':
                decimalNumber = parseInt(number, 2);
                explanation += `${number} en binario se convierte a decimal:\n`;
                explanation += `${number.split('').reverse().map((digit, index) => `${digit} * 2^${index}`).join(' + ')} = ${decimalNumber}\n\n`;
                break;
            case 'octal':
                decimalNumber = parseInt(number, 8);
                explanation += `${number} en octal se convierte a decimal:\n`;
                explanation += `${number.split('').reverse().map((digit, index) => `${digit} * 8^${index}`).join(' + ')} = ${decimalNumber}\n\n`;
                break;
            case 'hexadecimal':
                decimalNumber = parseInt(number, 16);
                explanation += `${number} en hexadecimal se convierte a decimal:\n`;
                explanation += `${number.split('').reverse().map((digit, index) => `${digit} * 16^${index}`).join(' + ')} = ${decimalNumber}\n\n`;
                break;
        }

        explanation += `Paso 2: Convertir ${decimalNumber} desde decimal a ${targetSystem}.\n\n`;
        let convertedNumber;

        // Convertir el número decimal al sistema destino
        switch (targetSystem) {
            case 'decimal':
                convertedNumber = decimalNumber.toString(10);
                explanation += `${decimalNumber} en decimal ya es ${convertedNumber}.\n`;
                break;
            case 'binario':
                convertedNumber = decimalNumber.toString(2);
                explanation += `${decimalNumber} en decimal se convierte a binario:\n`;
                explanation += `Dividiendo ${decimalNumber} por 2, obtenemos los restos y el cociente:\n`;
                explanation += getBinaryConversionSteps(decimalNumber);
                explanation += `El número binario es ${convertedNumber}.\n`;
                break;
            case 'octal':
                convertedNumber = decimalNumber.toString(8);
                explanation += `${decimalNumber} en decimal se convierte a octal:\n`;
                explanation += `Dividiendo ${decimalNumber} por 8, obtenemos los restos y el cociente:\n`;
                explanation += getOctalConversionSteps(decimalNumber);
                explanation += `El número octal es ${convertedNumber}.\n`;
                break;
            case 'hexadecimal':
                convertedNumber = decimalNumber.toString(16).toUpperCase();
                explanation += `${decimalNumber} en decimal se convierte a hexadecimal:\n`;
                explanation += `Dividiendo ${decimalNumber} por 16, obtenemos los restos y el cociente:\n`;
                explanation += getHexadecimalConversionSteps(decimalNumber);
                explanation += `El número hexadecimal es ${convertedNumber}.\n`;
                break;
        }

        return { convertedNumber, explanation };
    }

    // Función para obtener los pasos de conversión a binario
    function getBinaryConversionSteps(decimalNumber) {
        let steps = '';
        let number = decimalNumber;
        while (number > 0) {
            let quotient = Math.floor(number / 2);
            let remainder = number % 2;
            steps += `${number} / 2 = ${quotient} con residuo ${remainder}\n`;
            number = quotient;
        }
        steps += '\n';
        return steps;
    }

    // Función para obtener los pasos de conversión a octal
    function getOctalConversionSteps(decimalNumber) {
        let steps = '';
        let number = decimalNumber;
        while (number > 0) {
            let quotient = Math.floor(number / 8);
            let remainder = number % 8;
            steps += `${number} / 8 = ${quotient} con residuo ${remainder}\n`;
            number = quotient;
        }
        steps += '\n';
        return steps;
    }

    // Función para obtener los pasos de conversión a hexadecimal
    function getHexadecimalConversionSteps(decimalNumber) {
        let steps = '';
        let number = decimalNumber;
        while (number > 0) {
            let quotient = Math.floor(number / 16);
            let remainder = number % 16;
            steps += `${number} / 16 = ${quotient} con residuo ${remainder.toString(16).toUpperCase()}\n`;
            number = quotient;
        }
        steps += '\n';
        return steps;
    }

    // Función para actualizar la vista con un nuevo ejercicio
    function updateExercise() {
        exercise = generateExercise();
        document.getElementById('number').textContent = exercise.sourceNumber;
        document.getElementById('source-system').textContent = exercise.sourceSystem;
        document.getElementById('target-system').textContent = exercise.targetSystem;
        document.getElementById('result').style.display = 'none';
        document.getElementById('explanation').style.display = 'none';
        document.getElementById('show-result-btn').style.display = 'inline-block';
    }

    // Inicializar el primer ejercicio
    let exercise = generateExercise();
    document.getElementById('number').textContent = exercise.sourceNumber;
    document.getElementById('source-system').textContent = exercise.sourceSystem;
    document.getElementById('target-system').textContent = exercise.targetSystem;

    // Manejar el evento de clic en el botón "Generar Ejercicio"
    document.getElementById('generate-exercise-btn').addEventListener('click', updateExercise);

    // Manejar el evento de clic en el botón "Ver Resultado"
    document.getElementById('show-result-btn').addEventListener('click', () => {
        const { convertedNumber, explanation } = convertNumber(exercise.sourceNumber, exercise.sourceSystem, exercise.targetSystem);
        document.getElementById('converted-number').textContent = convertedNumber;
        document.getElementById('conversion-explanation').textContent = explanation;
        document.getElementById('result').style.display = 'block';
        document.getElementById('explanation').style.display = 'block';
        document.getElementById('show-result-btn').style.display = 'none';
    });
});
