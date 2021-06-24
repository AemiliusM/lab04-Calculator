
import { add, subtract, multiply, divide, squareroot } from './calculator.js'

const addNum1 = document.getElementById('add-num1');
const addNum2 = document.getElementById('add-num2');
const addAnswer = document.getElementById('add-answer');
const addBtn = document.getElementById('add-btn');

const subNum1 = document.getElementById('sub-num1');
const subNum2 = document.getElementById('sub-num2');
const subAnswer = document.getElementById('sub-answer');
const subBtn = document.getElementById('sub-btn');

const divideNum1 = document.getElementById('divide-num1');
const divideNum2 = document.getElementById('divide-num2');
const divideAnswer = document.getElementById('divide-answer');
const divideBtn = document.getElementById('divide-btn');

const multiplyNum1 = document.getElementById('multiply-num1');
const multiplyNum2 = document.getElementById('multiply-num2');
const multiplyAnswer = document.getElementById('multiply-answer');
const multiplyBtn = document.getElementById('multiply-btn');

const squarerootXInput = document.getElementById('squareroot-x-input');
const squarerootButton = document.getElementById('squareroot-button');
const squarerootResult = document.getElementById('squareroot-result');



addBtn.addEventListener('click', () => {
    const add1 = Number(addNum1.value);
    const add2 = Number(addNum2.value);
    const sum = add(add1, add2);
    addAnswer.textContent = sum;
});

subBtn.addEventListener('click', () => {
    const sub1 = Number(subNum1.value);
    const sub2 = Number(subNum2.value);
    const difference = subtract(sub1, sub2);
    subAnswer.textContent = difference;
});

multiplyBtn.addEventListener('click', () => {
    const multiply1 = Number(multiplyNum1.value);
    const multiply2 = Number(multiplyNum2.value);
    const product = multiply(multiply1, multiply2);
    multiplyAnswer.textContent = product;
});

divideBtn.addEventListener('click', () => {
    const divide1 = Number(divideNum1.value);
    const divide2 = Number(divideNum2.value);
    const quotient = divide(divide1, divide2);
    divideAnswer.textContent = quotient;
});

squarerootButton.addEventListener('click', () =>{
    const x = Number(squarerootXInput.value);
    const answer = squareroot(x);
    squarerootResult.textContent = answer;
});
