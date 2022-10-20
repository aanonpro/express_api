const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Note extends Model {}

Note.init({
    // Model attributes are defined here
    title: {
        type: DataTypes.STRING,
        require: true,
    },
    description: {
        type: DataTypes.STRING,
        require: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        ref: "User",
        require: true,
    },
   
}, {

    // Other model options go here
    tableName: 'note',
    underscored: true,

    sequelize, // We need to pass the connection instance
    modelName: 'Note' // We need to choose the model name
});
module.exports = Note;
// the defined model is the class itself
//console.log(User === sequelize.models.User); // true