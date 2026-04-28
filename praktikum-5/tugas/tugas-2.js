function fn_O1(n) {
    return n + 1;
}


function fn_On(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}


function fn_OnLogn(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) {
            count++;
        }
    }
    return count;
}


function fn_On2(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }
    return count;
}


function ukur(fn, n) {
    const mulai = Date.now();
    fn(n);
    const selesai = Date.now();
    return selesai - mulai;
}

function benchmarkSemua(ukuranData) {
    for (let n of ukuranData) {
        console.log(`\n=== n = ${n} ===`);

        console.log("O(1)    :", ukur(fn_O1, n), "ms");
        console.log("O(n)    :", ukur(fn_On, n), "ms");
        console.log("O(nlogn):", ukur(fn_OnLogn, n), "ms");
        console.log("O(n^2)  :", ukur(fn_On2, n), "ms");
    }
}


benchmarkSemua([100, 500, 1000, 5000, 10000]);