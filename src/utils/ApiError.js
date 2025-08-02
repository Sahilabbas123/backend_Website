// Custom error class that extends the built-in Error class
class ApiError extends Error {
    constructor(
        statusCode,                  // HTTP status code for the error (e.g., 400, 500)
        message = "something went wrong",  // Error message with a default value
        errors = [],                 // Additional error details, default is an empty array
        stack = ""                   // Optional stack trace override, default is empty
    ) {
        super(message);              // Call the parent Error class constructor with the message

        this.statusCode = statusCode; // Store the HTTP status code on the error object
        this.data = null;             // Placeholder for any data related to the error, currently null
        this.message = message;       // Store the error message (redundant but explicit)
        this.success = false;         // Boolean flag to indicate failure status
        this.errors = errors;         // Store additional error details

        if (stack) {
            this.stack = stack;       // Use provided stack trace if available
        } else {
            Error.captureStackTrace(this, this.constructor); // Generate stack trace excluding constructor call
        }
    }
}

// Export the ApiError class for use in other modules
export { ApiError }
