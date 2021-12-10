const router=require("express").Router()
const {adduser,getuser,getoneuser,updateuser,deleteuser}=require("../controller/user")
const auth=require("../middlewares/auth")
router.get("/user",auth,getuser)
router.post("/user",auth,adduser)
router.get("/user/:id",getoneuser)
router.put("/user/:id",updateuser)
router.delete("/user/:id",deleteuser)

module.exports=router