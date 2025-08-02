import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
dotenv.config();
dbConnection();

const app = express();
app.use(
  cors({
    origin: "https://jobportal-client-lusj.onrender.com",
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/job", jobRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
