const Register = require("../models/Register");
const bcrypt = require("bcrypt");
const { comparePasswords } = require("../utils/passwordutility");
const { signJWT } = require("../utils/jwtutils");
const { UserNotFoundError } = require("../errors/");
const mongoose=require("mongoose")

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

const forgotpasswordController=()=>{

}
module.exports = {
  registerController,
  logincontroller,
  forgotpasswordController
};
