const Sequelize = require("sequelize")
const db = require("../utils/database.js")

const Shop = db.define("shop", {
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
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    contactNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    emailId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Shop