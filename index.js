require("dotenv").config();
const express =require("express")
const morgan =require("morgan")
const logger=require("./db/logger")
const handleErrors = require("./middlewares/handleErrors");

const {dbConnection}=require("./db/server")
const app=express();

app.use(express.json())
app.use(morgan("tiny"))

const user=require("./router/user")
const register=require("./router/register");
app.use(user)
app.use(register)
app.use(handleErrors);
dbConnection();

app.get("/",(req,res)=>{
    res.send("api call")
})

app.all("*",(req,res)=>{
    res.send("Not Found This Page")
})

app.listen(process.env.PORT,(req,res)=>{
    logger.info(`listen server 3000`);
})