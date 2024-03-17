import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controlles/userController.js";
import { protect } from "../middlware/authMiddleware.js";

router.post("/", registerUser);
router.post("/auth/", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
