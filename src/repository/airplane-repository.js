const {Airplane} = require('../models/index');

// We are not creating more API for airplane becuase we dont need it for the time being.

class AirplaneRepository{
    // Give airpane id and it will fetch the airplane
    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

}

module.exports = AirplaneRepository;