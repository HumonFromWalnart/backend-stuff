import User from "./mongoose.js";

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            message: true,
            data: users
        })
    } catch (err) {
        return res.status(400).json({ message: err, data: null })
    }
}

export default getUsers;