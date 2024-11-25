const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('productAppDz', 'sa'/*username*/, '12345'/*password*/, {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
            trusted: true,
        }
    },
});

module.exports = sequelize;