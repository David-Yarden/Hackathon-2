import { openDB } from "../db/db.js";

export async function getDashboard(req, res) {
  const db = await openDB();
  const transactions = await db.all("SELECT * FROM transactions");
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((a,b)=>a+b.amount,0);
  const totalExpense = transactions.filter(t => t.amount < 0).reduce((a,b)=>a+b.amount,0);
  const balance = totalIncome + totalExpense;
  res.render("dashboard", { transactions, totalIncome, totalExpense, balance });
}

export async function getTransactions(req, res) {
  const db = await openDB();
  const transactions = await db.all("SELECT * FROM transactions ORDER BY date DESC");
  res.render("transactions", { transactions });
}

export async function addTransaction(req, res) {
  const { amount, category, date, note } = req.body;
  const db = await openDB();
  await db.run("INSERT INTO transactions (amount, category, date, note) VALUES (?, ?, ?, ?)", [amount, category, date, note]);
  res.redirect("/");
}
