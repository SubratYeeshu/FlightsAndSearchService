// We use service layer to write the business logic of the application. We can also use service layer to write the logic for the third party API calls.
// Difference between service layer and repository layer is that service layer is used to write the business logic of the application and repository layer is used to write the database queries.
// Difference between service layer and controller layer is that service layer is used to write the business logic of the application and controller layer is used to write the logic for the API endpoints.

const {CityRepository} = require('../repository/index');

class CityService{
// constructor is optional in the class, we can also write the code without constructor

    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;
        }catch(error){
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        }catch(error){
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){
        try{
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        }catch(error){
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        }catch(error){
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }

    async getAllCities(){
        try{
            const cities = await this.cityRepository.getAllCities();
            return cities;
        }catch(error){
            console.log("Something went wrong in the service layer");
            throw {error};
        }
    }
}

module.exports = CityService;