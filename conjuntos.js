// Definición de la función randomInt
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Objeto para almacenar la evaluación actual
let currentEvaluation = {};

// Función generateSet
function generateSet() {
  const lower = randomInt(1, 5);
  const upper = randomInt(10, 20);
  return { lower, upper };
}

// Función generateSetOperationsQuestion
function generateSetOperationsQuestion() {
  const setA = generateSet();
  const setB = generateSet();
  const setC = generateSet();
  const universalSet = { lower: -10, upper: 20 };

  currentEvaluation.sets = { setA, setB, setC, universalSet };
  return `3. Dados los siguientes conjuntos:\n` +
      `\n A = {x / x ∈ N [${setA.lower}, ${setA.upper}]}\n B = {x / x ∈ Z Primos [${setB.lower}, ${setB.upper}]},\n C = {x / x ∈ R Pares enteros comprendidos entre [${setC.lower}, ${setC.upper}]},\n Conjunto universal (U) = {x / x ∈ R [${universalSet.lower}, ${universalSet.upper}]}\n\n` +
      `Realice las siguientes operaciones:\n\n` +
      `a. Escriba por extensión todos los conjuntos.\n\n` +
      `b. Dibuje los tres conjuntos en diagramas de Venn e identifique la intersección de los 3 conjuntos.\n\n` +
      `c. Escriba por extensión A menos B y B menos C.\n\n` +
      `d. Represente en diagramas de Venn la unión de los conjuntos B unión A.\n\n` +
      `e. Realice la diferencia simétrica entre A y C, escríbala en extensión y dibuje en diagrama de Venn.\n\n`;
}

// Función generateEvaluation
function generateEvaluation() {
  currentEvaluation = {};  // Reset current evaluation
  const evaluation = [];
  evaluation.push("Temas a evaluar: Sistemas de numeraciones conversiones, operaciones del sistema binario, conjuntos; operaciones, propiedades y aplicaciones");
  evaluation.push(generateSetOperationsQuestion());

  document.getElementById("evaluation").innerText = evaluation.join("\n");
  document.getElementById("answers").style.display = "none";  // Ocultar respuestas al generar nueva evaluación
}


