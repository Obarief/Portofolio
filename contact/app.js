// membuat algoritma yang lebih simple

// mengambil argumen dari CLI

// console.log(process.argv)
// process dimiliki oleh nodejs
// argv adalah isi dari function process
// didalamnya ada array pada index-0 = directory penyimpanan nodejs
// index-1 directory file yang dijalankan
// index-2 output yang ditampilkan pada perintah ke 3 (contoh : node[0] app[1] oktavari[2] budi[3]) maka yg diambil oktavari
// index-3 output yang di tampilkan pada perintah ke 4 yaitu budi



// yargs.command('add','Menambahkan kontak baru', () => {}, (argv) => {
//     console.log(argv.nama)
//     // pada console ketik seperti ini = 'node app add --nama='oktavari' maka yang menjadi output adalah oktavari
//     // -- akan menjadikan suatu output menjadi object
// });

// yargs.parse(); // untuk menjalankan npm yargs
// // yargs.command('cmd','deskripsi','function/object(builder)','handler')

const yargs = require('yargs')
const { simpanKontak, listContact, detailContact, deleteContact } = require('./contacts')
yargs.command({
    command: 'add',
    describe: ' = Menambah Kontak',
    builder: {
        nama: {
            describe: 'Masukkan nama',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Masukkan email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'Masukkan nomor HP',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
        simpanKontak(argv.nama, argv.email, argv.noHP)
    }
})
.demandCommand() // agar ketika hanya mengetik node app mendapat attention/arahan untuk panduan penulisan

// menampilkan semua nama dan nomor telepon kontak
yargs.command({
    command: 'list',
    describe: ' = Menampilkan list nama & no HP kontak',
    handler() {
        listContact()
    }
})

// menampilkan detail
yargs.command({
    command: 'detail',
    describe: ' = Menampilkan detail kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Masukkan nama',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        detailContact(argv.nama)
    }
})


// menghapus kontak
yargs.command({
    command: 'delete',
    describe: ' = Menghapus Kontak',
    builder: {
        nama: {
            describe: 'Masukkan nama',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        deleteContact(argv.nama)
    }
})

.parse()






// abaikan program dibawah ini

// const {pertanyaan1, pertanyaan2, pertanyaan3, simpanKontak} = require('./contacts') // destructuring, untuk menangkap data dari file yang diexportkan yaitu contacts

// //membuat fungsi utama untuk menjalankan CLI
// const main = async () => {
//     const nama = await pertanyaan1();
//     const nim = await pertanyaan2();
//     const noHP = await pertanyaan3();
    
//     simpanKontak(nama, nim, noHP);
// };

// //panggil fungsi main
// main();



// abaikan yang dibawah ini!!!

// akan terjadi callbackhell
// rl.question('Siapa nama anda ? ', (nama) => {
//     rl.question('Berapa nomor telepon anda ? ', (nomor) => {

//         // membaca data
//         const contact = {nama,nomor};
//         const file = fs.readFileSync('data/contacts.json', 'utf-8');

//         // merubah data dari string ke json
//         const contacts = JSON.parse(file);
//         contacts.push(contact);

//         // meletakkan data ke file
//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));

//         console.log('Terima Kasih sudah mengisi')
//         rl.close
//     });
// });
