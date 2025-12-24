const  {getConnection} = require('../dbconnection');

async function testConnection() {
  const con = await getConnection();
  try {
    const [rows] = await con.query(
        `CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        shipping_address TEXT,
        role VARCHAR(20) DEFAULT "user",
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)
    `);
    console.log('DB接続成功:', rows);
    await con.end();
  } catch (err) {
    console.error('DB接続失敗:', err);
  }
}

testConnection();


