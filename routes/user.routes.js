import express from 'express';
import { login,logout, register, updateProfile , forgotPassword,getAllUsers, resetPassword, saveJobForLater, removeSavedJob, getSavedJobs } from '../controller/user.controller.js';  
import isAuthenticated from '../middleware/isAuthenticated.js';
import { singleUpload } from '../middleware/multer.js';


const router = express.Router();

router.route("/register").post(singleUpload , register)
router.route("/login").post(login)
router.route("/logout").get(logout)
// router.route("/profile/update").post(isAuthenticated, singleUpload, updateProfile)
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").post(resetPassword);
router.post("/profile/update" , isAuthenticated , singleUpload, updateProfile)
router.post("/save-job/:jobId", isAuthenticated, saveJobForLater);
router.delete("/save-job/:jobId", isAuthenticated, removeSavedJob);
router.get("/saved-jobs", isAuthenticated , getSavedJobs);
router.get("/all", getAllUsers);

export default router;
