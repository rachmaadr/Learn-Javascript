function factorial(value) {
  let result = 1;
  for (i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}

console.info(factorial(7));

function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}

console.info(factorialRecursive(7));
