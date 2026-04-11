import { getUserById, loginUser, registerUser, updateUserProfile } from "../controller/user.controller.js";

import express from "express";
import { authUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser)
router.get('/:id', authUser, getUserById);
router.put('/update-profile', authUser, updateUserProfile)

export default router;