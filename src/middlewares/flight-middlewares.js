// Middlewares are just functions that have access to the request and response objects and the next middlware, they are specially useful for validations, authentication, authorization, etc. In our case we will be using them for validation and authentication.
// We should validate the request body before sending it to the controller, so we will create a middleware for that.
// Middleware filters out the properties which are not abiding the contract.
const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId || 
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime || 
        !req.body.price
    ){
        // If any of the body parameter is missing then we will go inside th if block
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Invalid request body for create flight',
            err: 'Missing mandatory parameters to create flight' 
        });
    }

    next();
}

module.exports = {
    validateCreateFlight
}