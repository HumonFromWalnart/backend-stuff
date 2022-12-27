import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    name: String,
    firstName: String,
    lastName: String,
    email: String,
    picture: String,
    line: String,
    aka: String
    // registerDate: { type: Date, default: Date.now },
}, { versionKey: false });

const Usermodel = model("User", UserSchema);

export default Usermodel;