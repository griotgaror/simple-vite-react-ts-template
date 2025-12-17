const handleWsRequest = async function (wss, requestData) {
    const { event_type, data } = requestData;

    console.log(data);

    switch (event_type) {
        default:
            break;
    }
};

module.exports = handleWsRequest;
