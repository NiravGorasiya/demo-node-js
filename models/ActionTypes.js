const mongoose=require("mongoose")
const Schema =mongoose.Schema
const actionTypes=new Schema({
    actionTypeId:Schema.Types.ObjectId,
    actionTypeName:{
        type:String
    },
    typeCode:{
        type:String
    }
},{
    timestamps:true
})

module.exports=mongoose.model("ActionTypes",actionTypes)

