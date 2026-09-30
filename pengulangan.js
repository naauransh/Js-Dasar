// 1.for loop
// target hitungannya sudah jelas
// contoh : misalnya disuruh muterin lapangan selama 5x, 5x itukan udah jelas itungannya
// isinya ada nilai awak, batas kondisi, dan berubahan nilai, (increment(++)/decrement(--))
for (let putaran = 0; putaran <=5; putaran++) {
    console.log("lari putaran ke-" + putaran)
}
// hitungan mundur
for (let putaran = 10; putaran >=1; putaran--) {
    console.log("lari putaran ke-" + putaran)
}

// while loop
// while loop dipakai untuk pengulangan tapi tidak tau kondisi pengulangannya sampai berapa kali : saat masukinpw/email yang salah, kita gatau bakal ngulang sampe berapa kali, pokoknya bakal sampe isi pw nya bener
let pwbenar = "admin123";
let pwinputanuser = "coba123"
while (pwinputanuser !== pwbenar) {
    console.log("password yang dimasukkan salah");
    break;
}
while (pwinputanuser == pwbenar) {
    console.log("passwordnya benar");
    break;
}

// do.. while loop
// dicoba sekali baru dicek
// contoh : misalnya nyicip makanan dikantin, kalau ternyata pas nyoba 1 sendok ternyata ga enak maka akan berenti ga beli lagi, tapi kalau enak akan re-buy
let y = 1;
do {
    console.log ("putaran ke" + y);
    y++
} while (y <= 3);

// 4. foreach loop
// dipake buat pecah array
// misalnya kalian disuruh nyebutin isi yang ada didalam tas satu satu
let tas = ["hp", "lipbalm", "parfum", "laptop", "earphone", "cardholder"];
tas.forEach((item) => {
    console.log(item);
}
);