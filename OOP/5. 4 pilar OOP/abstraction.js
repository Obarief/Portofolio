function Ongkos(berat) {
    var berat = berat
    var totalBiaya = function () {
        return berat * 100
    }

    this.tampilBiaya = function() {
        return totalBiaya()
    }
}

const laptop = new Ongkos(2)
console.log(laptop.tampilBiaya())