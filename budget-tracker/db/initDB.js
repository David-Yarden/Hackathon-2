import pool from './db.js';

const init = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100),
        amount NUMERIC,
        type VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Table transactions prête');
  } catch (err) {
    console.error('❌ Erreur initDB:', err);
  } finally {
    pool.end();
  }
};

init();
