import mongoose from "mongoose";
import dotenv from "dotenv";
import { ENV_KEYS } from "../constants.js";

dotenv.config({
  path: "./.env",
});

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${ENV_KEYS.MONGODB_URI}/${ENV_KEYS.DB_NAME}`
    );

    if (connectionInstance.connection.readyState === 1) {
      console.log(
        `\nMongoDB connected!! DB HOST:  ${connectionInstance.connection.host}`
      );
    } else {
      throw new Error("Database connection not established");
    }
  } catch (error) {
    console.error("MongoDB connection ERROR: ", error);
    console.log(
      "Please check your MongoDB connection string and ensure MongoDB is running"
    );
    process.exit(1);
  }
};

export default connectDB;
