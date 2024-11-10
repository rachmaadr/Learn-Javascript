function Person(firstName, lastName){
    this.firstName = "",
    this.lastName = "",
    this.sayHello = function(name){
        console.info(  `Halo ${name} my name is ${this.firstName}`);
    }
}

const eko = new Person();
eko.firstName = "Budi";
eko.lastName = "Siti";
eko.sayHello("Jhon");