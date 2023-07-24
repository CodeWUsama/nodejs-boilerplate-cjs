const express = require('express');

const router = express.Router();

const getResponseCodes = require('../controllers/general');
const exceptionHelper = require('../helpers/exceptionHelper');

router.get('/response_codes', exceptionHelper(getResponseCodes));

module.exports = router;
