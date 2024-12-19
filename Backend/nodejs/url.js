// const url = require('url')
// const adr = 'http://localhost:8080/default.html?year=2017&month=february'
// const q = url.parse(adr, true)

// console.log(q.host) // localhost:8080
// console.log(q.pathname) //  default.html
// console.log(q.search) // ?year=2017&month=february

// const qdata = q.query
// console.log(qdata.month) // february

const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 4000;


http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    const filename = '.' + q.pathname
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 File Not Found')
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data);
        return res.end();
    })

}).listen(port, () => {
    console.log(`server berjalan di http://localhost:${port}`)
})
