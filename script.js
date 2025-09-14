const display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculateResult() {
  const input = display.innerText;
  const operators = ['+', '-', '*', '/', '%'];
  let currentNumber = '';
  let numbers = [];
  let operations = [];

  for (let char of input) {
    if (!operators.includes(char)) {
      currentNumber += char;
    } else {
      numbers.push(parseFloat(currentNumber));
      operations.push(char);
      currentNumber = '';
    }
  }
  numbers.push(parseFloat(currentNumber));

  while (operations.length > 0) {
    const operator = operations.shift();
    const a = numbers.shift();
    const b = numbers.shift();
    let result;

    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = b !== 0 ? a / b : 'Cannot divide by 0';
        break;
      case '%':
        result = a % b;
        break;
    }
    numbers.unshift(result);
  }

  display.innerText = numbers[0];
}
