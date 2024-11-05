let Person = {};

//menggunakan Optional Chaining
alert(Person?.address?.country);

//tidak menggunakan Optional Chaining

let say;
if (Person.address !== undefined && Person.address !== null) {
  say = Person.address.country;
}

alert(say);
