const botao = document.getElementById("btJogar");
const resultado = document.getElementById("conteudo");

function jogarDado () {
    let numeroSorteado = Math.floor(Math.random() * 6) + 1;
    resultado.innerHTML = numeroSorteado;
}
botao.onclick = jogarDado;
