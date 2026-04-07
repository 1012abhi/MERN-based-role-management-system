import { userModel } from "../model/user.model.js";


// Can manage all system records 
// Important Rule: Only Admin can create Managers


//Can add Managers 
export const createManager = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await userModel.hashPassword(password);

        const newManager = new userModel({ name, email, password: hashedPassword, role: 'manager' });
        await newManager.save();

        res.status(201).json({ message: "Manager created successfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

// • Can add Users 
export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await userModel.hashPassword(password);

        const newUser = new userModel({ name, email, password: hashedPassword, role: 'user' });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

// • Can edit Users • 
export const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        if(name === undefined && email === undefined && password === undefined) {
            return res.status(400).json({ message: "At least one field is required to update" });
        }
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }   
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) {
            const hashedPassword = await userModel.hashPassword(password);
            user.password = hashedPassword;
        }   
        await user.save();
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

// Can view profiles of all Users and Managers 
export const viewAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({ role: { $in: ['user', 'manager'] } });
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

