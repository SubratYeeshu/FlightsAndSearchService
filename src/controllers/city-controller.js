// Controllers are used to write the logic for the API endpoints. We can also write the logic for the API endpoints in the service layer but it is not a good practice. We should always write the logic for the API endpoints in the controller layer.
// Controller will use the service layer to perform CRUD operations and service layer will use the repository layer and repository layer will use the models and models will interact with the database.
// We will segregate the routes, middleware, and contoller in different folders.
/*
    app.get('/api/cities', middlewares, cityController.get);
*/ 
// We can write all three in the same file but it is not a good practice. We should always segregate the routes, middleware, and controller in different folders.



const {CityService} = require('../services/city-service');
const cityService = new CityService();

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

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully created a city",
            err : {}
        });
    }catch (error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Something went wrong",
            err : error
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully deleted a city",
            err : {}
        });
    }catch (error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete the city",
            err : error
        })
    }
}

const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully fetched a city",
            err : {}
        });
    }catch (error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to get the city",
            err : error
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : "Successfully updated a city",
            err : {}
        });
    }catch (error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update the city",
            err : error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}