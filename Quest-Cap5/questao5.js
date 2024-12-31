const escolha = prompt("Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para converter de Fahrenheit para Celsius:");

if (escolha === "C" || escolha === "c") {
    const celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    const fahrenheit = (celsius * 9/5) + 32;
    alert(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`);
} else if (escolha === "F" || escolha === "f") {
    const fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    const celsius = (fahrenheit - 32) * 5/9;
    alert(`A temperatura em Celsius é: ${celsius.toFixed(2)}°C`);
} else {
    alert("Opção inválida. Por favor, escolha 'C' ou 'F'.");
}
