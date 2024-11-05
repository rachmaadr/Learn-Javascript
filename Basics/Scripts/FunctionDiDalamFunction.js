function outer() {
  function inner() {
    document.writeln(`<p>Ini Inner</p>`);
  }

  inner(); // ini yang benar
}

outer();
inner(); //Akan eror karena tidak bisa diakses diluar function
