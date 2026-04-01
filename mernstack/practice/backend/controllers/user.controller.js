import User from "../models/user.model.js"

export const getUsers = async (req, res) => {
    const users = await User.find({})
    return res.send({status: true, users})
}