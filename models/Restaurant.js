const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Restaurant = sequelize.define('Restaurant', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price_range: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});  

module.exports = Restaurant;