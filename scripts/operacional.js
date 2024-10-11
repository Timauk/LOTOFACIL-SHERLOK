let dados = [];
let cicloRodando = false;
let cicloAtual = 0;
let palpites = [];

// Função para carregar dados do CSV
function carregarDados() {
    const input = document.getElementById('fileInput').files[0];
    if (!input) {
        alert("Por favor, selecione um arquivo CSV.");
        return;
    }
    const reader = new FileReader();
    reader.onload = function (event) {
        const text = event.target.result;
        processarCSV(text);
        document.getElementById("statusUpload").innerText = "Dados carregados com sucesso!";
    };
    reader.readAsText(input);
}

// Função para processar o CSV
function processarCSV(text) {
    const linhas = text.trim().split("\n").slice(1);
    dados = [];
    linhas.forEach((linha) => {
        const valores = linha.split(",");
        const bolas = valores.slice(2, 17).map(Number);
        if (bolas.length === 15 && bolas.every(num => !isNaN(num))) {
            const vetor25 = Array(25).fill(0);
            bolas.forEach(bola => {
                vetor25[bola - 1] = 1;
            });
            dados.push(vetor25);
        }
    });
    if (dados.length === 0) {
        alert("Nenhum dado válido encontrado!");
    }
}
