/*
Sebuah tipe data yang tidak memiliki value
*/

let name;

if (name === undefined) {
  alert("Undifined");
} else {
  alert("defined");
}

//undifined array value
const names = ["ucup", "sentot"];

if (names[3] === undefined) {
  console.info("Array Undifined");
} else {
  console.info("Array Defined");
}

//undifine object value
const person = {
  names: "Ucup",
};

if (person.names === undefined) {
  console.info("Object Undifined");
} else {
  console.info("Object Defined");
}
