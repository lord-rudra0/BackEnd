import express from "express"

const app=express();

const port =5000;

app.get("/",(req,res)=>{
    res.send("<h1>get Method</h1>");
});

app.post("/register",(req,res)=>{
    res.sendStatus(201);
});


app.patch("/user/rudra",(req,res)=>{
    res.sendStatus(201);
});


app.put("/user/rudra",(req,res)=>{
    res.sendStatus(200);
});

app.delete("/user/rudra",(req,res)=>{
    res.sendStatus(200);
});


app.listen(port,()=>
{
    console.log(`port is ${port}`);
});