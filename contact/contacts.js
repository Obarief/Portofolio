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


const simpanKontak = (nama, email, noHP) => {

    // membaca data
    const contact = {nama, email, noHP}; // dibuat menjadi object
    const file = fs.readFileSync('data/contacts.json', 'utf-8');

    // merubah data dari string ke json
    const contacts = JSON.parse(file); // JSON (javascript Object Notation)

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

module.exports = { simpanKontak } // agar file ini dapat di export keluar (yang dipilih functionnya) sebenarnya bisa variabel, function, object, class, array