const express = require('express');
const serverConfig = require('../serverConfig');

const router = express.Router();

router.get('/view-account-data', require('./account/viewAccountData'));

const addRoutesToServer = function (server) {
    server.use(serverConfig.apiUrl, router);
};

module.exports = addRoutesToServer;
