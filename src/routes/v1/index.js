// All v1 routes will be prefixed with /v1 and will be handled by v1ApiRoutes

// Request flow : Routes -> Middlewares -> Controllers -> Services -> Repository -> Models -> Database

const express = require('express');
const CityController = require('../../controllers/city-controller');
const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);


module.exports = router;