const Product = require("../models/Product");
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) =>{
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        errorHandler(res, "Failed to fetch products", 500);
    }
}

module.exports.getById = async (req, res) =>{
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Products not found' });
        }
    } catch (error) {
        errorHandler(res, "Failed to fetch product", 500);
    }
}

module.exports.create = async (req, res) =>{
    try {
        const { name, price, quantity } = req.body;
        const product = await Product.create({ name, price, quantity });
        res.status(201).json(product);
    } catch (error) {
        errorHandler(res, "Failed to create product", 500);
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
        errorHandler(res, "Failed to delete product", 500);
    }
}

module.exports.update = async (req, res) =>{
    try {
        const { name, price, quantity } = req.body;
        const [updated] = await Product.update(
            { name, price, quantity },
            { where: { id: req.params.id } }
        );

        if (updated) {
            const updatedProduct = await Product.findByPk(req.params.id);
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Products not found' });
        }
    } catch (error) {
        errorHandler(res, "Failed to update product", 500);
    }
}