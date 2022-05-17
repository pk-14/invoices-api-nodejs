const Sequelize = require("sequelize")

const db = new Sequelize("shop", "test123", "pass123", {
    dialect: 'mysql',
})

module.exports = db