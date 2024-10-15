let display = document.getElementById('display');
let currentValue = '';
let operator = '';
let result = 0;

function inputDigit(digit) {
    currentValue += digit;
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    operator = '';
    result = 0;
    display.value = '';
}

function deleteDigit() {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
}

function operate(op) {
    if (currentValue) {
        result = currentValue;
        currentValue = '';
        operator = op;
        display.value = result + operator;
    }
}

function calculate() {
    if (currentValue && operator) {
        switch (operator) {
            case '+':
                result = parseFloat(result) + parseFloat(currentValue);
                break;
            case '-':
                result = parseFloat(result) - parseFloat(currentValue);
                break;
            case '*':
                result = parseFloat(result) * parseFloat(currentValue);
                break;
            case '/':
                if (currentValue != '0') {
                    result = parseFloat(result) / parseFloat(currentValue);
                } else {
                    alert("Cannot divide by zero!");
                }
                break;
            case '%':
                result = parseFloat(result) % parseFloat(currentValue);
                break;
        }
        display.value = result;
        currentValue = result.toString();
        operator = '';
    }
}

function square() {
    if (currentValue) {
        result = Math.pow(parseFloat(currentValue), 2);
        display.value = result;
        currentValue = result.toString();
    }
}

function sqrt() {
    if (currentValue) {
        result = Math.sqrt(parseFloat(currentValue));
        display.value = result;
        currentValue = result.toString();
    }
}

function reciprocal() {
    if (currentValue) {
        result = 1 / parseFloat(currentValue);
        display.value = result;
        currentValue = result.toString();
    }
}
