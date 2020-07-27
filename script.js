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
const plus = document.querySelector('#plus')
const times = document.querySelector('#multiply')
const division = document.querySelector('#divide')
const equals = document.querySelector('#equals')
const del = document.querySelector('#delete')
const sqrt = document.querySelector('#sqrt')
let num1 = '';
let num2 = '';
let operator;
let numChange = false;
displayValue.textContent = '0';


function round(){
    if (displayValue.textContent.length > 11){
        num1 = num1.floor();
        displayValue.textContent = num1;
    }
}
function changeDisplay(a){
    
    
    if (numChange && num2 === ''){
        displayValue.textContent = num1;
        
    } else if (displayValue.textContent === num1 && numChange){
        displayValue.textContent = num2;
        
        return;
    };
    
    if (displayValue.textContent.length <= 11){
        if (displayValue.textContent === '0'){
            displayValue.textContent = '';
        }
        displayValue.textContent += a;
    }
    
}
function addDigit(a){     
    if (displayValue.textContent.length <= 11){
        if (numChange){
            num2 += a;
            return;
        }
        num1 += a;
        
    }
}
function clearDisplay(){
    displayValue.textContent = '';
    num1 = '';
    num2 = '';
    numChange = false;
}
function deleteFunction(){
    displayValue.textContent = displayValue.textContent.slice(0, -1);

}
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
function equal(a){
    if (numChange){
        num1 = operate(num1, num2);
        displayValue.textContent = num1;
        
        num2 = '';
        if (a = '='){
            num1 = '';
            numChange = false;
        }
    }
}
function operatorFunction(a){   
    if (a === 'sqrt' || a === 'negative'){
        operator = a;
        if (numChange){
            displayValue.textContent = operate('0', num2);
            num2 = displayValue.textContent;
            return;
        }
        displayValue.textContent = operate(num1, '0')
        num1 = displayValue.textContent
        return;
    }
    if (num2 !== ''){
        
        
            equal()
            operator = a;
            return;
        
    }
    
    operator = a;
    numChange = true;
    num2 = ''
    changeDisplay('');
}

function operate(a, b){
    a = +a
    b = +b
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
    //a should = the new display value after calling operate
}
one.addEventListener('click', () => {
    addDigit('1');
    changeDisplay('1'); 
})
two.addEventListener('click', () => {
    addDigit('2');
    changeDisplay('2'); 
})
three.addEventListener('click', () => {
    addDigit('3');
    changeDisplay('3');
})
four.addEventListener('click', () => {
    addDigit('4');
    changeDisplay('4');
})
five.addEventListener('click', () => {
    addDigit('5');
    changeDisplay('5');
})
six.addEventListener('click', () => {
    addDigit('6');
    changeDisplay('6');
    
})
seven.addEventListener('click', () => {
    addDigit('7');
    changeDisplay('7');
    
})
eight.addEventListener('click', () => {
    addDigit('8');
    changeDisplay('8');
    
})
nine.addEventListener('click', () => {
    addDigit('9');
    changeDisplay('9');
    
})
zero.addEventListener('click', () => {
    addDigit('0')
    changeDisplay('0');
})
clear.addEventListener('click', clearDisplay)
del.addEventListener('click', deleteFunction)
plus.addEventListener('click', () => {operatorFunction('+')})
minus.addEventListener('click', () => {operatorFunction('-')})
times.addEventListener('click', () => {operatorFunction('*')})
division.addEventListener('click', () => {operatorFunction('/')})
equals.addEventListener('click', () => {equal('=')})
sqrt.addEventListener('click', () => {operatorFunction('sqrt')})