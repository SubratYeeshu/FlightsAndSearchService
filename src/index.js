const express = require('express');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');


// index.js is used to boot up the server so we try to make it clean and simple. And we try to keep all the other logic in other files. Like in this case, we have a config folder where we keep all the configuration files. And we have a src folder where we keep all the source code.

const setupAndStartServer = async () => { 
    const app = express();

    // Body parser middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`);
    });
}

setupAndStartServer(); 