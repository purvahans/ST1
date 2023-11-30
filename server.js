const express=require("express");
const app=express();
const PORT=process.env.PORT ||4000;
app.use(express.json());

const dataroutes=require("./Routes/data");
app.use("/api",dataroutes);

app.get("/",(req,res) => {
    res.send("Homepage");
})
app.listen(PORT ,() =>{
    console.log("SERVER STARTED");
})


const dbconnect=require("./config/Database");
dbconnect();
