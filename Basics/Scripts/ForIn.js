const Person = {
  firstName: "Sentot",
  lastName: "Sugiantoro",
};

for (const property in Person) {
  document.writeln(`<p>${property}: ${Person[property]}</p>`);
}
