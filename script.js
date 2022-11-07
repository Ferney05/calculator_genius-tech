
let dataInputNums = document.querySelector('[data-inputNums]');
const dataResetButton = document.querySelector('[data-resetButton]');
const dataResultButton = document.querySelector('[data-resultButton]');
const DeleteElement = document.getElementById('delete');

const numbers = document.getElementsByName('numbers');
const operacion = document.getElementsByName('operacion');

let operActual = '';
let operAnterior = '';
let oper = undefined;

numbers.forEach(boton => {
    boton.addEventListener('click', () => {
        agregarNumero(boton.innerText);
    })
})

operacion.forEach(boton => {
    boton.addEventListener('click', () => {
        asignarOperacion(boton.innerText);
    })
})

dataResetButton.addEventListener('click', () => {
    clear();
    actualizar();
})

dataResultButton.addEventListener('click', () => {
    calcular();
    actualizar();
})

const calcular = () => {
    let calculo;
    const anterior = parseFloat(operAnterior);
    const actual = parseFloat(operActual);

    if(isNaN(anterior) || isNaN(actual)) return;

    switch(oper){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '÷':
            calculo = anterior / actual;
            break;
        default:
            return;
    }

    operActual = calculo;
    oper = undefined;
    operAnterior = '';
}

const agregarNumero = (numero) => {
    operActual = operActual.toString() + numero.toString();
    actualizar();
}

const clear = () => {
    operActual = '';
    operAnterior = '';
    oper = undefined;
}

DeleteElement.addEventListener('click', () => {
    eliminarElemento();
    actualizar();
})

const eliminarElemento = () => {
    operActual = operActual.slice(1);
}

const actualizar = () => {
    dataInputNums.value = operActual;
}

const asignarOperacion = (op) => {
    if(operActual === '') return;
    if(operAnterior !== ''){
        calcular();
    }

    oper = op.toString();
    operAnterior = operActual;
    operActual = '';
}

