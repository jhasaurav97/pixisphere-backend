import Portfolio from "../models/Portfolio.js";

export const addPortfolio = async (req, res, next) => {
    try {
        const { imageUrl, description, index } = req.body;
        const portfolio = await Portfolio.create({
            partnerId: req.user.id,
            imageUrl,
            description,
            index,
        });
        res.status(201).json(portfolio);
    } catch (err) {
        next(err);
    }
};
