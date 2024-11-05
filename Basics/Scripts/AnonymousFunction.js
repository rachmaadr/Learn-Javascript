let say = function (name) {
  console.info(`hello ${name}`);
};

say("Udin");

//anonymous function didalam parameter
function giveMeName(callback) {
  callback("Eko");
}

giveMeName(function (name) {
  document.writeln(`<p>Hello ${name}</p>`);
});
