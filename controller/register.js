const Register = require("../models/Register");
const bcrypt = require("bcrypt");
const sgMail = require("@sendgrid/mail");
const { comparePasswords } = require("../utils/passwordutility");
const { signJWT } = require("../utils/jwtutils");
const { UserNotFoundError } = require("../errors/");
const mongoose=require("mongoose")
const {generatePassword}=require("../utils/randomGeneratorutils")
const {convertQuery}=require("../utils/paginationutils")

const API_KEY =
  "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";
sgMail.setApiKey(API_KEY);


const registerController = async (ctrlData) => {
  const hashed = await bcrypt.hash(ctrlData.password, 8);
  const register = await Register.create({
    name: ctrlData.name,
    phone: ctrlData.phone,
    email: ctrlData.email,
    password: hashed,
    loginjwt:null
  });
  const result = await register.save();
  return result;
};

const logincontroller = async ({ email, password }, next) => {
  try {
    const user = await Register.findOne({ email });
    if (user !== null) {
      const result = await comparePasswords(password, user.password);
      if (result === true) {
        const loginjwt = signJWT({ user: { _id: user._id } });
        const updateuser =await Register.findById({ _id: user._id})
        updateuser.loginjwt=loginjwt
        const result=await updateuser.save() 
        return { token: loginjwt, user: updateuser };
      } else {
        throw new UserNotFoundError();
      }
    } else {
      throw new UserNotFoundError();
    }
  } catch (error) {
      throw(error)
  }
};

const forgotpasswordController=async(userData)=>{
  try {
    var randompass=generatePassword();
    const message = {
      to: userData.email,
      from: "niravgorasiya10@gmail.com",
      subject: "Hello send gridgrid",
      templateId: "d-0d0b3641e31341cba2382c2409921d69",
      dynamicTemplateData: {
        email: "niravgorasiya10@gmail.com",
        userPassword: `Your temporary password is : ${randompass} `,
      },
    };
     const sendEmail=sgMail
       .send(message)
       .then((response)=>"Email send")
       .catch((error)=>console.log(error,"error"))
    if(sendEmail!==null && sendEmail!==undefined)
    {
      const newpassword=await Register.findOne({email:userData.email})
      const hashed = await bcrypt.hash(randompass, 8);
      newpassword.password=hashed
      const pass=await newpassword.save();
     if(newpassword!=null){
       return sendEmail
     }
    }
    } catch (error) {
      throw error;    
    }
}

const getusercontroller=async(querydata)=>{
    const {limit,off}=await  convertQuery(querydata.limit,querydata.limit)
    
}
module.exports = {
  registerController,
  logincontroller,
  forgotpasswordController,
  getusercontroller
};
