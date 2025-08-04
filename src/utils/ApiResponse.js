class ApiResponse {
    // Constructor accepts statusCode, data, and message (default is "success")
    constructor(statusCode, data, message = "success") {
        this.statusCode = statusCode;    // HTTP status code
        this.data = data;                // Actual response data
        this.message = message;          // Optional message
        this.success = statusCode < 400; // Success flag
    }
}

export { ApiResponse };
