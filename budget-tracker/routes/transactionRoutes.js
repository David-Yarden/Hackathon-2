import express from "express";
import { getDashboard, getTransactions, addTransaction } from "../controllers/transactionController.js";

const router = express.Router();

router.get("/", getDashboard);
router.get("/transactions", getTransactions);
router.post("/transactions", addTransaction);

export default router;
