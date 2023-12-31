// Repository used to access the database and perform CRUD operations on the City table
// We use repository pattern to separate the database access logic from the business logic
// This makes the code more readable and maintainable
// Main purpose of this file is to perform CRUD operations on the City table, we can also do this in the controller but it is not a good practice
// There can be many types of errors like client side errors, server side errors, database errors, etc. So, we can segregate the error handling logic in different folders.
// Work of repository layer to interact with models and database
// Now we will use cuty repository in the city controller to perform CRUD operations on the City table and create APIs.


const { City } = require('../models/index');
const {Op} = require('sequelize');
class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async updateCity(cityId, data) { 
        try{
            // The below approach also works but will not return updated object
            // if we are using Pg then returning: true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     },
            //      
            // });
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAllCities(filter) { // Filter can be empty or can have some value
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where : {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                });

                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;