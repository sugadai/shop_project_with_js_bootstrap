const  {getConnection} = require('../dbconnection');

async function testConnection() {
  const con = await getConnection();
  try {
    const [rows] = await con.query(
        `CREATE TABLE products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        sku VARCHAR(255) UNIQUE,
        price INT NOT NULL,
        discount_rate INT DEFAULT 0,
        shipping_days INT NOT NULL,
        stock INT DEFAULT 0,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `);
    console.log('productsテーブル作成成功:', rows);
    await con.end();
  } catch (err) {
    console.error('DB接続失敗:', err);
  }
}

testConnection();


