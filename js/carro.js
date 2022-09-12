// 
let xCarros = [600, 600, 600]
let yCarros = [40, 96, 150]
let velocidadeCarros = [2, 2.5, 3.3]

// funções relacionadas ao carro
function mostraCarro() {
    for(let i = 0; i < imagensCarros.length; i += 1) {
        image(imagensCarros[i], xCarros[i], yCarros[i], 60, 40)
    }
}

function movimentaCarro() {
    for(let i = 0; i < imagensCarros.length ;i += 1) {
        xCarros[i] -= velocidadeCarros[i]
    }
}

function voltaPosicaoInicialDoCarro() {
    for(let i = 0; i < imagensCarros.length ;i += 1) {
        if (passouTodaTela(xCarros[i])) {
            xCarros[i] = 600
        }
    }
}

function passouTodaTela(xCarro) {
    return xCarro < -50
}