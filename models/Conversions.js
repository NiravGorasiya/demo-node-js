const mongoose=require("mongoose");

const conversionSchema= new mongoose.Schema({
    name:{
        type:String
    },
    message:{
        type:String
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Conversion",conversionSchema)