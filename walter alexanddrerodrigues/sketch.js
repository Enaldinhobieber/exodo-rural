let perguntas = [
  {
    pergunta: "Qual foi a PRINCIPAL causa do êxodo rural no Brasil no século XX?",
    opcoes: [
      "Expansão do turismo no campo",
      "Mecanização agrícola e concentração de terras",
      "Aumento de empregos em mineração rural",
      "Migração de retorno dos centros urbanos"
    ],
    resposta: 1
  },
  {
    pergunta: "Qual consequência NEGATIVA do êxodo rural nas cidades brasileiras?",
    opcoes: [
      "Crescimento desordenado das favelas",
      "Redução da poluição ambiental",
      "Diminuição da demanda por serviços públicos",
      "Aumento da produção agrícola"
    ],
    resposta: 0
  },
  {
    pergunta: "Em qual década o êxodo rural foi mais intenso no Brasil?",
    opcoes: [
      "1920-1930",
      "1950-1970",
      "1990-2000",
      "2010-2020"
    ],
    resposta: 1
  },
  {
    pergunta: "O que é 'êxodo urbano', fenômeno observado em alguns países?",
    opcoes: [
      "Migração em massa para o exterior",
      "Retorno parcial da população para áreas rurais ou cidades menores",
      "Desaparecimento de metrópoles",
      "Ênfase em políticas de favelização"
    ],
    resposta: 1
  },
  {
    pergunta: "Qual fator NÃO contribuiu para o êxodo rural no Brasil?",
    opcoes: [
      "Falta de acesso à educação no campo",
      "Distribuição massiva de terras para pequenos agricultores",
      "Atração por empregos industriais",
      "Condições precárias de vida no campo"
    ],
    resposta: 1
  },
  {
    pergunta: "Qual região brasileira recebeu mais migrantes durante o êxodo rural?",
    opcoes: [
      "Norte",
      "Nordeste",
      "Sudeste",
      "Centro-Oeste"
    ],
    resposta: 2
  },
  {
    pergunta: "Qual política incentivou o êxodo rural na década de 1960?",
    opcoes: [
      "Estatização das terras agrícolas",
      "Isenção fiscal para agricultores",
      "Substituição de importações e industrialização",
      "Programa de reforma agrária massiva"
    ],
    resposta: 2
  },
  {
    pergunta: "Qual destes é um efeito econômico do êxodo rural?",
    opcoes: [
      "Aumento do preço dos produtos agrícolas",
      "Redução da mão-de-obra disponível no campo",
      "Diminuição do êxodo urbano",
      "Aumento da produção rural per capita"
    ],
    resposta: 1
  },
  {
    pergunta: "Como é chamado o movimento inverso ao êxodo rural?",
    opcoes: [
      "Êxodo urbano",
      "Contra-urbanização",
      "Ruralização",
      "Ambos A e B"
    ],
    resposta: 3
  },
  {
    pergunta: "Qual estado brasileiro teve maior percentual de emigração rural?",
    opcoes: [
      "São Paulo",
      "Bahia",
      "Pernambuco",
      "Paraná"
    ],
    resposta: 2
  },
  {
    pergunta: "Qual profissão foi mais afetada pelo êxodo rural?",
    opcoes: [
      "Operários industriais",
      "Trabalhadores rurais assalariados",
      "Peões de boiadeiro",
      "Garimpeiros"
    ],
    resposta: 1
  },
  {
    pergunta: "Qual destes problemas NÃO foi causado pelo êxodo rural?",
    opcoes: [
      "Aumento do trabalho infantil nas cidades",
      "Crescimento do mercado informal urbano",
      "Aumento da produtividade agrícola",
      "Favelização nos centros urbanos"
    ],
    resposta: 2
  }
];

// Variáveis do jogo
let estado = "menu"; // Pode ser: menu, tutorial, quiz, resultado, vitoria
let perguntaAtual = 0;
let pontuacao = 0;
let respostaSelecionada = null;
const PONTUACAO_PARA_VENCER = 7; // Mais da metade das perguntas

// Cores temáticas
let cores = {
  verde: '#2C2C2C',
  azul: '#0037EBB7',
  branco: '#FFFFFF',
  texto: '#000000',
  fundo: '#f5f5f5',
  erro: '#FF0000'
};

// Variáveis para imagens
let imgFundo;
let imgInicio;

function preload() {
  imgFundo = loadImage('FF.jpg');
  imgInicio = loadImage('imagem de @Thistlen.png');
}

