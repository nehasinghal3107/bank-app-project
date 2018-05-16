var express = require('express');
var router = express.Router();
var _bank = require('./controller')
var model = require('./model');

module.exports = {
    router: router,
    controller: _bank,
    model: model
}
