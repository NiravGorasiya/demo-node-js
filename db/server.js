const mongoose= require("mongoose")

function dbConnection(){
    mongoose.connect(process.env.URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("connected with database");
    })
    .catch((err)=>{
        console.log(err,"errr");
    })
}

module.exports={dbConnection}