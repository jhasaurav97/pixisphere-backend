import express from "express";
import { addPortfolio } from "../controllers/portfolioController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("partner"), addPortfolio);

export default router;
