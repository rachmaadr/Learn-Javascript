function Person(firstName){
    this.firstName = firstName,
    this.sayHello = function(name){
        console.info(`Hello ${name}, my name is ${this.firstName}`)
    }
}

function Manager(firstName, lastName){
    this.lastName = lastName,
    //inheritance
    Person.call(this, firstName)
}

const Ucup = new Manager("Ucup", "Megumi");
console.info(Ucup);