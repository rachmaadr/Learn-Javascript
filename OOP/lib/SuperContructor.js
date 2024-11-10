class Employee {
    constructor (firstName){
        this.firstName = firstName;
    }
  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.firstName}`);
  }
}

class Manager extends Employee {
    constructor (firstName, lastName){
        //untuk menambahkan inheritance di parent class menggunakan keyword super like behind this
        super(firstName);
        this.lastName = lastName;
    }
  sayHello(name) {
    console.info(
      `Hello ${name}, my name is manager ${this.firstName} ${this.lastName}`
    );
  }
}

const eko = new Employee("Goblin");
eko.name = "Mimik";
eko.sayHello("ucup");

const udin = new Manager("Sodur", "Kuntuludun");
udin.name = "Momon";
udin.sayHello("ucin");
