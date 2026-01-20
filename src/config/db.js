const mysql = require('mysql2/promise'); // 

const pool = mysql.createPool({
    host: process.env.DB_HOST,      // [cite: 186]
    user: process.env.DB_USER,      // [cite: 187]
    password: process.env.DB_PASSWORD, // [cite: 188]
    database: process.env.DB_NAME,   // [cite: 189]
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4'
});

module.exports = pool; // [cite: 191]