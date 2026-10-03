const display = document.getElementById('display');
const expression = document.querySelector('.expression');
const keypad = document.getElementById('keypad');

let storedValue = null;
let pendingOperator = null;
let waitingForOperand = false;
let justEvaluated = false;

function formatResult(value) {
    return String(Number(value.toPrecision(10)));
}

function calculate(left, right, operator) {
    switch (operator) {
        case '+':
            return left + right;
        case '-':
            return left - right;
        case '*':
            return left * right;
        case '/':
            return right === 0 ? null : left / right;
        default:
            return right;
    }
}

function clearCalculator() {
    display.textContent = '0';
    expression.textContent = '';
    storedValue = null;
    pendingOperator = null;
    waitingForOperand = false;
    justEvaluated = false;
}

function showError() {
    display.textContent = 'Error';
    expression.textContent = 'Cannot divide by zero';
    storedValue = null;
    pendingOperator = null;
    waitingForOperand = true;
    justEvaluated = true;
}

function inputDigit(digit) {
    if (waitingForOperand || justEvaluated || display.textContent === 'Error') {
        display.textContent = digit;
        waitingForOperand = false;
        justEvaluated = false;
        expression.textContent = '';
    } else {
        display.textContent = display.textContent === '0'
            ? digit
            : display.textContent + digit;
    }
}

function inputDecimal() {
    if (waitingForOperand || justEvaluated || display.textContent === 'Error') {
        display.textContent = '0.';
        waitingForOperand = false;
        justEvaluated = false;
        expression.textContent = '';
    } else if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

function chooseOperator(operator) {
    const inputValue = Number(display.textContent);
    if (!Number.isFinite(inputValue)) return;

    if (pendingOperator && !waitingForOperand) {
        const result = calculate(storedValue, inputValue, pendingOperator);
        if (result === null) {
            showError();
            return;
        }
        display.textContent = formatResult(result);
        storedValue = result;
    } else {
        storedValue = inputValue;
    }

    pendingOperator = operator;
    waitingForOperand = true;
    justEvaluated = false;
    expression.textContent = `${display.textContent} ${operator}`;
}

function evaluate() {
    if (!pendingOperator || storedValue === null || waitingForOperand) return;

    const left = storedValue;
    const right = Number(display.textContent);
    const operator = pendingOperator;
    const result = calculate(left, right, operator);

    if (result === null) {
        showError();
        return;
    }

    expression.textContent = `${left} ${operator} ${right} =`;
    display.textContent = formatResult(result);
    storedValue = null;
    pendingOperator = null;
    waitingForOperand = true;
    justEvaluated = true;
}

function performAction(action) {
    switch (action) {
        case 'clear':
            clearCalculator();
            break;
        case 'equals':
            evaluate();
            break;
        case 'decimal':
            inputDecimal();
            break;
        case 'sign':
            if (display.textContent !== '0' && display.textContent !== 'Error') {
                display.textContent = display.textContent.startsWith('-')
                    ? display.textContent.slice(1)
                    : `-${display.textContent}`;
            }
            break;
        case 'percent':
            if (display.textContent !== 'Error') {
                display.textContent = formatResult(Number(display.textContent) / 100);
            }
            break;
        case 'backspace':
            if (!waitingForOperand && !justEvaluated && display.textContent !== 'Error') {
                display.textContent = display.textContent.length > 1
                    ? display.textContent.slice(0, -1)
                    : '0';
                if (display.textContent === '-') display.textContent = '0';
            }
            break;
    }
}

function handleInput(value) {
    if (/^\d$/.test(value)) {
        inputDigit(value);
    } else if (['+', '-', '*', '/'].includes(value)) {
        chooseOperator(value);
    } else if (value === 'Enter' || value === '=') {
        evaluate();
    } else if (value === 'Escape') {
        clearCalculator();
    } else if (value === 'Backspace') {
        performAction('backspace');
    } else if (value === '.') {
        inputDecimal();
    } else if (value === '%') {
        performAction('percent');
    }
}

keypad.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    if (button.dataset.digit !== undefined) {
        inputDigit(button.dataset.digit);
    } else if (button.dataset.operator) {
        chooseOperator(button.dataset.operator);
    } else if (button.dataset.action) {
        performAction(button.dataset.action);
    }
});

document.addEventListener('keydown', (event) => {
    if (/^\d$/.test(event.key) || ['+', '-', '*', '/', 'Enter', '=', 'Escape', 'Backspace', '.', '%'].includes(event.key)) {
        event.preventDefault();
        handleInput(event.key);
    }
});