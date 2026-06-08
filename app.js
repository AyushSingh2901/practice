const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("hello guies");
})
app.get('/ayush',(req,res)=>{
    res.send("this is my devops exam");
})
app.get('/kittu',(req,res)=>{
    res.send("i feel it will go good ");
})
app.listen(2929,()=>{
    console.log("Jai Shree Ram");
})