const {Router} = require('express');
const Group = require('../models/Group');

const router = new Router();

router.get('/', async function (req, res) {
    const groups = await Group.getAll();
    res.render('groups', {groups: groups});
})

module.exports = router;