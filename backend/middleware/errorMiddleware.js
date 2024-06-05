//Not found middleware

const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`); // Create a new error object
    res.status(404); // Set the status code to 404
    next(error); // Call the next middleware
}

// Error handling middleware

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Set the status code to 500 if it is not set
    res.status(statusCode); // Set the status code

    let message = err.message; // Set the message to the error message

    if (err.name == 'CastError' && err.kind == 'ObjectId') { // Check if the error is a CastError
        statusCode = 404;
        message = 'Resource not found';
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // Set the stack trace to null in production
    })
}


export { notFound, errorHandler }; // Export the middleware functions