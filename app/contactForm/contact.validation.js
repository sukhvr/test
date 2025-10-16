const { body } = require('express-validator');

 const contactValidationRules = [
  body('name')
    .isLength({ min: 3 })
    .withMessage('Name must be at least three characters long'),
 
  body('email')
    .isEmail()
    .withMessage('Invalid email format'),
 
  body('subject')
    .notEmpty()
    .isLength({ min: 30 })
    .withMessage('Minimum length of subject is 30 '),
 
    body('message')
    .notEmpty()
    .isLength({min:50})
    .withMessage("minimum length of message is 50")
];
 
module.exports = contactValidationRules;
 
 