let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let numero3 = parseFloat(prompt("Digite o terceiro número:"));

// vai inicializar uma variável para guardar  o maior número
let maior;

// Compara os números para encontrar o maior
if (numero1 > numero2 && numero1 > numero3) {
    maior = numero1;
} else if (numero2 > numero1 && numero2 > numero3) {
    maior = numero2;
} else {
    maior = numero3;
}

// mostrar o maior número
alert("O maior número é: " + maior);