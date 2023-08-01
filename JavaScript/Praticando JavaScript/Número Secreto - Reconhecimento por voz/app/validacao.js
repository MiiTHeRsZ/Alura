function verificaSeChutePossuiValorValido(chute) {
    const numero = +chute

    if (gameOver(chute)) {

        document.body.innerHTML = `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar">Jogar Novamente!</button>
                `
        document.body.style.backgroundColor = "black"
        return
    }

    if (chuteInvalido(numero) || numeroMaiorOuMenorQueOPermitido()) {
        elementoChute.innerHTML = `
            <div>Valor inválido! Diga somente um número entre ${menorValor} e ${maiorValor}!</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}<h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente!</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function gameOver(chute) {
    return chute.toUpperCase() === "GAME OVER"
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload
    }
})