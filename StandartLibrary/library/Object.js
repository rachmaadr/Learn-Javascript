/**
   * Object Freeze dan Seal
   * Secara default, object bisa diubah dan dihapus propertiesnya
   * Jika ingin mengubah sebuah object menjadi object yang tidak bisa diubah atau dihapus bisa menggunakan beberapa static method
   * Object.freeze() untuk mengubah object menjadi object yang tidak bisa diubah atau dihapus attributenya
   * Object.seal() untuk mengubah object menjadi object yang tidak bisa dihapus attributenya
*/
{
  const person = {
    firstName: "Ucup",
    lastName: "Pucup"
  };

  Object.freeze(person);

  person.firstName = "Diubah" //tidak bisa
  delete person.firstName; //tidak berubah
  console.info(person);
}
{
  const person = {
    firstName: "Ucup",
    lastName: "Pucup"
  };

  Object.seal(person);

  person.firstName = "Diubah"; //bisa diubah
  delete person.firstName; //tidak bisa dihapus
  console.info(person);
}

/**
 * Object Assing
 * Menggabungkan object ke object lain
 * hal ini bisa menggunakan Object.assign()
 * contoh Object.assign(target / source)
 * artinya semua atribut yang ada di source akan dipindahkan ke target
 */
{
    const target = {firstName: "Santo"};
    const source = {lastName: "Sinto"};

    Object.assign(target,source);
    console.info(target);
}

/**
 * Object Property dan Values
 * Object juga mempunyai properties dan values
 * Object.values() digunakan untuk mengambil semua property values
 * Object.getOwnPropertyName() digunakan untuk mengambil semua property names
 */

{
    const person = {
        firstName: "Popins",
        lastName: "Murcee"
    };

    console.info(Object.values(person));
    console.info(Object.getOwnPropertyNames(person));

}

