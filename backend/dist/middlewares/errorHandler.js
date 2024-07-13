"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error('Error caught by error handler middleware:', err);
    // Default status code and error message
    let statusCode = 500;
    let message = 'Internal Server Error';
    // Handle specific error types
    if (err instanceof SyntaxError && 'body' in err) {
        // Syntax errors in JSON parsing
        statusCode = 400;
        message = 'Bad Request: Invalid JSON';
    }
    else if (err.name === 'ValidationError') {
        // Mongoose validation errors
        statusCode = 422; // Unprocessable Entity
        message = err.message;
    }
    else if (err.name === 'UnauthorizedError') {
        // JWT authentication errors
        statusCode = 401;
        message = 'Unauthorized: Invalid Token';
    }
    else if (err.name === 'NotFoundError') {
        // Resource not found errors
        statusCode = 404;
        message = err.message || 'Not Found';
    }
    // Send the error response to the client
    res.status(statusCode).json({ error: true, message });
};
exports.default = errorHandler;
