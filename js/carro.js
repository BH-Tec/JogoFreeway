//
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318]
let velocidadeCarros = [2, 2.7, 3.3, 3, 2.5, 2]
let comprimentoCarro = 60
let alturaCarro = 40

// funções relacionadas ao carro
function mostraCarro() {
  for (let i = 0; i < imagensCarros.length; i++) {
    image(
      imagensCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro
    )
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagensCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i]
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagensCarros.length; i++) {
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 600
    }
  }
}

function passouTodaTela(xCarro) {
  return xCarro < -50
}
