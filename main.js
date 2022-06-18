// Global variables
let result 
let val1 = ''
let val2 = ''
let operation
let screen = ''
let completed = false;
let valOneComplete = false
let valTwoComplete = false


{/* <section class="row">
    <button id="b7">7</button>
    <button id="b8">8</button>
    <button id="b9">9</button>
    <button id="bDiv">/</button>
    </section>
    <section class="row">
    <button id="b4">4</button>
    <button id="b5">5</button>
    <button id="b6">6</button>
    <button id="bx">x</button>
    </section>
    <section class="row">
    <button id="b1">1</button>
    <button id="b2">2</button>
    <button id="b3">3</button>
    <button id="bAdd">+</button>
    </section>
    <section class="row">
    <button id="b0">0</button>
    <button id="bPoint">.</button>
    <button id="bEqual">=</button>
    <button id="bMinus">-</button>
</section> */}

// Numbers 
const btn7 = document.querySelector('#b7')
const btn8 = document.querySelector('#b8')
const btn9 = document.querySelector('#b9')

const btn4 = document.querySelector('#b4')
const btn5 = document.querySelector('#b5')
const btn6 = document.querySelector('#b6')

const btn1 = document.querySelector('#b1')
const btn2 = document.querySelector('#b2')
const btn3 = document.querySelector('#b3')

const b0 = document.querySelector('#b0')


// Operations
const btnAdd = document.querySelector('#bAdd')
const btnMinus = document.querySelector('#bMinus')
const btnMult = document.querySelector('#bx')

const btnDiv = document.querySelector('#bDiv')
const btnEqual = document.querySelector('#bEqual')

const btnPoint = document.querySelector('#bPoint')


// Event listeners


btn7.addEventListener('click', get7)
btn8.addEventListener('click', get8)
btn9.addEventListener('click', get9)

btn4.addEventListener('click', get4)
btn5.addEventListener('click', get5)
btn6.addEventListener('click', get6)

btn1.addEventListener('click', get1)
btn2.addEventListener('click', get2)
btn3.addEventListener('click', get3)

b0.addEventListener('click', get0)


btnAdd.addEventListener('click', addOperation)
btnMinus.addEventListener('click', minusOperation)
btnMult.addEventListener('click', multiplyOperation)
btnDiv.addEventListener('click', divOperation)


btnEqual.addEventListener('click', calculate)

btnPoint.addEventListener('click', point)

// Functions

function get7() {
    press(7)
}

function get8() {
    press(8)
}

function get9() {
    press(9)
}

function get4() {
    press(4)
}

function get5() {
    press(5)
}

function get6() {
    press(6)
}

function get1() {
    press(1)
}

function get2() {
    press(2)
}

function get3() {
    press(3)
}

function get0() {
    press(0)
}





function addOperation() {
    console.log('pressed plus')
    operation = '+'
    valOneComplete = true

    updateDisplay('+')
}

function divOperation() {
    console.log('pressed /')
    operation = '/'
    valOneComplete = true

    updateDisplay('/')
}

function multiplyOperation() {
    console.log('pressed *')
    operation = '*'
    valOneComplete = true

    updateDisplay('x')
}

function minusOperation() {
    console.log('pressed -')
    operation = '-'
    valOneComplete = true

    updateDisplay('-')
}

function point() {
    console.log('pressed .')    
    assignVariable('.')

    updateDisplay('.')
}

function calculate() {
    console.log("pressed equal")

    switch(operation) {
        case '+':
            result = Number(val1) + Number(val2);
            break
        case '-':
            result = Number(val1) - Number(val2);
            break;
        case '*':
            result = Number(val1) * Number(val2);
            break;
        case '/':
            result = Number(val1) / Number(val2);
            break;
    }
    console.log(String(result))
    screen = ''
    updateDisplay(result)
    completed = true;
}




// Helper function
function updateDisplay(value) {
    screen += " " + value
    document.querySelector('#resultDisplay').textContent = screen
}

function clearScreen() {

    if (completed) {        
        val1 = ''
        val2 = ''
        valOneComplete = false
        valTwoComplete = false
        operation = undefined
        screen = ''
        document.querySelector('#resultDisplay').textContent = ''  
        console.log('Screen was cleared')    
        completed = false 
    }    
}

function assignVariable(num) {
    !valOneComplete ? val1 = `${val1}${num}` : val2 = `${val2}${num}`
}

function press(number) {
    clearScreen()
    console.log(`your pleased ${number}`)
    assignVariable(number)
    updateDisplay(number)
}