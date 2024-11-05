//tanpa NCO
let parameter;
let data = parameter;
if (data === undefined || data === null) {
  data = "nilai default";
}

document.writeln(`${data}`);

// menggunakan NOC
data = parameter ?? "Nilai default";
document.writeln(`${data}`);
