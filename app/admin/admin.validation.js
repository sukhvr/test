const { body } = require('express-validator');

 const adminValidationRules = [
  body('name')
    .isLength({ min: 3 })
    .withMessage('Name must be at least three characters long'),
 
   body('password')
   .isLength({min:6})
   .withMessage('Minimum length for password is six')
];
 
module.exports = adminValidationRules;
 
 