import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    registerDate: { type: Date, default: Date.now },
});

const Usermodel = model("User", UserSchema);

export default Usermodel;