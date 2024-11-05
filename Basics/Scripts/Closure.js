function createAdder(value) {
  const owner = "Sudrun";
  function add(param) {
    console.info(owner);
    return value + param;
  }
  return add;
}

const addTwo = createAdder(2);
console.info(addTwo(10));

const addThree = createAdder(2);
console.info(addThree(20));
