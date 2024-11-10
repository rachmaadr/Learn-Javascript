/**
 * - Number merupakan function untuk mengkonversi tipedata menjadi number
 * - jika data bisa dikonversi di number, maka otomatis akan menjadi NaN (Not a Number)
 */
let input = "12345";
let number = Number(input);

console.info(typeof input);
console.info(typeof number);
console.info(Number);

console.info(Number("Test")) // contoh untuk NaN


console.info(Number.MIN_VALUE);
console.info(Number.MAX_VALUE);
console.info(Number.MIN_SAFE_INTEGER);
console.info(Number.MAX_SAFE_INTEGER);


/**
 * Number Static Method
 * Untuk menentuka apakah nilainya integer atau bukan
 */
const data = Number("eko");
console.info(Number.isInteger(data));
console.info(Number.isNaN(data));

/**
 * Number Instance Method
 * Untuk menentukan apakah nilainya string atau bukan
 */
const value = 12345;
console.info(value.toString(2));
console.info(value.toLocaleString("id-Id")); //Kode Negara Indonesia
console.info(value.toLocaleString("en-US")); //Kode Negara USA
