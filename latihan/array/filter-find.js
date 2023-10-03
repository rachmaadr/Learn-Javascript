//method filter dalam array
var angka = [];
angka = [1,2,3,4,5,6,7,8,9,10];
var angka2 = angka.filter(function (x) {
    return x > 5;
})

console.log(angka2.join(" - "));

//method find dalam array
var angka3 = [];
angka3 = [9,8,7,6,5,4,3,2,1];
var angka4 = angka3.find(function (z) {
    return z < 5;
})

console.log(angka4);