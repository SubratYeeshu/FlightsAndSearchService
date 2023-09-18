// From controller we will call the service layer and from the service layer we will call the repository layer and from the repository layer we will call the models and from the models we will interact with the database. Once the response is received from the database, it will go back to the models, then repository, then service, then controller, and then finally to the client.
// We will get data from controller
/*

{
    from controller we will get

    flightNumber
    airplaneId,
    departureAirportId,
    arrivalAirportId,
    arrivalTime,
    departureTime,
    price,
    boardingGate,
    totalSeats -> get From airplane
}

*/

const {FlightRepository, AirplaneRepository} = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    } 

    async createFlight(data){
        try {
            // const airplaneRepository = new AirplaneRepository();  // Repetitive so we will use constructor
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error : "Arrival time should be greater than departure time"};
            }


            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId); 
            const flight = await this.flightRepository.createFlight({...data, totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw { error };
        }
    }


    async getFlightData(){
        // todo 
    }



}

module.exports = FlightService;