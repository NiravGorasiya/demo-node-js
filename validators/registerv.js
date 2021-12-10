const {body}=require("express-validator")
module.exports={
    registerv:[
        body('email').isEmail(),
        body('password').isLength({ min: 5 })
    ]
}