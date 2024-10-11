const numCiclos = 50;
let pontuacaoTotalGeral = 0;

function gerarPalpitesComConcurso(concursoAtual) {
    const numPalpites = 50;
    palpites = [];
    const penultimoConcurso = dados[dados.length - 2];

    for (let i = 0; i < numPalpites; i++) {
        const input = tf.tensor2d([penultimoConcurso.map(bola => bola / 25)]);
        const predicao = model.predict(input).dataSync();
        const bolasPrevistas = Array.from(predicao).map(p => Math.round(p * 25)).slice(0, 15);
        palpites.push(bolasPrevistas);
    }
}

async function iniciarCiclo() {
    if (cicloRodando) {
        alert("Ciclo já está rodando.");
        return;
    }
    cicloRodando = true;
    cicloAtual = 0;
    document.getElementById("progressBarCiclo").style.width = "0%";
    document.getElementById("progressBarCiclo").innerText = "0%";
    gerarPalpitesComConcurso();

    while (cicloAtual < numCiclos) {
        cicloAtual++;
        atualizarProgressoCiclo();
        await tf.nextFrame();  // Simula uma pausa no loop
    }
    cicloRodando = false;
    console.log('Ciclo de previsões finalizado.');
}
