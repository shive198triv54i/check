// console.log("backend ... har har mahadev")
require('dotenv').config();
const express=require('express');
const app=express();
const port=3690;
app.get('/',(req,res)=>{
    res.send('hello world!!!')
})
app.get('/insta',(req,res)=>{
    res.send("trivedi.shivesh");
})
app.get('/youtube',(req,res)=>{
    res.send("<h1>this is heading</h1>")
})
app.listen(process.env.PORT,()=>{
    console.log(`focus on p not r ${port}`)
})