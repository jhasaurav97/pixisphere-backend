import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    partnerId: { type: mongoose.Schema.Types.ObjectId, ref: "Partner" },
    imageUrl: String,
    description: String,
    index: Number,
});

export default mongoose.model("Portfolio", portfolioSchema);
