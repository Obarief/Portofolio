class People {
    constructor(nama, umur) {
        this.nama = nama
        this.umur = umur
    }
}

class Person extends People {
    constructor(nama, umur, tinggi) {
        super(nama, umur)
        this.tinggi = tinggi
    }
}

const okta = new Person('oktavari budi arief', 21, 169)
console.log(okta)