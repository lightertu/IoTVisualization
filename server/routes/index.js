/**
 * Created by rui on 10/31/17.
 */
const express = require('express')
    , router = express.Router()
    , sendError = require('./utils').sendError
    , HttpStatus = require('http-status-codes');

router.use('/IoTGraph', require('./IotGraph'));

router.use(function(req, res, next) {
    if (!req.route)
        return sendError(res, HttpStatus.NOT_FOUND, "You are at the wrong page!");
    next();
});

module.exports = router;