function setup() {
  createCanvas(1000, 700);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  // Fundo com imagem
  if (estado === "menu" || estado === "tutorial") {
    image(imgInicio, 0, 0, width, height);
    fill(0, 0, 0, 180);
    rect(0, 0, width, height);
  } else {
    image(imgFundo, 0, 0, width, height);
    fill(0, 0, 0, 120);
    rect(0, 0, width, height);
  }
  
  switch(estado) {
    case "menu":
      desenharMenu();
      break;
    case "tutorial":
      desenharTutorial();
      break;
    case "quiz":
      desenharQuiz();
      break;
    case "resultado":
      desenharResultado();
      break;
    case "vitoria":
      desenharVitoria();
      break;
  }
}

function desenharMenu() {
  // Título
  fill(cores.branco);
  textSize(42);
  text("ÊXODO RURAL BRASILEIRO", width/2, 150);
  
  // Descrição
  fill(cores.branco);
  textSize(24);
  text("Teste seus conhecimentos sobre migração campo-cidade", width/2, 220);
  
  // Regras
  fill(cores.branco);
  textSize(18);
  text(`Acertar ${PONTUACAO_PARA_VENCER} de ${perguntas.length} perguntas para vencer!`, width/2, 280);
  
  // Botão Iniciar
  fill(cores.verde);
  rect(width/2 - 120, 400, 240, 60, 15);
  fill(cores.branco);
  textSize(26);
  text("INICIAR QUIZ", width/2, 430);
  
  // Botão Tutorial
  fill(cores.azul);
  rect(width/2 - 120, 500, 240, 60, 15);
  fill(cores.branco);
  textSize(26);
  text("COMO JOGAR", width/2, 530);
}

function desenharTutorial() {
  // Título
  fill(cores.branco);
  textSize(36);
  text("COMO JOGAR", width/2, 100);
  
  // Instruções
  fill(cores.branco);
  textSize(22);
  text("1. Você responderá " + perguntas.length + " perguntas sobre êxodo rural", width/2, 160);
  text("2. Leia cada pergunta com atenção e selecione uma resposta", width/2, 200);
  text("3. Você precisa acertar " + PONTUACAO_PARA_VENCER + " perguntas para vencer", width/2, 240);
  text("4. Cada pergunta tem apenas uma resposta correta", width/2, 280);
  text("5. Após selecionar, clique em CONFIRMAR para avançar", width/2, 320);
  
  // Dica
  fill(cores.verde);
  textSize(20);
  text("Dica: O êxodo rural refere-se à migração em massa", width/2, 380);
  text("do campo para a cidade que ocorreu no Brasil no século XX", width/2, 410);
  
  // Botão Começar
  fill(cores.verde);
  rect(width/2 - 120, 500, 240, 60, 15);
  fill(cores.branco);
  textSize(26);
  text("COMEÇAR", width/2, 530);
}

function desenharQuiz() {
  // Cabeçalho
  fill(cores.branco);
  textSize(24);
  text(`Pergunta ${perguntaAtual + 1} de ${perguntas.length}`, width/2, 40);
  
  // Barra de progresso
  let progresso = map(perguntaAtual + 1, 1, perguntas.length, 0, width - 200);
  fill(100, 100, 100, 150);
  rect(100, 70, width - 200, 20, 10);
  fill(cores.verde);
  rect(100, 70, progresso, 20, 10);
  
  // Pontuação
  fill(cores.branco);
  textSize(20);
  text(`Acertos: ${pontuacao}/${PONTUACAO_PARA_VENCER}`, width - 150, 40);
  
  // Pergunta
  fill(cores.branco);
  textSize(28);
  text(perguntas[perguntaAtual].pergunta, width/2, 130);
  
  // Opções
  for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
    let y = 220 + i * 90;
    
    // Cor do botão
    if (respostaSelecionada === i) {
      fill(cores.verde);
    } else {
      fill(cores.branco);
    }
    
    // Desenha o botão
    stroke(cores.azul);
    strokeWeight(2);
    rect(width/2 - 300, y - 30, 600, 70, 10);
    
    // Texto da opção
    noStroke();
    if (respostaSelecionada === i) {
      fill(cores.branco);
    } else {
      fill(cores.texto);
    }
    textSize(20);
    text(perguntas[perguntaAtual].opcoes[i], width/2, y);
  }
  
  // Botão de confirmar
  if (respostaSelecionada !== null) {
    fill(cores.azul);
    rect(width/2 - 100, 600, 200, 50, 10);
    fill(cores.branco);
    textSize(22);
    text("CONFIRMAR", width/2, 625);
  }
}

