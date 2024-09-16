
// comédia, animação, ação

// o auto da compadecida, LIVRE, comédia
// divertida mente 2, LIVRE, animação
// meu malvado favorito 4, 10, animação e comédia
// operação fronteira, 16, ação
// meu amigo totoro, LIVRE, animação e comédia

let campoIdade;
let campoAnimacao;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("15");
  campoAnimacao = createCheckbox("Gosta de animação?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeAnimacao = campoAnimacao.checked();
  let gostaDeAventura = campoAventura.checked();
 
  let recomendacao = geraRecomendacao(idade, gostaDeAnimacao, gostaDeAventura);
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
  
}

function geraRecomendacao(idade, gostaDeAnimacao, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 16) {
      return "Operação Fronteira";
    } else {
      if (idade >= 12) {
        if(gostaDeAnimacao || gostaDeAventura) {
          return "Viva - A Vida é uma Festa";
        } else {
          return "Divertida Mente 2";
        }

      } else {
        if (gostaDeAnimacao) {
          return "Meu Malvado Favorito 4";
        } else {
          return "O auto da compadecida";
        }
      }
    }
  } else {
    return "O auto da compadecida";
  }
}