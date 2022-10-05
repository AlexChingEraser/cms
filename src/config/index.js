require('dotenv').config()

const { env } = process

module.exports = {
    port: env.PORT,
    host: env.HOST,
    jwt_secret: env.JWT_SECRET,
    hash_salt: env.PASSWD_HASH_SALT
}
