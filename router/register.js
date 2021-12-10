const router = require("express").Router();
const {registerController}=require("../controller/register")
const { registerv } = require("../validators/registerv");
const expressValidatorMw = require("../middlewares/validate");
const { body, validationResult, matchedData } = require("express-validator");

router.post("/register", registerv, expressValidatorMw,async (req, res, next) => {
  try {
    const ctrlData = matchedData(req, { locations: ["body"] });
    const register= await registerController(ctrlData);
    res.status(201).send(register);
  } catch (error) {
    res.send(error);
}
});
module.exports = router;
