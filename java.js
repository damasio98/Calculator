//Constants for calculator buttons
const zero = document.getElementById("zero")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const dot = document.getElementById("dot")
const plus = document.getElementById("add")
const minus = document.getElementById("subtract")
const times = document.getElementById("multiply")
const equal = document.getElementById("equal")
const division = document.getElementById("divide")
const text = document.getElementById("lower-text")
const upperText = document.getElementById("upper-text")
const clear = document.getElementById("clear")
const deletes = document.getElementById("delete")

let firstNumber = undefined; //number on the down side of the display
let secondNumber = undefined; //number on the up side of the display
let symbol = ''
let symbol2 = ''

// after clicking on an operator
function Operation(firstNumber){
    if (secondNumber===undefined){
        secondNumber = Number(firstNumber)
        upperText.innerText = [Math.round(firstNumber * 100) / 100] + symbol
        text.innerText = ''
        symbol2 = symbol
        normal()
    }

    else {
        Result2()
    }
}

//returns number to normal state
function normal(){
    firstNumber=undefined;
}

//for all operations, except the first one
function Result2(){
    result = 0
    if (firstNumber===undefined){
        symbol2 = symbol
        upperText.innerText = [Math.round(secondNumber * 100) / 100] + symbol2
        return
    }
    else if (symbol2 === '+'){
        result =   Number(secondNumber) +  Number(firstNumber)
        symbol2 = symbol
        upperText.innerText = [Math.round(result * 100) / 100] + symbol2
        text.innerText = ''
    }
    else if (symbol2 === '-'){
        result = Number(secondNumber) -  Number(firstNumber)
        symbol2 = symbol
        upperText.innerText = [Math.round(result * 100) / 100] + symbol2
        text.innerText = ''
    }
    else if (symbol2 === 'x'){
        result = Number(secondNumber) *  Number(firstNumber)
        symbol2 = symbol
        upperText.innerText = [Math.round(result * 100) / 100] + symbol2
        text.innerText = ''
    }
    else if (symbol2 === '÷'){
        if (firstNumber==0){
            text.innerText = 'Go learn Math'
        }
        else {
            result = Number(secondNumber) /  Number(firstNumber)
            symbol2 = symbol
            upperText.innerText = [Math.round(result * 100) / 100] + symbol2
            text.innerText = ''
        }
    }
    secondNumber = result
    normal()
}

//for the first operation
function Result(){
    result = 0
    if (firstNumber===undefined){
        return
    }
    else if (symbol === '+'){
        result =   Number(secondNumber) +  Number(firstNumber)
        upperText.innerText = [Math.round(secondNumber * 100) / 100] + symbol + [Math.round(firstNumber * 100) / 100] + '='
        text.innerText = Math.round(result * 100) / 100
    }
    else if (symbol === '-'){
        result = Number(secondNumber) -  Number(firstNumber)
        upperText.innerText = [Math.round(secondNumber * 100) / 100] + symbol + [Math.round(firstNumber * 100) / 100] + '='
        text.innerText = Math.round(result * 100) / 100
    }
    else if (symbol === 'x'){
        result = Number(secondNumber) *  Number(firstNumber)
        upperText.innerText = [Math.round(secondNumber * 100) / 100] + symbol + [Math.round(firstNumber * 100) / 100] + '='
        text.innerText = Math.round(result * 100) / 100
    }
    else if (symbol === '÷'){
        if (firstNumber==0){
            upperText.innerText = [Math.round(secondNumber * 100) / 100] + symbol + [Math.round(firstNumber * 100) / 100] + '='
            text.innerText = 'Go learn math'
        }
        else{
            result = Number(secondNumber) /  Number(firstNumber)
            upperText.innerText = [Math.round(secondNumber * 100) / 100] + symbol + [Math.round(firstNumber * 100) / 100] + '='
            text.innerText = Math.round(result * 100) / 100
        }
    }
}

//after a number key is pressed
function store1(first){
    text.innerText+=first
    firstNumber = text.innerText
}


//give values to each buttom
//#region 
zero.onclick = function(){
    store1(zero.value);
}

one.onclick = function(){
    store1(one.value);
}

two.onclick = function(){
    store1(two.value);
}

three.onclick = function(){
    store1(three.value);
}

four.onclick = function(){
    store1(four.value);
}

five.onclick = function(){
    store1(five.value);
}

six.onclick = function(){
    store1(six.value);
}

seven.onclick = function(){
    store1(seven.value);
}

eight.onclick = function(){
    store1(eight.value);
}

nine.onclick = function(){
    store1(nine.value);
}

dot.onclick = function(){
    if (text.innerText.includes('.')===true){
        return
    }
    else {
        store1(dot.value);
    }
}

plus.onclick = function(){
    symbol = '+'
    Operation(firstNumber)
}

minus.onclick = function(){
    symbol = '-'
    Operation(firstNumber)
}

times.onclick = function(){
    symbol = 'x'
    Operation(firstNumber)
}

division.onclick = function(){
    symbol  = '÷'
    Operation(firstNumber)
}

equal.onclick = function(){
    Result()
}

//clear all data on the calculator
clear.onclick = function(){
    upperText.innerText=''
    text.innerText=''
    firstNumber=undefined
    secondNumber=undefined
    symbol=''
    symbol2=''
}

//deletes the last digit on ther down side of the display
deletes.onclick = function(){
    befores = text.innerText
    afters = befores.substring(0, befores.length - 1)
    text.innerText = afters
    firstNumber = afters
}

//#endregion
