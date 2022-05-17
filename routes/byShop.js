const express = require("express")
const router = express.Router()
const Shop = require("../models/shop")
const Customer = require("../models/customer")
const Item = require("../models/item")
const db = require("../utils/database")

router.get('/byShop', (req,res) => {
    db.sync(/* {force: true} */)
        .then(async () => {
            const shopName = req.body.name
            var shopNameVAR = await Shop.findAll({where:{name:shopName}})
            var shopId = shopNameVAR[0].id
            if (shopNameVAR.length === 0) return res.status(422).json({error:"Plase enter valid details"})
            const customerDetails = await Customer.findAll({where:{shopId: shopId}})
            var temp = []
            for(let i=0; i<customerDetails.length; i++){
                var customerAndItemDetails = await Item.findAll({where:{customerId:customerDetails[i].id}})
                var shopIdObj = {name: customerDetails[i].name, number: customerDetails[i].contactNumber, shopId : customerDetails[i].shopId}
                customerAndItemDetails = [shopIdObj, ...customerAndItemDetails]
                temp = [...temp, customerAndItemDetails]
            }
            res.send(temp)
        })
})

module.exports = router