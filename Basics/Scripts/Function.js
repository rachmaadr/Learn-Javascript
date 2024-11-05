function sayHello() {
  document.writeln(`<p>Hello World</p>`);
}

sayHello();

// menggunakan parameter
function person(firstName, lastName) {
  document.writeln(`<p>Hello ${firstName} ${lastName}</p>`);
}
person("Ucup", "sugiono");

// menggunakan parameter dan return value
function Sugiono(tb, bb) {
  const diet = `Sehat ${tb} ${bb}`;
  return diet;
}

const result = Sugiono(170, 80);
document.writeln(`<p>${result}</p>`);

// menggunakan if loop parameter dan return value
function getValue(value) {
  if (value >= 90) {
    return "A";
  } else if (value >= 75) {
    return "B";
  } else {
    return "Belajar lebih giat lagi";
  }
}

const Hasil = getValue(60);
document.writeln(`<p>${Hasil}</p>`);

// menghentikan function eksekusi dengan return value
function isContains(array, searchValue) {
  for (const element of array) {
    if (element === searchValue) {
      return true;
    }
    return false;
  }
}

const array = [21, 2323, 211, 32323, 12, 54, 76, 87];
const search = 10;
const value = isContains(array, search);
document.writeln(`<p>${value}</p>`);
