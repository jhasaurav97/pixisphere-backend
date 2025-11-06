import express from "express";
import { createInquiry } from "../controllers/inquiryController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("client"), createInquiry);

export default router;
