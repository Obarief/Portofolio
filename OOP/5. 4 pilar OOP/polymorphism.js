class People{
    constructor(nama) {
        this.nama = nama;
    }

    greet() {
        return `hello good morning ${this.nama}`
    }
}

class Person extends People{
    constructor(nama) {
        super(nama)
    }

    // greet() {
    //     return `halo selamat pagi ${this.nama}`
    // }
}

const okta = new Person('Okta')

console.log(okta.greet())