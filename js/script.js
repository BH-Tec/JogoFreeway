function setup() {
  createCanvas(500, 400)
  // somTrilhaSonora.loop()
}

function draw() {
  background(imagemEstrada)
  mostraAtor()
  mostraCarro()
  movimentaCarro()
  movimentaAtor()
  voltaPosicaoInicialDoCarro()
  verificaColisao()
  incluiPontos()
  marcaPonto()
  pontosMaiorQueZero()
  podeSeMover()
}
