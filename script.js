
let valor = document.getElementById("valor_bitcoin")
let valor_euro = document.getElementById("valor_euro")
let valor_dollar = document.getElementById("valor_dollar")

function pegar_valor_bitcoin()
{
    fetch("https://economia.awesomeapi.com.br/last/BTC-BRL")
    .then(response =>
    {
        return response.json()
    })
    .then(data =>
    {
        var resultado = data.BTCBRL.bid
        valor.innerHTML = `R$ : ${resultado}`
    })
}

function pegar_valor_euro()
{
    fetch("https://economia.awesomeapi.com.br/last/EUR-BRL")
    .then(response =>
    {
        return response.json()
    })
    .then(data =>
    {
        var resultado = data.EURBRL.bid
        valor_euro.innerHTML = `R$ : ${resultado}`
    })
}

function pegar_valor_dollar()
{
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
    .then(response =>
    {
        return response.json()
    })
    .then(data =>
    {
        var resultado = data.USDBRL.bid
        valor_dollar.innerHTML = `R$ : ${resultado}`
    })
}

pegar_valor_bitcoin()
pegar_valor_euro()
pegar_valor_dollar()

setInterval(() => 
{
    pegar_valor_bitcoin()
    pegar_valor_euro()
    pegar_valor_dollar()
},30000)
