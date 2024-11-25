const Product = require('../models/Products');

module.exports.getAll = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

module.exports.getById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Products not found' });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

module.exports.create = async (req, res) =>{
    try {
        const { name, price, description, categoryId } = req.body;
        const product = await Product.create({ name, price, description, categoryId });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

module.exports.delete = async (req, res) =>{
    try {
        const result = await Product.destroy({ where: { id: req.params.id } });
        if (result) {
            res.status(200).json({ message: 'Products deleted successfully' });
        } else {
            res.status(404).json({ error: 'Products not found' });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

module.exports.update = async (req, res) =>{
    try {
        const { name, price, description } = req.body;
        const [updated] = await Product.update(
            { name, price, description },
            { where: { id: req.params.id } }
        );

        if (updated) {
            const updatedProduct = await Product.findByPk(req.params.id);
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Products not found' });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}