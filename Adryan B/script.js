// Função para navegar entre as abas sem recarregar a página
function abrirAba(evento, nomeAba) {
    let conteudos = document.getElementsByClassName("tab-content");
    for (let i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = "none";
        conteudos[i].classList.remove("active");
    }

    let botoes = document.getElementsByClassName("tab-button");
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].className = botoes[i].className.replace(" active", "");
    }

    document.getElementById(nomeAba).style.display = "block";
    evento.currentTarget.className += " active";
}

// Datas estimadas para as fases da Copa do Mundo 2026
const prazos = {
    'timer-copa': new Date("June 11, 2026 15:00:00").getTime(), // Abertura
    'timer-grupos': new Date("June 27, 2026 23:59:59").getTime(), // Fim da fase de grupos
    'timer-semi': new Date("July 15, 2026 23:59:59").getTime(), // Fim das semifinais
    'timer-final': new Date("July 19, 2026 16:00:00").getTime() // Jogo da Final
};

function atualizarCronometros() {
    const agora = new Date().getTime();

    for (const [idElemento, dataAlvo] of Object.entries(prazos)) {
        const distancia = dataAlvo - agora;
        const elementoHtml = document.getElementById(idElemento);

        // Se o prazo já passou (evento já ocorreu)
        if (distancia < 0) {
            elementoHtml.innerHTML = "Este evento já ocorreu!";
            elementoHtml.style.color = "#38b000"; // Verde para indicar que já passou
            continue;
        }

        // Cálculos de tempo (Dias, Horas, Minutos, Segundos)
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Formata a exibição na tela
        elementoHtml.innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
        elementoHtml.style.color = "#ae2012"; // Mantém vermelho enquanto está em contagem
    }
}

// Atualiza os cronômetros a cada