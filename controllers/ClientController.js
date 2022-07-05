const { Client } = require('../models');
const { validationResult } = require('express-validator')

function ClientController() {
}

const create = function (req, res) {
    const errors = validationResult(req);
    const data = {
        fullname: req.body.fullname,
        avatarname: req.body.avatar,
        phone: req.body.phone,
    };
    

    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array()
        });
    }

    Client.create(data, function (err, doc) {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            });
        }

        res.status(201).json({
            success: true,
            data: data
        })
    });
}

const update = async function (req, res) {
    const clientId = req.params.id;
    const errors = validationResult(req);
    const data = {
        fullname: req.body.fullname,
        avatarname: req.body.avatar,
        phone: req.body.phone,
    };
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array()
        });
    }



    Client.updateOne(
        { _id: clientId },
        { $set: data },
        function (err, doc) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err
                });
            }

            if (!doc) {
                return res.status(404).json({
                    success: false,
                    message: 'CLIENT_NOT_FOUND'
                });
            }

            res.status(201).json({
                success: true
            })
        });
};

const remove = async function (req, res) {
    const id = req.params.id;

    try {
        await Client.findOne({ _id: id });
    }
    catch (e) {
        return res.status(404).json({
            success: false,
            message: 'Client_NOT_FOUND'
        });
    }

    Client.deleteOne({ _id: id }, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            });
        }
        res.json({
            status: 'succes',
        });
    });
};

const show = async function (req, res) {
    const id = req.params.id;
    try {
        const client = await Client.findById(id)
            .populate('cars')
            .exec();

        res.json({
            status: "succes",
            data: { client, cars: client.cars }
        });
    }
    catch (e) {
        return res.status(404).json({
            success: false,
            message: 'CLIENT_NOT_FOUND'
        });
    }
}

const all = function (req, res) {

    Client.find({}, function (err, docs) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            })
        }
        res.json({
            success: true,
            data: docs
        });


    }).sort("fullname");
};

ClientController.prototype = {
    all,
    create,
    update,
    remove,
    show
};

module.exports = ClientController;