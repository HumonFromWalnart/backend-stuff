import User from "./mongoose.js";

const updateUser = async (req, res) => {
    const {id} = req.params;
    try {
        const updated = await User.findByIdAndUpdate(id, {...req.body});
        res.status(200).json({
            message: `User with ${id} id got updated`,
            data: updated
        })
    } catch (err) {
        return res.status(400).json({ message: err, data: null })
    }
}

export default updateUser;