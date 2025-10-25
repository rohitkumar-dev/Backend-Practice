import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/userModel.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from '../utils/ApiResponse.js'

const registerUser = asyncHandler( async (req, res)=>{
    // get user details
    // validation
    // check if already exists (username, email)
    // check for image- upload to cloudinary
    // create user object- create entry in DB
    // remove passwords and refresh token field from response
    // check for user creating
    // reutrn res

    const {fullName, email, userName, password} = req.body
    console.log(fullName, email, userName, password)
    if( [fullName, email, userName, password].some((field)=>field?.trim()==="") ){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = User.findOne({
        $or: [{userName}, {email}]
    })

    if(existedUser){
        throw new ApiError(400, "User already registered")
    }

    console.log(req.files)    
    const avatorLocalPath = req.files?.avator[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path
    
    if(!avatorLocalPath){
        throw new ApiError(400, "Avator file is required")
    }

    const avator = await uploadOnCloudinary(avatorLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avator){
        throw new ApiError(400, "Avator file is required")
    }

    const user = User.create({
        fullName,
        avator: avator.url,
        coverImage: coverImage.url || "",
        userName: userName.toLowerCase(),
        email,
        password
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registring")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )

    res.status(200).json({
        message: "OK"
    })
})


export { registerUser }

// 14/25-----13:56