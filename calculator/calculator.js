var display = document.querySelector('#screen').innerHTML;;
const numberKeys = document.querySelectorAll('.numberKey');
const operatorKeys = document.querySelectorAll('.operatorKey');
var oldNumber;
var newNumber = document.querySelector('#screen').innerHTML;
var operator;

document.getElementById("percentage").addEventListener('click', () => {
    newNumber = parseInt(newNumber) / 100;
    display = display.toString() + document.getElementById("percentage").innerHTML.toString();
    document.getElementById("screen").innerHTML = display;
})

numberKeys.forEach(button => {
    button.addEventListener('click', () => {
        // if (oldNumber === "" && newNumber !== "") {
        //     reset();
        // }
        addDisplay(button.innerHTML);
        document.getElementById("screen").innerHTML = display;
    })
});

document.getElementById("reset").addEventListener('click', () => {
    reset();
})

document.getElementById("equal").addEventListener('click', () => {
    compute();
    display = newNumber;
    updateDisplay();
})

operatorKeys.forEach(button => {
    button.addEventListener('click', () => {
        if (newNumber === "") {
            return;
        }
        if (oldNumber !== "") {
            compute();
        }
        operation(button.innerHTML);
        display = display.toString() + button.innerHTML.toString();
        document.getElementById("screen").innerHTML = display;
    })
});

function operation(operatorChoice) {
    operator = operatorChoice;
    oldNumber = newNumber;
    newNumber = "";
}

function compute() {
    var result;
    var oldValue = parseFloat(oldNumber);
    var currentValue = parseFloat(newNumber);
    if (isNaN(oldValue) || isNaN(currentValue)) {
        return;
    }
    switch (operator) {
        case "+":
            result = oldValue + currentValue;
            break;
        case "/":
            result = oldValue / currentValue;
            break;
        case "-":
            result = oldValue - currentValue;
            break;
        case "x":
            result = oldValue * currentValue;
            break;

        default:
            return;
    }
    newNumber = result;
    operator = undefined;
    oldNumber = "";
}

function updateDisplay() {
    document.getElementById("screen").innerHTML = display;
}

function reset() {
    newNumber = "";
    oldNumber = "";
    display = "";
    updateDisplay();
}

function addDisplay(value) {
    if (value === '.' && newNumber.includes('.')) {
        return;
    }
    newNumber = newNumber.toString() + value.toString();
    display = display.toString() + value.toString();
}

