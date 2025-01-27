import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath, folder) => {
  try {
    if (!localFilePath) {
      throw new Error("Please provide a valid file path");
    }
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // console.log(response);
    // file has been uploaded successfully
    // console.log("file uploaded successfully");
    // console.log("url of the file: ", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation failed
    return null;
  }
};

export { uploadOnCloudinary };
