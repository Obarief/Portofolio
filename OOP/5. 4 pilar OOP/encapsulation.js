// before
// function Ongkir(berat) {
//     this.pajak = 500;
//     this.biaya = function () {
//         return berat * 1000;
//     }

//     this.totalBiaya = function () {
//         return this.pajak + this.biaya()
//     }
// }

// const laptop = new Ongkir(4);
// hape.pajak = 100000000 // pengaruh
// console.log(laptop.totalBiaya())





// after
function Ongkir(berat) {
    var pajak = 500;
    var biaya = function () {
        return berat * 1000
    }

    this.totalBiaya = function () {
        return pajak + biaya()
    }
}

const hape = new Ongkir(4)
hape.pajak = 100000000 // tidak pengaruh
console.log(hape.totalBiaya())