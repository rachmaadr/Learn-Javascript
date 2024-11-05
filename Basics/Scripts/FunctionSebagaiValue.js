function sayHello(name) {
  document.writeln(`<p>Hello ${name}</p>`);
}

sayHello("Ucup");

const say = sayHello;
say("Udin");

function getValue(callback) {
  callback("Ucup");
}

getValue(sayHello);
getValue(say);
