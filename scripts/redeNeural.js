// Certifique-se de que o TensorFlow.js é importado corretamente
import * as tf from '@tensorflow/tfjs';

// Modelo sequencial
const model = tf.sequential();

// Função para normalizar os dados de entrada
function normalizarDados(dados) {
    return dados.map(sorteio => {
        const entrada = new Array(25).fill(0);
        sorteio.forEach(numero => entrada[numero - 1] = 1);  // Preenche a entrada com 1 nas posições dos números sorteados
        return entrada;
    });
}

// Função para treinar o modelo
async function treinarModelo(dados) {
    const entradas = normalizarDados(dados.map(linha => linha.slice(2)));  // Pega os números sorteados
    const saidas = normalizarDados(dados.map(linha => linha.slice(2)));  // Utiliza os mesmos dados como saída por enquanto
    
    const tensEntradas = tf.tensor2d(entradas);
    const tensSaidas = tf.tensor2d(saidas);

    // Definição do modelo
    model.add(tf.layers.dense({units: 50, inputShape: [25], activation: 'relu'}));
    model.add(tf.layers.dense({units: 25, activation: 'softmax'}));

    model.compile({
        optimizer: 'adam',
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    });

    // Treinamento
    await model.fit(tensEntradas, tensSaidas, {
        epochs: 100,
        batchSize: 32,
        shuffle: true
    });

    console.log('Modelo treinado com sucesso!');
}

// Função para prever com base em novos dados
function prever(novosDados) {
    const entradaNormalizada = normalizarDados([novosDados])[0];  // Normaliza novos dados de entrada
    const tensEntrada = tf.tensor2d([entradaNormalizada]);
    const previsao = model.predict(tensEntrada);
    return previsao.argMax(-1).dataSync();  // Retorna a previsão
}

export { treinarModelo, prever };
