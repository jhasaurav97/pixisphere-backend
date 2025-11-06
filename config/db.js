import mongoose from "mongoose";


export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB Connected");
    } catch (err) {
        console.error("MongoDB Connection Error:", err.message);
    }
};
