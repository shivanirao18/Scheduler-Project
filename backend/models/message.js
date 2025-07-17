const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
    {
        sender: {
            type: String,
            ref: "User",
            required: true,
        },
        nodepass:{
            type:String,
            required:true
        },
        recipient: {
             type: String, 
             required: true 
            },
        content: { 
            type: String, 
            required: true 
        },
        scheduledTime: { 
            type: Date, 
            required: true 
        },
        sent: { 
            type: Boolean, 
            default: false
         },
    },
    {
        timestamps: true,
    }
);
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
