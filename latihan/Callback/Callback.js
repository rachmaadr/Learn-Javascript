function hello(name){
    alert(`Hello ${name}`);
}

function showName(callback){
    const name = prompt(`Masukan Nama Anda:`);
    callback(name);
}

showName(hello);