const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const items = JSON.parse(localStorage.getItem("itens")) || []

items.forEach(item => {
    criaElemento(item)
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault()

    const nome = evt.target.elements['nome']
    const quantidade = evt.target.elements['quantidade']

    const existe = items.find(item => item.nome === nome.value)
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)

        items[items.findIndex(item => item.id === id)] = itemAtual
    } else {
        itemAtual.id = items[items.length -1] ? (items[items.length - 1]).id + 1 : 0

        criaElemento(itemAtual)

        items.push(itemAtual)
    }

    localStorage.setItem("itens", JSON.stringify(items))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade

    numeroItem.dataset.id = item.id

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerHTML = "X"

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()

    items.splice(items.findIndex(item => item.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(items))
}