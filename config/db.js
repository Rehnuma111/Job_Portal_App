import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${connection.connection.name}`);
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        
    }
};

export default connectDB;