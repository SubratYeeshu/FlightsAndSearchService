const CrudService = require('./crud-service');

const {AirportRepository} = require('../repository/index');

class AirportService extends CrudService {
    constructor(repository) {
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}

module.exports = AirportService;
