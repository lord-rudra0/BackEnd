import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url";
import morgan from"morgan";
import bodyParser from "body-parser"

const port=5000;
const app=express();
// Morgan middleware for logging
// const __dirname=dirname(fileURLToPath(import.meta.url));
// app.use(morgan("tiny"))
// app.get("/",(req,res)=>
// {
//     res.send("Hello")
// })

// app.post("/logging",(res,req)=>
// {
//     console.log(req.body)
// })





// bodyParser for pre Processing
// const app =express();

// app.use(bodyParser.urlencoded({extended:true}));


// app.get("/",(req,res)=>

// {
//     res.sendFile(__dirname+"/public/middleware.html");
// });


// app.post("/submit",(req,res)=>
// {
//     console.log(req.body);
// });

// app.use((res,req,next)=>
// {
// console.log(res.method())
// })

// created own middleware

// function logger(req,res,next){
// console.log("req",req.method);
// console.log(req.url);
// next();
// }

// app.use(logger);
// app.get("/",(req,res)=>
// {
//     res.send("Hello");
// })

// app.post("/submit",(req,res)=>
// {
//     res.send("hello");
// });



// complete middleware website 
const __dirname=dirname(fileURLToPath(import.meta.url));
var band_name="";
app.use(bodyParser.urlencoded({extended:true}));
function generate_name(req,res,next)
    {
        console.log(req.body);
        band_name=req.body["street"]+req.body["pet"];
        next();
    }
app.get("/",(req,res)=>
{
    res.sendFile(__dirname + "/public/middleware.html")

})

app.use(generate_name)
app.post("/submit",(req,res)=>
{
    res.send(`<h1> your band name is:</h1> <h2> ${band_name} </h2>`)
})



app.listen(port,()=>
{
    console.log(`port is ${port}`)
})
