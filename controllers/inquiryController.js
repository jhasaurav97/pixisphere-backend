import Inquiry from "../models/Inquiry.js";
import Partner from "../models/Partner.js";

export const createInquiry = async (req, res, next) => {
    try {
        const { category, date, budget, city, referenceImage } = req.body;
        const partners = await Partner.find({ city, verificationStatus: "verified" });
        const assigned = partners.map((p) => p._id);

        const inquiry = await Inquiry.create({
            clientId: req.user.id,
            category,
            date,
            budget,
            city,
            referenceImage,
            assignedPartners: assigned,
        });

        res.status(201).json(inquiry);
    } catch (err) {
        next(err);
    }
};
