// Controllers are used to write the logic for the API endpoints. We can also write the logic for the API endpoints in the service layer but it is not a good practice. We should always write the logic for the API endpoints in the controller layer.
// Controller will use the service layer to perform CRUD operations and service layer will use the repository layer and repository layer will use the models and models will interact with the database.
// We will segregate the routes, middleware, and contoller in different folders.
/*
    app.get('/api/cities', middlewares, cityController.get);
*/ 
// We can write all three in the same file but it is not a good practice. We should always segregate the routes, middleware, and controller in different folders.
// Controller will get acutal http call, and it will wait for the response from the service layer. Service layer will wait for the response from the repository layer and repository layer will wait for the response from the models and models will interact with the database. Once the response is received from the database, it will go back to the models, then repository, then service, then controller, and then finally to the client.
// We will creater router in the routes folder and then we will use that router in the app.js file.
// We use express router to create the routes. With less repetition of code, we can create multiple routes.  

// Inorder to use the city service, we need to create an object of the city service

// Controllers for the City table

/*

    Create 
    - Create a new city
    - POST -> 
    - data -> req.body

    Delete
    - Delete a city
    - DELETE -> /city/:id
    - data -> req.params.id

    Get
    - Get a city
    - GET /city/:id
    - data -> req.params.id

    Update
    - Update a city
    - PATCH /city/:id
    - data -> req.params.id, req.body


*/

const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
}
// DELETE. -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        });
    }
}

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
}

// Patch -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the cities',
            err: error
        });
    }
}


module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}