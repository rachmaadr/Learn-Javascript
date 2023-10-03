//fungsinya untuk memanggil variabel 1 sampai seterusnya tanpa harus menambahkan operator (+) plus

//jika tidak menggunakan template string
let namaDepan = "Rachmad";
let namaBelakang = "Ramadhani";
let nama = "Nama :" + " " + namaDepan + " " + namaBelakang;
console.info(nama);


// jika menggunakan string template
let firstName = "Rachmad";
let lastName = "Ramadhani";
let template = `Your Name : ${firstName} ${lastName}`;
console.info(template); 


// cotoh lain
let nilai = 90;
let template2 = `Nama Kamu : ${firstName} ${lastName}, Dinyatakan ${nilai > 50}`; 
console.info(template2);