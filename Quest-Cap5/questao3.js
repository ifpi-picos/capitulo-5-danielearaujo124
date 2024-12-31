const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    alert(`A média é ${media.toFixed(2)}. O aluno foi aprovado!`);
} else {
    alert(`A média é ${media.toFixed(2)}. O aluno foi reprovado.`);
}
