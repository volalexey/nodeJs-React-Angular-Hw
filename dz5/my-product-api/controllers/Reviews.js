const Review = require('../models/Review');

module.exports.getAll = async function (req, res) {
    try {
        const reviews = await Review.findAll();
        res.status(200).json(reviews);
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}

module.exports.create = async (req, res) => {
    try {
        const { message, mark } = req.body;
        const review = await Review.create({ message, mark });
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}