const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController.js")
// import * as mainControllerFunctions from "../controllers/mainController.js"


router.get("/",mainController.getMain)









module.exports =  router