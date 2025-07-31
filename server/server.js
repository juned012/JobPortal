import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
dbConnection();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = 5005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
