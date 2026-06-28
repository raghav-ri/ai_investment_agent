import express from "express";
import { researchCompany } from "../controllers/investment.controller.js";

const router = express.Router();

// POST /api/research
router.post("/research", researchCompany);

export default router;