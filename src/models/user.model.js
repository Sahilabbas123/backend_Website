import mongoose , { Schema } from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {

        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
          },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
          },

        fullname: {
            type: String,
            required: true,
            trim: true,
           },

        avatar: {
            type: String,// cloudinary service we will use // url
            required: true,
        },

        coverImage :{
            type: String,
        },

        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video",
            },
        ],

        password: {
            type: String,
            required: [true, "Password is required"],
            
          },

        refreshToken: {
            type: String,
        },

    },
    
    {timestamps:true});

userSchema.pre("save", async function(next){

    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);// this logic is used to hash the password
    next();

})

userSchema.methods.isPasswordCorrect = async function(password){// this function is used to check the password
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullname: this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY,
        },
        {
            expiresIn: "1d",
        }
    )
};// this function is used to generate the access token

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY,
        },
    )
};// this function is used to generate the refresh token

export const User = mongoose.model("User", userSchema);