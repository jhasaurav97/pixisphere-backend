import express from "express";
import { createPartnerProfile, getVerificationStatus } from "../controllers/partnerController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/create-profile", protect, authorizeRoles("partner"), createPartnerProfile);
router.get("/status", protect, authorizeRoles("partner"), getVerificationStatus);

export default router;
