const {Router} = require('express');

const router = new Router();

router.get('/', function (req, res) {
    res.render('index', {
        title: "Welcome!"
    })

})

module.exports = router;