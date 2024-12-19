
// membuat form upload 

import http from 'http';
import formidable from 'formidable';
import fs from 'fs';
const port = 3234;



http.createServer((req, res) => {

    if (req.url === 'fileupload') {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, field, files) => { // parse = dari data buffer menjadi data string, field = teks, dan files = file
            const oldpath = files.filetoupload.filepath; // menyimpan file sementara di server 
            const newpath = 'C:/Users/oktav/OneDrive/Dokumen/Program/Project_1/Portofolio/Backend/nodejs' + files.filetoupload.originalFilename; // path baru dalam lokal komputer
            fs.rename(oldpath, newpath, (err) => { // rename dapat merubah nama file dan pathnya
                if (err) throw err;
                res.write('file uploaded');
                res.end();
            })
            
    
        })
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
            <form action="/fileupload" method="post" enctype="multipart/form-data">
              <input type="text" name="title"><br>
              <input type="file" name="filetoupload"><br>
              <input type="submit">
            </form>
          `);
        return res.end();
    }



}).listen(port, () => {
    console.log(`sudah menyala abangkuh pada http://localhost:${port}`)
})

