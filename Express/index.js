import express from "express";

const app=express();

app.get("/" ,(req,res)=>{
    console.log(req.rawHeaders)

    res.send("hello")
});

app.listen(5000,()=>
{
    console.log("bla hh")
})