import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import {User} from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import{ApiResponse} from "../utils/ApiResponse.js";

const registerUser =  asyncHandler(async(req, res)=>{
    //get user details ftom frontend
    //validate user details-not empty
    //check if user already exists: username or email
    // check for images, check of avatar
    //upload to cloudinary, avatar check
    //create user object = create entry in db
    //send response
    //remove password and refresh token from response
    //check for user creation
    //return response

    const {fullname,email,username,password}=req.body;
    console.log("email",email,"password",password,"fullname",fullname,"username",username);

    if(
        [fullname,email,username,password].some((fields)=>fields?.trim()==="")
    ){
        throw new ApiError(400,"All fields are required");
    }

    const existedUser = await User.findOne({
        $or:[{ username:username },{ email:email }]
    })

    if(existedUser){
        throw new ApiError(409,"User already exists");
    }
    //upload to cloudinary
    const avatarLocalPath =req.files?.avatar [0]?.path;
    // const coverImageLocalPath =req.files?.coverImage [0]?.path;

    let coverImageLocalPath;

    if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
        )       {
     coverImageLocalPath = req.files.coverImage[0].path;
        }

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar is required");
    }

   

    const avatar= await uploadOnCloudinary(avatarLocalPath);
    const coverImage= await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar){
        throw new ApiError(400,"Avatar upload failed");
    }

           const user = await User.create({
                fullname,
                email,
                username:username.toLowerCase(),
                password,
                avatar: avatar.url,
                coverImage: coverImage?.url || "",
                
            })    
        
        const createdUser =  await User.findById(user._id).select
        ("-password -refreshToken"
        
        );

        if(!createdUser){
            throw new ApiError(500,"User registration failed");
        }
    
        return res.status(201).json(
            new ApiResponse(
                200,
                "User registered successfully",
                createdUser
            )
        )
        
}) 



export {registerUser,}