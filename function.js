// function adalah cara kita membukus sebuah proses panjang jadi 1 tombol
// membuat dan memanggil finction biasa (pakai parameter & return)
function buatkopi (jeniskopi, levelgula) {
    return `segelas ${jeniskopi} dengan gula ${levelgula}`;
}
// proses manggi function
console.log(buatkopi("americano", "no sugar"));

// arrow fuction (cara modern dan singkat)
const seduhkopi = (ukuran, gula) => {
    return `kopi susu ukuran ${ukuran} dengan gula ${gula} siap diminum`
};
let pesanan1 = seduhkopi ("medium", "banyak");
console.log(pesanan1)
console.log(seduhkopi("large", "sedikit"));

// arrow function 1 baris
const hitungtotal = (jumlahgelas, harga) => jumlahgelas * harga;

pesanan3 = hitungtotal ("3", "30000");
console.log( "3 gelas americano no sugar" + " " + pesanan3)

