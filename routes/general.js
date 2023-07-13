var express = require('express');
var router = express.Router();

const getResponseCodes = require('../controllers/general.js');
const tryCatchWrapper = require('../helpers/tryCatchHelper.js');

router.get('/response_codes', tryCatchWrapper(getResponseCodes));

module.exports = router;
