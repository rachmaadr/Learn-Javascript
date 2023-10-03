// function name() {

//     var angka = 0;
//     for ( var i = 0; i < arguments.length; i++) {
//         angka += arguments[i];
//     }
//     return angka;
// }

// var huruf = (name(1,2,3));
// console.log(huruf);



function angkaBuah() {
    var angka = 0;
    for( var a = 0; a < arguments.length; a++ ) {
        angka += arguments[a];
    }
    return angka;
}

var huruf = (angkaBuah(1,2,5));
console.log(huruf);


// function tanbah() {

//     var hasil = 0;
//     for ( var i = 0; i < arguments.length; i++ ) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }

// var nilai = (tanbah(1,2,3));
// console.log(nilai);