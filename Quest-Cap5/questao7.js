const lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
const lado2 = parseFloat(prompt("Digite o segundo lado do triângulo:"));
const lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo:"));

// Verifica se os lados formam um triângulo válido
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        alert("O triângulo é equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("O triângulo é isósceles.");
    } else {
        alert("O triângulo é escaleno.");
    }
} else {
    alert("Os valores não formam um triângulo válido.");
}
