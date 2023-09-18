const express = require('express');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const APIRoutes = require('./routes/index');

const db = require('./models/index');
// const {City, Airport} = require('./models/index');
// const {Airplane} = require('./models/index');

// index.js is used to boot up the server so we try to make it clean and simple. And we try to keep all the other logic in other files. Like in this case, we have a config folder where we keep all the configuration files. And we have a src folder where we keep all the source code.

const setupAndStartServer = async () => { 
    const app = express();

    // Body parser middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', APIRoutes); 

    app.listen(PORT, async () => {
        console.log(`Server started on ${PORT}`);
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }
   

        // Filter data
        // db.sequelize.sync({alter: true});
        // const city = await City.findOne({
        //     where : {
        //         id : 7
        //     }
        // })
        // After adding the associations, we can use the below code to get the airports of the city, after syncing the database
        // const airports = await city.getAirports();

        // const newAirport = await Airport.findOne({
        //     where : {
        //         id : 3
        //     }
        // })

        // await city.addAirport(newAirport);

        // console.log(city);
        // console.log(airports);
    });
}

setupAndStartServer(); 