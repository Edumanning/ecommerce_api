const { getAll, remove } = require('../controllers/productImg.controller');
const express = require('express');
const { create } = require('../controllers/user.controller');
const upload = require('../utils/multer')

const routeProductImg = express.Router();

routeProductImg.route('/')
    .get(getAll)
    .post(upload.single('image'), create)

routeProductImg.route('/:id')
    .delete(remove)

module.exports = routeProductImg;