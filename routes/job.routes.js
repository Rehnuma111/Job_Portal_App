import express from "express";
import {
  postJob,
  getJob,
  getAdminJobs,
  getJobById,
} from "../controller/job.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(getJob);
router.route("/getadminJobs").get(isAuthenticated , getAdminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);

export default router;
