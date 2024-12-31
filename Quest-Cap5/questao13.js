const numeroSecreto = Math.floor(Math.random() * 101);  // Gera um número aleatório entre 0 e 100
let tentativas = 0;
const maxTentativas = 10;

alert("Bem-vindo ao jogo de adivinhação! Tente adivinhar o número entre 0 e 100.");

while (tentativas < maxTentativas) {
    const palpite = parseInt(prompt(`Tentativa ${tentativas + 1} de ${maxTentativas}. Digite seu palpite:`));

    if (palpite === numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas + 1} tentativas.`);
        break;
    } else if (palpite < numeroSecreto) {
        alert("O número secreto é maior. Tente novamente.");
    } else {
        alert("O número secreto é menor. Tente novamente.");
    }

    tentativas++;

    if (tentativas === maxTentativas) {
        alert(`Você atingiu o limite de tentativas. O número secreto era ${numeroSecreto}.`);
    }
}
