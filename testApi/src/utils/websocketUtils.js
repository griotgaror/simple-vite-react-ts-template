const WebSocket = require('ws');
const initFakeDb = require('../database/fakeDb');

const sendSocketAllClients = async function (event_type, status, data) {
    const { wsClients } = await initFakeDb();

    wsClients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(
                JSON.stringify({
                    event_type: event_type,
                    status: status,
                    data: data,
                }),
            );
        }
    });
};

const sendWebSocketMsg = {
    success: async function (event_type, data) {
        sendSocketAllClients(event_type, '200', data);
    },
};

module.exports = {
    sendWebSocketMsg,
};
