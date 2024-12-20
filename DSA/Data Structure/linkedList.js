class Node { // inisialisasikan kotaknya
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList { // membuat kumpulan/urutan datanya
    constructor() {
        this.head = null // nilai awal head tidak ada
    }

    addProduct(product) {
        const newNode = new Node(product); // menggunakan template Node
        if (!this.head) {
            this.head = newNode; // jika tidak ada headnya maka head tetap menjadi newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next // data sekarang menjadi ada pointer ke data berikutnya
            }
            current.next = newNode; // pointernya menjadi sebuah node baru yang memiliki produk
        }
    }

    removeProduct(productName) {
        if (!this.head) { // jika head tidak ada maka kosong
            console.log("Keranjang Kosong");
            return;
        } 

        // untuk menghapus head
        if (this.head.data.name === productName) { // jika data head namanya sama seperti produk
            this.head = this.head.next; // data head menjadi pointer 
            return;
        }

        // untuk menghapus data selanjutnya selain head
        let current = this.head;
        while(current.next && current.next.data.name !== productName) { // jika pointer dan nama data setelahnya tidak sama dengan nama produk
            current = current.next // maka data sekarang menjadi pointer
        }

        if (current.next) {
            current.next = current.next.next // jika data selanjutnya ada maka ganti menjadi data setelah selanjutnya
        } else {
            console.log("produk tidak ditemukan!")
        }
    }

    displayProduct() {
        if (!this.head) {
            console.log("keranjang kosong!");
            return;
        }
        let current = this.head
        while (current) {// data saat ini
            console.log(`${current.data.name} - $${current.data.price}`); // tampilkan nama data dan harga datanya
            current = current.next; // data saat ini menjadi data (pointer) selanjutnya 
        }
    }

}

const cart = new LinkedList(); // inisialisasi bahwa cart itu mengadopsi fungsi yang ada didalam LinkedList()

// memasukkan data dengan object, pasangan (key, value)
cart.addProduct({name: 'laptop', price: 33000000})
cart.addProduct({name: 'handphone', price: 2000000})
cart.addProduct({name: 'Televisi', price: 50000000})

// menampilkan produk
console.log("produk dalam keranjang")
cart.displayProduct();

// menghapus produk dari namanya 
console.log("menghapus handphone");
cart.removeProduct('handphone')

// melihat produk setelah dihapus
console.log("produk dalam keranjang setelah dihapus");
cart.displayProduct();




// penjelasan

// node sebagai penyimpanan data
// isi node ada 2 = data dan alamat data berikutnya
// head = node awal
// pointer = petunjuk ke node selanjutnya
// untuk mengapus item = hanya perlu memperbarui alamatnya
// untuk menemukan sebuah data maka harus dicek 1 per 1
// data acak dalam memori tidak seperti array yang berurutan dan sudah paten alamatnya
// membutuhkan banyak memori untuk pointernya
// cocok dipakai untuk (history  browser) = karena sering berubah ubah

// analogi = sebuah garasi yang menyimpan gerbong dan rantai penyambung untuk gerbong berikutnya

