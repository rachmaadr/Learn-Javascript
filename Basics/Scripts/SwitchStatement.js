const nilai = "A";

switch (nilai) {
  case "A":
    document.writeln("<P> Anda Berhasil syekali</p>");
    break;
  case "B":
  case "C":
    document.writeln("<P> Anda Berhasil</p>");
    break;
  case "D":
    document.writeln("<P> Coba Lagi</p>");
    break;
  default:
    document.writeln("<P> Belajar lebih giat Lagi</p>");
}

if (nilai === "A") {
  document.writeln("<P> Anda Berhasil syekali</p>");
} else if (nilai === "B" || nilai === "C") {
  document.writeln("<P> Anda Berhasil</p>");
} else if (nilai === "D") {
  document.writeln("<P> Coba Lagi</p>");
} else {
  document.writeln("<P> Belajar lebih giat Lagi</p>");
}
