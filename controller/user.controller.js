// import mongoose from "mongoose";
// import User from "../models/user.model.js";

// export const createUser = async (req, res) => {
//   try {
//     const { name, email } = req.body;
//     console.log("Received Data:", name, email);

//     if (!name || !email) {
//       return res.status(400).json({
//         error: "Name , Email , and Passowrd is required",
//       });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({
//         error: "User with this email already exists",
//       });
//     }

//     const user = new User({ name, email });
//     await user.save();
//     res.status(201).json({
//       data: user,
//       success: "Data Saved Successfully",
//     });
//   } catch (error) {
//     console.error("Create user error:", error.message);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// };

// export const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json({
//       success: true,
//       data: users,
//     });
//   } catch (error) {
//     console.log("error ", error);
//   }
// };

// export const getUserById = async (req, res) => {
//   try {
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({
//         success: false,
//         error: "Invalid user ID format",
//       });
//     }
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({
//         error: "User Not Found",
//       });
//     }else{
//       res.json({
//         success: true,
//         data: user,
//       });
//     }
//   } catch (error) {
//     console.log("error ", error);
//   }
// };

// export const updateUser = async(req, res)=>{
//   try {
//     const updated = await User.findByIdAndUpdate()
//   } catch (error) {
    
//   }
// }