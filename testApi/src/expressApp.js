const cors = require('cors');
const express = require('express');
const path = require('path');

const serverConfig = require('./serverConfig');
const addRoutesToServer = require('./routes/routes');
const { addSwaggerDocs } = require('./docs/swagger');

const app = express();
app.set('base', serverConfig.baseUrl);
app.use(express.json());

const clientBuildDirPath = path.join(__dirname, '../../build');
const indexHtml = path.join(clientBuildDirPath, 'index.html');

app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }),
);

addRoutesToServer(app);
addSwaggerDocs(app);

// Serve static files
app.use(
    serverConfig.baseUrl,
    express.static(clientBuildDirPath, {
        setHeaders: (res) => res.setHeader('Cache-Control', 'no-cache, must-revalidate'),
    }),
);

// Catch-All Redirect
app.use(function (req, res, next) {
    const apiRoutes = req.path.startsWith(serverConfig.apiUrl);
    const swaggerDocs = req.path.startsWith(serverConfig.docsUrl);
    const isWs = req.headers['upgrade'] === 'websocket';

    if (apiRoutes || swaggerDocs || isWs) return next();

    res.sendFile(indexHtml, (err) => {
        if (err) next(err);
    });
});

module.exports = app;
