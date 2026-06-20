class HashMapLinearProbing {
    constructor(capacity = 8) {
        this.capacity = capacity;
        this.size = 0;
        this.table = new Array(capacity);
        this.TOMBSTONE = { deleted: true };
    }

    hash(key) {
        let hash = 0;
        const str = String(key);

        for (let i = 0; i < str.length; i++) {
            hash = (hash + str.charCodeAt(i)) % this.capacity;
        }

        return hash;
    }

    loadFactor() {
        return this.size / this.capacity;
    }

    resize() {
        const oldTable = this.table;

        this.capacity *= 2;
        this.table = new Array(this.capacity);
        this.size = 0;

        for (const item of oldTable) {
            if (item && item !== this.TOMBSTONE) {
                this.set(item.key, item.value);
            }
        }
    }

    set(key, value) {
        if (this.loadFactor() > 0.7) {
            this.resize();
        }

        let index = this.hash(key);

        while (
            this.table[index] &&
            this.table[index] !== this.TOMBSTONE &&
            this.table[index].key !== key
        ) {
            index = (index + 1) % this.capacity;
        }

        if (!this.table[index] || this.table[index] === this.TOMBSTONE) {
            this.size++;
        }

        this.table[index] = { key, value };
    }

    get(key) {
        let index = this.hash(key);
        let start = index;

        while (this.table[index] !== undefined) {
            if (
                this.table[index] !== this.TOMBSTONE &&
                this.table[index].key === key
            ) {
                return this.table[index].value;
            }

            index = (index + 1) % this.capacity;

            if (index === start) {
                break;
            }
        }

        return undefined;
    }

    delete(key) {
        let index = this.hash(key);
        let start = index;

        while (this.table[index] !== undefined) {
            if (
                this.table[index] !== this.TOMBSTONE &&
                this.table[index].key === key
            ) {
                this.table[index] = this.TOMBSTONE;
                this.size--;
                return true;
            }

            index = (index + 1) % this.capacity;

            if (index === start) {
                break;
            }
        }

        return false;
    }

    display() {
        console.table(this.table);
    }
}

const map = new HashMapLinearProbing();

console.log("=== MENAMBAHKAN DATA ===");
map.set("A", 10);
map.set("B", 20);
map.set("C", 30);

console.log("A =", map.get("A"));
console.log("B =", map.get("B"));
console.log("C =", map.get("C"));

console.log("\n=== HASH TABLE AWAL ===");
map.display();

console.log("\n=== HAPUS KEY B ===");
map.delete("B");

console.log("B =", map.get("B"));

console.log("\n=== HASH TABLE SETELAH DELETE ===");
map.display();

console.log("\nUkuran Tabel :", map.size);
console.log("Kapasitas :", map.capacity);
console.log("Load Factor :", map.loadFactor());