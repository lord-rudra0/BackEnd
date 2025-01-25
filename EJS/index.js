import express from "express"
import bodyParser from "body-parser";

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>
{
    const data={
        title:"Ejx Tags",
        seconds:new Date().getSeconds(),
        bowls:["apples","Banana","Grapes"],
        html_content:"<em> This is some text</em>"
    };
    res.render("index.ejs",
        {data}
    );
})


app.listen(5000,()=>
{
    console.log("running")
})