const express=require("express");
const cors=require("cors");
const Linklindetail = require("./db/conn");
const app=express();
app.use(cors());
app.use(express.json());
app.get("",(req,res)=>{
      res.send("all notification");
})

app.get("/getNotification",async(req,res)=>{
    const data=await Linklindetail.find();
    res.json({
         data
    })
})

app.post("/notification",async(req,res)=>{
    const {Job, Network,Message,Notification}=req.body;
   await Linklindetail.create({
            Job,
            Network,
            Message,
            Notification
    })
       
      res.json({
         msg:"all notification"
      })
})


app.listen(4000,()=>{
     console.log(`server is running at 4000 port`);
     
});