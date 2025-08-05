import express from "express";
import {
  createJobPost,
  getAllPostOnlyRecruiter,
  getAllJobPosts,
  deleteJobPost,
  editJobpost,
  viewJobDetails,
  applyJob,
  getRecruiterApplications,
  getSeekerApplications,
} from "../controllers/JobPostController.js";
import verifyToken from "./../middleware/authMiddleware.js";

const routers = express.Router();

routers.post("/create-post", verifyToken, createJobPost);
routers.get("/recruiter/posts", verifyToken, getAllPostOnlyRecruiter);
routers.get("/get-all-posts", getAllJobPosts);
routers.get("/recruiter/applications", verifyToken, getRecruiterApplications);
routers.get("/applications", verifyToken, getSeekerApplications);
routers.delete("/delete-post/:id", verifyToken, deleteJobPost);
routers.put("/update-post/:id", verifyToken, editJobpost);
routers.get("/job-details/:id", viewJobDetails);
routers.post("/apply/:id", verifyToken, applyJob);

export default routers;
