import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import jobPostRoutes from "./routes/jobPostRoutes.js";

dotenv.config();
dbConnection();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/job", jobPostRoutes);

const PORT = 5005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
