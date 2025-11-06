import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ msg: "Email already exists" });

        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashed, role });
        res.status(201).json({ msg: "Signup success", user });
    } catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ msg: "User not found" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ msg: "Invalid password" });

        const token = generateToken(user._id, user.role);
        res.json({ token, role: user.role });
    } catch (err) {
        next(err);
    }
};
