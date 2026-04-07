import express from "express";
import { createManager, createUser, editUser, viewAllUsers } from "../controller/admin.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authUser); // Apply authentication middleware to all admin routes

router.post('/createManager', createManager);
router.post('/createUser', createUser);
router.put('/editUser/:id', editUser);
router.get('/viewAllUsers', viewAllUsers);

export default router;