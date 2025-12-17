const initFakeDb = require('../../database/fakeDb');
const sendResponse = require('../../utils/httpResponseUtils');

/**
 * @swagger
 * /view-account-data:
 *   get:
 *     summary:
 *     responses:
 *       200:
 *         description: Erfolgreich
 */
const viewAccountData = async function (req, res) {
    try {
        const fakeDb = await initFakeDb();
        const { session } = fakeDb;

        return sendResponse.success(res, session);
    } catch (error) {
        return sendResponse.serverError(res, 'Account data could not be retrieved');
    }
};

module.exports = viewAccountData;
