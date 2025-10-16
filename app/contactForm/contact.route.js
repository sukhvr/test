const express = require('express');
const { addContact, contactList } = require('./contact.controller');
const contactValidationRules = require('./contact.validation');
const verifyToken = require('../../helper/verifytoken');

const contactRouter = express.Router();


contactRouter.post('/add',[contactValidationRules], addContact);
contactRouter.get('/list',[verifyToken], contactList);

module.exports = contactRouter;
