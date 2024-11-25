const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Review = sequelize.define("Review", {
    message: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mark:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
},{
    tableName: 'reviews',
})
module.exports = Review;