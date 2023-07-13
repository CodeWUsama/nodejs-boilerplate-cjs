const bcrypt = require('bcrypt');

const encryptData = (data) => bcrypt.hashSync(data, 10);

const compareData = (data, hash) => bcrypt.compareSync(data, hash);

module.exports = { encryptData, compareData };
