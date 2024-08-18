

const logRequest = (req,res,next) => {
        console.log('Permintaan ke PATH ', req.path)
        next()
}


module.exports = logRequest;
