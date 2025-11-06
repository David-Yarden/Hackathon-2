import express from "express";
import dotenv from "dotenv";
import transactionsRouter from "./routes/transactionRoutes.js";
import pool from "./db/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", transactionsRouter);

try {
  const result = await pool.query("SELECT NOW()");
  console.log("✅ Database connected:", result.rows[0]);
} catch (err) {
  console.error("❌ DB connection error:", err);
}

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
