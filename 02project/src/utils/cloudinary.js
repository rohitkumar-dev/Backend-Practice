import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

console.log("Cloudinary config:: ", cloudinary.config());
console.log("Cloud key::", process.env.CLOUDINARY_API_KEY);
console.log("Cloud secret::", process.env.CLOUDINARY_API_SECRET);
console.log("Cloud name::", process.env.CLOUDINARY_CLOUD_NAME);


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return
        //upload file on cloudinary
        console.log("path:: ", localFilePath);
        console.log("Cloud name::", process.env.CLOUDINARY_CLOUD_NAME);
        
        const response = await cloudinary.uploader.upload(localFilePath, {
            folder: 'backendPlaylist',
            resource_type: "auto"
        })
        console.log("File uploaded on cloudinary")
        console.log(response)
        return response
    } catch (error) {
        //remove the locally saved temp file if operation failed
        fs.unlinkSync(localFilePath)
        console.log("cloudinary upload failed");
        
        return null
    }
}

export {uploadOnCloudinary}

