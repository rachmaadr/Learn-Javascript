// foreach
// Cara kerjanya sama seperti looping namun lebih fleksibel
// e = elemen yang ada di array
var angka = [1,2,3,4,5,6,7,8,9,10];
var binatang = ["Singa", "Macan", "Monyet"];
// Menggunakan for
for( let i = 0; i < angka.length; i++);
console.log(angka);

// menggunakan forEach
binatang.forEach(function(e,i) {
    console.log("Urutan hewan ke - " + (i+1) + " adalah " + e);
});



// Map
// Fungsinya mengembalikan (Bisa menggunakan operator matematikan) array
var angka1 = [];
angka1 = [1,5,6,7,9,8,4,3,2]
angka1.map(function (e) {
    console.log(e + 2);
})



//sort
//fungsinya mengurutkan angka didalam array
var angka2 = [];
angka2 = [2,5,6,7,8,1,3,4,9,10,12,11];
//belum di urutkan
console.log(angka2.join(" - "));
//sudah diurutkan dengan menggunakan function method sort
angka2.sort(function(a,b) {
    return a-b;
});
console.log(angka2.join(" - "));