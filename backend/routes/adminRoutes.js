import express from "express";
const router = express.Router();

//import controllers
import { loggedUser, updateProfile } from "../controllers/adminControllers.js";

//import auth and validation
import { updateProfileValidation } from "../middleware/inputValidation.js";
import { userAuth } from "../middleware/authentication.js";

router.get("/loggedUser", userAuth, loggedUser);
router.post(
  "/updateProfile/:id",
  userAuth,
  updateProfileValidation,
  updateProfile
);

export default router;
