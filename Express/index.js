import express from "express";

const app=express();
const port=5000;

app.get("/" ,(req,res)=>{
    console.log(req.rawHeaders)

    res.send("hello")
});


app.get("/contact",(req,res)=>
{
    res.send("<h1> 9789239280</h1>")
});


app.get("/about",(req,res)=>
    {
        res.send("<h1>about</h1>")
    });
    

app.listen(port,()=>
{
    console.log(`server at ${port}`)
    console.log(`server at ${app}`)
})