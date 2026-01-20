const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4'
});

// 👇 ÉP charset cho mọi connection trong pool
(async () => {
  const connection = await pool.getConnection();
  await connection.query('SET NAMES utf8mb4');
  connection.release();
})();

module.exports = pool;
