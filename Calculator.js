// a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -,%, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// giving instructions for operations
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '%') {
    result = number1 % number2;
}
else {
    result = number1 / number2;
}

// displaying the result
alert(`${number1} ${operator} ${number2} = ${result}`);