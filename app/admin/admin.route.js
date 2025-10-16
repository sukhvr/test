//adminValidationRules
const express = require('express');
const login = require('./admin.controller');
const adminRouter = express.Router();


adminRouter.get('/login',login)

module.exports = adminRouter;