const sendResponse = require('../helpers/responseHelper');
const RESPONSE_CODES = require('../constants/responseCodes');

const getResponseCodes = (req, res) => {
  sendResponse(res, RESPONSE_CODES);
};

module.exports = getResponseCodes;
