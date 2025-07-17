const conn = require("./db/connect")
const dotenv = require('dotenv')
const initializeScheduler = require('./utils/sendingmssgs.js')
const cors = require('cors');
// const sendEmail = require('./utils/try.js')
// sendEmail()
require('./controller/usercontroller.js')
dotenv.config()
conn()
const express = require('express')
const app = express()
app.use(express.json())
app.use(cors());
initializeScheduler()
app.get("/",(req,res)=>{
    res.send("listening")
})
app.use("/api/user",require('./routes/userroutes.js'))
app.use("/api/message",require('./routes/messageroutes.js'))
app.listen(process.env.port,()=>{
    console.log("app listening at port :",process.env.port)
})