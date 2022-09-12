// variaveis personagem
let xPersonagem = 90
let yPersonagem = 369
let colisao = false
let meusPontos = 0

// funções relacionadas ao ator
function mostraAtor() {
  image(imagemPersonagem, xPersonagem, yPersonagem, 30, 30)
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yPersonagem -= 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) yPersonagem += 3
  }
}

function verificaColisao() {
  for (let i = 0; i < imagensCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xPersonagem,
      yPersonagem,
      20
    )
    if (colisao) {
      voltaPersonagemParaPosicaoInicial()
      somColisao.play()
      if(pontosMaiorQueZero()) {
        meusPontos -= 1
      }
    }
  }
}

function voltaPersonagemParaPosicaoInicial() {
  yPersonagem = 369
}

function incluiPontos() {
  textAlign(CENTER)
  fill(color(255, 240, 60))
  textSize(25)
  text(meusPontos, width / 3, 27)
}

function marcaPonto() {
  if (yPersonagem < 15) {
    meusPontos += 1
    voltaPersonagemParaPosicaoInicial()
    somPonto.play()
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0
}

function podeSeMover() {
  return yPersonagem < 369
}
