import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name: {
        type: String,   
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    role: { 
        type: String,
        enum: ['user', 'admin', 'manager'],
        default: 'user'
    }
}, { timestamps: true });


userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'} )
    return token;
}
    
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}


export const userModel = mongoose.model("user", userSchema);