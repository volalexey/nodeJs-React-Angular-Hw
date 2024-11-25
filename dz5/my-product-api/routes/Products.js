const express = require('express');
const controller = require('../controllers/Products');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.delete('/:id', controller.delete);
router.patch('/:id', controller.update);

module.exports = router;