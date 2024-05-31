
        let currentEvaluation = {};

        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function generateConversionQuestion() {
            const bases = [10, 16];
            const targetBases = ["binario", "hexadecimal", "decimal"];
            const numbers = [randomInt(100, 1000), randomInt(100, 1000), randomInt(0x1000, 0xFFFF).toString(16).toUpperCase()];
            const questions = numbers.map((number, index) => {
                return `( ${number} )^${bases[index % bases.length]} a ${targetBases[index]}`;
            });

            currentEvaluation.conversionNumbers = numbers;
            return `1. Realice cada una de las siguientes conversiones, la respuesta de cada ejercicio debe ser justificada con el procedimiento paso a paso.\n\nEjercicio convertir:\n ${questions.join(",\n ")}.\n`;
        }

        function generateBinaryOperationsQuestion() {
            const hex1 = randomInt(0x1000, 0xFFFF).toString(16).toUpperCase();
            const hex2 = randomInt(0x100, 0xFFF).toString(16).toUpperCase();
            const dec1 = randomInt(100, 1000);
            const dec2 = randomInt(100, 1000);
            const dec3 = randomInt(100, 200);
            const dec4 = randomInt(1, 10);

            currentEvaluation.binaryOperations = { hex1, hex2, dec1, dec2, dec3, dec4 };
            return `2. Dados los siguientes números realiza la conversión a sistema binario y realice paso a paso las operaciones indicadas en cada cuadro:\n\nSumar: (${hex1})^16 sumar con (${hex2})^16,\nrestar (${dec1})^10 restar con (${dec2})^10, \nmultiplicar (${dec3})^10 por (${dec4})^10, \ndividir (${dec3})^10 entre (${dec4})^10\n`;
        }

        function generateSet() {
            const lower = randomInt(1, 5);
            const upper = randomInt(10, 20);
            return { lower, upper };
        }

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

        function generateEvaluation() {
            currentEvaluation = {};  // Reset current evaluation
            const evaluation = [];
            evaluation.push("Temas a evaluar: Sistemas de numeraciones conversiones, operaciones del sistema binario, conjuntos; operaciones, propiedades y aplicaciones");
            evaluation.push(generateConversionQuestion());
            evaluation.push(generateBinaryOperationsQuestion());
            evaluation.push(generateSetOperationsQuestion());

            document.getElementById("evaluation").innerText = evaluation.join("\n");
            document.getElementById("answers").style.display = "none";  // Ocultar respuestas al generar nueva evaluación
        }

        function showAnswers() {
            const answers = [];
            answers.push("Respuestas a la evaluación:\n");

            // Respuestas de las conversiones
            answers.push("1. Respuestas de las conversiones:");
            answers.push("a) (500)^10 a binario: " + (currentEvaluation.conversionNumbers[0]).toString(2));
            answers.push("b) (131)^10 a hexadecimal: " + (currentEvaluation.conversionNumbers[1]).toString(16).toUpperCase());
            answers.push("c) (D0CE)^16 a decimal: " + parseInt(currentEvaluation.conversionNumbers[2], 16).toString(10));

            // Respuestas de las operaciones en sistema binario
            const { hex1, hex2, dec1, dec2, dec3, dec4 } = currentEvaluation.binaryOperations;
            answers.push("\n2. Respuestas de las operaciones en sistema binario:");
            answers.push(`a) Sumar (${hex1})^16 y (${hex2})^16 en binario: ` + (parseInt(hex1, 16) + parseInt(hex2, 16)).toString(2));
            answers.push(`b) Restar (${dec1})^10 y (${dec2})^10 en binario: ` + (dec1 - dec2).toString(2));
            answers.push(`c) Multiplicar (${dec3})^10 por (${dec4})^10 en binario: ` + (dec3 * dec4).toString(2));
            answers.push(`d) Dividir (${dec3})^10 entre (${dec4})^10 en binario: ` + Math.floor(dec3 / dec4).toString(2));

            // Respuestas de las operaciones de conjuntos
            const { setA, setB, setC } = currentEvaluation.sets;

            answers.push("\n3. Respuestas de las operaciones de conjuntos:");
            answers.push("a) Escribir por extensión todos los conjuntos:");
            answers.push(`A = {${Array.from({ length: setA.upper - setA.lower + 1 }, (_, i) => i + setA.lower).join(", ")}}`);
            answers.push(`B = {${Array.from({ length: setB.upper - setB.lower + 1 }, (_, i) => i + setB.lower).filter(isPrime).join(", ")}}`);
            answers.push(`C = {${Array.from({ length: setC.upper - setC.lower + 1 }, (_, i) => i + setC.lower).filter(x => x % 2 === 0).join(", ")}}`);

            document.getElementById("answers").innerText = answers.join("\n");
            document.getElementById("answers").style.display = "block";  // Mostrar respuestas
        }

        function isPrime(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }