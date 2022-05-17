const Sequelize = require("sequelize")
const db = require("../utils/database.js")

const Item = db.define("item", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    pricePerQuantity: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    discount: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    gst: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    total: {
        type: Sequelize.FLOAT,
        
    }
});

module.exports = Item