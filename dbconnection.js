import mysql from 'mysql2/promise';
export async function getConnection() {
  return mysql.createPool({
    host: "ec-app-mysql.cybgqaq4ml2z.us-east-1.rds.amazonaws.com",      // RDSエンドポイント
    user: "daisuke2416",      // admin
    password: "5hbkbdjg",
    database: "ec_project",  // ec_app
    port: 3306
    });
    
}