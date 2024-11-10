/*
tujuannya membuat function untuk mengambil data (getter) sedangkan mengubah data menggunakan (setter) 
*/

const Person = {
  firsName: "Iwan",
  lastName: "Goldman",
  //getter
  get fullName() {
    return `${this.firsName} ${this.lastName}`;
  },
  //setter
  set fullName(value) {
    const array = value.split(" ");
    (this.firsName = [0]), (this.lastName = [1]);
  },
};

Person.fullName = "Sodron Kookom";
console.table(Person);

Person.fullName = "Waluyo Kookom";
console.table(Person);

Person.fullName = "Sodron Kookom";
console.table(Person);
