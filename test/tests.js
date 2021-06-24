// IMPORT MODULES under test here:
import { add } from '../calculator.js';
import { subtract } from '../calculator.js';
import { multiply } from '../calculator.js';
import { divide } from '../calculator.js';

const test = QUnit.test;


test('time to test a function', (expect) => {
    const expected = 5;

    const actual = add(2, 3); 
    
    expect.equal(actual, expected);
});

test('testing subtract function', (expect) => {
    const expected = 1;

    const actual = subtract(2, 1);

    expect.equal(actual, expected);
});

test('testing multiply function', (expect) =>{
    const expected = 4;
    const actual = multiply(2, 2);
    expect.equal(actual, expected);
});

test('testing dividng function', (expect) =>{
    const expected = 2;
    const actual = divide(4, 2);
    expect.equal(actual, expected);
});

test('testing square root function', (expect) =>{
    const expected = 2;
    const actual = squareroot(4);
    expect.equal(actual, expected);
});