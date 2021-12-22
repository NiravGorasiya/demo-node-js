const mongoose =require("mongoose")

const leadSchema =new mongoose.Schema({
    name:{
        type:String
    },
    gender:{
        type:String
    },
    description:{
        type:String
    },
    language:{
        type:String
    },
    age:{
        type:String
    },
    image:{
        type:String
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Lead",leadSchema)