const fs = require("fs");
require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: null,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: process.env.CI_DB_HOSTNAME,
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: "mysql",
  },
};