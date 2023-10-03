// cara pertama dalam membuat array
var hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
console.log(hari[2]);
console.log(hari.length);

// cara kedua dalam membuat array
var hari = [];
hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
console.log(hari[2]);

var binatang = [];
binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];
console.log(binatang[4]);
console.log(binatang.length);

// menyimpan array dalam fucntion ekspresion
var myFunc = function() {
    alert ('hello world');
}
var myArr = ['teks',2,false,myFunc];

// menyimpan array di dalam array
var kendaraan = [];
kendaraan = ['motor', 'mobil', ['honda', 'suzuki', 'mitsubishi']];
console.log(kendaraan[2][2]);