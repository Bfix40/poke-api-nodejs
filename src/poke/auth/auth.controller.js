const userControllers = require('../users/users.controllers')
const crypto = require('../utils/crypto')


const checkUserCredential = (email, password) => {
    const user = userControllers.getUserByEmail(email)
    if (user.id) {
       return crypto.comparePassword(password, user.password)
    } else {
        return null
    }
}

module.exports = {
    checkUserCredential
}