const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

if (numero >= 0) {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    alert(`O fatorial de ${numero} é ${fatorial}.`);
} else {
    alert("Por favor, insira um número não negativo.");
}
