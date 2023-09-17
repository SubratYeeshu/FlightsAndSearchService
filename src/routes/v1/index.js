// All v1 routes will be prefixed with /v1 and will be handled by v1ApiRoutes

const express = require('express');
const CityController = require('../../controllers/city-controller');
const router = express.Router();

router.post('/city', CityController.create);



module.exports = router;