require("dotenv").config();
const express =require("express")
const app=express();
const http = require('http');
const server = http.createServer(app);
const { Server }=require("socket.io")
const io =new Server(server);
const logger=require("./db/logger")
const path=require("path")
const handleErrors = require("./middlewares/handleErrors");
const {dbConnection}=require("./db/server")
const morgan =require("morgan")
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(morgan("tiny"))
const user=require("./router/user")
const register=require("./router/register");
const lead=require("./router/lead")
app.use(user)
app.use(register)
app.use(lead)
app.use(handleErrors);
dbConnection();

app.get("/",(req,res)=>{
    res.send("api call")
})

app.all("*",(req,res)=>{
    res.send("Not Found This Page")
})

const Conversion =require("./models/Conversions")
const users ={};

io.on('connection',(socket)=>{
    socket.on('new-user-join',(name)=>{
        users[socket.id]=name;
        socket.broadcast.emit('user-join',name)
    })

    socket.on('send',(message)=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
        Conversion.create({
            name:users[socket.id],
            message:message
        })
    })
            
    socket.on("disconnect",(name)=>{
        socket.broadcast.emit("left",users[socket.id])
        delete users[socket.id]
    })
})

server.listen(process.env.PORT,()=>{
    logger.info(`listening on *:4000`);
})