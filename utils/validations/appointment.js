const {check} = require('express-validator');
/*const validation = require('./client');*/

const validation = {
    create: [
        check('elNumber').isLength({min: 1, max: 50}),
        check('diagnosis').isLength({min: 1, max: 50}),
        check('price').isInt({min: 3, max: 16000}),
        check('date').isLength({min: 3, max: 50}),
        check('time').isLength({min: 3, max: 50}),
],
update: [
    check('elNumber').isLength({min: 1, max: 50}),
        check('diagnosis').isLength({min: 3, max: 50}),
        check('price').isInt({min: 3, max: 16000}),
        check('date').isLength({min: 3, max: 50}),
        check('time').isLength({min: 3, max: 50})
]
};

module.exports = validation;