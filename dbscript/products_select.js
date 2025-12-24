const  {getConnection} = require('../dbconnection');
async function testConnection() {
  const con = await getConnection();
  try {
    const [rows] = await con.query('show tables;');
    console.log('DB接続成功:', rows);
    await con.end();
  } catch (err) {
    console.error('DB接続失敗:', err);
  }
}

testConnection();


