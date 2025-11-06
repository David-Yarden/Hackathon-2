<div align="center">

# 💸 Budget Tracker

### _A sleek and simple app to manage your income & expenses with style._

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-8C5AFF?style=for-the-badge&logo=ejs&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

</div>

---

## 🌟 Overview

**Budget Tracker** is a lightweight full-stack web application built during a 2-day hackathon.  
It helps users visualize their income, expenses, and balance through an elegant dashboard with charts, dark mode, and PDF export.

---

## 🚀 Features

- ✨ **Interactive Dashboard** — clear summary of all finances  
- 📊 **Donut Chart** — live visualization of income vs expenses  
- 🌙 **Dark / Light Mode** — instant theme switching  
- 📄 **Export to PDF** — generate financial report snapshots  
- 🗑️ **Add / Delete Transactions** — simple and quick management  
- 💾 **PostgreSQL Integration** — persistent data storage  

---

## 🧠 Tech Stack

| Layer | Technologies |
|:------|:--------------|
| **Frontend** | HTML, CSS, Bootstrap, EJS |
| **Backend** | Node.js, Express |
| **Database** | PostgreSQL |
| **Visualization** | Chart.js |
| **Utilities** | html2canvas, jsPDF |

---

## ⚙️ Installation

### 1️⃣ Clone the repo
```bash
git clone https://github.com/yourusername/budget-tracker.git
cd budget-tracker ```

2️⃣ Install dependencies

npm install

3️⃣ Configure the database

Create a PostgreSQL database:

CREATE DATABASE hackathon_db;

Update /db/db.js with your credentials:

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hackathon_db",
  password: "yourpassword",
  port: 5432,
});

4️⃣ Initialize the tables

npm run initdb

5️⃣ Start the app

npm start

Then open 👉 http://localhost:3000
🖼️ Preview
<div align="center"> <img src="https://via.placeholder.com/900x500?text=Budget+Tracker+Dashboard" alt="Dashboard Preview" width="80%"> <p><i>Modern dashboard view with dark mode and dynamic chart</i></p> </div>
👨‍💻 Authors
Name	Role
David Jordan	Backend & UI
Michael Fellous	Database & Logic
🏁 Hackathon Project

Built for Hackathon 2 (2-day challenge)

    Theme: Budget Tracker using Node.js, Express & Database
    Tools: VSCode, GitHub, PostgreSQL, EJS

<div align="center">

⭐ If you like this project, give it a star!
Made with ❤️ by David & Michael.
</div> ```
