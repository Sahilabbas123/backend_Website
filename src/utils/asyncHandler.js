// Higher-order function that takes an async request handler to wrap it for error handling
const asyncHandler = (requestHandler) => {

    // Middleware function that Express will call with req, res, next
    return (req, res, next) => {
        // Call the requestHandler, wrap in Promise.resolve to handle both sync/async
        Promise.resolve(requestHandler(req, res, next)).
        // If a rejection/error occurs, pass it to Express error handler via next()
        catch((err) => next(err));
    }
}

export { asyncHandler }
