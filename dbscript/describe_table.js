const  {getConnection} = require('../dbconnection');

async function testConnection() {
  const con = await getConnection();
  try {
    const [rows] = await con.query('describe products');
    console.log('DB削除成功:', rows);
    await con.end();
  } catch (err) {
    console.error('DB接続失敗:', err);
  }
}

testConnection();


