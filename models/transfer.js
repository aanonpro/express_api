const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Transfer extends Model {}

Transfer.init({
    // Model attributes are defined here
    sender_id: {
        type: DataTypes.INTEGER,
        // references: {
        //     model: 'addUser',
        //     key: 'id'
        // }
    },
    recieve_id: {
        type: DataTypes.INTEGER,
    },
    amount: {
        type: DataTypes.INTEGER,
    },
    remark: {
        type: DataTypes.STRING,
    },
    created_at: {
        type: DataTypes.DATE
    }
}, {

   
    // Other model options go here
    tableName: 'transactions',
    underscored: true,

    sequelize, // We need to pass the connection instance
    modelName: 'Transfer' // We need to choose the model name
});


module.exports = Transfer;

// Transfer.associate = function(models) {
//     Transfer.belongsTo(models.AddUser, {foreignKey: 'sender_id', as: 'transfer'})
// };

// return Transfer;

// the defined model is the class itself
//console.log(User === sequelize.models.User); // true

