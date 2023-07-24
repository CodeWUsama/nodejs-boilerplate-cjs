const RESPONSE_CODES = require('../constants/responseCodes');
const DEFAULT_ERROR_MESSAGE = require('../constants/defaults');

const sendResponse = (res, data, message, error, responseCode) => {
  if (error) {
    res.status(responseCode || RESPONSE_CODES.internalServerError).json({
      payload: {},
      message: message || DEFAULT_ERROR_MESSAGE,
    });
  } else {
    res.send({ payload: data || {}, message });
  }
};

module.exports = sendResponse;
