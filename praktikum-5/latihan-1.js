function fungsiA(n){
    return n * 2;
}

function fungsiB(n){
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            console.log(i,j);
        }
    }
}

function fungsiC(n){
    for (let i=1; i<n; i*=2){
        console.log(i);
    }
}

function fungsiD(n){
    const arr = Array.from({length: n}, (_, i) => i);
    arr.forEach(x => {
        arr.forEach(y => {
            arr.forEach(z => {
                console.log(x,y,z);
            });
        });
    });
}

function hitungKompleksitas(n, fn){
    const startTime = Date.now();
    fn(n);
    const endTime = Date.now();
    const duration = endTime - startTime;

    console.log(`Fungsi: ${fn.name} | n: ${n} | Waktu: ${duration} ms`);
}

console.log("Hasil pengukuran waktu");

hitungKompleksitas(100000, fungsiA);
hitungKompleksitas(1000, fungsiB);
hitungKompleksitas(1000000, fungsiC);
hitungKompleksitas(50, fungsiD);