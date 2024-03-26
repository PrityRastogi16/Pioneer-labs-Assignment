const express = require("express");
const userRouter = express.Router();
const cookieParser = require("cookie-parser");
const {auth} = require("../middlewares/auth.middleware");
const {registerUser,loginUser,resetPassword, logoutUser, getUser} = require("../controllers/user.controller")
const {getDataFromApi} = require("../controllers/apidata.controller")
userRouter.use(express.json());
userRouter.use(cookieParser());
userRouter.post("/user/register", registerUser);
userRouter.put("/user/reset/:id",auth, resetPassword);
userRouter.post("/user/login", loginUser);
userRouter.get("/user/",auth, getUser)
// userRouter.use(cookieParser());
userRouter.get("/api", auth, getDataFromApi)
userRouter.delete("/logout", logoutUser);


module.exports={
    userRouter
}
