import express from "express";
import { createUser, editUser, viewAllUsers } from "../controller/manager.controller.js";

const router = express.Router();

router.post('/createUser', createUser);
router.put('/editUser/:id', editUser);
router.get('/viewAllUsers', viewAllUsers);

export default router;