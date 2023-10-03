//membuat object
let orang = {
    nama : "Rachmad Ramadhani",
    umur : "22",
    pekerjaan : "Masih bingung",
    sapa : function() {
        return "Halo! nama saya " + this.nama + "Umur saya " + "Pekerjaan saya " + this.pekerjaan;
    }
}


//membuat object dengan function declaration
function paket(namaPengirim, alamatTujuan, noHp) {
    let paket = {};
    paket.namaPengirim = namaPengirim,
    paket.alamatTujuan = alamatTujuan,
    paket.noHp = noHp;
    return paket;
}

let shipping = paket('Rachmad Ramadhani', 'Jl. Wonosari Wetan Baru 9 No. 12', "082137736467");

// membuat object dengan constructor
function dataMahasiswa(nama, nim, email) {
    this.nama = nama,
    this.nim = nim,
    this.email = email;    
}

let msh = new dataMahasiswa("Rachmad Ramadhani", "04220049", "rmdramadhani@gmail.com");




// Contoh kedua

let orang1 = {
    nama : "Rachmad Ramadhani",
    alamat : "Jl. Wonosari",
    umur : 22,
    sapaDong : function() {
        return "Halo! Nama saya " + this.nama + "Tempat tinggal saya " + this.alamat + "Dan umur saya " + this.umur;
    }
}

// function deklarasi dengan object
function datapembeli(nama, alamat, usia) {
    let datapembeli = {};
    datapembeli.nama = nama,
    datapembeli.alamat = alamat,
    datapembeli.usia = usia;
    return datapembeli;
}
let data1 = datapembeli("Rachmad", "Jalanan 1", "23");

// Constructor
function dataPencuri(nama, tanggal, tempat) {
    this.nama = nama,
    this.tanggal = tanggal,
    this.tempat = tempat;
}
let data2 = new dataPencuri("Rizky", "desember 2000", "surabayaa");