/*
Scope ada dua jenis yaitu global dan local scope kegunaannya untuk mengakses sebuah data
setiap kali membuat function kita wajib membuat local scope untuk function tsb.
**/

//ini global scope
let counter = 0;

function hitMe() {
  counter++;
}

hitMe();
hitMe();

console.info(counter);

function first() {
  //ini local scope
  let firstStatement = "first";
  console.info(firstStatement); // ini local scope hanya bisa diakses didalam function
}

//contoh ke 2
function second() {
  let secondStatement = "second";
}

first();
second();

/*
console.info(firstStatement); tidak bisa diakses karena variabel tsb ada di local scope
*/

// Nested Scope Function
function pertama() {
  let check = "Sukses";
  function kedua() {
    console.info(cek);
    const test = "Berhasil";
  }
  kedua();
  console.info(tes);
}
