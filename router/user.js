const router=require("express").Router()
const {adduser,getuser,getoneuser,updateuser,deleteuser}=require("../controller/user")

router.get("/user",getuser)
router.post("/user",adduser)
router.get("/user/:id",getoneuser)
router.put("/user/:id",updateuser)
router.delete("/user/:id",deleteuser)

module.exports=router