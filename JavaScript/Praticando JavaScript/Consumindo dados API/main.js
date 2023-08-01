async function buscaEndereco(cep) {
    try {
        var mensagemErro = document.getElementById('erro')
        mensagemErro.innerHTML = ""
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()

        if (consultaCEPConvertida.erro) {
            throw Error('CEP inválido!')
        }

        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf

        return consultaCEPConvertida
    } catch (error) {
        mensagemErro.innerHTML = `<p>CEP Inválido. Verifique as informações!</p>`
        console.log(error);
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))