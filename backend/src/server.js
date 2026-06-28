import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import investmentRoutes from "./routes/investment.routes.js";
import financeRoutes from "./routes/finance.routes.js";
import newsRoutes from "./routes/news.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Investment Research Agent Backend is Running 🚀"
    });
});

app.use("/api", investmentRoutes);
app.use("/api", financeRoutes);
app.use("/api", newsRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});