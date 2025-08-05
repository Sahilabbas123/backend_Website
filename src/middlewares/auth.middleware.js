import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiError";
import { User } from "../models/user.model";

export const varifyJWT =asyncHandler (async(req, _, next)=>{
    try {
        const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "");//jwt token is sent in the cookies of the browser
            if(!token){
                throw new ApiError(401,"Unauthorized");
            }
    
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,)
            await User.findById(decodedToken._id).select("-password -refreshToken");//to exclude the password and refreshToken
            if(!user){
                //todo discuss about frontend
                throw new ApiError(401,"Invalid access token");
            }
    
            req.user = user;
            next();
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid access token");
    }
}) 