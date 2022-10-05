//json web toke auth validation

const { jwt_secret } = require('../config');

const validate = (decoded, request, callback) => {
  let error;
  const { name } = decoded;
  if (!name) {
    return callback(error, false, name);
  }
  const credentials = {
    name,
  };
  return callback(error, true, credentials);
};

module.exports = (server) => {
  server.auth.strategy('jwt', 'jwt', {
    key: jwt_secret,
    validate,
  });
  server.auth.default('jwt');
};