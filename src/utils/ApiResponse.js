class ApiResponse {
    // Constructor accepts statusCode and message (default is "success")
    constructor(statusCode, message ="success") {

        this.statusCode = statusCode  // Store the HTTP status code
        this.data = data              // Store the response data (note: 'data' is not defined in parameters)
        this.message = message        // Store the response message
        this.success = this.statusCode < 400  // Boolean indicating success if status code is less than 400
    }
}


export{ApiResponse}