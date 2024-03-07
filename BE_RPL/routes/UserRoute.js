import express from "express";
import {
  createUser,
  getUsers,
  getUsersById,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/user", getUsers);
router.get("/user/:id", getUsersById);
router.post("/user", createUser);

export default router;
