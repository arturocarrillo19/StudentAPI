require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a MySQL exitosa");

    await sequelize.sync();
    console.log("✅ DB sincronizada");

    app.listen(PORT, () => {
      console.log(`🚀 http://localhost:${PORT}`);
    });

  } catch (error) {
    console.log("❌ Error:", error);
  }
}

start();