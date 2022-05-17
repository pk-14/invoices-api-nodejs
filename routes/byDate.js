const express = require("express")
const router = express.Router()
const Shop = require("../models/shop")
const Customer = require("../models/customer")
const Item = require("../models/item")
const db = require("../utils/database")
const { Op } = require("sequelize")


router.get('/byDate', (req,res) => {
    db.sync(/* {force: true} */)
        .then(async () => {
            const fromDate = req.body.fromDate
            const toDate = req.body.toDate
            const results = await Customer.findAll({
                where: {
                        createdAt: { [Op.and]: [{ [Op.gte]: fromDate }, { [Op.lte]: toDate }] }
                        },
                    order: [['createdAt', 'ASC']]
            }); 
            
            res.send(results)
        })
})

module.exports = router