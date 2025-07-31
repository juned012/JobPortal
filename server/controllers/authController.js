import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/userMode.js";

export const userSignup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "Singup successfully" });
  } catch (error) {
    res.status(401).json({ message: "Error during singup" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(401).json({ message: "Error during singup" });
  }
};
