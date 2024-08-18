const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img') // null artinya tidak error
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime(); // mengambil waktu terbaru
        const originalName = file.originalname; // mengambil nama file
        const extension = path.extname(file.originalname) // mengambil extensi dari filenya

        cb(null, `${timestamp}-${originalName}${extension}`)
    }
})

const upload = multer({
    
    storage: storage,
    limits: 3 * 1000 * 1000 // 3 MB
})

module.exports = upload;