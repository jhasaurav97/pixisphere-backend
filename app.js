import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectMongoDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import partnerRoutes from "./routes/partnerRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();
connectMongoDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/partner", partnerRoutes);
app.use("/api/inquiry", inquiryRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/admin", adminRoutes);

// Error handler
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("Pixisphere Backend API is running successfully!")
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
