const express = require("express")
const router = express.Router()
const Shop = require("../models/shop")
const Customer = require("../models/customer")
const Item = require("../models/item")
const db = require("../utils/database")

Shop.hasMany(Customer)
Customer.hasMany(Item)

let customerId = null 

router.post("/addDetails", (req,res) => {
    db.sync(/* {force: true} */)
        .then(async () => {
            let temp = await Shop.findOne({where:{name:req.body[0].name}})
            if(!temp)
                return Shop.create(req.body[0])
            else
                return temp
        })
        .then(shop => {
            return shop.createCustomer(req.body[1])
        })
            .then(customer => {
                customerId = customer.id
                var items = req.body[1].items
                let totalAllItems = 0.0 
                for(i=0; i<items.length; i++){
                    let singleItem = req.body[1].items[i]
                    singleItem.total = (( singleItem.quantity*singleItem.pricePerQuantity )*(1- (singleItem.discount/100))) + ((singleItem.gst/100)*singleItem.quantity*singleItem.pricePerQuantity) 
                    totalAllItems = totalAllItems + singleItem.total
                    customer.createItem(singleItem)
                }
                Customer.findOne({ where: { id: customerId } })
                    .then((individual) => {

                    // Check if record exists in db

                    if (individual) {
                        individual.update({
                        totalAmount: totalAllItems
                    })
                    .catch(err => {console.log(err)})
    }
  })
            })
            .catch((err) => {
                    console.log(err)
                })
})

module.exports = router