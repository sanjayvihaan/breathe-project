import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';


// @desc    Auth user & get token
// route    POST /api/users/login
// access   Public

const authUser = asyncHandler (async (req, res) => { 
    const { email, password} = req.body; // Get the email and password from the request body

    const user = await User .findOne({ email }); // Find the user by email

    // If the user exists and the password matches, return the user data
    if(user && (await user.matchPassword(password))) {
        generateToken(res, user._id); // Generate a token and store it in a cookie
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    }
    else {
        res.status(401); // If the user does not exist or the password does not match, return a 401 status code
        throw new Error('Invalid email or password');
    }
    res.status(200).json({
        message: 'Auth User'
    })
});


// desc   Register a new user
// route  POST /api/users
// access Public

const registerUser = asyncHandler(async(req, res) => {
    const { name , email, password, confirmPassword } = req.body; // Get the name, email and password from the request body

    const userExists = await User.findOne({ email }); // Check if the user already exists

    // If the user already exists, return an error
    if(userExists) {
        res.status(400); // If the user already exists, return a 400 status code
        throw new Error('User already exists');
    }

    // Create a new user
    const user = await User.create({
        name,
        email,
        password,
        confirmPassword,

    });

    // If the user is created successfully, return the user data
    if(user) {
        generateToken(res, user._id); // Generate a token and store it in a cookie
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid User Data'); 
    }

    res.status(200).json({
        message: 'Register User'
    })
});


// desc   Logout user
// route  GET /api/users/logout
// access Private

const logout = asyncHandler(async(req, res) => {

    // Clear the cookie
    res.clearCookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });


    res.status(200).json({
        message: 'Logout User'
    })
});


// desc   Get user profile
// route  GET /api/users/profile
// access Private

const getUserProfile = asyncHandler(async(req, res) => {

    // Get the user data
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }

    res.status(200).json(user);


    res.status(200).json({
        message: 'Get User Profile'
    })
});


// desc   Update user profile
// route  PUT /api/users/profile
// access Private

const updateUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id); // Find the user by id  

    // If the user exists, update the user data

    if(user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if(req.body.password) {
            user.password = req.body.password;
        } 

        const updatedUser = await user.save(); // Save the updated user data
        
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        })

    } else {
        res.status(404); // If the user does not exist, return a 404 status code
        throw new Error('User not found');
    }

    res.status(200).json({
        message: 'Update User Profile'
    })
})



// Export the authUser function so that it can be used in other files
export { authUser, registerUser, logout, getUserProfile, updateUserProfile};