require('dotenv').config()

module.exports = {
    port: process.env.PORT,
    jwtSecretKey: process.env.JWT_SECRET
};