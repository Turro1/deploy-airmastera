const {check} = require('express-validator');

const validation = {
    create: [
        /*check('fullname').isLength({min: 6}),
        check('phone').isLength({min: 8}),*/
]
};

module.exports = validation;