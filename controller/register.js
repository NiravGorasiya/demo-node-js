const User=require("../models/User")
const registerController=async(ctrlData)=>{
    const register=await User.create({
        ...ctrlData
    })
    const result= await register.save()
    console.log(result);
    return result
}

module.exports={
    registerController
}