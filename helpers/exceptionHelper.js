const sendResponse = require('./responseHelper');

const exceptionHelper = (executable) => async (req, res, next) => {
  try {
    const result = await executable(req, res, next);
    return result;
  } catch (error) {
    console.log(error);
    sendResponse(res, {}, error.message, true);
  }
};

module.exports = exceptionHelper;
