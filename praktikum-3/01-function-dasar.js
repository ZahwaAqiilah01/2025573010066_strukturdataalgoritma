function sapa() {
    console.log('Halo! Selamat datang di praktikum JavaScript.');
}
sapa();
sapa();

function sapaNama(nama){
    console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama('Budi');
sapaNama('Siti');

function tambah(angka1, angka2) {
    const hasil = angka1 + angka2;
    return hasil;
}

const hasilPenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7, 13));


function hitung(nilai, pengali = 2) {
    return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5, 3));


const pesanGlobal = 'Saya ada di mana saja';

function cekScope() {
    const pesanLokal= 'Saya hanya ada di dalam function ini';
    console.log(pesanGlobal);
    console.log(pesanLokal);
}

cekScope();
console.log(pesanGlobal);

//Latihan 1
// fungsi kurang
function kurang(a, b) {
    return a - b;
}
// fungsi kali
function kali(a, b){
    return  a * b;
}

//fungsi bagi
function bagi(a, b) {
    if (b === 0) {
        console.log("Error: tidak bisa membagi dengan nol");
        return null;
    }
    return a / b;
}

//fungsi kalkulator
function kalkulator(a, operator, b) {
    switch (operator) {
        case "+":
            console.log('4 "+" 9', tambah (4, 9));
        case "-":
            return kurang(a, b);
        case "*":
            return kali(a, b);
        case "/":
            return bagi(a, b);
        default:
            return "Operator tidak dikenal";      
    }
}

// uji coba
console.log(kalkulator(10, "+", 5)); // 15
console.log(kalkulator(10, "-", 3)); // 7
console.log(kalkulator(4, "*", 6));  // 24
console.log(kalkulator(20, "/", 4)); // 5
console.log(kalkulator(10, "/", 0)); // error
