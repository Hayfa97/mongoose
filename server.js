const express=require ("express")
const connectDb =require("./config/ConnectDb.js")
const app=express()
connectDb()
app.use(express.json())
app.use("/contact",require("./routes/personRoutes.js"))
const port= 5000
app.listen(port,(error)=>{
    error?console.log(error):console.log(`serveur is runing at ${port}`);
})
