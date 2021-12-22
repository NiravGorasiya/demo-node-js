const router = require("express").Router();
const {registerController,logincontroller,forgotpasswordController,getusercontroller}=require("../controller/register")
const { registerv ,forgotpassword,getuserV} = require("../validators/registerv");
const expressValidatorMw = require("../middlewares/validate");
const { validationResult,matchedData } = require("express-validator");

router.post("/register",registerv,expressValidatorMw,async (req, res, next) => {
  try {
    const ctrlData = matchedData(req, { locations: ["body"] });
    const register= await registerController(ctrlData);
    return  res.status(201).send(register);
  } catch (error) {
    return next(error)
  }
});

router.post("/login",async(req,res,next)=>{
  try {
    const {email,password}=req.body
    const {token}=await logincontroller({email,password})
    res.send({token})
  } catch (error) {
    return next(error)    
  }
})

router.post("/forgotpassword",forgotpassword,expressValidatorMw,async(req,res,next)=>{
  try {
    const password = await forgotpasswordController(req.body,next)
    res.send(password)
  } catch (error) {
    return next(error)
  }
})

router.get("/getuser",getuserV,async(req,res)=>{
  try {
    const queryData=matchedData(req,{locations:['query']})
    const user= await getusercontroller(null,queryData)
    res.send(user)
  } catch (error) {
      return next(error)
  }
})

module.exports = router;
