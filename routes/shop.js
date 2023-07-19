const path = require('path');
const productsController = require('../controllers/products')
const express = require('express');



const router = express.Router();

router.get('/', productsController.getProduct);

module.exports = router;
