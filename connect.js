const mongoose = require("mongoose");

const uri = "mongodb+srv://chara:Lmong@cluster0.gkyndj3.mongodb.net/?retryWrites=true&w=majority";

const Connect = async () => {
    try {
        await mongoose.Connect(uri);
        console.log('LEsgooooooo WOOOOOOOO')
    } catch (error) {
        console.log('NOOOOOOOo')
    }
}

module.exports = Connect;


