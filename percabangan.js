let nilai = 80;

if (nilai >= 85) {
console.log("nilainya A")
} else if (nilai >=70) {
    console.log ("nilainya B")
} else {
    console.log("nilainya C")
}

// percabngan switch case
let angka1 = 10;
let angka2 = 5;
let operator = "/";
let hasil;

switch (operator) {
    case "+":
        hasil = angka1 + angka2;
        break;
         case "-":
        hasil = angka1 - angka2;
        break;
         case "*":
        hasil = angka1 * angka2;
        break;
         case "/":
        hasil = angka1 / angka2;
        break;

        default:
            hasil = "operator tidak dikenal"
        
}
console.log(hasil)

// ternary operator (if else lebih singkat)
let point = 30;
// let ngecek = point >= 75 ? "lulus" : "tidak lulus";
// console.log(ngecek)

// ngecek 3 kondisi
let ngecek = point >= 75 ? "lulus" : point >= 50 ? "remed" : "tidak lulus"
console.log(ngecek)
    