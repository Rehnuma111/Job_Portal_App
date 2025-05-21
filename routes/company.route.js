import express from 'express';
import { registerCompany, getCompanyById ,getCompany ,UpdateCompany} from '../controller/company.controller.js';  
import isAuthenticated from '../middleware/isAuthenticated.js';

const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany)
router.route("/get").get(isAuthenticated ,getCompany)
router.route("/get/:id").get(isAuthenticated ,getCompanyById)
router.route("/update/:id").put(isAuthenticated, UpdateCompany)


export default router;  
