const mongose=require("mongoose")
const registerSchema=new mongose.Schema({
    name:{
        type:String
    },
    phone:{
        type:String
    }
},{
    timestamps:true
})

module.exports=mongose.model("Register",registerSchema)