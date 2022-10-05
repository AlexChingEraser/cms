require('dotenv').config()

const { env } = process

module.exports = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSW,
  database: env.MYSQL_DANAME,
  host: env.MYSQL_HOST,
  dialect: "mysql",
  use_env_variable: false
}
