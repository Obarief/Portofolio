

function Barang(nama, harga, berat, warna) {
    
    // public property
    this.nama = nama;
    this.harga = harga;

    // private property
    var berat = berat;
    var warna = warna;

    //public method
    this.detail = function () {
        return this.nama + " " + this.harga
    }

    // private method
    function tampilkanBeratDanWarna() {
        return berat + " " + warna
    }   


    // solution for private method
    this.getBeratDanWarna = function() {
        return tampilkanBeratDanWarna();
    }
}

const barang3 = new Barang('laptop', 40000, 2, 'hytam');

console.log(barang3)
console.log(barang3.nama)
console.log(barang3.detail())

console.log(barang3.tampilkanBeratDanWarna()) // typeError barang3.tampilkanBeratDanWarna is not a function

console.log(barang3.getBeratDanWarna()) // 2 hytam