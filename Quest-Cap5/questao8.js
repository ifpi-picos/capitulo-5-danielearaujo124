// Exibe o menu para o usuário
let prato = prompt(
    "Escolha um prato do menu:\n1 - Pizza\n2 - Hambúrguer\n3 - Salada\n4 - Macarrão"
);

let descricao;
let preco;

//  o prato escolhido
switch (prato) {
    case "1":
        descricao = "Pizza - Massa crocante com queijo derretido e molho especial.";
        preco = 25.00;
        break;
    case "2":
        descricao = "Hambúrguer - Pão macio com carne suculenta e acompanhamentos.";
        preco = 15.00;
        break;
    case "3":
        descricao = "Salada - Uma combinação saudável de verduras frescas e molhos.";
        preco = 10.00;
        break;
    case "4":
        descricao = "Macarrão - Massa deliciosa com molho caseiro e ervas.";
        preco = 20.00;
        break;
    default:
        alert("Opção inválida. Por favor, escolha um prato válido.");
        descricao = null;
        preco = null;
        break;
}

// Exibe o resultado do prato
if (descricao && preco) {
    alert(`Você escolheu: ${descricao}\nPreço: R$${preco.toFixed(2)}`);
}
