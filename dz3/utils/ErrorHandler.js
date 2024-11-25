module.exports = (res, error, code) =>{
    res.status(code).json({
        status: 'error',
        message: error.message ? error.message : 'error'
    });
}