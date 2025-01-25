import express from "express"
import bodyParser from "body-parser";

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>
{
    const today=new Date();
    const day=today.getDay();

    // console.log(day)
    let type="a Week Day";
    let adv=" Work Harder"
    if (day===0||day===6)
    {
     type="The Weekend Day";
     adv="Chill "
    }
    res.render("EJS.ejs",{
        dayType:type,
        advice:adv,
    });
})

app.listen(5000,()=>
    {
        console.log("running")
    })
