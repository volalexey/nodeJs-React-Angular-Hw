const express = require('express');
const controller = require('../controllers/User');

const router = express.Router();

router.get('/:username', controller.getByUsername);
router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router;