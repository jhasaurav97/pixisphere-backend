import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: String,
    date: String,
    budget: Number,
    city: String,
    referenceImage: String,
    assignedPartners: [{ type: mongoose.Schema.Types.ObjectId, ref: "Partner" }],
    status: { type: String, enum: ["new", "responded", "booked", "closed"], default: "new" },
});

export default mongoose.model("Inquiry", inquirySchema);
