//falsy diambil yang true
console.info("Hello" || "");
console.info("" || []);
console.info("0" || "NOL");
console.info(0 || "NOL");
console.info("null" || null);
console.info(undefined || "undifined");

//contoh penggunaannya

const Person = {
  firstName: "Sentot",
  lastName: "Sugiono",
};

const names = Person.firstName || Person.lastName;
console.info(names);

//truety diambil dari yang false
console.info("Hello" && "");
console.info("" && []);
console.info("0" && "NOL");
console.info(0 && "NOL");
console.info("null" && null);
console.info(undefined && "undifined");
