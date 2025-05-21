import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJobs = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "Job Id is required",
        success: false,
      });
    }
    //check if the user has already applied for the job
    const existingJobApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingJobApplication) {
      return res.status(400).json({
        message: "You Have already applied for this job",
        success: false,
      });
    }

    // check if the jobs exits
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job Not Found",
        success: false,
      });
    }
    //create a new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);

    await job.save();
    return res.status(201).json({
      message: "Job Applied Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAppliedJobs = async (req , res) => {
    try {
        const userId = req.id
        const application = await Application.find({applicant:userId});

    } catch (error) {
        
    }
}