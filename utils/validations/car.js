const {check} = require('express-validator');

const validation = {
    create: [
        check('carname').isLength({min: 3}),
        check('carmodel').isLength({min: 1}),
        check('carnumber').isLength({min: 6})
]
};

module.exports = validation;