const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
} ,
{versionKey:false}
)
const UserModel = mongoose.model('User', userSchema);

module.exports={
    UserModel
}