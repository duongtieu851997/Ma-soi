var express= require("express");
var app= express();

var hostname="localhost";
var port=8017

app.get("/helloworld",(req,res)=>{
         res.send("hello world")
});
app.listen(port,hostname,()=>{
    console.log(`Hi duong , i'm running at ${hostname}:${port}/`);
})