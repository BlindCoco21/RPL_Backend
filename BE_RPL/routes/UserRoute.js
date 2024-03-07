import express from "express";
import {
  createUser,
  getUsers,
  getUsersById,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/user", getUsers);
router.get("/user/:id", getUsersById);
router.post("/user", createUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
