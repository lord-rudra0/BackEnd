//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import bodyParser from  "body-parser";
import {fileURLToPath} from "url"
import {dirname} from "path"

const app=express()

app.use(bodyParser.urlencoded({extended:true}));
const __dirname=dirname(fileURLToPath(import.meta.url))

let is_Authorize= false;
function verify(req,res,next)
{
    const password=req.body["password"];
    if (password==="ILoveProgramming")
    {
        // res.sendFile(__dirname+"/public/secret.html");
        is_Authorize=true;
    }
    next();
}

app.use(verify);

app.get("/",(req,res)=>
    {
        res.sendFile(__dirname+"/public/index.html")
    })

app.post("/check",(req,res)=>
{
   if (is_Authorize)
   {
    res.sendFile(__dirname+"/public/secret.html");
   }
   else
   {
    res.redirect("/")
   }
});

app.listen(5000,()=>
{
    console.log("running");
})


