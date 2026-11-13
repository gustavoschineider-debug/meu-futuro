// 1. Efeito de Máquina de Escrever no Banner Principal
const textoSubtitulo = "Minha linha do tempo: 2027, 5 anos e 10 anos de conquistas.";
const elementoTexto = document.getElementById("typing-text");
let index = 0;

function digitarTexto() {
    if (index < textoSubtitulo.length) {
        elementoTexto.textContent += textoSubtitulo.charAt(index);
        index++;
        setTimeout(digitarTexto, 55); // Velocidade da digitação em milissegundos
    }
}

// Inicia a digitação assim que a página carregar
window.addEventListener("DOMContentLoaded", () => {
    digitarTexto();
    revelarSecoes(); // Verifica se alguma seção já está visível
});

// 2. Efeito de Revelação Suave ao Rolar a Página (Scroll Reveal)
function revelarSecoes() {
    const secoes = document.querySelectorAll(".reveal");
    const alturaJanela = window.innerHeight;

    secoes.forEach((secao) => {
        const topoElemento = secao.getBoundingClientRect().top;
        const pontoVisivel = 120; // Distância em pixels para ativar a animação

        if (topoElemento < alturaJanela - pontoVisivel) {
            secao.classList.add("active");
        }
    });
}

// Escuta o evento de rolagem (scroll) do usuário
window.addEventListener("scroll", revelarSecoes);