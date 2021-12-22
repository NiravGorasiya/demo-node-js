const router=require("express").Router()
const Lead =require("../models/Lead")
router.post("/lead",async(req,res)=>{
    try {
        const {name,description,gender,age,language}=req.body
        const lead = await Lead.create({
            name,
            description,
            gender,
            age,
            language
        })
        const result =await lead.save() 
        res.status(200).send(result)
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.get("/lead",async(req,res)=>{
    try {
        const lead = await Lead.find();
        res.send(lead)
    } catch (error) {
        return res.status(400).send(error)
    }
})
module.exports=router