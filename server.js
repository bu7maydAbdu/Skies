const express = require("express")
const PORT = 8000
const app = express()
const cors = require("cors")
const mainRoute = require("./routes/main")
require('dotenv').config({path: './config/.env'})




app.use(cors())


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.use("/" , mainRoute)










app.listen(process.env.PORT || PORT , ()=> {
    console.log(`server is running on port ${process.env.PORT}`)
})