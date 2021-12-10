const {body}=require("express-validator")
const {UserNotFoundError} =require("../errors/")
const Register=require("../models/Register")
module.exports={
    registerv:[
        body('name').exists().withMessage('Name is required').isString("Name should be a valid string"),
        body('phone').exists().withMessage('Phone Number is required').isString("phone should be a valid string"),
        body('email').exists().withMessage("email is required").isEmail(),
        body('password').exists().withMessage("Password is required").isLength({ min: 5 })
    ],
    forgotpassword:[
        body("email").exists().withMessage("Email is required").isEmail().normalizeEmail().custom(email=>{
            return Register.findOne({email}).then(res=>{  
                if(res){
                    return(res)
                }
                throw new UserNotFoundError("we don't find your email in our system")
            })
        })
    ]
}