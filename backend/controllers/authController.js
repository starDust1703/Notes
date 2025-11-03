const UserModel = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const signup = async (req, res) => {
    try {
        const { name, email, pass } = req.body;
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(409)
                .json({ message: "User already exists", success: false })
        }
        const userModel = new UserModel({ name, email, pass });
        userModel.pass = await bcrypt.hash(pass, 10)
        await userModel.save();
        res.status(201)
            .json({ message: "Signup Successful", success: true })
    } catch (err) {
        res.status(500)
            .json({ message: "Internal Server Error", success: false })
    }
}

const login = async (req, res) => {
    try {
        const { email, pass } = req.body;
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(403)
                .json({ message: "Auth failed, user doesn't exists. Please signup first", success: false })
        }
        const passEqual = await bcrypt.compare(pass, user.pass);
        if (!passEqual) {
            return res.status(403)
                .json({ message: "Auth failed, email or password mismatch", success: false })
        }
        const token = jwt.sign({ email: user.email, _id: user._id }, process.env.JWT_secret,
            { expiresIn: '24h' }
        );

        res.status(201)
            .json({
                message: "Login Successful",
                success: true,
                token,
                email,
                name: user.name,
                userID: user._id,
            })
    } catch (err) {
        res.status(500)
            .json({ 
                message: "Internal Server Error",
                success: false,
            })
    }
}

module.exports = {
    signup,
    login
}