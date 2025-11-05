import express from "express";
const router = express.Router();

// Données fictives pour tester le front
let transactions = [
  { id: 1, type: "income", amount: 2000, category: "Salary", date: "2025-11-05", note: "Nov salary" },
  { id: 2, type: "expense", amount: -50, category: "Food", date: "2025-11-05", note: "Lunch" },
];

// Dashboard
router.get("/", (req, res) => {
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((a,b)=>a+b.amount,0);
  const totalExpense = transactions.filter(t => t.amount < 0).reduce((a,b)=>a+b.amount,0);
  const balance = totalIncome + totalExpense;
  res.render("dashboard", { transactions, totalIncome, totalExpense, balance });
});

// Transactions page
router.get("/transactions", (req, res) => {
  res.render("transactions", { transactions });
});

// Ajouter transaction (mock)
router.post("/transactions", (req, res) => {
  const { type, amount, category, date, note } = req.body;
  transactions.push({
    id: transactions.length + 1,
    type,
    amount: Number(amount),
    category,
    date,
    note
  });
  res.redirect("/");
});

export default router;
