import express from "express"
import bodyParser from "body-parser";

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>
{
    res.render("index.ejs",{
        dayType:"a Week Day",
        advice:" Work Harder",
        dayType2:"a weekend "
    });
})




app.listen(5000,()=>
{
    console.log("running")
})