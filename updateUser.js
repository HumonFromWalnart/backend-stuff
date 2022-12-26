import Post from "./mongoose.js";

const updateUser = async (req, res) => {
    const { id } = req.params;

    console.log('hi')
    try {
        const updated = await Post.updateOne({ id }, { ...req.body });
        console.log(updated)
        res.status(200).json({
            message: `User with ${id} id got updated`,
            data: updated
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: err, data: null })
    }
}

export default updateUser;