const http = require('http');
// const port = 4000;
// const url = require('url');

const  {URL}  = require('url');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    
    // // res.write(req.url) // akan mengembalikan root = / = artinya url default saat ini
    // const q = url.parse(req.url, true).query; // true artinya dari query akan dijadikan object
    // const txt = q.year + " " + q.month; // http://localhost:4000/?year=2024&month=December = dari query yg diinput akan mengirim berupa txt string ke client

    const myURL = new URL(req.url, `http://${req.headers.host}`);  // req.headers.host mengembalikan localhost:4000
    const year = myURL.searchParams.get('year') // search.params.get = mengambil query setelah ? dengan kata kunci year

    res.end(year); // mengembalikan year saja

}).listen(port, () => {
    console.log(`sudah berjalan di http://localhost:${port}`)
})