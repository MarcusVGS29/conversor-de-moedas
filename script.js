


const convertbutton = document.querySelector(".converter-button") //mapeando o botão de conversão
const currencySelect = document.querySelector(".bandeiraconvertida")
const currencyToConvert = document.querySelector(".bandeiraaconverter")




/* abaixo uma função criada para os acontecimentos do botão */
function convertValues() {
    const inputvalor = document.querySelector(".convertido").value //variavel que pega o valor do input

    const valorida = document.querySelector(".valormoedaida") //valor em real

    const valorvolta = document.querySelector(".valormoedavolta") //outras moedas

    console.log(currencySelect.value)
    const dolarhoje = 5.2 //variavel do dolar FICTICIO
    const eurohoje = 6.2 //variavel do euro FICTICIO
    const librahoje = 7.5 //variavel da libra FICTICIA
    const cadhoje = 4.10 //variavel do dolar canadense FICTICIO
    const realhoje = 1.0 // //variavel do real FICTICIO

    //Vai alterar os cifrões das primeiras moedas
    if (currencyToConvert.value == "real") { // SE o select for dolar, vai entrar aqui.
        valorida.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputvalor) //pega o valor covertido e coloca abaixo da segunda moeda (outras moedas)
    }
    if (currencyToConvert.value == "dolar") { // SE o select for dolar, vai entrar aqui.
        valorida.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputvalor) //pega o valor covertido e coloca abaixo da segunda moeda (outras moedas)
    }
    if (currencyToConvert.value == "euro") { // SE o select for dolar, vai entrar aqui.
        valorida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalor) //pega o valor covertido e coloca abaixo da segunda moeda (outras moedas)
    }
    if (currencyToConvert.value == "libra") { // SE o select for dolar, vai entrar aqui.
        valorida.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalor) //pega o valor covertido e coloca abaixo da segunda moeda (outras moedas)
    }
    if (currencyToConvert.value == "CAD") { // SE o select for dolar, vai entrar aqui.
        valorida.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputvalor) //pega o valor covertido e coloca abaixo da segunda moeda (outras moedas)
    }





    //Vai alterar os cifrões das segundas moedas
    if (currencySelect.value == "dolar") { // SE o select for dolar, vai entrar aqui.
        valorvolta.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputvalor / dolarhoje) //pega o valor covertido e coloca abaixo da segunda moeda (outras moedas)
    }
    if (currencySelect.value == "euro") { // SE o select for euro, vai entrar aqui.
        valorvolta.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalor / eurohoje)
    }
    if (currencySelect.value == "libra") { // SE o select for libra, vai entrar aqui.
        valorvolta.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalor / librahoje)
    }

    if (currencySelect.value == "CAD") { // SE o select for libra, vai entrar aqui.
        valorvolta.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputvalor / cadhoje)
    }
    if (currencySelect.value == "real") { // SE o select for libra, vai entrar aqui.
        valorvolta.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputvalor / realhoje)
    }

    


}

function changemoeda() {
    const dolarnome = document.getElementById("segundamoeda")
    const imagemMoeda = document.getElementById("moedaImg")

    if (currencySelect.value == "dolar") {
        dolarnome.innerHTML = "Dólar americano"
        imagemMoeda.src = "./img/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        dolarnome.innerHTML = "Euro"
        imagemMoeda.src = "./img/Euro.png"
    }

    if (currencySelect.value == "libra") {
        dolarnome.innerHTML = "Libra esterlina"
        imagemMoeda.src = "./img/libra.png"
    }

    if (currencySelect.value == "CAD") {
        dolarnome.innerHTML = "Dólar canadense"
        imagemMoeda.src = "./img/canada.png"
    }
    if (currencySelect.value == "real") {
        dolarnome.innerHTML = "Real"
        imagemMoeda.src = "./img/brasil 2.png"

    }


    convertValues()
    
}


function trocaMoeda() {
    const dolarnome1 = document.getElementById("primeiramoeda")
    const imagemMoeda1 = document.getElementById("moedaImg1")

    if (currencyToConvert.value == "dolar") {
        dolarnome1.innerHTML = "Dólar americano"
        imagemMoeda1.src = "./img/estados-unidos (1) 1.png"
    }

    if (currencyToConvert.value == "euro") {
        dolarnome1.innerHTML = "Euro"
        imagemMoeda1.src = "./img/Euro.png"
    }

    if (currencyToConvert.value == "libra") {
        dolarnome1.innerHTML = "Libra esterlina"
        imagemMoeda1.src = "./img/libra.png"
    }

    if (currencyToConvert.value == "CAD") {
        dolarnome1.innerHTML = "Dólar canadense"
        imagemMoeda1.src = "./img/canada.png"
    }
    if (currencyToConvert.value == "real") {
        dolarnome1.innerHTML = "Real"
        imagemMoeda1.src = "./img/brasil 2.png"

    }


    convertValues()
    
}

convertbutton.addEventListener("click", convertValues) //aqui, chama a função acima, SOMENTE quando o botão for clicado (click)
currencySelect.addEventListener("change", changemoeda) //aqui, chama a função que muda o nome e o cifrão da moeda, SOMENTE quando mudamos a opção de moeda (change)

currencyToConvert.addEventListener("change", trocaMoeda)





