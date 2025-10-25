import {vs as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINART_CLOUD_NAME, 
  api_key: process.env.CLOUDINART_API_KEY, 
  api_secret: process.env.CLOUDINART_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("File uploaded on cloudinary")
        console.log(response)
        return response
    } catch (error) {
        //remove the locally saved temp file if operation failed
        fs.unlinkSync(localFilePath)
        return null
    }
}