function desenharResultado() {
  // Título
  fill(cores.branco);
  textSize(36);
  text("RESULTADO FINAL", width/2, 120);
  
  // Pontuação
  fill(cores.branco);
  textSize(32);
  text(`Você acertou ${pontuacao} de ${perguntas.length} perguntas`, width/2, 200);
  
  // Mensagem
  if (pontuacao >= PONTUACAO_PARA_VENCER) {
    fill(cores.verde);
    textSize(28);
    text("PARABÉNS! Você venceu o desafio!", width/2, 280);
  } else {
    fill(cores.erro);
    textSize(28);
    text("Você não atingiu a pontuação necessária", width/2, 280);
  }
  
  // Botões
  fill(cores.verde);
  rect(width/2 - 220, 400, 200, 60, 15);
  fill(cores.branco);
  textSize(22);
  text("JOGAR NOVAMENTE", width/2 - 120, 430);
  
  fill(cores.azul);
  rect(width/2 + 20, 400, 200, 60, 15);
  fill(cores.branco);
  text("MENU INICIAL", width/2 + 120, 430);
}

function desenharVitoria() {
  // Título
  fill(cores.verde);
  textSize(42);
  text("VITÓRIA!", width/2, 150);
  
  // Mensagem
  fill(cores.branco);
  textSize(28);
  text(`Você acertou ${pontuacao} de ${perguntas.length} perguntas!`, width/2, 220);
  text("Excelente conhecimento sobre êxodo rural", width/2, 270);
  
  // Botões
  fill(cores.verde);
  rect(width/2 - 220, 400, 200, 60, 15);
  fill(cores.branco);
  textSize(22);
  text("JOGAR NOVAMENTE", width/2 - 120, 430);
  
  fill(cores.azul);
  rect(width/2 + 20, 400, 200, 60, 15);
  fill(cores.branco);
  text("MENU INICIAL", width/2 + 120, 430);
}

function mousePressed() {
  if (estado === "menu") {
    // Botão Iniciar
    if (mouseX > width/2 - 120 && mouseX < width/2 + 120 &&
        mouseY > 400 && mouseY < 460) {
      estado = "quiz";
    }
    // Botão Tutorial
    else if (mouseX > width/2 - 120 && mouseX < width/2 + 120 &&
             mouseY > 500 && mouseY < 560) {
      estado = "tutorial";
    }
  } 
  else if (estado === "tutorial") {
    // Botão Começar
    if (mouseX > width/2 - 120 && mouseX < width/2 + 120 &&
        mouseY > 500 && mouseY < 560) {
      estado = "quiz";
    }
  }
  else if (estado === "quiz") {
    // Seleção de opções
    for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
      let y = 220 + i * 90;
      if (mouseX > width/2 - 300 && mouseX < width/2 + 300 &&
          mouseY > y - 30 && mouseY < y + 40) {
        respostaSelecionada = i;
      }
    }
    
    // Botão Confirmar
    if (respostaSelecionada !== null && 
        mouseX > width/2 - 100 && mouseX < width/2 + 100 &&
        mouseY > 600 && mouseY < 650) {
      
      // Verifica resposta
      if (respostaSelecionada === perguntas[perguntaAtual].resposta) {
        pontuacao++;
      }
      
      // Verifica se ganhou ou passa para próxima pergunta
      if (pontuacao >= PONTUACAO_PARA_VENCER) {
        estado = "vitoria";
      } else if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        respostaSelecionada = null;
      } else {
        estado = "resultado";
      }
    }
  } 
  else if (estado === "resultado" || estado === "vitoria") {
    // Botão Jogar Novamente
    if (mouseX > width/2 - 220 && mouseX < width/2 - 20 &&
        mouseY > 400 && mouseY < 460) {
      reiniciarQuiz();
    }
    // Botão Menu Inicial
    else if (mouseX > width/2 + 20 && mouseX < width/2 + 220 &&
             mouseY > 400 && mouseY < 460) {
      estado = "menu";
      reiniciarQuiz();
    }
  }
}

function reiniciarQuiz() {
  perguntaAtual = 0;
  pontuacao = 0;
  respostaSelecionada = null;
  estado = "quiz";
}