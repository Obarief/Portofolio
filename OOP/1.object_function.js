// object
const barang = {
    nama: 'lenovo',
    warna: 'hytam'
}

// function construction
function Barang(nama, harga) {
    this.nama = nama;
    this.harga = harga;
}


const barang1 = new Barang('lenovo', 50000);
console.log(barang1)