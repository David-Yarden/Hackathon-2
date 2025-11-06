import express from "express";
import {
  getDashboard,
  getTransactions,
  addTransaction,
  deleteTransaction
} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/", getDashboard);
router.get("/transactions", getTransactions);
router.post("/transactions", addTransaction);
router.post("/transactions/delete/:id", deleteTransaction);

export default router;
