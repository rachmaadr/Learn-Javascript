const person = {};

//menambah/mengubah atribut
person["name"] = "Sentot";
person["city"] = "Surabaya";
person["age"] = 30;
console.table(person);
//menghapus
delete person["name"];
console.table(person);

//membuat object dengan propertis
const orang = {
  "full name": "Junaedi",
  "country": "Indonesia",
  "age": 30,
};

console.table(orang);
//mengakses property
console.info(`Name: ${orang["full name"]}`); //jika atribut lebih lebih dari 1 kata
console.info(`address: ${orang.country}`);
console.info(`age: ${orang.age}`);
