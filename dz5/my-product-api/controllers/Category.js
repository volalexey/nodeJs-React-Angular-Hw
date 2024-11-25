const Category = require('../models/Category');

module.exports.getAll = async (req, res) => {
    try {
        const categories = await Category.findAll;
        if (categories) {
            res.status(200).json({categories});
        } else {
            res.status(404).json({ error: 'Categories not found' });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

module.exports.create = async (req, res) =>{
    try {
        const { name } = req.body;
        const category = await Category.create({ name });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

