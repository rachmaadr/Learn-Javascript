/**
- Rest parameter merupakan fitur dimana kita mengirimkan data sebanyak - banyaknya pada satu parameter dan secara otomatis akan dikonversi menjadi array
- Rest Parameter hanya ada 1 didalam function dan hanya ditaruh diposisi paling akhir tidak boleh didepan atau ditengah kecuali cuma ada 1 parameter
- Dibahasa pemrograman lain ini bisa disebut dengan variable argument
*/

function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }

  document.writeln(`<p>Total : ${name} is ${total}</p>`);
}

sum("Jeruk", 20, 40, 30);

/**
Menggunakan spread syntax untuk mengirim data array ke rest parameter 
dengan (... diikuti data array)
 */

const value = [10, 20, 30, 40];
sum("Apel", ...value);
