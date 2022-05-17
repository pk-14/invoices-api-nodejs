const Sequelize = require("sequelize")
const db = require("../utils/database.js")

const Customer = db.define("customer", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contactNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dateAndTime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    totalAmount:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    invoice:{
       type: Sequelize.STRING,
       allowNull:false 
    }
});

module.exports = Customer