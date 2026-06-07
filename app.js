const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("hello guies");
})
app.get('/ayush',(req,res)=>{
    res.send("kaise hain aaplog");
})
app.get('/kittu',(req,res)=>{
    res.send("ummed karta hun badiya hee honge");
})
app.listen(2929,()=>{
    console.log("yhn sab chutiya hai");
})