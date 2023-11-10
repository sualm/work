const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
////const cookieParser = require("cookie-parser");
//const bodyParser = require("body-parser");
//const cors = require("cors");

//app.use(cors({
 // origin: ['https://eshop-tutorial-pyri.vercel.app',],
  //credentials: true
//}));

//app.use(express.json());
//app.use(cookieParser());
//app.use("/test", (req, res) => {
  //res.send("Hello world!");
//});

//app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}



module.exports = app;