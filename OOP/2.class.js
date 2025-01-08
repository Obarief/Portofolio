class Barang{
    constructor(nama, harga) {
        this.nama = nama;
        this.harga = harga;
    }
    detail() {
        return this.nama + " " + this.harga
    }
}

const barang2 = new Barang('laptop', 2000000);
console.log(barang2.detail())