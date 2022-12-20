import Post from "./mongoose.js";

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        const deleted = await Post.findByIdAndDelete(id);
        res.status(200).json({
            message: `User with ${id} id got deleted`,
            data: deleted
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: err, data: null })
    }
}

export default deleteUser;