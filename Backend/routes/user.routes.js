import { getUserProfile, loginUser, registerUser, updateUserProfile } from "../controller/user.controller.js";

import express from "express";

const router = express.Router();

router.post('/register', registerUser);
router.get('/login', loginUser)
router.get('/profile', getUserProfile)
router.put('/update-profile', updateUserProfile)

export default router;