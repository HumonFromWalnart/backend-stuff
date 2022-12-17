const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
    firstName : String,
    lastName : String,
    email : String,
    birth : Date,
    registerDate : {type : Date, default : Date.now},
});

const Usermodel = model("User", UserSchema);

model.exports = Usermodel;