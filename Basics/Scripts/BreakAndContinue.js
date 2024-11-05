let number = 1;

while (true) {
  document.writeln(`<p>Perulangan ke ${number}</p>`);
  number++;

  if (number > 10) {
    break;
  }
}

for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  document.writeln(`<p>Bilangan ganjil ${i}</p>`);
}
