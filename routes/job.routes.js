import express from "express";
import {
  postJob,
  getJob,
  getAdminJobs,
  getJobById,
  getFilterJobs,
  getFiltersValue
} from "../controller/job.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(getJob);
router.get("/get/filter", getFilterJobs);
router.route("/getadminJobs").get(isAuthenticated , getAdminJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.get("/filtersValue" , getFiltersValue)

export default router;
