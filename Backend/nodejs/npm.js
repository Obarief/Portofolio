import http from 'http';
import * as uc from 'upper-case';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(3000, () => {
    console.log(`server berjalan di http://localhost:3000`)
});