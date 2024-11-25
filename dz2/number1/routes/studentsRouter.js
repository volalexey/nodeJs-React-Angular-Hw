const {Router} = require('express');
const Student = require('../models/Student');

const router = new Router();

router.get('/', async function (req, res) {
    const students = await Student.getAll();
    res.render('students', {students: students});
})

module.exports = router;