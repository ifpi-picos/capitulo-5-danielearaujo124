const peso = parseFloat(prompt("Digite seu peso em kg:"));
const altura = parseFloat(prompt("Digite sua altura em metros:"));

if (peso > 0 && altura > 0) {
    const imc = peso / (altura * altura);

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    alert(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}.`);
} else {
    alert("Por favor, insira valores válidos para peso e altura.");
}
