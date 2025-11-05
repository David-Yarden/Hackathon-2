import transactions from "../db/db.js";

export async function getDashboard(req, res) {
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((a,b)=>a+b.amount,0);
  const totalExpense = transactions.filter(t => t.amount < 0).reduce((a,b)=>a+b.amount,0);
  const balance = totalIncome + totalExpense;
  res.render("dashboard", { transactions, totalIncome, totalExpense, balance });
}

export async function getTransactions(req, res) {
  const sorted = transactions.slice().sort((a,b) => new Date(b.date) - new Date(a.date));
  res.render("transactions", { transactions: sorted });
}

export async function addTransaction(req, res) {
  const { amount, category, date, note } = req.body;
  transactions.push({
    id: transactions.length + 1,
    amount: Number(amount),
    category,
    date,
    note
  });
  res.redirect("/");
}
