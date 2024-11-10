/**
 * String memiliki banyak instance method dan properties
 * Tujuannya untuk memanipulasi data seperti lowercase ke UPPERCASE, memotong string jadi array dll
 */

const Name = "Sugiono Pronogoro Iswantoro";
console.info(Name);
console.info(Name.length);
console.info(Name.toLowerCase());
console.info(Name.toUpperCase());
console.info(Name.split(" "));

const data = "   Input Data   "
console.info(data.trim()) //untuk memotong spasi kiri dan kanan
console.info(data.trimEnd()) //untuk memotong spasi kanan
console.info(data.trimLeft()) //untuk memotong spasi kiri
