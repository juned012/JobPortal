import JobModel from "./../models/JobModel.js";

export const createJobPost = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      locationType,
      salary,
      type,
      experience,
      description,
      requirements,
      deadline,
    } = req.body;

    const job = new JobModel({
      title,
      company,
      location,
      locationType,
      salary,
      type,
      experience,
      description,
      requirements,
      deadline,
      postedBy: req.user._id,
    });

    await job.save();

    return res.status(201).json({
      success: true,
      message: "Job posted successfully",
      job,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create job post",
      error: error.message,
    });
  }
};

export const getAllPostOnlyRecruiter = async (req, res) => {
  try {
    const userId = req.user._id;

    const jobs = await JobModel.find({ postedBy: userId }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch job posts",
      error: error.message,
    });
  }
};

export const getAllJobPosts = async (req, res) => {
  try {
    const jobs = await JobModel.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Job retrieval successful",
      jobs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch job posts",
      error: error.message,
    });
  }
};

export const deleteJobPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user._id;

    const jobPost = await JobModel.findById(postId);

    if (!jobPost) {
      return res
        .status(404)
        .json({ success: false, message: "Job post not found" });
    }

    if (jobPost.postedBy.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this post",
      });
    }

    await JobModel.findByIdAndDelete(postId);

    res
      .status(200)
      .json({ success: true, message: "Job post deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while deleting post",
      error: error.message,
    });
  }
};

export const editJobpost = async (req, res) => {
  try {
    const userId = req.user._id;
    const postId = req.params.id;
    const updates = req.body;
    const job = await JobModel.findById(postId);

    if (!job) {
      return res
        .status(404)
        .json({ success: false, message: "Job post not found" });
    }

    if (job.postedBy.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to edit this job post",
      });
    }

    const updatedJob = await JobModel.findByIdAndUpdate(postId, updates, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      success: true,
      message: "Job post updated successfully",
      job: updatedJob,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while updating post",
      error: error.message,
    });
  }
};

export const viewJobDetails = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await JobModel.findById(jobId).populate(
      "postedBy",
      "username email"
    );
    res.status(200).json({
      success: true,
      message: "Job detailed fetch successfully",
      job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while fetching job post detailed",
      error: error.message,
    });
  }
};
