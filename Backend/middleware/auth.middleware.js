import jwt from "jsonwebtoken";
import {userModel} from "../models/user.model.js";

export const authUser = async (req, res, next) => {
    
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
     
    if (!token) {
        return res.status(401).json({ message: "token is required"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        if(!decoded) {
            console.log('decoded is not found');
            
        }
        const user = await userModel.findById(decoded._id)
        if(!user) {
            console.log('user not found');

        }
        req.user = user

        return next()
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized"})
    }
}