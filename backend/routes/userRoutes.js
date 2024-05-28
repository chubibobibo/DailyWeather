import express from "express";
const router = express.Router();

//component imports
import { register, login, logout } from "../controllers/userControllers.js";

//validation imports
import {
  registerValidation,
  loginValidation,
} from "../middleware/inputValidation.js";

router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);
router.get("/logout", logout);

export default router;
