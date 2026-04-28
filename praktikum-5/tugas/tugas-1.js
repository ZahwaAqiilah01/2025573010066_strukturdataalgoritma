function intersectionLambat(arr1, arr2) {
    const hasil = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                hasil.push(arr1[i]);
            }
        }
    }
    return hasil;
}

function intersectionCepat(arr1, arr2) {
    const set = new Set(arr2);
    return arr1.filter(x => set.has(x));
}


function groupAnagram(arr) {
    const map = {};

    for (let kata of arr) {
        const key = kata.split('').sort().join('');
        if (!map[key]) map[key] = [];
        map[key].push(kata);
    }

    return Object.values(map);
}


function cekKuadratLambat(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (arr[i] + arr[j] === arr[k] * arr[k]) {
                    return true;
                }
            }
        }
    }
    return false;
}


function cekKuadratCepat(arr) {
    arr.sort((a, b) => a - b); 

    for (let k = arr.length - 1; k >= 0; k--) {
        let i = 0;
        let j = k - 1;

        while (i <= j) {
            const sum = arr[i] + arr[j];
            const target = arr[k] * arr[k];

            if (sum === target) return true;
            if (sum < target) i++;
            else j--;
        }
    }
    return false;
}


console.log("=== INTERSECTION ===");
console.log("Lambat:", intersectionLambat([1,2,3], [2,3,4]));
console.log("Cepat :", intersectionCepat([1,2,3], [2,3,4]));

const hasilAnagram = groupAnagram(['eat','tea','tan','ate','nat','bat']);

console.log("\n=== ANAGRAM ===");

const output = hasilAnagram
    .map(group => `[${group.join(', ')}]`)
    .join(' ');

console.log(output);


console.log("\n=== KUADRAT ===");
console.log("Lambat:", cekKuadratLambat([1,2,3,4,5]));
console.log("Cepat :", cekKuadratCepat([1,2,3,4,5]));



function generateArray(n) {
    return Array.from({length: n}, () => Math.floor(Math.random() * 1000));
}

const arr1 = generateArray(5000);
const arr2 = generateArray(5000);

console.log("\n=== BENCHMARK ===");


let t = Date.now();
intersectionLambat(arr1, arr2);
console.log("Intersection Lambat:", Date.now() - t, "ms");

t = Date.now();
intersectionCepat(arr1, arr2);
console.log("Intersection Cepat :", Date.now() - t, "ms");


const arrKecil = generateArray(200);

t = Date.now();
cekKuadratLambat(arrKecil);
console.log("Kuadrat Lambat:", Date.now() - t, "ms");

t = Date.now();
cekKuadratCepat(arrKecil);
console.log("Kuadrat Cepat :", Date.now() - t, "ms");