const http = require('http');
const dt = require('./date');
// const port = 3000;

// const obj = {
//     id: 1,
//     name: 'John',
//     age: 21
// };

// // membuat objek menjadi json string
// const Json = JSON.stringify(obj);


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // plain/html/json


    res.write("date time now is " + dt.myDateFunction());
    res.write(req.url)

    res.end();

}).listen(port, () => {
    console.log(`server berjalan pada http://localhost:${port}`)
})