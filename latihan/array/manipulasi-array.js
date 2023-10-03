
// // menambah isi array dengan menggunakan objek
// var kendaraan = [];
// kendaraan[0] = 'mobil';
// kendaraan[1] = 'motor';
// kendaraan[2] = 'Sepeda';
// console.log(kendaraan);

// //menghapus isi array dengan looping
// var kendaraan = ['mobil', 'motor', 'sepeda'];
// kendaraan[1] = undefined;
// console.log(kendaraan);
  
//contoh 1
//menampilkan isi array dengan cara looping
// var kendaraan = [];
// kendaraan = ['mobil', 'motor', 'sepeda'];
// for (i = 0; i < 3; i++) {
//     console.log("Jenis kendaraan no " + (i+1) + " " + kendaraan[i]);
// }

//contoh 2
// var hari = [];
// hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
// for(i = 0; i < 7; i++) {
//     console.log("Hari ke " + (i+1) + " " + "Adalah" + " " + hari[i]);
// }

// Contoh 3
// var merkMobil = [];
// merkMobil = ['bmw', 'mercy', 'pajero'];
// for(i = 0; i < 3; i++) {
//     console.log("Berikut adalah nama merk mobil ke - " + (i+1) + merkMobil[i]);
// }

//menghapus isi array dengan looping dan method (length)
// var hari = [];
// hari = [ 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
// for(i = 0; i < hari.length; i++) {
//     console.log("hari ke " + (i+1) + " " + "adalah" + " " + hari[i]);
// }


// //method dalam array
// // method join
// var merkMobil = [];
// merkMobil = ['bmw', 'mercy', 'ford'];
// console.log(merkMobil.join(" - "));

// // method push = menambah elemen & pop = menghapus elemen dan tidak perlu menambahkan index
// var hari = [];
// hari = ['senin', 'selasa', 'rabu'];
// hari.push('kamis', 'jumat', 'sabtu', 'minggu');
// hari.pop();
// console.log(hari.join(" - "));

// contoh 2
// var perabotRumah = [];
// perabotRumah = ['lemari', 'kulkas', 'kipas'];
// perabotRumah.push('laptop', 'kasur');
// perabotRumah.pop();
// perabotRumah.pop();
// console.log(perabotRumah.join(" - "));


// //method unshift = menambahkan dari depan elemen & shift = menghapus elemen dari depan
// var isiKulkas = [];
// isiKulkas = ['es batu', 'sayuran', 'ikan']
// isiKulkas.unshift('ayam');
// isiKulkas.shift();
// console.log(isiKulkas.join());


// var tipeKursi = [];
// tipeKursi = ["kursi lipat", "kursi tidur", "kursi kantor"];
// tipeKursi.unshift("kursi goyang");
// tipeKursi.shift();
// console.log(tipeKursi.join());














