function Person() {
  //property constructor di function
  this.firstName = "", 
  this.lastName = "";
}

const Ucup = new Person();
Ucup.firstName = "Ucup";
Ucup.lastName = "Pribadi";

const Sugiono = new Person();
Sugiono.firstname = "Sugiono";
Sugiono.lastName = "Mamen";

console.log(Ucup);
console.log(Sugiono);