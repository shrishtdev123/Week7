
const mongoose=require("mongoose");

 mongoose.connect("mongodb://127.0.0.1:27017/linkdinNotification");

 // now create the schema 

 const linkedliSchema=mongoose.Schema({
          Job:Number,
          Network:Number,
          Message:Number,
          Notification:Number
 })

 // now create the model

 const Linklindetail=mongoose.model("Linklindetail",linkedliSchema);

 module.exports=Linklindetail;