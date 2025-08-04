import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});


const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // console.log("✅ File is uploaded to Cloudinary:", response.url);
    // return response;
    
    fs.unlinkSync(localFilePath);
    return response

} catch (error) {
  console.error("❌ Cloudinary upload error:", error); // 👈 this is critical
  fs.unlinkSync(localFilePath);
  return null;
}
}


export{uploadOnCloudinary}