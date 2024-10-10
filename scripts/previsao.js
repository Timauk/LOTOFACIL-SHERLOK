function mostrarResultados() {
    const resultadosDiv = document.getElementById("resultadosCiclo");
    resultadosDiv.innerHTML = palpites.map(palpite => `<p>${palpite.join(", ")}</p>`).join("");
}
