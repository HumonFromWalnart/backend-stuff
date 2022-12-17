// const User = require('./')
export async function createUser(req, res, next) {
    if (
        !req.body?.firstName ||
        !req.body?.lastName ||
        !req.body?.Email
    ) {
        res
            .status(400)
            .json({ message: "it includess your whole information" })
    }
    // const createUser = await User.create({ ...req.body });
    res
        .status(201)
        .json({ message: 'new user has created', data: createUser })
}