import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';


// Middleware to protect routes
const protect = asyncHandler(async(req, res, next) => {
    let token;

    token = req.cookies.jwt; // Get the token from the cookie

    if (token) {
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token

            req.user = await User.findById(decoded.userId).select('-password'); // Find the user by id and exclude the password

            next(); // If the token is valid, call the next middleware
        } catch (error) {
            res.status(401); // If the token is invalid, return a 401 status code
            throw new Error('Not authorized, token failed');
        }
    } else {
        res.status(401); // If the token does not exist, return a 401 status code
        throw new Error('Not authorized, no token');
    }
})


export { protect }; // Export the protect middleware