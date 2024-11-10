//fungsinya digunakan untuk merefensikan sebuah object method

const Person = {
  name: "Sarep",
  sayHello: function (value) {
    console.info(`Hello ${value} my name is ${this.name}`);
  },
};

Person.sayHello("Broden");
