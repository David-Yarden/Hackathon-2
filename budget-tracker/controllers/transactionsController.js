import pool from "../db/db.js";

export async function getDashboard(req, res) {
  try {
    const result = await pool.query("SELECT * FROM transactions ORDER BY created_at DESC");
    const transactions = result.rows;

    const totalIncome = transactions
      .filter(t => t.type === "income")
      .reduce((a, b) => a + Number(b.amount), 0);

    const totalExpense = transactions
      .filter(t => t.type === "expense")
      .reduce((a, b) => a + Number(b.amount), 0);

    const balance = totalIncome - totalExpense;

    res.render("dashboard", { transactions, totalIncome, totalExpense, balance });
  } catch (err) {
    console.error("❌ getDashboard error:", err);
    res.status(500).send("Database error");
  }
}

export async function getTransactions(req, res) {
  try {
    const result = await pool.query("SELECT * FROM transactions ORDER BY created_at DESC");
    res.render("transactions", { transactions: result.rows });
  } catch (err) {
    console.error("❌ getTransactions error:", err);
    res.status(500).send("Database error");
  }
}

export async function addTransaction(req, res) {
  try {
    const { title, amount, type } = req.body;

    if (!title || !amount || !type) {
      return res.status(400).send("Missing fields");
    }

    await pool.query(
      "INSERT INTO transactions (title, amount, type) VALUES ($1, $2, $3)",
      [title, amount, type]
    );

    res.redirect("/");
  } catch (err) {
    console.error("❌ addTransaction error:", err);
    res.status(500).send("Database error");
  }
}

export async function deleteTransaction(req, res) {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM transactions WHERE id = $1", [id]);
    res.redirect("/");
  } catch (err) {
    console.error("❌ deleteTransaction error:", err);
    res.status(500).send("Database error");
  }
}
