// gabungan dengan server dan read file
// const http = require('http')
// const fs = require('fs')
// const port = 5000

// http.createServer((req, res) => {
    
//     fs.readFile('1.html', (err, data) => {
        
//         if (err) {
//             console.log(err)
//         }
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end()
//     })





// }).listen(port, () => {
//     console.log(`berjalan di http://localhost:${port}`)
// })


// menambah isi dalam file
// const fs = require('fs')

// fs.appendFile('Backend/nodejs/nyoba.txt', '\napa aja boleh ', (err) => { // append jika sudah ada datanya maka dibuat pada baris yang sama (jika ditambah \n maka menjadi baris baru)
//     if (err) throw err;
//     console.log('data berhasil ditambahkan');
// })



// membuat file baru dan langsung mengisinya
// const fs = require('fs')

// const name = 'fileBaru.txt'
// const data = 'halo dunia ini jnck'

// fs.writeFile(name, data, (err) => { // membuat file baru jika belum ada dan data adalah isinya
//     if (err) throw err;
//     console.log('data berhasil ditambahkan');
// })


// membaca isi file
// const fs = require('fs')
// const filePath = 'nyoba.txt'

// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.log('error mas', err)
//     }
//     console.log('isi datanya adalah:  \x1b[1m' + data)
// })



// menghapus data

// const fs = require('fs')

// fs.unlink('fileBaru.txt', (err) => {
//     if (err) throw err;
//     console.log('data berhasil dihapus'); // berhasil dihapus
// })



// mengganti nama

const fs = require('fs')

fs.rename('nyoba.txt', 'apalah.txt', (err) => {
    if (err) throw err;
    console.log('data berhasil diganti namanya');
})



// callback = untuk menamnpilkan error berada di (err, data)
// promise = bisa untuk mengolah data dengan chaining/paralel seperti .then(baca file) .then(edit file)
// async await = membuat penulisan lebih bersih dan tidak terlalu panjang