const express = require("express");
const User = require("../model/user");
const router = express.Router();
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const {upload} = require("../multer");
const path= require("path");
// create user
router.post("/create-user", upload.single("file"),async (req,res,next) => {
  const { name, email, password, avatar } = req.body;
  const userEmail = await User.findOne({ email });
  if (userEmail) {
    return next(new ErrorHandler("User already exists", 400));
  }
  const filename=req.file.filename;
  const fileUrl = path.join(filename);
const user = {
      name: name,
      email: email,
      password: password,
      avatar:fileUrl 
      //{
        //public_id: myCloud.public_id,
        //url: myCloud.secure_url,
      //}

    }; 
    console.log(user);
  })
///router.post("/create-user", async (req, res, next) => {
  //try {
   // const { name, email, password, avatar } = req.body;
    //const userEmail = await User.findOne({ email });

   // if (userEmail) {
      //return next(new ErrorHandler("User already exists", 400));
    //}

    //const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      //folder: "avatars",
    //});

    //const user = {
      //name: name,
      //email: email,
      //password: password,
      //avatar: {
        //public_id: myCloud.public_id,
       // url: myCloud.secure_url,
     // },
    //};

    //const activationToken = createActivationToken(user);

   // const activationUrl = `http://localhost:3000/activation/${activationToken}`;

    //try {
     // await sendMail({
      //  email: user.email,
       // subject: "Activate your account",
       // message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
     // });
     // res.status(201).json({
       // success: true,
       // message: `please check your email:- ${user.email} to activate your account!`,
      //});
    //} catch (error) {
     // return next(new ErrorHandler(error.message, 500));
   // }
  //} catch (error) {
   // return next(new ErrorHandler(error.message, 400));
 // }
//});


module.exports = router;