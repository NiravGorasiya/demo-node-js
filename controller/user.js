const User=require("../models/User")
const mongoose= require("mongoose")
const adduser=async(req,res,next)=>{
    try {
        const {name,email}=req.body
        const useradd=await User.create({
            name,
            email
        })
        const result= await useradd.save()
        res.status(201).send(result)
    } catch (error) {
        res.send(error)
    }
}

const getuser=async(req,res,next)=>{
    try {
       const user= await User.find();
       res.status(200).send(user)
    } catch (error) {
        res.send(error)
    }
}

const getoneuser=async(req,res,next)=>{
    try {
        const id=mongoose.Types.ObjectId(req.params.id)
       const user= await User.findById(id)
       return res.status(200).json(user)
    } catch (error) {
        if(error){
            console.log(error,"error");
        }
        return next(error)
    }
}

const updateuser =async(req,res,next)=>{
    try {
        const {name,email} =req.body;    
        const id =mongoose.Types.ObjectId(req.params.id);
        const user=await User.findById(id);
        user.name=name;
        user.email=email;
        const result=await user.save() 
        return res.status(200).send(result)
    } catch (error) {
        return next(error)
    }
}

const deleteuser=async(req,res,next)=>{
    try {
        const id=mongoose.Types.ObjectId(req.params.id)
        const user=await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        return next(error)
    }
}

module.exports={adduser,getuser,getoneuser,updateuser,deleteuser}

