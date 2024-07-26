import express from "express"
import { getCompany, getCompanyById, registerCompany, updatedCompany } from "../controllers/company.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


const router = express.Router();
router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanyById)
router.route("/update/:id").put(isAuthenticated, updatedCompany);

export default router;