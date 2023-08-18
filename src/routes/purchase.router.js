const { getAll } = require('../controllers/purchase.controller');
const express = require('express');
const { create } = require('../controllers/user.controller');

const routerPurchase = express.Router();

routerPurchase.route('/')
    .get(getAll)
    .post(create)

module.exports = routerPurchase;