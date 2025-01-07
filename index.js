// console.log("abc");

//file system 
const fs=require("fs")

fs.writeFileSync("abc.txt","hello fs",err=>{
    if (err) throw err;
    console.log("abc") 
})

fs.readFile("./abc.txt","utf8",(err,data)=>
{
    if (err) throw err;
    console.log(data);
})