// 签发 jwt
const JWT = require('jsonwebtoken');
const config = require('../../config')

const generateJWT = (jwtInfo) => {
    const payload = {
        name: jwtInfo.name,
        exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60,
    };
    return JWT.sign(payload, config.jwt_secret);
};

module.exports = generateJWT