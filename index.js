// This is the main entry point of the application. It sets up the server, connects to the database, and defines the routes.
const express = require("express");
const cors = require("cors");
const app = express();

// Database connection
const sequelize = require("./src/config/Database.js");
const dotenv = require("dotenv");
const MessageRoutes = require("./src/routes/MessageRoutes");

dotenv.config();

app.use(cors());
app.use(express.json());


app.use('/api/messages', MessageRoutes);

sequelize
  .authenticate()
 .then(() => {
    console.log('✔️ Connected to MySQL');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`🚀 Server running at http://localhost:${process.env.PORT}`));
  })
  .catch(err => console.error('❌ DB connection error:', err));
