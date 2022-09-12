// variaveis personagem
let xPersonagem = 60
let yPersonagem = 365

// funções relacionadas ao ator
function mostraAtor() {
    image(imagemPersonagem, xPersonagem, yPersonagem,30, 30)
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yPersonagem -= 3
    }
    if (keyIsDown(DOWN_ARROW)) {
        yPersonagem += 3
    }
}