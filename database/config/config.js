require('dotenv').config()

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    user: "postgres",
    database: "postgres",
    password: "abc"
  }
}
