import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

import dotenv from "dotenv"
dotenv.config();



export const getAllUsers = () => {

}
export const signUpUser = async (req, res) => {
    try {

        const { firstName, lastName, email, password, } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ success: false, message: "all fields are required" });
        }
        const isMatch = await User.findOne({ email: email });
        if (isMatch) {
            return res.status(400).json({ success: false, message: "User already exists, please Login!" });
        }
        const hashPass = await bcrypt.hash(password, 10);

        const newUser = new User({ firstName, lastName, email, password: hashPass });
        await newUser.save();

        res.status(201).json({ success: true, message: "User registered successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" })
    }

}


export const loginUser = async (req, res) => {
    try {

        const { email, password, } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "all fields are required" });
        }

        const isMatch = await User.findOne({ email: email });
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }
        const passMatch = await bcrypt.compare(password, isMatch.password);
        if (!passMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }
        const payLoad = { id: User._id };
        const token = jwt.sign(payLoad, process.env.JWTSECRET)

        console.log("4")
        res.status(201).json({ success: true, userDetails: { _id: isMatch._id, firstName: isMatch.firstName, lastName: isMatch.lastName, email: isMatch.email, token: token } })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" })
    }

}