const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    sendMessages:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
},{
    tableName: 'users',
})
module.exports = User;