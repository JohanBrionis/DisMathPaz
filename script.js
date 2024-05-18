function convert() {
    const conversionType = document.getElementById('conversionType').value;
    const numberInput = document.getElementById('numberInput').value;
    let result;

    switch (conversionType) {
        case 'decimalToBinary':
            result = parseInt(numberInput, 10).toString(2);
            break;
        case 'binaryToDecimal':
            result = parseInt(numberInput, 2).toString(10);
            break;
        case 'decimalToOctal':
            result = parseInt(numberInput, 10).toString(8);
            break;
        case 'octalToDecimal':
            result = parseInt(numberInput, 8).toString(10);
            break;
        case 'decimalToHex':
            result = parseInt(numberInput, 10).toString(16).toUpperCase();
            break;
        case 'hexToDecimal':
            result = parseInt(numberInput, 16).toString(10);
            break;
        case 'binaryToOctal':
            result = parseInt(numberInput, 2).toString(8);
            break;
        case 'octalToBinary':
            result = parseInt(numberInput, 8).toString(2);
            break;
        case 'binaryToHex':
            result = parseInt(numberInput, 2).toString(16).toUpperCase();
            break;
        case 'hexToBinary':
            result = parseInt(numberInput, 16).toString(2);
            break;
        default:
            result = 'Tipo de conversión no soportado';
    }

    document.getElementById('conversionOutput').textContent = result;
}


