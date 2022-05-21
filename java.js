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

let firstNumber = 0;
let secondNumber = 0;
let result = 0;

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide (a,b){
    return a/b
}

function store(first){
    text.innerText+=first
}



//#region 
zero.onclick = function(){
    store(zero.value);
}

one.onclick = function(){
    store(one.value);
}

two.onclick = function(){
    store(two.value);
}

three.onclick = function(){
    store(three.value);
}

four.onclick = function(){
    store(four.value);
}

five.onclick = function(){
    store(five.value);
}

six.onclick = function(){
    store(six.value);
}

seven.onclick = function(){
    store(seven.value);
}

eight.onclick = function(){
    store(eight.value);
}

nine.onclick = function(){
    store(nine.value);
}

dot.onclick = function(){
    store(dot.value);
}

plus.onclick = function(){
    
}

minus.onclick = function(){
    
}

times.onclick = function(){
    
}

division.onclick = function(){
    
}

equal.onclick = function(){

}
//#endregion








/*const keypad = {
    zero : document.getElementById("zero"),
    one : document.getElementById("one"),
    two : document.getElementById("two"),
    three : document.getElementById("three"),
    four : document.getElementById("four"),
    five : document.getElementById("five"),
    six : document.getElementById("six"),
    seven : document.getElementById("seven"),
    eight : document.getElementById("eight"),
    nine : document.getElementById("nine"),
    dot : document.getElementById("dot"),
    plus : document.getElementById("add"),
    minus : document.getElementById("subtract"),
    times : document.getElementById("multiply"),
    equal : document.getElementById("equal"),
    division : document.getElementById("divide")
}*/

