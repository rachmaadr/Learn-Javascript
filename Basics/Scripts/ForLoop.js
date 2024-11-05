for (counter = 1; counter <= 10; counter++) {
  document.writeln(`Bilangan ${counter}`);
}

for (number = 1; number <= 100; number++) {
  if (number % 2 == 0) {
    document.writeln(`<p> Bilangan genap ${number}</p>`);
  } else {
    document.writeln(`<p> Bilangan ganjil ${number}</p>`);
  }
}
