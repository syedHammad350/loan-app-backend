import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const create_user = async (req, res) => {
  try {
    const { name, email, password, phonNo, profileimage } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const exiting_user = await User.findOne({ email });
    if (exiting_user) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const hashpassword = await bcrypt.hash(password, 8);
    const myuser = new User({
      name,
      email,
      password: hashpassword,
      profileimage,
      phonNo,

    })
    await myuser.save();
    return res.status(201).json({ message: "User created successfully", myuser });


  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
export const signin_user = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    const passmatch = await bcrypt.compare(password, user.password)
    if (!passmatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const token = await jwt.sign({ id: user._id, email: user.email }, process.env.jWT_KEY, {
      expiresIn: "1h",
    });
    return res
      .status(200)
      .json({ message: "User logged in successfully", token, user });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }

}
