const {pertanyaan1, pertanyaan2, pertanyaan3, simpanKontak} = require('./contacts') // destructuring, untuk menangkap data dari file yang diexportkan yaitu contacts

//membuat fungsi utama untuk menjalankan CLI
const main = async () => {
    const nama = await pertanyaan1();
    const nim = await pertanyaan2();
    const noHP = await pertanyaan3();
    
    simpanKontak(nama, nim, noHP);
};

//panggil fungsi main
main();



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
