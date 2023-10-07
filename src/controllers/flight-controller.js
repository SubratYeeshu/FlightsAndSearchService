const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes'); 
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        // If in request body we have a field that is not in the model, it will be ignored, it makes request body bulky and also it is not a good practice to send unwanted data to the server.
        let flightRequestData = {
            flightNumber: req.body.flightNumber,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price,
            airplaneId: req.body.airplaneId,
        }

        const flight = await flightService.createFlight(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json(
            {
                data: response,
                success: true,
                message: 'Successfully fetched the flight',
                err: {}
            }
        );

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json(
            {
                data: response,
                success: true,
                message: 'Successfully fetched the flight',
                err: {}
            }
        );

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the flight',
            err: error
        });
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
}