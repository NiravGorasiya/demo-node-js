const dotenv =require("dotenv").config();
const express =require("express")
const morgan =require("morgan")
const {dbConnection}=require("./db/server")
const app=express();

app.use(express.json())
app.use(morgan("tiny"))

const user=require("./router/user")
const register=require("./router/register")
app.use(user)
app.use(register)
dbConnection();

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(3000,(req,res)=>{
    console.log(`listen server 3000`);
})