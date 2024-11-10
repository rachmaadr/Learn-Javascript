//Array Loop
{
    const array = ["Sudrun", "Rajun", "Wongun"];
    array.forEach(function (value, index){
        console.info(`${value} ${index}`)
    });

    //Menggunakan Arrow Function
    array.forEach((value, index) => console.info(`${value} ${index}`));
    //Menggunakan Arrow Function jika hanya mengambil valuenya saja
    array.forEach(value => console.info(value));
}

/**
 * Array Queue
 * Dalam Struktur data terdapat tipe struktur data bernama Queue(Antria)
 * Dimana data masuk diposisikan paling belakang
 * Sedangkan data keluar akan diposisikan paling depan
 * bisa menggunakan array dgn bantuan function push() untuk menambah data dibelakang,
 * dan shift() untuk mengambil/menghapus data paling depan
 */
{
    const Queue = [];
    Queue.push("Ucup");
    Queue.push("Bucup");
    Queue.push("Ducup");

    console.info(Queue.shift());
    console.info(Queue.shift());
    console.info(Queue.shift());
}

/**
 * Array Stack
 * Struktur data stack(tumpukan) kebalikan dari Queue
 * data akan dimasukan dari urutan belakang
 * untuk menambah urutan paling belakang, bisa menggunakan function push()
 * untuk mengambil dan menghapus paling belakang menggunakan function pop()
 */
{
    const stack = [];
    stack.push("Bogel");
    stack.push("Bugel");
    stack.push("Bigel"); // start dari sini

    console.info(stack.pop());
    console.info(stack.pop());
    console.info(stack.pop());
}

{
  //Array Search
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  console.info(source.findIndex((value) => value > 3)); //Mencari data index sesuai kondisi
  console.info(source.find((value) => value > 3)); //Mencari data sesuai kondisi
  console.info(source.includes(7)); //Mengecek apakah ada data tsb
  console.info(source.indexOf(5)); //Mencari posisi index data
  console.info(source.lastIndexOf(5)); //Mencari posisi index data terakhir
}

{
  /**
   * Array filter
   * Melakukan filter data yang kondisinya true
   */
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ganjil = number.filter((value) => value % 2 === 1);
  const genap = number.filter((value) => value % 2 === 0);

  console.info(number);
  console.info(ganjil);
  console.info(genap);
}

{
    /**
     * Array Transform
     * Sebuah function untuk mengubah sebuah value dari tipe data
     * menggunakan map()
     */

    const names = ["Windoro", "Saputro", "Toro"];
    const namesUpper = names.map(value => value.toUpperCase());

    console.info(namesUpper);
}