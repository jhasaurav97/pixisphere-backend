import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["client", "partner", "admin"], default: "client" },
    otp: String,
});

export default mongoose.model("User", userSchema);
