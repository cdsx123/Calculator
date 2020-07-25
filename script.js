const displayValue = document.querySelector('#displayValue');
const clear = document.querySelector('#clear')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const minus = document.querySelector('#subtract')
const plus = document.querySelector('#add')
const times = document.querySelector('#multiply')
const division = document.querySelector('#divide')
const equals = document.querySelector('#equals')
const del = document.querySelector('#delete')

function changeDisplay(a){
    if (displayValue.textContent.length <= 11){
        displayValue.textContent += a;
    }
}
function clearDisplay(){
    displayValue.textContent = '';
}
function deleteFunction(){
    displayValue.textContent = displayValue.textContent.slice(0, -1);
}
one.addEventListener('click', () => {changeDisplay('1')})
two.addEventListener('click', () => {changeDisplay('2')})
three.addEventListener('click', () => {changeDisplay('3')})
four.addEventListener('click', () => {changeDisplay('4')})
five.addEventListener('click', () => {changeDisplay('5')})
six.addEventListener('click', () => {changeDisplay('6')})
seven.addEventListener('click', () => {changeDisplay('7')})
eight.addEventListener('click', () => {changeDisplay('8')})
nine.addEventListener('click', () => {changeDisplay('9')})
zero.addEventListener('click', () => {changeDisplay('0')})
clear.addEventListener('click', clearDisplay)
del.addEventListener('click', deleteFunction)

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}
function operate(a, operator, b){
    switch(operator){
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
        case 'sqrt':
            return Math.sqrt(+displayValue.textContent);
            break;
        case 'negative':
            return +displayValue.textContent*-1;
            break;
    }
}
