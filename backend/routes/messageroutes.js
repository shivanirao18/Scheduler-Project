const express = require('express')
const router = express.Router()
const {createmssg,getmssg} = require('../controller/messagecontroller.js')
router.post("/",createmssg)
router.get("/",getmssg)
module.exports=router