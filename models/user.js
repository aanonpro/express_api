const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
    // Model attributes are defined here
    username: {
        type: DataTypes.STRING,
        require: true,
    },
    phone: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        require: true,
    },
    password: {
        type: DataTypes.STRING,
        require: true,
    },
    balance: {
        type: DataTypes.INTEGER
    }
   
}, {

    // Other model options go here
    tableName: 'user',
    underscored: true,

    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});
module.exports = User;
// the defined model is the class itself
//console.log(User === sequelize.models.User); // true