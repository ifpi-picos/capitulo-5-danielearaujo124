const numero = parseInt(prompt("Digite um número positivo:"));

if (numero > 0) {
    for (let i = 1; i <= numero; i += 2) {
        console.log(i);
    }
} else {
    alert("Por favor, insira um número positivo.");
}
