// Untuk mengecek sebuah variabel ada valuenya atau tidak

const person = {
  firstName: "Sentot",
  lastName: "Kumkum",
};

const result = "firstName" in person;
document.writeln(`<P>${result}</p>`);

//menggunakan if expression
const orang = {
  fullName: "Kokom",
  address: "Indonesia",
};

if ("fullname" in orang) {
  alert(`Hello ${orang.address}`);
} else {
  alert("Hello");
}
