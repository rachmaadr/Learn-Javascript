// menggunakan method splice berfungsi untuk menyambung / menambahkan element di tengah array
// Cara Kerjanya Splice(indexAwal, MauDihapusBerapa, ElemenBaru1, DanSeterusnya)
var carMerc = [];
carMerc = ["Mercy", "BMW", "Ford"];
carMerc.splice(2,0, "Toyota", "Daihatsu");
console.log(carMerc.join(" - "));


// Slice Method dalam array
var fanMerc = [];
fanMerc = ["Panasonic", "LG", "Maspion"];
var fanMerc1 = [];
fanMerc1 = fanMerc.slice(1);

console.log(fanMerc.join(" - "));
console.log(fanMerc1.join(" - "));