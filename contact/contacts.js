// file ini akan dibutuhkan untuk hanya pengelolaan kontak saja

// core module file system
const fs = require('fs')

//NPM validator
const validator = require('validator');

// // NPM readline
// const readline = require('readline');

// NPM chalk
const chalk = require('chalk');


// mulai program

//membuat CLI
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


//membuat direktori ./data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
};

//membuat file contact.json jika belum ada
const fileJson = './data/contacts.json';
if(!fs.existsSync(fileJson)){
    fs.writeFileSync(fileJson, '[]', 'utf-8');
};

// menggunakan promise agar terhindar dari callbackhell, pertanyaan di buat terpisah bukan dibuat bersarang
// // pertanyaan 1
// const pertanyaan1 = () => {
//     return new Promise((resolve, rejects) => {
//         rl.question('Masukkan Nama Anda : ', (nama) => {
//             resolve(nama)
//         });
//     });
// };

// //pertanyaan 2
// const pertanyaan2 = () => {
//     return new Promise((resolve, rejects) => {
//         rl.question('Masukkan Nim Anda : ', (nim) => {
//             resolve(nim)
//         });
//     });
// };

// const pertanyaan3 = () => {
//     return new Promise((resolve, rejects) => {
//         rl.question('Masukkan nomor HP anda : ', (noHP) => {
//             resolve(noHP)
//         })
//     })
// }

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8');

    // merubah data dari string ke json
    const contacts = JSON.parse(file); // JSON (javascript Object Notation)

    return contacts;
}


const simpanKontak = (nama, email, noHP) => {

    // membaca data
    const contact = {nama, email, noHP}; // dibuat menjadi object
    
    // const file = fs.readFileSync('data/contacts.json', 'utf-8');

    // // merubah data dari string ke json
    // const contacts = JSON.parse(file); // JSON (javascript Object Notation)

    const contacts = loadContact();

    // mengecek duplikat nama
    const duplikat = contacts.find((contact) => contact.nama === nama ); // contact.nama = file yg sudah ada | nama = baru di inputkan
    if(duplikat){
        console.log(chalk.red.bgBlack('Nama Kontak Sudah Ada!'));
        return false; // agar langsung keluar dari kondisi if
    }

    // mengecek duplikat email
    if(email){ // jika ada email (mengapa jika ada email ?) karena pengisian email tidak wajib
        if(!validator.isEmail(email)){ // jika format emailnya salah
            console.log(chalk.red.bgBlack('Format Email Anda Salah!'));
            return false; // agar langsung keluar dari kondisi if
        }
    }

    // cek nomor hp
    if(!validator.isMobilePhone(noHP, 'id-ID')){
        console.log(chalk.red.bgBlack('Format Nomor HP Anda Salah!'));
            return false; // agar langsung keluar dari kondisi if
    }

    // memasukkan data json ke variabel contact
    contacts.push(contact);

    // meletakkan data ke file
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2)); // merubah file json menjadi string, null digunakan untuk memberikan modifikasi dari stringify menggunakan fungsi lain, 2 artinya spasi yang diberikan kekanan (indentasi)

    console.log(chalk.green.inverse.bold('Terima Kasih sudah mengisi'))
    // rl.close();
}

const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('No.    Nama          NoHP           '))
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
    });
}

const detailContact = (nama) => {
    const contacts = loadContact(); // mengambil daftar data json

    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase()); // melakukan pencarian berdasarkan nama yang telah terdaftar dengan nama yang baru di inputkan (menggunakan lowercase agar pencarian mudah)

    if(!contact){// bila nama tidak sama/tidak ditemukan maka ....
        console.log(chalk.red.bgBlack(`${nama} Tidak Terdaftar`));
        return false;
    }

    // bila nama sama/terdaftar maka.....
    console.log(chalk.cyan.inverse.bold('Kontak Yang Anda Inginkan'));
    console.log(contact.nama);
    console.log(contact.noHP);
    
    // karena email tidak wajib, maka diberi kondisi bila ada maka tampilkan
    if(contact.email){
        console.log(contact.email);
    }
}


const deleteContact = (nama) => {
    // array lama
    const contacts = loadContact(); // mengambil daftar data json

    // array baru
    const newContacts = contacts.filter( 
        // tidak bisa pakai find alasan = (1. mengganti nilai yg dihapus dengan undefined) (2. find akan berhenti pencariannya ketika sudah menemukan)
        // algoritmanya adalah membuat array baru yg telah diperbarui lalu me-load ulang semua data jsonnya (agar tidak ada undefined)
        (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
    )

    if(contacts.length === newContacts.length){// bila panjang array lama dengan array baru sama maka
        console.log(chalk.red.bgBlack(`${nama} Tidak Terdaftar`));
        return false;
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts, null, 2));
    console.log(chalk.green.inverse.bold(`Data dari kontak yang bernama ${nama} sudah berhasil terhapus`))
}

module.exports = { simpanKontak, listContact, detailContact, deleteContact } // agar file ini dapat di export keluar (yang dipilih functionnya) sebenarnya bisa variabel, function, object, class, array