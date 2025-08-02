import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
    },
    locationType: {
      type: String,
      enum: ["Remote", "On-site", "Hybrid"],
      default: "Remote",
    },
    location: {
      type: String,
      default: "N/A",
    },

    salary: {
      type: String,
    },
    type: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Internship", "Contract"],
      default: "Full-Time",
    },
    experience: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
    },
    requirements: {
      type: String,
    },
    deadline: {
      type: Date,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applicants: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        appliedAt: { type: Date, default: Date.now },
        status: {
          type: String,
          enum: ["pending", "shortlisted", "interview", "selected", "rejected"],
          default: "pending",
        },
      },
    ],
  },
  { timestamps: true }
);

const JobModel = mongoose.model("Job", jobSchema);

export default JobModel;
