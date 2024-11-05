function* createdNames() {
  yield "Ucup";
  yield "Udin";
  yield "Unta";
}

const names = createdNames();
for (const name of names) {
  console.info(name);
}
