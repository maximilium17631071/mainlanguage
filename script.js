const campo1 = document.getElementById("numero1");
const campo2 = document.getElementById("numero2");
const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
    const a = Number(campo1.value);
    const b = Number(campo2.value);

    const soma = a + b;

    resultado.textContent = "Resultado: " + soma;
});
