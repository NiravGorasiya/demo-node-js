const mongose=require("mongoose")
const registerSchema=new mongose.Schema({
    name:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    loginJwt: {
        type:String
    }
},{
    timestamps:true
})

module.exports=mongose.model("Register",registerSchema)