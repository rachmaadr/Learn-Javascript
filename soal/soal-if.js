// Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
//  *  1. Jika nilai score lebih atau sama dengan 90
//  *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
//  *  2. Jika nilai score ada di antara 80 hingga 89
//  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
//  *  3. Jika nilai score ada di antara 70 hingga 79
//  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
//  *  4. Jika nilai score ada di antara 60 hingga 69:
//  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
//  *  5. Jika nilai score di bawah 60:
//  *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'

function cekSkor(skor) {
    var hasil = "";

    if (skor >= 90) {
        hasil = " Selamat! Anda mendapatkan nilai A"
    } else if (skor >= 80) {
        hasil = "Anda mendapatkan nilai B"
    } else if (skor >= 70) {
        hasil = "Anda mendapatkan nilai C"
    }else if (skor >= 60) {
        hasil = "Anda mendapatkan nilai D"
    }else if (skor <= 60) {
        hasil = "Anda mendapatkan nilai E"
    }
    console.log(hasil);

}
cekSkor(50)

function cekSkor(skor) {
    var hasil = "";

    if (skor >= 90) {
        hasil = " Selamat! Anda mendapatkan nilai A"
    } else if (skor >= 80 && skor <= 89) {
        hasil = "Anda mendapatkan nilai B"
    } else if (skor >= 70 && skor <= 79) {
        hasil = "Anda mendapatkan nilai C"
    }else if (skor >= 60 && skor <= 69) {
        hasil = "Anda mendapatkan nilai D"
    }else if (skor <= 60) {
        hasil = "Anda mendapatkan nilai E"
    }
    console.log(hasil);

}
cekSkor(80)