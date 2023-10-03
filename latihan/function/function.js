function jumlahVolumeKubus(a, b) {
    

    var volumeKubusA;
    var volumeKubusB;
    var total;

    volumeKubusA = a*a*a;
    volumeKubusB = b*b*b;
    total = volumeKubusA + volumeKubusB;

    return total;
}

alert(jumlahVolumeKubus(369, 367));
alert(jumlahVolumeKubus(907, 235));