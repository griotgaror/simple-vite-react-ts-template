const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const serverConfig = require('../serverConfig');

const swaggerSpecOpt = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API mit Swagger',
            version: '1.0.0',
            description: 'Express Api Swagger Documentation',
        },
        servers: [
            {
                url: `${serverConfig.url}${serverConfig.apiUrl}`,
            },
        ],
    },
    apis: ['./src/routes/**/*.js'],
};

const swaggerDoc = swaggerJSDoc(swaggerSpecOpt);

const swaggerUiOpt = {
    customSiteTitle: 'Backend Api-Docs',
    customCssUrl: `${serverConfig.docsUrl}/themes/darkMonokai.css`,
    explorer: true,
    isExplorer: true,
};

const addSwaggerDocs = function (app) {
    app.use(serverConfig.docsUrl, express.static(__dirname));
    app.use(
        serverConfig.docsUrl,
        swaggerUi.serve,
        swaggerUi.setup(swaggerDoc, swaggerUiOpt),
    );
};

module.exports = {
    addSwaggerDocs,
};
