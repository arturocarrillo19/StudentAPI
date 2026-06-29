require("dotenv").config();

const mysql = require("mysql2/promise");

async function test() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT)
    });

    console.log("✅ Conexión exitosa con mysql2");
    await connection.end();
  } catch (error) {
    console.error("❌ Error:");
    console.error(error);
  }
}

test();