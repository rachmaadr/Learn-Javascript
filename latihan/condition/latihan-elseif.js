var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot = 1; + noAngkot <= jmlAngkot; + noAngkot++) {
    if (noAngkot <= 6 && noAngkot !== 5) {
        console.log('Angkot no.' + noAngkot + 'Beroperasi dengan baik');
    } else if (noAngkot === 8 || 10){
        console.log("Angkot No." + noAngkot + "Sedang Lembur")
    } else { console.log('Angkot no. ' + noAngkot + 'Tidak beroperasi dengan baik');
    } 
}