const sayHello = (name) => {
  const say = `Hello ${name}`;
  console.info(say);
};
sayHello("Udin");

//membuat arrow func tanpa block
const onlyHello = (nama) => console.info(`hello ${nama}`);
onlyHello("ucup");

//arrow func return value
const hanyaCoba = (first, second) => first + second;
console.info(hanyaCoba(10, 5));

//arrow funct tanpa parameter
const test = (nama) => console.info(`hello ${nama}`);
test("ucup");
