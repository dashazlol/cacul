let currentNumber = '';
let firstNumber = '';
let operation = '';
function addToResult(num) {
  if (currentNumber==='0'){
    currentNumber=num;
    currentNumber=String(currentNumber);
  }
  else 
    currentNumber += num;
  document.getElementById('result').value = currentNumber;
}
function add() {
  firstNumber = currentNumber;
  currentNumber = '';
  operation = '+';
}
function subtract() {
  firstNumber = currentNumber;
  currentNumber = '';
  operation = '-';
}
function multiply() {
  firstNumber = currentNumber;
  currentNumber = '';
  operation = '*';
}
function divide() {
  firstNumber = currentNumber;
  currentNumber = '';
  operation = '/';
}
function clearResult() {
  num = parseInt(document.getElementById('result').value);
  num = parseInt(num/10);
  document.getElementById('result').value = num;
  currentNumber=document.getElementById('result').value;
}

function calculate() {
  let result;
  switch (operation) {
    case '+':
      result = parseInt(firstNumber) + parseInt(currentNumber);
      break;
    case '-':
      result = parseInt(firstNumber) - parseInt(currentNumber);
      break;
    case '*':
      result = parseInt(firstNumber) * parseInt(currentNumber);
      break;
    case '/':
      result = parseInt(firstNumber) / parseInt(currentNumber);
      break;
    default:
      result = '';
      break;
  }
  document.getElementById('result').value = result;
  currentNumber = '';
}
