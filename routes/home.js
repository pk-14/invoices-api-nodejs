const express = require("express")
const router = express.Router()

router.get('/', (req,res) => {
    res.send({add: "To add Shop Details, Customer Details and the items purchased, go to /addDetails",  
    displayItemsByCustomerName: "To display items transacted, sorted by customer name and number, go to /byCustomer",
    displayCustomersTotalByDate: "To display customers and total amount they spent during a time period, go to /byDate",
    displayCustomersItemsByShop: "To display customers and items they bought of a particular shop, go to /byShop"
})
})

module.exports = router