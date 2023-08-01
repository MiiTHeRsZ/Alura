function tocaSom(idSom) {

    var verificaId = document.querySelector(idSom)

    if (verificaId && verificaId.localName === "audio") {
        verificaId.play()
    } else {
        console.log('Elemento ou seletor inválido!');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas.forEach(tecla => {

    let classeSom = tecla.classList[1]
    let idSom = `#som_${classeSom}`
    tecla.onclick = function () {
        tocaSom(idSom)
    }

    tecla.onkeydown = function (evt) {
        if (evt.code === "Space" || evt.code === "Enter") {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function (evt) {
        if (evt.code === "Space" || evt.code === "Enter") {
            tecla.classList.remove('ativa')
        }
    }

});