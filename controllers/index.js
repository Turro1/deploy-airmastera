const ClientController = require('./ClientController');
const CarController = require('./CarController')
const AppointmentController = require('./AppointmentController');

module.exports = {
    CarCtrl: new CarController(),
    ClientCtrl: new ClientController(),
    AppointmentCtrl: new AppointmentController()
    };