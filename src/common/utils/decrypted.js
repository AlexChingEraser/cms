const bcrypt = require('bcryptjs');

const decryptData = (originData, encryptedData) => {
    return originData === encryptedData
}

module.exports = decryptData;