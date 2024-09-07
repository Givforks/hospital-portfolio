require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  },
  // Add configurations for other environments (test, production) as needed
};

{
  "development": {
    "username": "your_db_username",
    "password": "your_db_password",
    "database": "hospital_db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

