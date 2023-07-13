const RESPONSE_CODES = require('../constants/responseCodes');

const sendResponse = (res, data, error, responseCode) => {
  if (error) {
    res.send({
      payload: {},
      message: error,
      response_code: responseCode || RESPONSE_CODES.serverError,
    });
  } else {
    res.send({ payload: data || {}, response_code: RESPONSE_CODES.ok });
  }
};

module.exports = sendResponse;
