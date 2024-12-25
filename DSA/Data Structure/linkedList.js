class Node { // Inisialisasi node sebagai kotak penyimpanan
    constructor(value) {
        this.value = value; // Data node
        this.next = null;   // Referensi ke node berikutnya
    }
}

class LinkedList { // Membuat kumpulan/urutan data
    constructor() {
        this.head = null; // Node pertama (head) awalnya kosong
    }

    addProduct(product) {
        const newNode = new Node(product); // Membuat node baru dari data produk
        if (!this.head) {
            this.head = newNode; // Jika belum ada node, jadikan sebagai head
        } else {
            let current = this.head;
            while (current.next) { // Menelusuri node sampai yang terakhir
                current = current.next;
            }
            current.next = newNode; // Tambahkan node baru di akhir
        }
    }

    removeProduct(productName) {
        if (!this.head) { // Jika tidak ada head, berarti linked list kosong
            console.log("Keranjang Kosong");
            return;
        } 

        // Menghapus node pertama (head)
        if (this.head.value.name === productName) { // Jika nama produk di head cocok
            this.head = this.head.next; // Head digantikan oleh node berikutnya
            return;
        }

        // Menghapus node selain head
        let current = this.head;
        while (current.next && current.next.value.name !== productName) { // Cari node dengan nama produk
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next; // Lewati node yang akan dihapus
        } else {
            console.log("Produk tidak ditemukan!");
        }
    }

    displayProduct() {
        if (!this.head) {
            console.log("Keranjang kosong!");
            return;
        }
        let current = this.head;
        while (current) { // Menelusuri setiap node
            console.log(`${current.value.name} - Rp${current.value.price}`); // Tampilkan nama dan harga
            current = current.next; // Pindah ke node berikutnya
        }
    }
}

// Contoh penggunaan
const cart = new LinkedList();

// Menambahkan produk
cart.addProduct({name: 'Laptop', price: 33000000});
cart.addProduct({name: 'Handphone', price: 2000000});
cart.addProduct({name: 'Televisi', price: 50000000});

// Menampilkan produk
console.log("Produk dalam keranjang:");
cart.displayProduct();

// Menghapus produk
console.log("Menghapus Handphone:");
cart.removeProduct('Handphone');

// Menampilkan produk setelah penghapusan
console.log("Produk dalam keranjang setelah dihapus:");
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

