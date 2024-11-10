class Employee{
    sayHello(name){
        console.info(`Hello ${name}, my name is employee ${this.name}`)
    }
}

class Manager extends Employee{
    sayHello(name){
        console.info(`Hello ${name}, my name is manager ${this.name}`);
    }
}

const eko = new Employee();
eko.name = "Mimik"
eko.sayHello("ucup");


const udin = new Manager("Sodur");
udin.name = "Momon";
udin.sayHello("ucin");