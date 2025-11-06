import express from "express";
import { getDashboardStats, verifyPartner } from "../controllers/adminController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/stats", protect, authorizeRoles("admin"), getDashboardStats);
router.put("/verify/:id", protect, authorizeRoles("admin"), verifyPartner);

export default router;
