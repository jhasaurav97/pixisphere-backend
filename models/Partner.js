import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    serviceDetails: String,
    city: String,
    documentMeta: {
        aadharNumber: String,
    },
    portfolio: [{ type: mongoose.Schema.Types.ObjectId, ref: "Portfolio" }],
    verificationStatus: {
        type: String,
        enum: ["pending", "verified", "rejected"],
        default: "pending",
    },
    adminComment: String,
});

export default mongoose.model("Partner", partnerSchema);
