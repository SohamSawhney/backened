require('dotenv').config()
const express=require('express')

const app=express()
const port=5000;
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/twitter',(req,res)=>{
    res.send('hitesh.com')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai aur code </h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>hello buddy</h2>')
})

app.listen(process.env.port,()=>{
    console.log(`Example app listening on port ${port}`)
})