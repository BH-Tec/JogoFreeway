// imagens do jogo
let imagemEstrada
let imagemPersonagem
let imagemCarro1
let imagemCarro2
let imagemCarro3

// sons do jogo
let somTrilhaSonora
let somColisao
let somPonto

function preload() {
  imagemEstrada = loadImage('../assets/image/estrada.png')
  imagemPersonagem = loadImage('../assets/image/ator-1.png')
  imagemCarro1 = loadImage('../assets/image/carro-1.png')
  imagemCarro2 = loadImage('../assets/image/carro-2.png')
  imagemCarro3 = loadImage('../assets/image/carro-3.png')
  imagensCarros = [
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
    imagemCarro1,
    imagemCarro2,
    imagemCarro3,
  ]
  somTrilhaSonora = loadSound('../assets/music/trilha.mp3')
  somColisao = loadSound('../assets/music/colidiu.mp3')
  somPonto = loadSound('../assets/music/pontos.wav')
}
