const message = require("../models/message")
const createmssg = async(req,res)=>{
    try {
        let {sender,nodepass,recipient,content,scheduledTime} = req.body
        // scheduledTime  = scheduledTime.setMilliseconds(0)
        const mssg = new message({sender,nodepass,recipient,content,scheduledTime})
        await mssg.save()
        res.status(201).json(mssg)
    } catch (err) {
        res.status(500).json({ error: err.message });

    }
}
const getmssg = async (req, res) => {
    try {
      const sender = req.query.sender;
      console.log("Received sender:", sender);  // Log the sender value received in the query
  
      const mssgs = await message.find({ sender });
      console.log("Messages found:", mssgs);  // Log the messages found in the database
  
      res.status(200).json(mssgs);  // Send the found messages back
    } catch (error) {
      console.error("Error",error);  // Log any error that occurs
      res.status(500).json({ error: error.message });
    }
  };
  
module.exports={createmssg,getmssg}