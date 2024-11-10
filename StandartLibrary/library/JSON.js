/**
 * JSON (JavaScript Object Notation)
 * data string yang bentuknya mirip js object
 * digunakan untuk komunikasi antara server dan client
 */

const person = {
    firsName: "Lamtoro",
    lastName: "Handkoko",
    address:{
        country: "Konoha",
        city: "Pulu"
    }
};


const json = JSON.stringify(person);
console.info(json);

//Mengkonversi ke tipe data string menggunakan parse
const jsonObject = JSON.parse(json);
console.info(jsonObject);