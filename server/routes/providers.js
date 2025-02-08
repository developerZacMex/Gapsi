const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');

//se definen la rutas para el CRUD de providers
router.get('/', providerController.getProviders);
router.post('/', providerController.addProvider);
router.delete('/:name', providerController.deleteProvider);

module.exports = router;