import selecionaCotacao from "./imprimeCotacao.js"

function geraHorario() {
    let data = new Date()
    let horario = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
    return horario
}

function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda)
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados)
    })
    grafico.update()
}

function adicionarDadosTeste(grafico, legenda, dados) {
    grafico.data.labels.push(legenda)
    grafico.data.datasets.forEach(dataset => {
        dataset.data.push(dados[dataset.label])
    })
    console.log(grafico.data.datasets);
    grafico.update()
}

const graficoMoedas = document.getElementById('graficoMoedas')

const graficoParaMoedas = new Chart(graficoMoedas, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Dolar',
            data: [],
            borderWidth: 1
        }, {
            label: 'Iene',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerMoedas = new Worker('./script/workers/workerMoedas.js')

workerMoedas.postMessage('moedas')

workerMoedas.addEventListener("message", evt => {
    let tempo = geraHorario()
    let valores = {
        'Dolar': evt.data.USDBRL.ask,
        'Iene': evt.data.JPYBRL.ask
    }
    adicionarDadosTeste(graficoParaMoedas, tempo, valores)
})

const graficoDolar = document.getElementById('graficoDolar')

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Dolar',
            data: [],
            borderWidth: 1
        }]
    },
})

let workerDolar = new Worker('./script/workers/workerDolar.js')

workerDolar.postMessage('usd')

workerDolar.addEventListener("message", evt => {
    let tempo = geraHorario()
    let valor = evt.data.bid
    selecionaCotacao("dolar", valor)
    adicionarDados(graficoParaDolar, tempo, valor)
})

const graficoIene = document.getElementById('graficoIene')
const graficoParaIene = new Chart(graficoIene, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Iene',
            data: [],
            borderWidth: 1
        }]
    }
})

let workerIene = new Worker("./script/workers/workerIene.js")

workerIene.postMessage('iene')

workerIene.addEventListener("message", evt => {
    let tempo = geraHorario()
    let valor = evt.data.bid
    selecionaCotacao("iene", valor)
    adicionarDados(graficoParaIene, tempo, valor)
})