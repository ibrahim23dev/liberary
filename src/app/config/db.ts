import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const uri =
      process.env.MONGODB_URI
    // console.log(uri);
    await mongoose.connect(uri as string);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
