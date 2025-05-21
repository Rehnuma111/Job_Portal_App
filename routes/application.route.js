import express from "express";
import { applyJobs, getApplicants, getAppliedJobs, updateStatus } from "../controller/application.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJobs);
router.route("/get").get(isAuthenticated , getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticated , getApplicants);
router.route("/status/:id/update").post(isAuthenticated, updateStatus);

export default router;
