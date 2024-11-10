class Person{
    //menambahkan constructor di class
    constructor(name){
    //   console.info(`tutor bikin constructo dong ${name}`);

    
      //menambahkan property di dalam class
      this.name = name;
      //menambahkan method di dalam class
      this.sayHello = function(name){
        console.info(`Hello ${name}, my name is ${this.name}`)
      }
    }

    
}

const gina = new Person("Gunawan");
console.info(gina);


const ucup = new Person("Samsons");
console.info(ucup);