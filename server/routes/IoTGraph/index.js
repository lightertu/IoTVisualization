/**
 * Created by rui on 10/31/17.
 */

const express = require('express')
    , IoTGraphRouter = express.Router({ mergeParams: true })
    , IoTGraphRouterController = require('./controller')

IoTGraphRouter.get('/', IoTGraphRouterController.getIoTData);

module.exports = IoTGraphRouter;