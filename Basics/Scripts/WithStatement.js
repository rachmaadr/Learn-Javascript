// Tanpa With statement
let Person = {
  firstName: "Senot",
  middleName: "ucup",
  lastName: "suhono",
};
console.info(Person.firstName);
console.info(Person.middleName);
console.info(Person.lastName);

// Menggunakan With statement
const Sugiantoro = {
  tb: 170,
  bb: 80,
};
with (Sugiantoro) {
  console.info(tb);
  console.info(bb);
}
