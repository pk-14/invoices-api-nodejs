const express = require("express")
const router = express.Router()
const Shop = require("../models/shop")
const Customer = require("../models/customer")
const Item = require("../models/item")
const db = require("../utils/database")

router.get('/byCustomer', (req,res) => {
    db.sync(/* {force: true} */)
        .then(async () => {
            const customerName = req.body.name
            const customerNumber = req.body.contactNumber
            const shopAndCustomerDetails = await Customer.findAll({where:{name:customerName, contactNumber:customerNumber}})
            if (shopAndCustomerDetails.length === 0) return res.status(422).json({error:"Plase enter valid details"})
            /* console.log(shopAndCustomerDetails[0].shopId) */
            var temp = []
            for(let i=0; i<shopAndCustomerDetails.length; i++){
                var customerAndItemDetails = await Item.findAll({where:{customerId:shopAndCustomerDetails[i].id}})
                var shopIdObj = {name: shopAndCustomerDetails[i].name, number: shopAndCustomerDetails[i].contactNumber, shopId : shopAndCustomerDetails[i].shopId}
                customerAndItemDetails = [shopIdObj, ...customerAndItemDetails]
                temp = [...temp, customerAndItemDetails]
            }
            res.send(temp)
        })
})

module.exports = router