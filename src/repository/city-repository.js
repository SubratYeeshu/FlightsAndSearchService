// Repository used to access the database and perform CRUD operations on the City table
// We use repository pattern to separate the database access logic from the business logic
// This makes the code more readable and maintainable
// Main purpose of this file is to perform CRUD operations on the City table, we can also do this in the controller but it is not a good practice
// There can be many types of errors like client side errors, server side errors, database errors, etc. So, we can segregate the error handling logic in different folders.
// Work of repository layer to interact with models and database

const {City} = require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id : cityId
                }
            });
        }catch(error){
            throw {error};
        }
    }
}

module.exports = CityRepository;