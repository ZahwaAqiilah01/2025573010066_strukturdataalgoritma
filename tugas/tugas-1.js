class Pasien {
    constructor(id, nama, prioritas, waktuDaftar) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas; // darurat / biasa
        this.waktuDaftar = waktuDaftar;
    }
}

class AntrianRS {
    constructor() {
        this.antrianDarurat = [];
        this.antrianBiasa = [];
    }

    // Mendaftarkan pasien
    daftar(pasien) {
        if (pasien.prioritas === "darurat") {
            this.antrianDarurat.push(pasien);
        } else {
            this.antrianBiasa.push(pasien);
        }
    }

    // Melayani pasien
    layani() {
        let pasien;

        if (this.antrianDarurat.length > 0) {
            pasien = this.antrianDarurat.shift();
        } else if (this.antrianBiasa.length > 0) {
            pasien = this.antrianBiasa.shift();
        } else {
            console.log("Tidak ada pasien dalam antrian.");
            return;
        }

        console.log(
            `Melayani: ${pasien.nama} (${pasien.prioritas})`
        );
    }

    // Menampilkan antrian
    tampilkanAntrian() {
        console.log("\n=== Antrian Darurat ===");
        this.antrianDarurat.forEach(p =>
            console.log(`${p.id} - ${p.nama}`)
        );

        console.log("\n=== Antrian Biasa ===");
        this.antrianBiasa.forEach(p =>
            console.log(`${p.id} - ${p.nama}`)
        );
    }
}

// Simulasi
const rs = new AntrianRS();

rs.daftar(new Pasien(1, "Andi", "darurat", "08:00"));
rs.daftar(new Pasien(2, "Budi", "biasa", "08:01"));
rs.daftar(new Pasien(3, "Citra", "darurat", "08:02"));
rs.daftar(new Pasien(4, "Dina", "biasa", "08:03"));
rs.daftar(new Pasien(5, "Eko", "biasa", "08:04"));
rs.daftar(new Pasien(6, "Fani", "darurat", "08:05"));
rs.daftar(new Pasien(7, "Gilang", "biasa", "08:06"));
rs.daftar(new Pasien(8, "Hana", "darurat", "08:07"));
rs.daftar(new Pasien(9, "Indra", "biasa", "08:08"));
rs.daftar(new Pasien(10, "Joko", "darurat", "08:09"));

rs.tampilkanAntrian();

console.log("\n=== Mulai Pelayanan ===");
while (
    rs.antrianDarurat.length > 0 ||
    rs.antrianBiasa.length > 0
) {
    rs.layani();
}