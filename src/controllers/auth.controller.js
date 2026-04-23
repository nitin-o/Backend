import { User } from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

// 🔐 REGISTER
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // validation 
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    

    // create user (password auto hashed via model)
    const user = await User.create({
      username,
      email,
      password,
    });
    

    const token = generateToken(user._id);

    return res.status(201).json({
      message: "User registered successfully",
      user,
      token,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

// 🔐 LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // compare password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      message: "Login successful",
      user,
      token,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};