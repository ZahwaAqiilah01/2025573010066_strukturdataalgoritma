// tugas-2.js

const beratBadan = 68;     // kg
const tinggiBadan = 1.72;  // meter

let bmi = beratBadan / (tinggiBadan * tinggiBadan);

let kategori;

if (bmi < 18.5) {
    kategori = "Kurus (Underweight)";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal (Ideal)";
} else if (bmi >= 25 && bmi <= 29.9) {
    kategori = "Kelebihan Berat Badan (Overweight)";
} else {
    kategori = "Obesitas (Obese)";
}

// tampilkan 2 angka desimal
console.log(
    "Berat: " + beratBadan + " kg | Tinggi: " + tinggiBadan + " m | BMI: " + bmi.toFixed(2) + " | Kategori: " + kategori
);