const anoAtual = new Date().getFullYear();

const anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
const idade = anoAtual - anoNascimento;

if (idade >= 18) {
    alert("Você já é maior de idade.");
} else {
    alert("Você ainda não é maior de idade.");
}
