import { userModel } from "../model/user.model.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }
    
        const hashedPassword = await userModel.hashPassword(password);
    
        const newUser = new userModel({ name, email, password: hashedPassword, role });
        // const token = newUser.generateAuthToken();
        await newUser.save();
        
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const token = user.generateAuthToken();

        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}


export const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id).select("-password");
    console.log('user', user);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserProfile = async (req, res) => {
    try {
        const user = req.user;  
        const { name, email, phone, address } = req.body;

        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        user.address = address || user.address;
        await user.save();
        res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }

}
    