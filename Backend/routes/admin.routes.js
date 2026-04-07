import express from "express";
import { createManager, createUser, editUser, viewAllUsers } from "../controller/admin.controller.js";

const router = express.Router();

router.post('/createManager', createManager);
router.post('/createUser', createUser);
router.put('/editUser/:id', editUser);
router.get('/viewAllUsers', viewAllUsers);

export default router;