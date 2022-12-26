import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    picture : String,
    line : String
    // registerDate: { type: Date, default: Date.now },
}, {versionKey : false});

const Usermodel = model("User", UserSchema);

export default Usermodel;