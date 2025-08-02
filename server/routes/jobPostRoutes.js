import express from "express";
import {
  createJobPost,
  getAllPostOnlyRecruiter,
  getAllJobPosts,
  deleteJobPost,
} from "../controllers/JobPostController.js";
import verifyToken from "./../middleware/authMiddleware.js";

const routers = express.Router();

routers.post("/create-post", verifyToken, createJobPost);
routers.get("/recruiter/posts", verifyToken, getAllPostOnlyRecruiter);
routers.get("/get-all-posts", getAllJobPosts);
routers.delete("/delete-post/:id", verifyToken, deleteJobPost);

export default routers;
