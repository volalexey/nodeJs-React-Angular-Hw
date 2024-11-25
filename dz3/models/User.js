const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

// const sequelize = new Sequelize('nodeJsMSSQLTest', 'sa'/*username*/, '12345'/*password*/, {
//     host: 'localhost',
//     dialect: 'mssql',
//     dialectOptions: {
//         options: {
//             encrypt: true,
//             trusted: true,
//         }
//     },
// });

//user model
const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'users',
})

module.exports = User;