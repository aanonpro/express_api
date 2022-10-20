const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class AddUser extends Model {}

AddUser.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    balance: {
        type: DataTypes.INTEGER
    }
}, {
    // Other model options go here
    tableName: 'users',
    underscored: true,

    sequelize, // We need to pass the connection instance
    modelName: 'AddUser' // We need to choose the model name
});
module.exports = AddUser;
// the defined model is the class itself
//console.log(User === sequelize.models.User); // true