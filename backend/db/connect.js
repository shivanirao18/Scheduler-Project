const mongoose = require('mongoose')
const dotenv = require('dotenv') 
dotenv.config()
console.log(process.env.mongourl)
const connect = async()=>{
    try {
        await mongoose.connect(process.env.mongourl)
        console.log("connected successfully")
    } catch (error) {
        console.log("error occurred",error)
        
    }
    
}
module.exports = connect