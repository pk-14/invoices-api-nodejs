const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())  
app.use(require("./routes/addDetails"))
app.use(require("./routes/home"))
app.use(require("./routes/byCustomer"))
app.use(require("./routes/byDate"))
app.use(require("./routes/byShop"))

app.listen(5000, () => {
    console.log("server is running")
})