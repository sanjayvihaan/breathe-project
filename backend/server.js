import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 4000;
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cookiesParser from 'cookie-parser';
import cors from 'cors';

connectDB(); // Connect to the MongoDB database

const app = express();

// Middleware - Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookiesParser()); // Middleware for parsing cookies

// Middleware - Cors
app.use(cors());

// Routes
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Server Ready!')
})


// Middleware - Custom error handler
app.use(notFound); // Middleware for 404 errors
app.use(errorHandler); // Middleware for error handling



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})