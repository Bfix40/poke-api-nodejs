const router = require('express').Router();
const authControllers = require('./auth.http')
const userControllers = require('../users/users.controllers')

router.route('/auth/login').post(authControllers.loginUser);

router.route('/auth/create').post(userControllers.registerUser)

module.exports = {
    router
}