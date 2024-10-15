function atualizarProgressoCiclo() {
    const progresso = (cicloAtual / numCiclos) * 100;
    const progressBar = document.getElementById("progressBarCiclo");
    progressBar.style.width = progresso + "%";
    progressBar.innerText = progresso.toFixed(0) + "%";

    const statusCiclo = document.getElementById("statusCiclo");
    statusCiclo.innerText = `Progresso: ${cicloAtual} de ${numCiclos}`;
}
