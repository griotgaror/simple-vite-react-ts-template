const WebSocket = require('ws');
const handleWsRequest = require('./handleWsRequests');
const initFakeDb = require('../database/fakeDb');

const initializeWebSocket = async function (server) {
    const { wsClients } = await initFakeDb();

    const wss = new WebSocket.Server({
        server,
    });

    const onSocketConnect = async function (ws) {
        wsClients.push(ws);
        console.log('Client connected');

        ws.on('message', (data) => {
            try {
                const requestData = JSON.parse(data);
                handleWsRequest(wss, requestData);
            } catch (error) {
                console.error('Error to Parse the received Ws msg:', error);
            }
        });

        ws.on('close', function () {
            console.log('Client disconnected');
        });
    };

    wss.on('connection', onSocketConnect);

    console.log('WebSocket server initialized');
    return wss;
};

module.exports = {
    initializeWebSocket,
};
