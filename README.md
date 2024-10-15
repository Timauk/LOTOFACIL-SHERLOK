# Jogo Sherlock 4.6 Neural - README

## Descrição

O **Jogo Sherlock 4.6 Neural** é uma aplicação web interativa que utiliza aprendizado de máquina para prever números com base em um histórico de sorteios. O modelo é treinado com dados fornecidos pelo usuário e é capaz de fazer previsões em ciclos, oferecendo um "jogo" de acertos e desempenho baseado em lógica neural.

O projeto usa TensorFlow.js para construir e treinar o modelo diretamente no navegador, permitindo que o usuário veja as previsões feitas em tempo real e acompanhe o desempenho do modelo ao longo de várias gerações de treinamento.

## Funcionalidades

1. **Upload de Dados CSV**:
   - O usuário pode fazer upload de um arquivo CSV com os dados de sorteios, que são processados e utilizados para treinar o modelo.

2. **Treinamento e Atualização do Modelo**:
   - O modelo de rede neural é criado e treinado com base nos dados carregados. O progresso do treinamento é mostrado por uma barra de progresso.

3. **Carregamento de Modelos Salvos**:
   - É possível carregar modelos previamente salvos em formato JSON e binário.

4. **Previsões e Ciclo de Palpites**:
   - O usuário pode iniciar um ciclo de previsões, onde o modelo gera palpites para 50 ciclos consecutivos. Um modo de "Jogo Infinito" também está disponível.

5. **Gráfico de Desempenho**:
   - O treinamento e os resultados de previsões podem ser visualizados em gráficos interativos.

6. **Placar de Gerações**:
   - O desempenho do modelo é avaliado e o placar é atualizado conforme as gerações de previsões ocorrem.

7. **Integração com Three.js**:
   - O projeto usa Three.js para gerar uma esfera 3D que rotaciona continuamente, como uma visualização interativa.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do documento.
- **CSS**: Estilização do layout.
- **JavaScript**: Lógica do jogo e controle do modelo.
- **TensorFlow.js**: Criação e treinamento do modelo de rede neural diretamente no navegador.
- **Three.js**: Visualização gráfica em 3D.
- **tfjs-vis**: Ferramentas de visualização para exibir o progresso de treinamento e gráficos de erro (loss).

## Como Usar

1. **Carregar Dados CSV**:
   - Selecione um arquivo CSV contendo dados históricos de sorteios (com informações sobre número do concurso, data e números sorteados). 
   
   Exemplo de estrutura do CSV:
   ```
   Concurso,Data,Bola1,Bola2,Bola3,Bola4,Bola5,...Bola15
   123,01/01/2020,1,3,5,7,9,...,25
   ```

2. **Treinar o Modelo**:
   - Após carregar os dados, clique em "Treinar/Atualizar Modelo". O modelo começará a ser treinado e você poderá visualizar o progresso em tempo real.

3. **Carregar Modelo Salvo**:
   - Caso tenha um modelo salvo, carregue os arquivos `.json` (modelo) e `.bin` (pesos) para utilizar o modelo pré-treinado.

4. **Gerar Palpites**:
   - Clique em "Jogar com Sherlock" para que o modelo gere palpites baseados nos dados de treinamento.
   
5. **Iniciar Ciclo de Previsões**:
   - Inicie um ciclo de 50 previsões automáticas e veja o desempenho do modelo em prever os números.

6. **Jogo Infinito**:
   - Ative o modo "Jogo Infinito" para continuar gerando previsões indefinidamente.

## Requisitos

Para rodar o projeto localmente, você precisará de:
- Um navegador moderno que suporte **JavaScript** e **WebGL**.
- **TensorFlow.js** e **Three.js** já estão incluídos via CDN.

## Instalação

1. Faça o clone do repositório:
   ```bash
   git clone https://github.com/Timauk/LOTOFACIL-SHERLOK.git
   ```

2. Abra o arquivo `index.html` no navegador.

## Contribuições

Contribuições são bem-vindas! Para contribuir com este projeto, siga estas etapas:

1. Faça um **fork** do projeto.
2. Crie uma **branch** para sua feature ou correção: `git checkout -b minha-feature`.
3. Faça **commit** das suas alterações: `git commit -m 'Adiciona minha feature'`.
4. Faça o **push** para a branch: `git push origin minha-feature`.
5. Envie um **pull request**.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Se divirta treinando e jogando com o Sherlock Neural!