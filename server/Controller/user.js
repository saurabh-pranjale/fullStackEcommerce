const User = require('../model/userModel')
const dbConnect = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config()

dbConnect()

exports.signup = async (req, res) => {

    try {
        const { name, username, email, password } = req.body;

        if (!name || !email || !username || !password) {
            return res.status(400).json({ msg: "All fields are mandatory" })
        }

        const emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ msg: "useer already Registered" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword
        });
        const result = await newUser.save();
        const token = jwt.sign({ userId: result._id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });

        res.status(200).json(
            {
                success: true,
                data: result,
                message: 'Entry Created Successfully',
                token
            }
        );

    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,
            })
    }

}

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: "All fields are mandatory" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: "Email not registered" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ msg: "Incorrect password" });
        }

        const token = jwt.sign({ token: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });

        const options = {
            expires: new Date( Date.now() + 3*24*60*60*1000),
            httpOnly:true,
        }

        res.cookie("token", token, options).status(200).json({
            success:true,
            token,
            user,
            message:'User Logged in successfully',
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: 'Internal Server error',
            message: err.message,
        });
    }
};
