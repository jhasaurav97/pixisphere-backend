import Partner from "../models/Partner.js";

export const createPartnerProfile = async (req, res, next) => {
    try {
        const { serviceDetails, city, documentMeta } = req.body;
        const profile = await Partner.create({
            userId: req.user.id,
            serviceDetails,
            city,
            documentMeta,
        });
        res.status(201).json(profile);
    } catch (err) {
        next(err);
    }
};

export const getVerificationStatus = async (req, res, next) => {
    try {
        const partner = await Partner.findOne({ userId: req.user.id });
        res.json({ status: partner.verificationStatus, comment: partner.adminComment });
    } catch (err) {
        next(err);
    }
};
