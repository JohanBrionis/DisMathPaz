function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showExercise() {
    const practiceType = document.getElementById('practiceType').value;
    let exercise;
    let answer;

    switch (practiceType) {
        case 'decimalToBinary':
            exercise = getRandomNumber(1, 255); // Genera un número decimal entre 1 y 255
            answer = exercise.toString(2);
            break;
        case 'binaryToDecimal':
            exercise = getRandomNumber(1, 11111111); // Genera un número binario de 8 bits
            answer = parseInt(exercise, 2);
            break;
        // Agrega casos para otros tipos de práctica según sea necesario
    }

    document.getElementById('exerciseContainer').textContent = exercise;
    document.getElementById('answerOutput').textContent = ''; // Limpia la respuesta anterior si la hay
}

function showAnswer() {
    const practiceType = document.getElementById('practiceType').value;
    let answer;

    switch (practiceType) {
        case 'decimalToBinary':
        case 'binaryToDecimal':
            answer = document.getElementById('exerciseContainer').textContent;
            break;
        // Agrega casos para otros tipos de práctica según sea necesario
    }

    document.getElementById('answerOutput').textContent = answer;
}
