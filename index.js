function add(num1, num2) {
  let res = num1 + num2
  return res
}


function subtract(num1, num2) {
    let res = num1 - num2
    return res
}

function multiply(num1, num2) {
    let res = num1 * num2
    return res
}

function divide(num1, num2) {
    let res = num1 / num2
    return res
}


function increment(num1) {
    num1++;
    return num1;
}

function decrement(num2) {
    num2--;
    return num2;
}

function makeInt(num1) {
    num1 = parseInt(num1, 10)
    return num1
}

function preserveDecimal(num2) {
    num2 = parseFloat(num2, 10)
    return num2
}