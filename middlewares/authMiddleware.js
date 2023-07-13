const jwt = require('jsonwebtoken');
const RESPONSE_CODES = require('../constants/responseCodes');
const sendResponse = require('../helpers/responseHelper');

const authenticateToken = (req, res, next) => {
  const { token } = req.headers;

  if (token == null) return sendResponse(res, {}, 'Unauthorized user', RESPONSE_CODES.authorizationError);

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) return sendResponse(res, {}, 'Unauthorized user', RESPONSE_CODES.authorizationError);
    req.userId = user.user;

    next();
  });
};

module.exports = authenticateToken;
