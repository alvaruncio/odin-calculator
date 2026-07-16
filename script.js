onload = () => {
    añadirEventos()
}

let primerNumero = ""
let segundoNumero = ""
let operador = null

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate(operador, a, b){
    switch(operador){
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return b === 0 ? "ERROR" : divide(a, b)
        default:
            return "ERROR"
    }
}

function pintarValor(valorPintar){
    let contenedorMostrarResultado = document.getElementById("display-result")
    contenedorMostrarResultado.textContent = valorPintar
}

function añadirEventos(){
    let botones = [...document.getElementsByTagName("button")]
    botones.forEach(boton => {
        if(boton.className === "number"){
            boton.addEventListener("click", () => {
                if(operador === null){
                    primerNumero += boton.textContent
                    pintarValor(primerNumero)
                } else {
                    segundoNumero += boton.textContent
                    pintarValor(segundoNumero)
                }
            })
        }

        if(boton.className === "operation"){
            boton.addEventListener("click", () => {
                if(boton.textContent === "C"){
                    primerNumero = ""
                    segundoNumero = ""
                    operador = null
                    pintarValor("")
                    return
                }

                if(boton.textContent === "="){
                    if(primerNumero !== "" && operador !== null && segundoNumero !== ""){
                        let resultado = operate(operador, Number(primerNumero), Number(segundoNumero))
                        pintarValor(resultado)
                        primerNumero = String(resultado)
                        segundoNumero = ""
                        operador = null
                    }
                    return
                }

                if(primerNumero === "") return

                operador = boton.textContent
            })
        }
    })
}
