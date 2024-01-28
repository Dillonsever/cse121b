/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers (){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
function subtract (subnumber1, subnumber2) {
    return subnumber1 - subnumber2;
}
function subtractNumbers (){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (mnumber1, mnumber2) => mnumber1 * mnumber2;

const multiplyNumbers = () => {
    let mulNumber1 = Number(document.querySelector('#factor1').value);
    let mulNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(mulNumber1, mulNumber2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide (number1, number2) {
    return number1 / number2;
}
function divideNumbers (){
    let divNumber1 = Number(document.querySelector('#dividend').value);
    let divNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divNumber1, divNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

document.getElementById('getTotal').addEventListener('click', function () {
    let subtotalNum = Number(document.querySelector('#subtotal').value);
    let membershipCheckbox = document.getElementById('member');
    let applyDiscount = membershipCheckbox.checked;

    if (applyDiscount) {
        subtotalNum *= 0.8;
    }

    document.getElementById('total').innerText = `$${subtotalNum.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").textContent = numbersArray.toString();

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers.toString();

/* Output Evens Only Array */

let evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.toString();

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfArray').textContent = sumOfArray.toString();

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.toString();

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied.toString();