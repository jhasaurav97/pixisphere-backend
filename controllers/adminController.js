import Partner from "../models/Partner.js";
import User from "../models/User.js";
import Inquiry from "../models/Inquiry.js";

export const getDashboardStats = async (req, res, next) => {
    try {
        const clients = await User.countDocuments({ role: "client" });
        const partners = await User.countDocuments({ role: "partner" });
        const pending = await Partner.countDocuments({ verificationStatus: "pending" });
        const inquiries = await Inquiry.countDocuments();

        res.json({ clients, partners, pendingVerifications: pending, inquiries });
    } catch (err) {
        next(err);
    }
};

export const verifyPartner = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status, comment } = req.body;
        const partner = await Partner.findByIdAndUpdate(id, { verificationStatus: status, adminComment: comment }, { new: true });
        res.json(partner);
    } catch (err) {
        next(err);
    }
};
