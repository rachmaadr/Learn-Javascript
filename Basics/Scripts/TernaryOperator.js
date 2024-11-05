//tanpa menggunakan ternary operator
const nilai = 75;
let lulus;

if (nilai >= 90) {
  lulus = "A";
} else if (nilai >= 75) {
  lulus = "B";
} else {
  lulus = "Belajar lebih giat lagi";
}

document.writeln(`${lulus}`);
//menggunakan ternary operator

const value = 80;
const ucapan = value >= 75 ? "selamat anda lulus" : "silahkan coba lagi";

document.writeln(`${ucapan}`);
