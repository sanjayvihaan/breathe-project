import mongoose from "mongoose";
import bcrypt from "bcryptjs";



// Create a user schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Unique email
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
}, {
    timestamps: true // Add timestamps
});

userSchema.pre('save', async function(next) {
    // Check if password field match
    if(this.password !== this.confirmPassword) {
        const error = new Error('Password does not match');
        return next(error);
    }



    // Proceed if password is not modified
    if(!this.isModified('password')) {
        next();
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


const User = mongoose.model('User', userSchema); // Create a user model

export default User; // Export the user model
